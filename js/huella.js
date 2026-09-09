/**
 * Deja tu huella — signature wall (canvas + optional @ + publish wall)
 * Uses Firebase Firestore when PEUVE_FIREBASE_CONFIG is filled; otherwise localStorage.
 *
 * Drawing model:
 * - Brush strokes live on an offscreen stroke layer (bitmap)
 * - Texts are vector-like objects redrawn each frame
 * - Display canvas is synced to CSS size × devicePixelRatio (no stretch)
 */
(function () {
    const LS_KEY = "peuve-huellas";
    const RATE_MS = 30000;
    const COLLECTION = "huellas";
    const MAX_UNDO = 25;
    const HANDLE_R = 7;
    const MIN_TEXT = 12;
    const MAX_TEXT = 96;
    const DEFAULT_TEXT_SIZE = 24;

    const BRUSH_COLORS = [
        "#FFFFFF",
        "#D0D0D0",
        "#888888",
        "#444444",
        "#000000",
        "#C8CAE8",
        "#7A7CC8",
        "#3233B8",
        "#E2343A",
        "#E8782A"
    ];

    let initialized = false;
    let canvas, ctx;
    let strokeCanvas, strokeCtx;
    let cssW = 0;
    let cssH = 0;
    let dpr = 1;
    let drawing = false;
    let tool = "draw"; // draw | text
    let color = "#000000";
    let brushSize = 4;
    let textSize = DEFAULT_TEXT_SIZE;
    let undoStack = [];
    let lastPublish = 0;
    let db = null;
    let firebaseOn = false;
    let wallLoaded = false;
    let textOverlay = null;
    let lastMarks = [];
    let viewerIndex = -1;
    let viewerBound = false;
    let texts = [];
    let selectedId = null;
    let dragMode = null; // null | "move" | "resize"
    let dragOrigin = null;
    let suppressTextPlace = false;
    let resizeObserver = null;
    let syncQueued = false;
    let textSeq = 0;

    function ui() {
        const lang = localStorage.getItem("peuve-lang") || "es";
        const pack = window.PEUVE_I18N && window.PEUVE_I18N[lang];
        return (pack && pack.huella) || (window.PEUVE_I18N && window.PEUVE_I18N.es.huella) || {};
    }

    function $(id) {
        return document.getElementById(id);
    }

    function isFirebaseConfigured() {
        return typeof window.PEUVE_FIREBASE_READY === "function" && window.PEUVE_FIREBASE_READY();
    }

    function isFileProtocol() {
        return typeof location !== "undefined" && location.protocol === "file:";
    }

    function initFirebase() {
        firebaseOn = false;
        db = null;
        if (!isFirebaseConfigured()) return false;
        if (typeof firebase === "undefined") {
            console.warn("[huella] Firebase compat SDK not loaded (firebase-app-compat / firestore-compat).");
            return false;
        }
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(window.PEUVE_FIREBASE_CONFIG);
            }
            db = firebase.firestore();
            if (isFileProtocol() && db.settings) {
                try {
                    db.settings({ experimentalForceLongPolling: true });
                } catch (_) { /* ignore */ }
            }
            firebaseOn = true;
            return true;
        } catch (err) {
            console.warn("[huella] Firebase init failed:", err);
            return false;
        }
    }

    function formatFirebaseError(err, strings) {
        if (!err) return strings.publishedLocalFallback || "Guardado aquí (Firebase no respondió)";
        const code = String(err.code || "").toLowerCase();
        const msg = String(err.message || "");
        if (code === "permission-denied" || /permission|insufficient/i.test(msg)) {
            return strings.firebasePermission
                || "Firebase denegó el permiso (permission-denied). Publica las reglas de HUELLA.md en Firestore.";
        }
        if (code === "unavailable" || code === "deadline-exceeded" || /network|offline|failed to fetch|cors/i.test(msg)) {
            if (isFileProtocol()) {
                return strings.firebaseFileProtocol
                    || "Firebase no responde desde file://. Abre el sitio con un servidor local (http://localhost) o publícalo online.";
            }
            return strings.firebaseNetwork
                || "Error de red con Firebase. Comprueba la conexión o prueba desde http/https (no file://).";
        }
        if (code === "invalid-argument" || /exceeds|too large|size/i.test(msg)) {
            return strings.firebaseTooLarge || "El dibujo es demasiado grande para Firebase. Prueba con menos detalle.";
        }
        const short = (code ? code + ": " : "") + (msg || "error desconocido");
        const clipped = short.length > 140 ? short.slice(0, 137) + "…" : short;
        return (strings.publishedLocalFallbackDetail || "Guardado aquí — Firebase: {err}").replace("{err}", clipped);
    }

    function cloneTexts(list) {
        return list.map((t) => ({
            id: t.id,
            text: t.text,
            x: t.x,
            y: t.y,
            size: t.size,
            color: t.color
        }));
    }

    function getTextById(id) {
        return texts.find((t) => t.id === id) || null;
    }

    function measureText(t) {
        ctx.save();
        ctx.font = textFont(t.size);
        const width = ctx.measureText(t.text).width;
        ctx.restore();
        const height = t.size * 1.25;
        return {
            x: t.x,
            y: t.y - height / 2,
            w: Math.max(width, 8),
            h: height
        };
    }

    function textFont(size) {
        return `600 ${Math.max(MIN_TEXT, size)}px "General Sans", Arial, sans-serif`;
    }

    function ensureStrokeLayer(w, h) {
        if (!strokeCanvas) {
            strokeCanvas = document.createElement("canvas");
            strokeCtx = strokeCanvas.getContext("2d");
        }
        if (strokeCanvas.width !== w || strokeCanvas.height !== h) {
            const prev = strokeCanvas;
            const next = document.createElement("canvas");
            next.width = w;
            next.height = h;
            const nctx = next.getContext("2d");
            if (prev.width && prev.height) {
                nctx.drawImage(prev, 0, 0, w, h);
            }
            strokeCanvas = next;
            strokeCtx = nctx;
        }
    }

    function applyCtxTransform() {
        if (!ctx) return;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function syncCanvasSize(opts) {
        const preserve = !opts || opts.preserve !== false;
        if (!canvas || !ctx) return;
        const rect = canvas.getBoundingClientRect();
        const nextW = Math.max(1, Math.round(rect.width));
        const nextH = Math.max(1, Math.round(rect.height));
        const nextDpr = Math.min(window.devicePixelRatio || 1, 3);

        if (
            nextW === cssW
            && nextH === cssH
            && nextDpr === dpr
            && canvas.width === Math.round(nextW * nextDpr)
            && canvas.height === Math.round(nextH * nextDpr)
        ) {
            applyCtxTransform();
            return;
        }

        const prevW = cssW;
        const prevH = cssH;
        const scaleX = prevW > 0 ? nextW / prevW : 1;
        const scaleY = prevH > 0 ? nextH / prevH : 1;

        cssW = nextW;
        cssH = nextH;
        dpr = nextDpr;

        canvas.width = Math.round(cssW * dpr);
        canvas.height = Math.round(cssH * dpr);
        applyCtxTransform();
        ensureStrokeLayer(cssW, cssH);

        if (preserve && prevW > 0 && prevH > 0 && (scaleX !== 1 || scaleY !== 1)) {
            const avg = (scaleX + scaleY) / 2;
            texts.forEach((t) => {
                t.x *= scaleX;
                t.y *= scaleY;
                t.size = Math.max(MIN_TEXT, Math.min(MAX_TEXT, t.size * avg));
            });
        }

        redraw();
    }

    function queueSync() {
        if (syncQueued) return;
        syncQueued = true;
        requestAnimationFrame(() => {
            syncQueued = false;
            if (!document.body.classList.contains("view-huella")) return;
            syncCanvasSize({ preserve: true });
        });
    }

    function redraw(opts) {
        if (!ctx || !cssW || !cssH) return;
        const showSel = !opts || opts.selection !== false;
        applyCtxTransform();
        ctx.save();
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, cssW, cssH);
        if (strokeCanvas) ctx.drawImage(strokeCanvas, 0, 0);
        texts.forEach((t) => drawTextObject(t));
        if (showSel && selectedId) {
            const sel = getTextById(selectedId);
            if (sel) drawSelection(sel);
        }
        ctx.restore();
    }

    function drawTextObject(t) {
        ctx.save();
        ctx.fillStyle = t.color;
        ctx.font = textFont(t.size);
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";
        ctx.fillText(t.text, t.x, t.y);
        ctx.restore();
    }

    function drawSelection(t) {
        const b = measureText(t);
        ctx.save();
        ctx.strokeStyle = "#3233B8";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.strokeRect(b.x - 3, b.y - 3, b.w + 6, b.h + 6);
        ctx.setLineDash([]);
        const hx = b.x + b.w + 3;
        const hy = b.y + b.h + 3;
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#3233B8";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(hx, hy, HANDLE_R, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    /** Flatten for export/publish (no selection chrome) */
    function flattenForExport() {
        redraw({ selection: false });
    }

    function exportImageForFirestore() {
        flattenForExport();
        let image = canvas.toDataURL("image/png");
        if (image.length <= 850000) return image;
        const qualities = [0.82, 0.7, 0.55, 0.4, 0.28];
        for (let i = 0; i < qualities.length; i++) {
            image = canvas.toDataURL("image/jpeg", qualities[i]);
            if (image.length <= 850000) return image;
        }
        const scale = 0.55;
        const tmp = document.createElement("canvas");
        tmp.width = Math.max(1, Math.round(canvas.width * scale));
        tmp.height = Math.max(1, Math.round(canvas.height * scale));
        const tctx = tmp.getContext("2d");
        tctx.fillStyle = "#ffffff";
        tctx.fillRect(0, 0, tmp.width, tmp.height);
        tctx.drawImage(canvas, 0, 0, tmp.width, tmp.height);
        image = tmp.toDataURL("image/jpeg", 0.55);
        return image;
    }

    function snapshotState() {
        return {
            stroke: strokeCanvas && strokeCanvas.width
                ? strokeCanvas.toDataURL("image/png")
                : null,
            texts: cloneTexts(texts),
            selectedId
        };
    }

    function pushUndo() {
        try {
            undoStack.push(snapshotState());
            if (undoStack.length > MAX_UNDO) undoStack.shift();
        } catch (_) { /* ignore */ }
    }

    function restoreStrokeFromDataUrl(dataUrl) {
        return new Promise((resolve) => {
            if (!dataUrl || !strokeCtx) {
                if (strokeCtx && cssW && cssH) {
                    strokeCtx.clearRect(0, 0, cssW, cssH);
                }
                resolve();
                return;
            }
            const img = new Image();
            img.onload = () => {
                ensureStrokeLayer(cssW, cssH);
                strokeCtx.clearRect(0, 0, cssW, cssH);
                strokeCtx.drawImage(img, 0, 0, cssW, cssH);
                resolve();
            };
            img.onerror = () => resolve();
            img.src = dataUrl;
        });
    }

    async function restoreState(state) {
        if (!state) return;
        texts = cloneTexts(state.texts || []);
        selectedId = state.selectedId && texts.some((t) => t.id === state.selectedId)
            ? state.selectedId
            : null;
        await restoreStrokeFromDataUrl(state.stroke);
        syncSizeSliderFromSelection();
        redraw();
    }

    function clearStroke() {
        ensureStrokeLayer(cssW, cssH);
        strokeCtx.clearRect(0, 0, cssW, cssH);
    }

    function clearCanvas(saveUndo) {
        if (saveUndo) pushUndo();
        clearStroke();
        texts = [];
        selectedId = null;
        hideTextOverlay();
        syncSizeSliderFromSelection();
        redraw();
    }

    function canvasPoint(e) {
        const rect = canvas.getBoundingClientRect();
        const src = e.touches && e.touches[0] ? e.touches[0] : e;
        const scaleX = cssW / Math.max(1, rect.width);
        const scaleY = cssH / Math.max(1, rect.height);
        return {
            x: (src.clientX - rect.left) * scaleX,
            y: (src.clientY - rect.top) * scaleY
        };
    }

    function hitTestText(p) {
        for (let i = texts.length - 1; i >= 0; i--) {
            const b = measureText(texts[i]);
            const pad = 4;
            if (
                p.x >= b.x - pad
                && p.x <= b.x + b.w + pad
                && p.y >= b.y - pad
                && p.y <= b.y + b.h + pad
            ) {
                return texts[i];
            }
        }
        return null;
    }

    function hitResizeHandle(p, t) {
        if (!t) return false;
        const b = measureText(t);
        const hx = b.x + b.w + 3;
        const hy = b.y + b.h + 3;
        const dx = p.x - hx;
        const dy = p.y - hy;
        return dx * dx + dy * dy <= (HANDLE_R + 4) * (HANDLE_R + 4);
    }

    function selectText(id) {
        selectedId = id;
        syncSizeSliderFromSelection();
        updateCursor();
        redraw();
    }

    function deselectText() {
        selectedId = null;
        dragMode = null;
        dragOrigin = null;
        syncSizeSliderFromSelection();
        updateCursor();
        redraw();
    }

    function syncSizeSliderFromSelection() {
        const sizeInput = $("huella-size");
        const sizeLabel = $("huella-size-label");
        const strings = ui();
        const sel = selectedId ? getTextById(selectedId) : null;
        if (sel) {
            if (sizeInput) {
                sizeInput.min = String(MIN_TEXT);
                sizeInput.max = String(MAX_TEXT);
                sizeInput.value = String(Math.round(sel.size));
            }
            if (sizeLabel) sizeLabel.textContent = strings.textSize || "Tamaño texto";
        } else if (tool === "text") {
            if (sizeInput) {
                sizeInput.min = String(MIN_TEXT);
                sizeInput.max = String(MAX_TEXT);
                sizeInput.value = String(Math.round(textSize));
            }
            if (sizeLabel) sizeLabel.textContent = strings.textSize || "Tamaño texto";
        } else {
            if (sizeInput) {
                sizeInput.min = "2";
                sizeInput.max = "28";
                sizeInput.value = String(brushSize);
            }
            if (sizeLabel) sizeLabel.textContent = strings.brushSize || "Grosor";
        }
    }

    function startDraw(e) {
        if (tool !== "draw") return;
        if (e.button != null && e.button !== 0) return;
        e.preventDefault();
        drawing = true;
        pushUndo();
        const p = canvasPoint(e);
        ensureStrokeLayer(cssW, cssH);
        strokeCtx.beginPath();
        strokeCtx.moveTo(p.x, p.y);
        strokeCtx.lineCap = "round";
        strokeCtx.lineJoin = "round";
        strokeCtx.strokeStyle = color;
        strokeCtx.lineWidth = brushSize;
        strokeCtx.globalCompositeOperation = "source-over";
        try {
            canvas.setPointerCapture(e.pointerId);
        } catch (_) { /* ignore */ }
    }

    function moveDraw(e) {
        if (!drawing || tool !== "draw") return;
        e.preventDefault();
        const p = canvasPoint(e);
        strokeCtx.lineTo(p.x, p.y);
        strokeCtx.stroke();
        strokeCtx.beginPath();
        strokeCtx.moveTo(p.x, p.y);
        redraw();
    }

    function endDraw(e) {
        if (drawing) {
            drawing = false;
            redraw();
        }
        if (e && e.pointerId != null) {
            try {
                canvas.releasePointerCapture(e.pointerId);
            } catch (_) { /* ignore */ }
        }
    }

    function addTextObject(text, x, y) {
        if (!text) return;
        pushUndo();
        textSeq += 1;
        const obj = {
            id: `t_${Date.now()}_${textSeq}`,
            text,
            x,
            y,
            size: textSize,
            color
        };
        texts.push(obj);
        selectText(obj.id);
        redraw();
    }

    function openTextOverlay(p) {
        const strings = ui();
        hideTextOverlay();
        const wrap = canvas.parentElement || $("huella-section");
        textOverlay = document.createElement("div");
        textOverlay.className = "huella-text-overlay";
        const input = document.createElement("input");
        input.type = "text";
        input.className = "huella-text-input";
        input.placeholder = strings.textPlaceholder || "Escribe…";
        input.maxLength = 80;
        input.style.color = color;
        input.style.fontSize = `${Math.max(14, Math.min(28, textSize))}px`;

        const canvasRect = canvas.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();
        textOverlay.style.left = `${canvasRect.left - wrapRect.left + p.x * (canvasRect.width / cssW)}px`;
        textOverlay.style.top = `${canvasRect.top - wrapRect.top + p.y * (canvasRect.height / cssH)}px`;
        textOverlay.appendChild(input);
        wrap.appendChild(textOverlay);
        input.focus();

        let committed = false;
        const commit = () => {
            if (committed || !textOverlay || !input.isConnected) return;
            committed = true;
            const val = input.value.trim();
            hideTextOverlay();
            if (val) addTextObject(val, p.x, p.y);
        };
        input.addEventListener("keydown", (ev) => {
            if (ev.key === "Enter") {
                ev.preventDefault();
                commit();
            } else if (ev.key === "Escape") {
                committed = true;
                hideTextOverlay();
            }
        });
        input.addEventListener("blur", () => {
            setTimeout(commit, 80);
        });
    }

    function hideTextOverlay() {
        if (textOverlay && textOverlay.parentNode) textOverlay.parentNode.removeChild(textOverlay);
        textOverlay = null;
    }

    function onPointerDown(e) {
        if (!canvas || (e.button != null && e.button !== 0)) return;
        syncCanvasSize({ preserve: true });
        const p = canvasPoint(e);
        suppressTextPlace = false;

        const sel = selectedId ? getTextById(selectedId) : null;
        if (sel && hitResizeHandle(p, sel)) {
            e.preventDefault();
            dragMode = "resize";
            dragOrigin = { x: p.x, y: p.y, size: sel.size, objX: sel.x, objY: sel.y, moved: false };
            suppressTextPlace = true;
            try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
            return;
        }

        const hit = hitTestText(p);
        if (hit) {
            e.preventDefault();
            if (selectedId !== hit.id) selectText(hit.id);
            else redraw();
            dragMode = "move";
            dragOrigin = { x: p.x, y: p.y, objX: hit.x, objY: hit.y, moved: false };
            suppressTextPlace = true;
            try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
            return;
        }

        if (selectedId) {
            deselectText();
        }

        if (tool === "draw") {
            startDraw(e);
            return;
        }

        // text tool: placement on pointerup if no drag occurred
        dragMode = "place-pending";
        dragOrigin = { x: p.x, y: p.y };
    }

    function onPointerMove(e) {
        if (dragMode === "move" && selectedId && dragOrigin) {
            e.preventDefault();
            const p = canvasPoint(e);
            const t = getTextById(selectedId);
            if (!t) return;
            if (!dragOrigin.moved) {
                if (Math.hypot(p.x - dragOrigin.x, p.y - dragOrigin.y) < 2) return;
                pushUndo();
                dragOrigin.moved = true;
            }
            t.x = dragOrigin.objX + (p.x - dragOrigin.x);
            t.y = dragOrigin.objY + (p.y - dragOrigin.y);
            redraw();
            return;
        }
        if (dragMode === "resize" && selectedId && dragOrigin) {
            e.preventDefault();
            const p = canvasPoint(e);
            const t = getTextById(selectedId);
            if (!t) return;
            if (!dragOrigin.moved) {
                pushUndo();
                dragOrigin.moved = true;
            }
            const delta = ((p.x - dragOrigin.x) + (p.y - dragOrigin.y)) * 0.5;
            t.size = Math.max(MIN_TEXT, Math.min(MAX_TEXT, dragOrigin.size + delta));
            textSize = t.size;
            syncSizeSliderFromSelection();
            redraw();
            return;
        }
        if (dragMode === "place-pending" && dragOrigin) {
            const p = canvasPoint(e);
            if (Math.hypot(p.x - dragOrigin.x, p.y - dragOrigin.y) > 6) {
                suppressTextPlace = true;
                dragMode = null;
            }
            return;
        }
        moveDraw(e);
        updateHoverCursor(e);
    }

    function onPointerUp(e) {
        if (dragMode === "move" || dragMode === "resize") {
            dragMode = null;
            dragOrigin = null;
            redraw();
            if (e && e.pointerId != null) {
                try { canvas.releasePointerCapture(e.pointerId); } catch (_) { /* ignore */ }
            }
            return;
        }

        if (dragMode === "place-pending" && tool === "text" && !suppressTextPlace && dragOrigin) {
            dragMode = null;
            openTextOverlay({ x: dragOrigin.x, y: dragOrigin.y });
            dragOrigin = null;
            return;
        }

        dragMode = null;
        dragOrigin = null;
        endDraw(e);
    }

    function updateHoverCursor(e) {
        if (drawing || dragMode === "move" || dragMode === "resize") return;
        const p = canvasPoint(e);
        const sel = selectedId ? getTextById(selectedId) : null;
        if (sel && hitResizeHandle(p, sel)) {
            canvas.style.cursor = "nwse-resize";
            return;
        }
        if (hitTestText(p)) {
            canvas.style.cursor = "move";
            return;
        }
        updateCursor();
    }

    function updateCursor() {
        if (!canvas) return;
        if (selectedId) {
            canvas.style.cursor = "default";
            return;
        }
        canvas.style.cursor = tool === "text" ? "text" : "crosshair";
    }

    function onKeyDown(e) {
        if (!document.body.classList.contains("view-huella") && !isViewerOpen()) return;

        if (isViewerOpen()) {
            if (e.key === "Escape") {
                e.preventDefault();
                closeViewer();
                return;
            }
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                stepViewer(-1);
                return;
            }
            if (e.key === "ArrowRight") {
                e.preventDefault();
                stepViewer(1);
                return;
            }
            return;
        }

        if (!document.body.classList.contains("view-huella")) return;
        if (textOverlay) return;
        const tag = (e.target && e.target.tagName) || "";
        if (tag === "INPUT" || tag === "TEXTAREA") return;

        if ((e.key === "Delete" || e.key === "Backspace") && selectedId) {
            e.preventDefault();
            pushUndo();
            texts = texts.filter((t) => t.id !== selectedId);
            selectedId = null;
            syncSizeSliderFromSelection();
            redraw();
            return;
        }
        if (e.key === "Escape") {
            if (selectedId) {
                e.preventDefault();
                deselectText();
            }
            hideTextOverlay();
        }
    }

    function setTool(next) {
        tool = next;
        document.querySelectorAll(".huella-tool[data-tool]").forEach((btn) => {
            btn.classList.toggle("is-active", btn.getAttribute("data-tool") === tool);
        });
        if (tool === "draw") {
            // keep selection so user can still see/move text, but brush works when empty click
        }
        if (tool !== "text") hideTextOverlay();
        syncSizeSliderFromSelection();
        updateCursor();
    }

    function setColor(c) {
        color = c;
        document.querySelectorAll(".huella-swatch").forEach((btn) => {
            btn.classList.toggle("is-active", btn.getAttribute("data-color") === c);
        });
        const sel = selectedId ? getTextById(selectedId) : null;
        if (sel) {
            pushUndo();
            sel.color = c;
            redraw();
        }
    }

    function canvasLooksEmpty() {
        if (texts.length) return false;
        if (!strokeCanvas || !strokeCtx) return true;
        try {
            const sample = strokeCtx.getImageData(0, 0, strokeCanvas.width, strokeCanvas.height).data;
            for (let i = 3; i < sample.length; i += 4) {
                if (sample[i] > 8) return false;
            }
        } catch (_) {
            return false;
        }
        return true;
    }

    function readLocal() {
        try {
            const raw = localStorage.getItem(LS_KEY);
            const list = raw ? JSON.parse(raw) : [];
            return Array.isArray(list) ? list : [];
        } catch (_) {
            return [];
        }
    }

    function writeLocal(list) {
        localStorage.setItem(LS_KEY, JSON.stringify(list.slice(0, 200)));
    }

    async function fetchMarks() {
        if (firebaseOn && db) {
            try {
                const snap = await db.collection(COLLECTION).orderBy("createdAt", "desc").limit(100).get();
                return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
            } catch (err) {
                console.warn("[huella] Firestore read failed, using local:", err);
            }
        }
        return readLocal().sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    }

    async function saveMark(mark) {
        if (firebaseOn && db) {
            try {
                await db.collection(COLLECTION).doc(mark.id).set(mark);
                const local = readLocal().filter((m) => m.id !== mark.id);
                local.unshift(mark);
                writeLocal(local);
                return { ok: true, mode: "firebase" };
            } catch (err) {
                console.warn("[huella] Firestore write failed, saving local:", err);
                const local = readLocal().filter((m) => m.id !== mark.id);
                local.unshift(mark);
                writeLocal(local);
                return { ok: true, mode: "local", error: err };
            }
        }
        const local = readLocal().filter((m) => m.id !== mark.id);
        local.unshift(mark);
        writeLocal(local);
        return { ok: true, mode: "local" };
    }

    function renderWall(marks) {
        const wall = $("huella-wall");
        const empty = $("huella-wall-empty");
        if (!wall) return;
        wall.innerHTML = "";
        const strings = ui();
        if (!marks.length) {
            if (empty) {
                empty.hidden = false;
                empty.textContent = strings.emptyWall || "";
            }
            closeViewer();
            return;
        }
        if (empty) empty.hidden = true;

        marks.forEach((mark, index) => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "huella-card";
            card.setAttribute("data-index", String(index));
            const openLabel = strings.viewerOpen || "Ver huella ampliada";
            const handleLabel = mark.handle ? `@${mark.handle.replace(/^@/, "")}` : (strings.markAlt || "Huella");
            card.setAttribute("aria-label", `${openLabel}: ${handleLabel}`);

            const img = document.createElement("img");
            img.src = mark.image;
            img.alt = handleLabel;
            img.loading = "lazy";
            img.draggable = false;
            card.appendChild(img);
            if (mark.handle || mark.note) {
                const meta = document.createElement("div");
                meta.className = "huella-card-meta";
                if (mark.handle) {
                    const handle = document.createElement("span");
                    handle.className = "huella-card-handle";
                    const h = mark.handle.replace(/^@/, "");
                    handle.textContent = `@${h}`;
                    meta.appendChild(handle);
                }
                if (mark.note) {
                    const note = document.createElement("span");
                    note.className = "huella-card-note";
                    note.textContent = mark.note;
                    meta.appendChild(note);
                }
                card.appendChild(meta);
            }
            card.addEventListener("click", () => openViewer(index));
            wall.appendChild(card);
        });

        if (viewerIndex >= 0) {
            if (viewerIndex >= marks.length) viewerIndex = marks.length - 1;
            updateViewerContent();
        }
    }

    function isViewerOpen() {
        const viewer = $("huella-viewer");
        return !!(viewer && !viewer.hidden && viewer.classList.contains("is-open"));
    }

    function applyViewerLang() {
        const strings = ui();
        const closeBtn = $("huella-viewer-close");
        const prevBtn = $("huella-viewer-prev");
        const nextBtn = $("huella-viewer-next");
        const label = $("huella-viewer-label");
        if (closeBtn) closeBtn.setAttribute("aria-label", strings.viewerClose || "Cerrar huella");
        if (prevBtn) prevBtn.setAttribute("aria-label", strings.viewerPrev || "Huella anterior");
        if (nextBtn) nextBtn.setAttribute("aria-label", strings.viewerNext || "Huella siguiente");
        if (label) label.textContent = strings.viewerLabel || "Huella ampliada";
        if (isViewerOpen()) updateViewerContent();
    }

    function updateViewerContent() {
        const strings = ui();
        const img = $("huella-viewer-img");
        const handleEl = $("huella-viewer-handle");
        const noteEl = $("huella-viewer-note");
        const countEl = $("huella-viewer-count");
        const prevBtn = $("huella-viewer-prev");
        const nextBtn = $("huella-viewer-next");
        const mark = lastMarks[viewerIndex];
        if (!mark || !img) return;

        img.src = mark.image;
        const handleText = mark.handle ? `@${String(mark.handle).replace(/^@/, "")}` : "";
        img.alt = handleText || (strings.markAlt || "Huella");

        if (handleEl) {
            if (handleText) {
                handleEl.hidden = false;
                handleEl.textContent = handleText;
            } else {
                handleEl.hidden = true;
                handleEl.textContent = "";
            }
        }
        if (noteEl) {
            if (mark.note) {
                noteEl.hidden = false;
                noteEl.textContent = mark.note;
            } else {
                noteEl.hidden = true;
                noteEl.textContent = "";
            }
        }
        if (countEl) {
            const total = lastMarks.length;
            countEl.textContent = (strings.viewerCount || "{n} / {total}")
                .replace("{n}", String(viewerIndex + 1))
                .replace("{total}", String(total));
        }

        const multi = lastMarks.length > 1;
        if (prevBtn) {
            prevBtn.disabled = !multi;
            prevBtn.hidden = !multi;
        }
        if (nextBtn) {
            nextBtn.disabled = !multi;
            nextBtn.hidden = !multi;
        }
    }

    function openViewer(index) {
        if (!lastMarks.length) return;
        const i = Math.max(0, Math.min(lastMarks.length - 1, Number(index) || 0));
        const viewer = $("huella-viewer");
        if (!viewer) return;
        viewerIndex = i;
        updateViewerContent();
        viewer.hidden = false;
        viewer.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => {
            viewer.classList.add("is-open");
            ($("huella-viewer-close") || $("huella-viewer-next") || viewer).focus?.();
        });
    }

    function closeViewer() {
        const viewer = $("huella-viewer");
        viewerIndex = -1;
        if (!viewer) return;
        viewer.classList.remove("is-open");
        viewer.setAttribute("aria-hidden", "true");
        const finish = () => {
            if (!viewer.classList.contains("is-open")) viewer.hidden = true;
        };
        viewer.addEventListener("transitionend", finish, { once: true });
        setTimeout(finish, 220);
    }

    function stepViewer(delta) {
        if (!isViewerOpen() || lastMarks.length < 2) return;
        const next = (viewerIndex + delta + lastMarks.length) % lastMarks.length;
        viewerIndex = next;
        updateViewerContent();
    }

    function bindViewer() {
        if (viewerBound) return;
        const viewer = $("huella-viewer");
        if (!viewer) return;
        viewerBound = true;
        $("huella-viewer-close")?.addEventListener("click", () => closeViewer());
        $("huella-viewer-prev")?.addEventListener("click", () => stepViewer(-1));
        $("huella-viewer-next")?.addEventListener("click", () => stepViewer(1));
        viewer.addEventListener("click", (e) => {
            if (e.target === viewer) closeViewer();
        });
    }

    async function refreshWall() {
        const marks = await fetchMarks();
        lastMarks = marks;
        renderWall(marks);
        wallLoaded = true;
    }

    async function publish() {
        const strings = ui();
        const status = $("huella-status");
        const btn = $("huella-publish");
        const now = Date.now();

        if (now - lastPublish < RATE_MS) {
            const wait = Math.ceil((RATE_MS - (now - lastPublish)) / 1000);
            if (status) status.textContent = (strings.rateLimit || "Espera {s}s").replace("{s}", String(wait));
            return;
        }

        if (canvasLooksEmpty()) {
            if (status) status.textContent = strings.needDraw || "Dibuja algo primero";
            return;
        }

        hideTextOverlay();
        deselectText();
        const handleRaw = ($("huella-handle")?.value || "").trim();
        const noteRaw = ($("huella-note")?.value || "").trim();
        const handle = handleRaw ? handleRaw.replace(/^@/, "").slice(0, 60) : "";
        const note = noteRaw.slice(0, 160);

        let image;
        try {
            image = exportImageForFirestore();
            if (image.length >= 900000) {
                if (status) status.textContent = strings.firebaseTooLarge || "El dibujo es demasiado grande para Firebase.";
                redraw();
                return;
            }
        } catch (err) {
            if (status) status.textContent = strings.publishError || "No se pudo exportar";
            redraw();
            return;
        }

        const mark = {
            id: `h_${now}_${Math.random().toString(36).slice(2, 9)}`,
            image,
            createdAt: now
        };
        if (handle) mark.handle = handle;
        if (note) mark.note = note;

        if (btn) btn.disabled = true;
        if (status) {
            status.textContent = isFileProtocol() && firebaseOn
                ? (strings.publishingFile || "Publicando… (file:// puede fallar)")
                : (strings.publishing || "Publicando…");
        }

        const result = await saveMark(mark);
        lastPublish = Date.now();

        if (btn) btn.disabled = false;
        if (status) {
            if (result.mode === "firebase") status.textContent = strings.published || "¡Publicado!";
            else if (firebaseOn) status.textContent = formatFirebaseError(result.error, strings);
            else status.textContent = strings.publishedLocal || "Guardado en este dispositivo";
        }

        clearCanvas(false);
        undoStack = [];
        if ($("huella-handle")) $("huella-handle").value = "";
        if ($("huella-note")) $("huella-note").value = "";
        await refreshWall();
    }

    function buildSwatches() {
        const row = $("huella-swatches");
        if (!row) return;
        row.innerHTML = "";
        BRUSH_COLORS.forEach((c) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "huella-swatch" + (c === color ? " is-active" : "");
            btn.style.background = c;
            btn.setAttribute("data-color", c);
            btn.setAttribute("aria-label", c);
            btn.title = c;
            btn.addEventListener("click", () => setColor(c));
            row.appendChild(btn);
        });
    }

    function applyLang() {
        const strings = ui();
        const map = {
            "huella-title": strings.title,
            "huella-intro": strings.intro,
            "huella-label-draw": strings.draw,
            "huella-label-text": strings.text,
            "huella-clear": strings.clear,
            "huella-undo": strings.undo,
            "huella-publish": strings.publish,
            "huella-wall-title": strings.wallTitle,
            "huella-firebase-msg": strings.firebaseHint
        };
        Object.keys(map).forEach((id) => {
            const el = $(id);
            if (el && map[id] != null) el.textContent = map[id];
        });
        const handle = $("huella-handle");
        if (handle) {
            handle.placeholder = strings.handlePlaceholder || "@usuario (opcional)";
            handle.setAttribute("aria-label", strings.handleLabel || "Instagram / handle (opcional)");
        }
        const note = $("huella-note");
        if (note) {
            note.placeholder = strings.notePlaceholder || "Nota corta (opcional)";
            note.setAttribute("aria-label", strings.noteLabel || "Nota (opcional)");
        }
        syncSizeSliderFromSelection();
        const empty = $("huella-wall-empty");
        if (empty && empty.hidden === false) empty.textContent = strings.emptyWall || "";
        const banner = $("huella-firebase-banner");
        const bannerMsg = $("huella-firebase-msg");
        if (banner) {
            if (!firebaseOn) {
                banner.hidden = false;
                if (bannerMsg) bannerMsg.textContent = strings.firebaseHint || bannerMsg.textContent;
            } else if (isFileProtocol()) {
                banner.hidden = false;
                if (bannerMsg) {
                    bannerMsg.textContent = strings.firebaseFileProtocol
                        || "Estás en file:// — Firebase suele fallar. Usa un servidor local o publica la web.";
                }
            } else {
                banner.hidden = true;
            }
        }
        if (wallLoaded) renderWall(lastMarks);
        applyViewerLang();
    }

    function layout() {
        const section = $("huella-section");
        if (!section || !document.body.classList.contains("view-huella")) return;
        if (window.innerWidth <= 1125) {
            queueSync();
            return;
        }
        const header = document.querySelector("header");
        const menuEl = document.querySelector(".main-menu");
        const top = (header?.getBoundingClientRect().bottom || 64) + 8;
        const menuTop = menuEl?.getBoundingClientRect().top ?? window.innerHeight * 0.76;
        const bottom = Math.max(8, window.innerHeight - menuTop + 6);
        section.style.setProperty("--huella-top", `${top}px`);
        section.style.setProperty("--huella-bottom", `${bottom}px`);
        queueSync();
    }

    function bindCanvas() {
        canvas = $("huella-canvas");
        if (!canvas) return;
        ctx = canvas.getContext("2d", { willReadFrequently: true });

        canvas.addEventListener("pointerdown", onPointerDown);
        canvas.addEventListener("pointermove", onPointerMove);
        canvas.addEventListener("pointerup", onPointerUp);
        canvas.addEventListener("pointercancel", onPointerUp);
        canvas.addEventListener("pointerleave", (e) => {
            if (drawing) endDraw(e);
        });
        canvas.style.touchAction = "none";
        updateCursor();

        const wrap = canvas.parentElement;
        if (typeof ResizeObserver !== "undefined" && wrap) {
            resizeObserver = new ResizeObserver(() => queueSync());
            resizeObserver.observe(wrap);
            resizeObserver.observe(canvas);
        }

        // Initial sync after layout paint
        requestAnimationFrame(() => {
            syncCanvasSize({ preserve: false });
            clearCanvas(false);
        });
    }

    function init() {
        if (initialized) return;
        const section = $("huella-section");
        if (!section) return;

        initFirebase();
        bindCanvas();
        buildSwatches();
        bindViewer();

        document.querySelectorAll(".huella-tool[data-tool]").forEach((btn) => {
            btn.addEventListener("click", () => setTool(btn.getAttribute("data-tool")));
        });

        $("huella-clear")?.addEventListener("click", () => clearCanvas(true));
        $("huella-undo")?.addEventListener("click", async () => {
            if (!undoStack.length) return;
            const prev = undoStack.pop();
            await restoreState(prev);
        });
        $("huella-publish")?.addEventListener("click", () => publish());

        const size = $("huella-size");
        if (size) {
            brushSize = Number(size.value) || 4;
            size.addEventListener("pointerdown", () => {
                if (selectedId) pushUndo();
            });
            size.addEventListener("input", () => {
                const val = Number(size.value);
                const sel = selectedId ? getTextById(selectedId) : null;
                if (sel) {
                    sel.size = Math.max(MIN_TEXT, Math.min(MAX_TEXT, val));
                    textSize = sel.size;
                    redraw();
                } else if (tool === "text") {
                    textSize = Math.max(MIN_TEXT, Math.min(MAX_TEXT, val));
                } else {
                    brushSize = val || 4;
                }
            });
        }

        window.addEventListener("peuve-lang", applyLang);
        window.addEventListener("keydown", onKeyDown);
        initialized = true;
    }

    function show() {
        init();
        const galeria = $("galeria");
        const sobre = $("sobre-mi-section");
        const section = $("huella-section");
        if (galeria) galeria.style.display = "none";
        if (sobre) sobre.style.display = "none";
        if (section) section.style.display = "flex";
        document.body.classList.add("view-huella");
        document.body.classList.remove("view-sobre-mi");

        const menu = document.querySelector(".main-menu");
        if (menu && window.innerWidth > 1125) {
            const topVal = menu.style.top;
            const topNum = parseFloat(topVal);
            if (!topVal || (topVal.endsWith("vh") && topNum < 60) || (topVal.endsWith("px") && topNum < window.innerHeight * 0.55)) {
                if (typeof window.PEUVE_pinDesktopMenuToBot === "function") {
                    window.PEUVE_pinDesktopMenuToBot();
                }
            }
            menu.style.transform = "";
            menu.style.transition = "";
        }

        applyLang();
        if (section._layoutHuella) {
            window.removeEventListener("resize", section._layoutHuella);
        }
        layout();
        window.addEventListener("resize", layout);
        section._layoutHuella = layout;

        // Re-sync after section becomes visible (display:none → flex changes rect)
        requestAnimationFrame(() => {
            syncCanvasSize({ preserve: true });
            requestAnimationFrame(() => syncCanvasSize({ preserve: true }));
        });

        refreshWall();
    }

    function hide() {
        const section = $("huella-section");
        if (section) {
            section.style.display = "none";
            if (section._layoutHuella) {
                window.removeEventListener("resize", section._layoutHuella);
                delete section._layoutHuella;
            }
            section.style.removeProperty("--huella-top");
            section.style.removeProperty("--huella-bottom");
        }
        document.body.classList.remove("view-huella");
        hideTextOverlay();
        closeViewer();
        dragMode = null;
        dragOrigin = null;
        drawing = false;
    }

    window.PEUVE_HUELLA = { show, hide, applyLang, layout, init };
})();
