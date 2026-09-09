# Deja tu huella — cómo conectar Firebase (guía para Paula)

La pared de firmas **funciona sin Firebase**: guarda solo en este navegador (demo).  
Para que **todo el mundo vea las mismas huellas**, hay que conectar Firebase y publicar la web en internet.

---

## Resumen rápido

1. Crear proyecto en Firebase  
2. Registrar app Web y copiar la config a `js/firebase-config.js`  
3. Activar Firestore  
4. Pegar las reglas de seguridad  
5. Subir la web online (GitHub Pages, Netlify, etc.) — **no basta abrir el HTML en el PC**  
6. Comprobar: desaparece el aviso y dos navegadores ven lo mismo  

---

## 1. Crear el proyecto en Firebase

1. Entra en [Firebase Console](https://console.firebase.google.com) (con tu cuenta de Google).
2. Pulsa **Añadir proyecto** / **Add project**.
3. Pon un nombre (por ejemplo `peuve-portfolio`) y sigue los pasos (puedes desactivar Google Analytics si no lo quieres).
4. Cuando termine, abre ese proyecto.

## 2. Registrar la app Web y pegar la config

1. En la página del proyecto, pulsa el icono **Web** (`</>`), o ve a **Configuración del proyecto** → **Tus apps** → **Añadir app** → Web.
2. Pon un apodo (por ejemplo `peuve-portfolio`) y registra la app.  
   No hace falta activar Hosting ahora.
3. Firebase te muestra un objeto `firebaseConfig` con campos como `apiKey`, `authDomain`, `projectId`, etc.
4. Abre el archivo del portfolio: `js/firebase-config.js`.
5. Sustituye cada valor `TU_...` por el valor real de Firebase. Ejemplo de forma (tus valores serán distintos):

```js
window.PEUVE_FIREBASE_CONFIG = {
    apiKey: "AIza...",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};
```

6. Guarda el archivo. **No dejes** textos como `TU_API_KEY` — si quedan, la web sigue en modo demo.

> Importante: todo el mundo que visite tu portfolio usará **la misma** config. No hace falta una cuenta de Firebase por visitante.

## 3. Activar Firestore (la base de datos)

1. En el menú de Firebase: **Compilación** / **Build** → **Firestore Database**.
2. Pulsa **Crear base de datos**.
3. Elige una región cercana (por ejemplo `europe-west1`).
4. Puedes empezar en **modo de prueba**; luego pega las reglas del siguiente apartado.
5. La app usa la colección `huellas`. No hace falta crearla a mano: se crea al publicar la primera firma.  
   Cada documento guarda: `image`, `createdAt`, `id`, y opcionalmente `handle` y `note`.

Storage **no es necesario** en esta versión (las imágenes van dentro de Firestore).

## 4. Pegar las reglas de seguridad

1. En Firestore, ve a la pestaña **Reglas** / **Rules**.
2. Borra lo que haya y pega esto:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /huellas/{docId} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasAll(['image', 'createdAt', 'id'])
        && request.resource.data.image is string
        && request.resource.data.image.size() < 900000
        && request.resource.data.createdAt is number
        && (!('handle' in request.resource.data)
            || request.resource.data.handle == null
            || (request.resource.data.handle is string && request.resource.data.handle.size() < 80))
        && (!('note' in request.resource.data)
            || request.resource.data.note == null
            || (request.resource.data.note is string && request.resource.data.note.size() < 200));
      allow update, delete: if false;
    }
  }
}
```

3. Pulsa **Publicar**.

Estas reglas permiten **leer** y **crear** huellas a cualquiera (como un libro de visitas). No permiten borrar ni editar desde la web. Hay riesgo de spam; más adelante se puede endurecer (Auth, App Check, etc.).

## 5. Publicar la web en internet

Firebase **no funciona bien** si abres el portfolio solo como archivo (`file://...`) en el explorador.  
Para que otras personas vean las huellas:

1. Sube el sitio a **GitHub Pages**, **Netlify**, **Vercel**, o el hosting que uses.
2. Asegúrate de que el archivo publicado incluya tu `js/firebase-config.js` ya rellenado (el mismo para todos).
3. Comparte la URL pública (https://…).

Sin web online, solo tú (o quien abra ese archivo) verá lo guardado en su propio navegador.

## 6. Cómo comprobar que funciona

1. Abre la web **publicada** (https://…), no el archivo local.
2. Entra en **Deja tu huella**.
3. El aviso amarillo/banner de “Firebase no configurado” **debe desaparecer**.
4. Dibuja algo (o añade imagen/foto) → **Publicar**.
5. En Firebase Console → Firestore → colección `huellas` debería aparecer un documento nuevo.
6. Abre la misma web en **otro navegador** o en el móvil: la huella debe verse en el muro.

Si el banner sigue visible: revisa que no queden `TU_API_KEY` / `TU_PROYECTO` en `js/firebase-config.js` y recarga con caché limpia (Ctrl+F5).

### Imágenes y fotos en la composición

Puedes subir imágenes o hacerte una foto; se colocan en el lienzo (mover / redimensionar) junto al dibujo y el texto. Al publicar, **todo se aplana en una sola imagen** (`image` en el documento Firestore). No hace falta Firebase Storage ni subidas aparte: las fotos van ya “horneadas” en el PNG/JPEG del muro. Si la composición es muy pesada, la app comprime el export (JPEG / escala) como antes.

---

## Modo demo (sin Firebase)

Si `apiKey` está vacío o sigue siendo un placeholder (`TU_API_KEY`, etc.), la UI muestra un aviso amable y guarda en `localStorage` con la clave `peuve-huellas`. Sirve para probar el dibujo offline, pero **no sincroniza** entre personas.
