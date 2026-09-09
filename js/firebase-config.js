/**
 * PEUVE — Firebase web config for "Deja tu huella"
 *
 * Guía completa (paso a paso): HUELLA.md
 *
 * Cómo rellenar este archivo:
 * 1. En https://console.firebase.google.com crea un proyecto
 * 2. Añade una app Web (icono </>)
 * 3. Copia los valores de firebaseConfig y pégalos abajo
 *    (sustituye cada "TU_..." por el valor real)
 * 4. Activa Cloud Firestore y pega las reglas de HUELLA.md
 *
 * Si apiKey queda vacío o como "TU_API_KEY", la sección funciona
 * solo en este navegador (localStorage), sin sincronizar con otros.
 */
window.PEUVE_FIREBASE_CONFIG = {
    apiKey: "AIzaSyBiNWE_w6V3lFuuvb7DgXmDHOYy_8JPHDU",
    authDomain: "peuve---portfolio.firebaseapp.com",
    projectId: "peuve---portfolio",
    storageBucket: "peuve---portfolio.firebasestorage.app",
    messagingSenderId: "830370082858",
    appId: "1:830370082858:web:14ad2b32b0fb4d24931353"
};

window.PEUVE_FIREBASE_READY = function () {
    const c = window.PEUVE_FIREBASE_CONFIG;
    if (!c) return false;
    const key = (c.apiKey || "").trim();
    const fake = !key
        || key === "PLACEHOLDER"
        || key === "TU_API_KEY"
        || key.indexOf("TU_") === 0;
    return Boolean(!fake && c.projectId && String(c.projectId).indexOf("TU_") !== 0);
};
