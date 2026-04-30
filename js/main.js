document.addEventListener("DOMContentLoaded", function () {

    // DATOS DE LA GALERÍA 
    const galleries = {
        fotografia: [
            {
                carpeta: "conciertos",
                portada: "foto (3).JPG",
                titulo: "Conciertos",
                descripcion: "Fotografía de música en vivo.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["foto (3).JPG", "foto (6).JPG", "foto (7).JPG", "foto (8).JPG", "foto (10).JPG", "foto (11).JPG", "foto (14).JPG"]
            },
            {
                carpeta: "dia a dia",
                portada: "foto (1).JPG",
                titulo: "Día a Día",
                descripcion: "Fotografía cotidiana y documental.",
                herramientas: ["Lightroom"],
                imagenes: ["foto (1).JPG", "foto (2).JPG", "foto (22).JPG", "foto (23).JPG", "foto (24).JPG"]
            },
            {
                carpeta: "diego",
                portada: "2026PabloESTUDIO_IMG_1720.jpg",
                titulo: "Diego",
                descripcion: "Sesión fotográfica en estudio.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["2026PabloESTUDIO_IMG_1720.jpg", "2026PabloESTUDIO_IMG_1721.jpg", "2026PabloESTUDIO_IMG_1728.jpg", "2026PabloESTUDIO_IMG_9846.jpg", "2026PabloESTUDIO_IMG_9848.jpg", "2026PabloESTUDIO_IMG_9850.jpg"]
            },
            {
                carpeta: "fiesta",
                portada: "foto (9).JPG",
                titulo: "Fiesta",
                descripcion: "Fotografía de ambiente y eventos.",
                herramientas: ["Lightroom"],
                imagenes: ["foto (9).JPG", "foto (12).JPG", "foto (13).JPG", "foto (21).JPG"]
            },
            {
                carpeta: "partido de futbol laura",
                portada: "foto (15).JPG",
                titulo: "Partido de Fútbol",
                descripcion: "Cobertura fotográfica deportiva.",
                herramientas: ["Lightroom"],
                imagenes: ["foto (15).JPG", "foto (16).JPG", "foto (17).JPG"]
            },
            {
                carpeta: "retratos clase",
                portada: "ESTUDIO_Edit_2_13.jpg",
                titulo: "Retratos de Clase",
                descripcion: "Serie de retratos en estudio realizados en clase.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["ESTUDIO_Edit_2_13.jpg", "ESTUDIO_Edit_2_14.jpg", "ESTUDIO_Edit_2_15.jpg", "ESTUDIO_Edit_2_17.jpg", "ESTUDIO_Edit_2_18.jpg", "ESTUDIO_Edit_2_20.jpg", "ESTUDIO_Edit_2_21.jpg"]
            },
            {
                carpeta: "sevilla",
                portada: "foto (4).JPG",
                titulo: "Sevilla",
                descripcion: "Fotografía de viaje y ciudad.",
                herramientas: ["Lightroom"],
                imagenes: ["foto (4).JPG", "foto (5).JPG", "foto (18).JPG", "foto (19).JPG", "foto (20).JPG"]
            },
            {
                carpeta: "cianotipias",
                portada: "final1ciano.jpg",
                titulo: "Cianotipias",
                descripcion: "Técnica fotográfica alternativa de cianotipia.",
                herramientas: ["Técnicas analógicas"],
                imagenes: ["final1ciano.jpg", "final2ciano.jpg", "final3ciano.jpg", "final4ciano.jpg", "final5ciano.jpg", "final6ciano.jpg"]
            },
            {
                carpeta: "gran via_clase",
                portada: "GRANVIA_PORTADA.jpg",
                titulo: "Gran Vía",
                descripcion: "Proyecto fotográfico urbano sobre la Gran Vía.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["GRANVIA_PORTADA.jpg", "GRANVIA_Edit_1.jpg", "GRANVIA_Edit_13.jpg", "GRANVIA_Edit_18.jpg", "GRANVIA_Edit_21.jpg", "GRANVIA_Edit_24.jpg", "GRANVIA_Edit_27.jpg", "GRANVIA_Edit_29.jpg", "GRANVIA_Edit_30.jpg", "GRANVIA_Edit_31.jpg", "GRANVIA_Edit_38.jpg", "GRANVIA_Edit_40.jpg", "GRANVIA_Edit_42.jpg"]
            },
            {
                carpeta: "teatros canal",
                portada: "TODOS_indexado_COLOR.png",
                titulo: "Teatros Canal",
                descripcion: "Cobertura fotográfica en los Teatros Canal.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["TODOS_indexado_COLOR.png", "AZULEJA_color_llora.png", "DESI_indexado_EJEJEJEJE.png", "DRAMA_indexado_COLOR.png", "FLAUTA_indexado_COLOR.png", "gemelas_COLOR.png", "HENAR_indexado_COLOR.png", "PEUVE_indexado_COLOR.png", "ROBERTA_indexado_COLOR.png"]
            },
            {
                carpeta: "vinateros",
                portada: "Vinateros2_1.JPG",
                titulo: "Vinateros",
                descripcion: "Sesión fotográfica en Vinateros.",
                herramientas: ["Lightroom"],
                imagenes: ["Vinateros2_1.JPG", "Vinateros2_2.JPG", "Vinateros2_3.JPG", "Vinateros2_4.JPG", "Vinateros2_5.JPG", "Vinateros2_6.JPG", "Vinateros2_7.JPG", "Vinateros2_8.JPG", "Vinateros2_9.JPG", "Vinateros2_10.JPG", "Vinateros2_11.JPG", "Vinateros2_12.JPG", "Vinateros2_13.JPG", "Vinateros2_14.JPG"]
            }
        ],

        carteles: [
            {
                carpeta: "nodo",
                portada: "carteles (1).jpg",
                titulo: "NODO",
                descripcion: "Proyecto basado en la idea de conexión, red o estructura. Explora cómo los elementos se relacionan entre sí para formar sistemas visuales.",
                herramientas: ["Illustrator", "Photoshop"],
                imagenes: ["carteles (1).jpg", "carteles (2).jpg", "carteles (3).jpg", "carteles (4).jpg", "Free_Poster_Mockup.png", "Free_Poster_Mockup2.png"]
            },
            {
                carpeta: "teatros_canal",
                portada: "carteles (5).jpg",
                titulo: "Teatros Canal",
                descripcion: "Cartelería para los Teatros Canal.",
                herramientas: ["Illustrator", "InDesign"],
                imagenes: ["carteles (5).jpg", "carteles (6).jpg", "carteles (7).jpg", "carteles (8).jpg", "carteles (9).jpg", "carteles (10).jpg"]
            },
            {
                carpeta: "cata la lata",
                portada: "TODO_1.jpg",
                titulo: "Cata la Lata",
                descripcion: "Diseño gráfico para Cata la Lata.",
                herramientas: ["Illustrator", "Photoshop"],
                imagenes: ["TODO_1.jpg", "mock_atun1.png", "mock_mejillones1.png", "mock_sardinillas1.png"]
            },
            {
                carpeta: "don pollo",
                portada: "DON POLLO.jpg",
                titulo: "Don Pollo",
                descripcion: "Diseño gráfico para Don Pollo.",
                herramientas: ["Illustrator"],
                imagenes: ["DON POLLO.jpg"]
            }
        ],

        ilustracion: [
            {
                carpeta: "carta",
                portada: "ilustracion (8).jpg",
                titulo: "Carta Pokémon",
                descripcion: "Ilustración inspirada en el universo Pokémon.",
                herramientas: ["Procreate", "Illustrator"],
                imagenes: ["ilustracion (8).jpg"]
            },
            {
                carpeta: "infografia",
                portada: "ilustracion (4).jpg",
                titulo: "Infografía E-waste + IA",
                descripcion: "Proyecto de ilustración creado con la compañera Ana Maldonado para la clase de ilustración, en formato Berlín.",
                herramientas: ["Illustrator", "Procreate"],
                imagenes: ["ilustracion (4).jpg", "ilustracion (11).jpg"]
            },
            {
                carpeta: "jornadas",
                portada: "ilustracion (5).jpg",
                titulo: "Jornadas",
                descripcion: "Serie de ilustraciones para jornadas y eventos.",
                herramientas: ["Illustrator"],
                imagenes: ["ilustracion (5).jpg", "ilustracion (6).jpg", "ilustracion (7).jpg"]
            },
            {
                carpeta: "lego",
                portada: "ilustracion (1).jpg",
                titulo: "LEGO",
                descripcion: "Proyecto editorial inspirado en la filosofía modular de LEGO.",
                herramientas: ["Illustrator", "Procreate"],
                imagenes: ["ilustracion (1).jpg", "ilustracion (2).jpg", "ilustracion (9).jpg", "ilustracion (10).jpg"]
            },
            {
                carpeta: "libro",
                portada: "ilustracion (3).jpg",
                titulo: "Libro",
                descripcion: "Ilustración para proyecto editorial.",
                herramientas: ["Procreate"],
                imagenes: ["ilustracion (3).jpg"]
            },
            {
                carpeta: "nubi",
                portada: "NUBI.mp4",
                titulo: "Nubi",
                descripcion: "Proyecto de ilustración para Nubi.",
                herramientas: ["Procreate", "Illustrator"],
                imagenes: ["dibujos_nubi.png", "dibujos_nubi2.png", "NUBI.mp4"]
            },
            {
                carpeta: "dibujo y otros",
                portada: "henar_scaner.jpg",
                titulo: "Dibujo y Otros",
                descripcion: "Varios trabajos de dibujo e ilustración.",
                herramientas: ["Lápiz", "Procreate"],
                imagenes: ["henar_scaner.jpg", "666.bikadimsum.666.ana (1).jpg", "PAVIABRAVO,Paula_lápiz de color1.jpg"]
            }
        ],

        ilustracion_tipografia: [
            {
                carpeta: "galaktype",
                portada: "GALAKTYPE_Mesa de trabajo 1.jpg",
                titulo: "GALAKTYPE",
                descripcion: "Proyecto tipográfico GALAKTYPE.",
                herramientas: ["Illustrator", "FontLab"],
                imagenes: ["GALAKTYPE_Mesa de trabajo 1.jpg", "GALAKTYPE-02.jpg", "GALAKTYPE-03.jpg", "GALAKTYPE-04.jpg", "GALAKTYPE-05.jpg", "GALAKTYPE-06.jpg", "GALAKTYPE-07.jpg"]
            }
        ],

        "3D": [
            {
                carpeta: "camara",
                portada: "3d (3).jpg",
                titulo: "Cámara",
                descripcion: "Modelado y render de cámara en Blender.",
                herramientas: ["Blender"],
                imagenes: ["3d (3).jpg", "3d (4).jpg", "3d (6).jpg"]
            },
            {
                carpeta: "cartapokemon",
                portada: "3d (5).jpg",
                titulo: "Carta Pokémon",
                descripcion: "Render 3D de carta Pokémon con materiales y iluminación.",
                herramientas: ["Blender"],
                imagenes: ["3d (5).jpg"]
            },
            {
                carpeta: "chupachups",
                portada: "3d (9).jpg",
                titulo: "Chupa Chups",
                descripcion: "Modelado y render de producto Chupa Chups en Blender.",
                herramientas: ["Blender"],
                imagenes: ["3d (9).jpg", "3d (10).jpg", "3d (11).jpg"]
            },
            {
                carpeta: "trabajos de clase",
                portada: "3d (1).jpg",
                titulo: "Trabajos de Clase",
                descripcion: "Ejercicios y proyectos de 3D realizados en clase.",
                herramientas: ["Blender"],
                imagenes: ["3d (1).jpg", "3d (2).jpg", "3d (7).jpg", "3d (8).jpg", "3d (12).jpg", "3d (13).jpg"]
            }
        ],

        editorial: [
            {
                carpeta: "fanzine1_LaMirada",
                portada: "editorial (10).jpg",
                titulo: "Ciudades Invisibles",
                descripcion: "Fanzine artesanal con encuadernación japonesa que narra visualmente Eufemia, de Italo Calvino.",
                herramientas: ["Técnicas de impresión", "Collage", "Serigrafía"],
                imagenes: ["editorial (10).jpg", "editorial (11).jpg", "editorial (12).jpg", "editorial (13).jpg", "editorial (14).jpg", "editorial (15).jpg"]
            },
            {
                carpeta: "fanzine2_LaPerdidaDeUnoMismo",
                portada: "VIDEO_ZINEv1.mp4",
                titulo: "La Pérdida de Uno Mismo",
                descripcion: "Pieza experimental sobre disociación, identidad y la sensación de perder el sentido de uno mismo.",
                herramientas: ["InDesign", "Photoshop", "Collage"],
                imagenes: [
                    "Brillo_contraste 1zine.jpg",
                    "Color e intensidad 1zine.jpg",
                    "Documento_2026-03-01_204253_1zine.jpg",
                    "Documento_2026-03-01_204253_36zine.jpg",
                    "Foto_2026-03-02_204405 copiazine.jpg",
                    "Foto_2026-03-02_204405_1 copiazine.jpg",
                    "Foto_2026-03-02_204405_2zine.jpg",
                    "VIDEO_ZINEv1.mp4"
                ]
            },
            {
                carpeta: "cocina",
                portada: "editorial (1).jpg",
                titulo: "Sentimiento y Sabor",
                descripcion: "Proyecto editorial ilustrado que recoge una colección ficticia de libros de gastronomía.",
                herramientas: ["InDesign", "Illustrator", "Procreate"],
                imagenes: ["editorial (1).jpg", "editorial (2).jpg", "editorial (3).jpg", "editorial (4).jpg", "editorial (5).jpg", "editorial (6).jpg", "editorial (7).jpg"]
            },
            {
                carpeta: "mauqetacion para clase",
                portada: "editorial (8).jpg",
                titulo: "Maquetación para Clase",
                descripcion: "Proyectos de diseño editorial realizados en clase.",
                herramientas: ["InDesign"],
                imagenes: ["editorial (8).jpg", "editorial (9).jpg"]
            }
        ],

        identidad_marca: [
            {
                carpeta: "bit",
                portada: "Ident_01_PaulaPavia_BIT.mp4",
                titulo: "BIT",
                descripcion: "Identidad visual para BIT.",
                herramientas: ["Illustrator", "InDesign"],
                imagenes: [
                    "identidad (3).jpg",
                    "identidad (22).jpg",
                    "botellas_GENERALES.png",
                    "CAMISETAS_BIT.png",
                    "CANTIMPLORA_2025.png",
                    "ENTRADAS_SEPARADOS.png",
                    "HORARIO.png",
                    "MOCK_3POSTER.png",
                    "Mupimetro_Jugadores.jpg",
                    "MUPI_mock.png",
                    "PULSERAS_total.png",
                    "TOTE_BIT.png",
                    "streetfight.jpg",
                    "Ident_01_PaulaPavia_BIT.mp4",
                    "Ident_02_PaulaPavia_BIT.mp4",
                    "Ident_03_PaulaPavia_BIT.mp4"
                ]
            },
            {
                carpeta: "canal",
                portada: "CANAL_Publi.mp4",
                titulo: "CANAL",
                descripcion: "Proyecto centrado en la creación de una identidad visual dinámica.",
                herramientas: ["Illustrator", "InDesign", "After Effects"],
                imagenes: [
                    "identidad (1).jpg",
                    "identidad (2).jpg",
                    "identidad (18).jpg",
                    "identidad (19).jpg",
                    "identidad (20).jpg",
                    "identidad (21).jpg",
                    "identidad (23).jpg",
                    "1_canal.jpg",
                    "2_canal.png",
                    "3_canal.png",
                    "4_canal.png",
                    "5_canal.png",
                    "6_canal.png",
                    "7_canal.png",
                    "8_canal.png",
                    "9_canal.png",
                    "Azuleja_CanalOBRA.png",
                    "gemelas_mupi_v3.png",
                    "LaPaz_Cartel.png",
                    "Mesa de trabajo 4.png",
                    "metro2.png",
                    "metro3.png",
                    "Metro_ROBERTA.png",
                    "Ticket2.png",
                    "CANAL_Publi.mp4"
                ]
            },
            {
                carpeta: "cesida",
                portada: "identidad (4).jpg",
                titulo: "CESIDA",
                descripcion: "Identidad visual para CESIDA.",
                herramientas: ["Illustrator", "InDesign"],
                imagenes: [
                    "identidad (4).jpg",
                    "identidad (5).jpg",
                    "identidad (6).jpg",
                    "identidad (7).jpg",
                    "identidad (8).jpg",
                    "identidad (9).jpg",
                    "identidad (10).jpg",
                    "identidad (11).jpg",
                    "identidad (12).jpg",
                    "identidad (13).jpg",
                    "identidad (14).jpg",
                    "identidad (15).jpg",
                    "identidad (16).jpg",
                    "identidad (17).jpg"
                ]
            },
            {
                carpeta: "MARIHUANA_rediseño",
                portada: "Sin título-2.jpg",
                titulo: "Rediseño Marihuana",
                descripcion: "Proyecto de rediseño de identidad.",
                herramientas: ["Illustrator"],
                imagenes: [
                    "Sin título-2.jpg",
                    "Sin título-2-06.jpg",
                    "Sin título-2-07.jpg",
                    "Sin título-2-08.jpg",
                    "Sin título-2-09.jpg",
                    "Sin título-2_Mesa de trabajo 1 copia.jpg"
                ]
            }
        ],

        ux_ui: [
            {
                carpeta: "",
                portada: "ux_ui (1).jpg",
                titulo: "UX/UI",
                descripcion: "Diseño de interfaz y experiencia de usuario.",
                herramientas: ["Figma"],
                imagenes: ["ux_ui (1).jpg"]
            }
        ],

        edicion_imagen: [
            {
                carpeta: "claudia",
                portada: "ClaudiaJon.jpg",
                titulo: "Claudia",
                descripcion: "Proyecto personal de retrato y edición fotográfica.",
                herramientas: ["Photoshop", "Lightroom"],
                imagenes: [
                    "ClaudiaJon.jpg",
                    "ClaudiaJon2.jpg",
                    "ClaudiaJon3.jpg",
                    "ClaudiaJon4.jpg",
                    "ClaudiaJon5.jpg",
                    "ClaudiaJon6.jpg",
                    "ClaudiaJon7.jpg",
                    "ClaudiaJon8.jpg",
                    "ClaudiaJon9.jpg",
                    "ClaudiaJon10.jpg",
                    "ClaudiaJon11.jpg",
                    "ClaudiaJon12.jpg"
                ]
            },
            {
                carpeta: "rosalia",
                portada: "LeireEdit_image0000108.jpg",
                titulo: "Rosalía",
                descripcion: "Edición y retoque fotográfico de serie de retratos.",
                herramientas: ["Photoshop", "Lightroom"],
                imagenes: [
                    "LeireEdit_image0000108.jpg",
                    "LeireEdit_image0000209.jpg",
                    "LeireEdit_image0000303.jpg",
                    "LeireEdit_image0000402.jpg",
                    "LeireEdit_image0000501.jpg",
                    "LeireEdit_image0000604.jpg",
                    "LeireEdit_image0000705.jpg",
                    "LeireEdit_image0000806.jpg",
                    "LeireEdit_image0000907.jpg"
                ]
            },
            {
                carpeta: "clase/diego",
                portada: "2026PabloESTUDIO_IMG_1720.jpg",
                titulo: "Diego — Clase",
                descripcion: "Edición fotográfica de sesión de estudio realizada en clase.",
                herramientas: ["Photoshop", "Lightroom"],
                imagenes: [
                    "2026PabloESTUDIO_IMG_1720.jpg",
                    "2026PabloESTUDIO_IMG_1721.jpg",
                    "2026PabloESTUDIO_IMG_1728.jpg",
                    "2026PabloESTUDIO_IMG_9846.jpg",
                    "2026PabloESTUDIO_IMG_9848.jpg",
                    "2026PabloESTUDIO_IMG_9850.jpg"
                ]
            },
            {
                carpeta: "clase/retratos",
                portada: "Estudio__DSC002402.jpg",
                titulo: "Retratos — Clase",
                descripcion: "Serie de retratos editados en clase.",
                herramientas: ["Photoshop", "Lightroom"],
                imagenes: [
                    "Estudio__DSC002402.jpg",
                    "Estudio__DSC009004.jpg",
                    "Estudio_MMS_510901.jpg",
                    "Estudio_MMS_511803.jpg",
                    "Estudio_MMS_514105.jpg",
                    "2026PabloESTUDIO__MG_1681-3.jpg",
                    "2026PabloESTUDIO__MG_1681.jpg"
                ]
            }
        ],

        diseno_web: [
            {
                carpeta: "",
                portada: "web (1).jpg",
                titulo: "Portfolio Web",
                descripcion: "Diseño y desarrollo de portfolio web.",
                herramientas: ["Figma", "HTML", "CSS"],
                imagenes: ["web (1).jpg"]
            }
        ],

        video: [
            {
                carpeta: "",
                portada: "Bien_publi.mp4",
                titulo: "Bien Publicidad",
                descripcion: "Pieza audiovisual realizada como proyecto independiente.",
                herramientas: ["Premiere", "After Effects"],
                imagenes: ["Bien_publi.mp4"]
            },
            {
                carpeta: "bit",
                portada: "Ident_01_PaulaPavia_BIT.mp4",
                titulo: "BIT — Publicidad",
                descripcion: "Pieza audiovisual creada para la identidad de BIT.",
                herramientas: ["After Effects", "Illustrator"],
                imagenes: ["Ident_01_PaulaPavia_BIT.mp4"]
            },
            {
                carpeta: "canal",
                portada: "CANAL_Publi.mp4",
                titulo: "CANAL — Publicidad",
                descripcion: "Spot audiovisual para la identidad visual de Canal.",
                herramientas: ["After Effects", "Illustrator"],
                imagenes: ["CANAL_Publi.mp4"]
            }
        ]

    };


    // ── SWIPER GALERÍA PRINCIPAL ─────────────────────────────────────────────
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 12,
        grabCursor: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });

    // ── POPUP VERTICAL ───────────────────────────────────────────────────────
    const overlay = document.getElementById("popup-overlay");
    // CORRECCIÓN: el div en el HTML tiene id="popup-inner" (añadido en index.html)
    const popupInner = document.getElementById("popup-inner");
    const closeBtn = document.getElementById("popup-close");
    const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov", ".m4v"];

    function esVideo(archivo) {
        const nombre = String(archivo || "").toLowerCase();
        return VIDEO_EXTENSIONS.some(ext => nombre.endsWith(ext));
    }

    function normalizarMedia(media) {
        if (typeof media === "string") {
            return {
                src: media,
                type: esVideo(media) ? "video" : "image",
            };
        }

        if (media && typeof media === "object") {
            const src = media.src || "";
            const type = media.type || (esVideo(src) ? "video" : "image");
            return { src, type };
        }

        return { src: "", type: "image" };
    }

    function optimizarImagen(img, opciones = {}) {
        const { aboveTheFold = false } = opciones;
        img.decoding = "async";
        img.loading = aboveTheFold ? "eager" : "lazy";
        img.fetchPriority = aboveTheFold ? "high" : "low";
    }

    // ── VISOR AMPLIADO DE IMÁGENES (dentro del popup) ───────────────────────
    const imageZoomOverlay = document.createElement("div");
    imageZoomOverlay.id = "image-zoom-overlay";
    imageZoomOverlay.className = "image-zoom-overlay";
    imageZoomOverlay.innerHTML = `
        <div class="image-zoom-box">
            <button class="image-zoom-close" id="image-zoom-close" aria-label="Cerrar imagen ampliada">✕</button>
            <img id="image-zoom-img" class="image-zoom-img" alt="">
        </div>
    `;
    document.body.appendChild(imageZoomOverlay);

    const zoomImg = document.getElementById("image-zoom-img");
    const zoomCloseBtn = document.getElementById("image-zoom-close");

    function abrirVisorImagen(src, alt) {
        zoomImg.src = src;
        zoomImg.alt = alt || "Imagen ampliada del proyecto";
        imageZoomOverlay.classList.add("open");
    }

    function cerrarVisorImagen() {
        imageZoomOverlay.classList.remove("open");
        zoomImg.src = "";
    }

    function abrirPopup(proyecto, categoria) {
        popupInner.innerHTML = "";

        // Título
        const titulo = document.createElement("h2");
        titulo.className = "popup-title";
        titulo.textContent = proyecto.titulo;
        popupInner.appendChild(titulo);

        // Descripción
        const desc = document.createElement("p");
        desc.className = "popup-desc";
        desc.textContent = proyecto.descripcion;
        popupInner.appendChild(desc);

        // Herramientas
        const toolsLabel = document.createElement("p");
        toolsLabel.className = "popup-tools-label";
        toolsLabel.textContent = "Herramientas";
        popupInner.appendChild(toolsLabel);

        const tools = document.createElement("div");
        tools.className = "popup-tools";
        tools.innerHTML = proyecto.herramientas.map(h => `<span class="popup-tag">${h}</span>`).join("");
        popupInner.appendChild(tools);

        // Contenedor de imágenes en cuadrícula
        const imageGrid = document.createElement("div");
        imageGrid.className = "popup-images-grid";

        proyecto.imagenes.forEach(function (item) {
            const media = normalizarMedia(item);
            if (!media.src) return;
            const subcarpeta = proyecto.carpeta ? `${proyecto.carpeta}/` : "";
            const mediaSrc = `assets/${categoria}/${subcarpeta}${media.src}`;

            if (media.type === "video") {
                const video = document.createElement("video");
                video.src = mediaSrc;
                video.className = "popup-project-video";
                video.controls = true;
                video.preload = "metadata";
                video.playsInline = true;
                imageGrid.appendChild(video);
            } else {
                const img = document.createElement("img");
                img.src = mediaSrc;
                img.alt = proyecto.titulo;
                img.className = "popup-project-img";
                optimizarImagen(img, { aboveTheFold: false });
                img.addEventListener("click", function () {
                    abrirVisorImagen(img.src, img.alt);
                });
                imageGrid.appendChild(img);
            }
        });

        popupInner.appendChild(imageGrid);

        overlay.classList.add("open");
        popupInner.scrollTop = 0;
    }

    function cerrarPopup() {
        overlay.classList.remove("open");
    }

    closeBtn.addEventListener("click", cerrarPopup);
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) cerrarPopup();
    });
    zoomCloseBtn.addEventListener("click", cerrarVisorImagen);
    imageZoomOverlay.addEventListener("click", function (e) {
        if (e.target === imageZoomOverlay) cerrarVisorImagen();
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            if (imageZoomOverlay.classList.contains("open")) {
                cerrarVisorImagen();
            } else {
                cerrarPopup();
            }
        }
    });

    // ── CARGAR GALERÍA ───────────────────────────────────────────────────────
    function cargarGaleria(categoria) {
        const galeria = document.getElementById("galeria");
        const sobreMiSection = document.getElementById("sobre-mi-section");

        if (categoria === "sobre_mi") {
            galeria.style.display = "none";
            if (sobreMiSection) sobreMiSection.style.display = "flex";
            document.body.classList.add("view-sobre-mi");
            return;
        }

        galeria.style.display = "block";
        if (sobreMiSection) sobreMiSection.style.display = "none";
        document.body.classList.remove("view-sobre-mi");

        const proyectos = galleries[categoria];
        if (!proyectos) return;

        const wrapper = document.querySelector(".swiper-wrapper");
        wrapper.innerHTML = "";

        proyectos.forEach(function (proyecto, index) {
            const slide = document.createElement("div");
            slide.className = "swiper-slide";

            const portada = normalizarMedia(proyecto.portada);
            const subcarpetaPortada = proyecto.carpeta ? `${proyecto.carpeta}/` : "";
            const portadaSrc = `assets/${categoria}/${subcarpetaPortada}${portada.src}`;

            let mediaEl;
            if (portada.type === "video") {
                const video = document.createElement("video");
                video.src = portadaSrc;
                video.className = "slide-video";
                video.muted = true;
                video.loop = true;
                video.autoplay = true;
                video.playsInline = true;
                video.preload = "metadata";
                mediaEl = video;
            } else {
                const img = document.createElement("img");
                img.src = portadaSrc;
                img.alt = proyecto.titulo;
                // Priorizamos solo las primeras miniaturas visibles.
                optimizarImagen(img, { aboveTheFold: index < 3 });
                mediaEl = img;
            }

            const label = document.createElement("div");
            label.className = "slide-label";
            label.textContent = proyecto.titulo;

            slide.appendChild(mediaEl);
            slide.appendChild(label);

            // Detecta click/tap real sin confundirlo con arrastre del swiper.
            let isPointerDown = false;
            let dragging = false;
            let startX = 0;
            let startY = 0;

            slide.addEventListener("pointerdown", function (e) {
                if (e.pointerType === "mouse" && e.button !== 0) return;
                isPointerDown = true;
                dragging = false;
                startX = e.clientX;
                startY = e.clientY;
            });

            slide.addEventListener("pointermove", function (e) {
                if (!isPointerDown) return;
                const distanceX = Math.abs(e.clientX - startX);
                const distanceY = Math.abs(e.clientY - startY);
                if (distanceX > 8 || distanceY > 8) {
                    dragging = true;
                }
            });

            slide.addEventListener("pointerup", function (e) {
                if (!isPointerDown) return;
                isPointerDown = false;
                if (e.pointerType === "mouse" && e.button !== 0) return;
                if (!dragging) abrirPopup(proyecto, categoria);
            });

            slide.addEventListener("pointercancel", function () {
                isPointerDown = false;
            });

            wrapper.appendChild(slide);
        });

        swiper.update();
    }

    document.querySelectorAll(".main-menu a").forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const categoria = this.getAttribute("data-categoria");
            cargarGaleria(categoria);
        });
    });

    cargarGaleria("fotografia");
});


// ── ANIMACIÓN ────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Ilustracion_1.png",
        "Ilustracion_2.png",
        "Ilustracion_3.png",
        "Ilustracion_4.png",
        "Ilustracion_5.png",
        "Ilustracion_6.png",
        "Ilustracion_7.png",
        "Ilustracion_8.png"
    ];

    const text1 = [
        "Haz click en la pantalla",
        "otra vez",
        "otra vez!",
        "Ayúdame a bajar esto...",
        "Gracias...",
        "Gracias...",
        "Gracias...",
        ""
    ];

    const text2 = [
        "",
        "",
        "Oyes...",
        "otra vez!!!!",
        "",
        "",
        "",
        ""
    ];

    const posicionesMenu = {
        0: "24vh",
        1: "24vh",
        2: "24vh",
        3: "26vh",
        4: "32vh",
        5: "39vh",
        6: "46vh",
        7: "76vh"
    };

    let currentScene = 0;
    let autoChangeActive = false;

    const introEl = document.getElementById("intro-animation");
    const imgElement = document.getElementById("animation-img");
    const textElement1 = document.getElementById("instruction-text1");
    const textElement2 = document.getElementById("instruction-text2");
    const menuElement = document.querySelector(".main-menu");
    const whiteCover = document.getElementById("intro-white-cover");

    function avanzarEscena() {
        if (currentScene < images.length - 1) {
            currentScene++;
            menuElement.style.top = posicionesMenu[currentScene];
            imgElement.src = `assets/ilustraciones/${images[currentScene]}`;
            textElement1.innerText = text1[currentScene];
            textElement2.innerText = text2[currentScene];

            if (currentScene === 7) {
                setTimeout(() => {
                    menuElement.classList.add("rebote");
                }, 600);
            }

            if (currentScene === 4 && !autoChangeActive) {
                autoChangeActive = true;
                iniciarCambioAutomatico();
            }
        }
    }

    function iniciarCambioAutomatico() {
        let interval = setInterval(() => {
            if (currentScene < images.length - 1) {
                avanzarEscena();
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    introEl.style.display = "none";
                    if (whiteCover) whiteCover.style.display = "none";
                    menuElement.style.transform = "translateY(0)";
                }, 500);
            }
        }, 300);
    }

    introEl.addEventListener("click", avanzarEscena);
});


// ── SOBRE MÍ - DRAG HORIZONTAL ───────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("sobre-mi-slider");
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("dragging");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("dragging");
    });
    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("dragging");
    });
    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.2;
        slider.scrollLeft = scrollLeft - walk;
    });

    let touchStartX = 0;
    let touchScrollLeft = 0;
    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = slider.scrollLeft;
    }, { passive: true });
    slider.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - touchStartX) * 1.2;
        slider.scrollLeft = touchScrollLeft - walk;
    }, { passive: true });
});