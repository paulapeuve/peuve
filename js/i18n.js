/* UI strings + language helpers for PEUVE portfolio */
window.PEUVE_I18N = {
    es: {
        portfolioLabel: "Portfolio de diseño",
        langBtn: "EN",
        langBtnAria: "Cambiar a inglés",
        categories: {
            sobre_mi: "Sobre Mí",
            protagonistas: "Protagonistas",
            editorial: "Diseño Editorial",
            identidad_marca: "Identidad de Marca",
            carteles: "Cartelería",
            fotografia: "Fotografía",
            diseno_web: "Diseño Web",
            edicion_imagen: "Edición de Imagen",
            video: "Vídeo",
            tipografia: "Tipografía",
            ilustracion: "Ilustración",
            "3D": "3D",
            tatuaje: "Tatuaje",
            huella: "Deja tu huella"
        },
        huella: {
            title: "Deja tu huella",
            intro: "Dibuja, añade texto o imágenes, muévelos o cambia su tamaño, y publícalo. El @ es opcional.",
            draw: "Dibujar",
            text: "Texto",
            image: "Imagen",
            photo: "Foto",
            clear: "Borrar",
            undo: "Deshacer",
            publish: "Publicar",
            brushSize: "Grosor",
            textSize: "Tamaño texto",
            imageSize: "Tamaño imagen",
            handlePlaceholder: "@usuario (opcional)",
            handleLabel: "Instagram / handle (opcional)",
            notePlaceholder: "Nota corta (opcional)",
            noteLabel: "Nota (opcional)",
            textPlaceholder: "Escribe y pulsa Enter…",
            wallTitle: "Muro de huellas",
            emptyWall: "Aún no hay huellas. Sé la primera.",
            firebaseHint: "Configura Firebase para activar el muro compartido. Mientras tanto, las huellas se guardan en este dispositivo.",
            needDraw: "Dibuja algo antes de publicar",
            rateLimit: "Espera {s}s antes de publicar otra vez",
            publishing: "Publicando…",
            published: "¡Publicado!",
            publishedLocal: "Guardado en este dispositivo",
            publishedLocalFallback: "Guardado aquí (Firebase no respondió)",
            publishedLocalFallbackDetail: "Guardado aquí — Firebase: {err}",
            firebasePermission: "Firebase denegó el permiso (permission-denied). Publica las reglas de HUELLA.md en Firestore.",
            firebaseNetwork: "Error de red con Firebase. Comprueba la conexión o prueba desde http/https (no file://).",
            firebaseFileProtocol: "Firebase no responde bien desde file://. Abre con un servidor local (http://localhost) o publica la web online.",
            firebaseTooLarge: "El dibujo es demasiado grande para Firebase. Prueba con menos detalle.",
            publishingFile: "Publicando… (file:// puede fallar)",
            publishError: "No se pudo exportar el dibujo",
            markAlt: "Huella",
            viewerLabel: "Huella ampliada",
            viewerClose: "Cerrar huella",
            viewerPrev: "Huella anterior",
            viewerNext: "Huella siguiente",
            viewerOpen: "Ver huella ampliada",
            viewerCount: "{n} / {total}",
            cameraDenied: "Sin acceso a la cámara. Puedes subir una imagen.",
            cameraCapture: "Capturar",
            cameraCancel: "Cancelar",
            cameraTitle: "Hazte una foto",
            imageLoadError: "No se pudo cargar la imagen"
        },
        toolsLabel: "Herramientas",
        contactBtn: "Contacto",
        contactTitle: "Contacto",
        contactIntro: "¿Tienes un proyecto en mente? Escríbeme y lo hacemos realidad.",
        contactName: "Tu nombre",
        contactEmail: "Tu email",
        contactMessage: "Tu mensaje",
        contactSend: "Enviar",
        cvBtn: "CV",
        cvTitle: "Currículum",
        cv: {
            skills: {
                title: "Habilidades",
                items: [
                    "Adobe Photoshop e Illustrator (avanzado)",
                    "Modelado, texturizado y render 3D (Blender, Cinema 4D)",
                    "SketchUp (nivel académico)",
                    "Diseño de marca e identidad visual",
                    "Presentaciones visuales y comunicación",
                    "Organización digital (Figma, Notion)",
                    "Originalidad · Proactividad · Creatividad"
                ]
            },
            specialization: {
                title: "Especialización e intereses",
                body: "Le interesa el <strong>diseño experimental</strong>, la <strong>creación de fanzines</strong> y el <strong>diseño emocional</strong> que busque <strong>cambio en la gente</strong>."
            },
            education: {
                title: "Educación",
                items: [
                    {
                        title: "Grado en Diseño Gráfico",
                        place: "Escuela Superior de Diseño de Madrid",
                        years: "2022—2026",
                        detail: "Formación en identidad visual, diseño digital, programación, fotografía y modelado 3D."
                    },
                    {
                        title: "Bachillerato de Artes",
                        place: "IES Lope de Vega",
                        years: "2020-2022"
                    },
                    {
                        title: "ESO",
                        place: "IES Joaquín Turina",
                        years: "2016-2020",
                        detail: "Participación en equipo de debate y Modelo de Naciones Unidas (finalista)."
                    },
                    {
                        title: "Educación primaria",
                        place: "La Salle San Rafael",
                        years: "2007-2016"
                    }
                ]
            },
            additional: {
                title: "Información adicional",
                items: [
                    "Nacionalidad española",
                    "Lugar de nacimiento: Madrid",
                    "Disponibilidad: mañanas, fines de semana y teletrabajo",
                    "Movilidad: excelente conexión en transporte público"
                ]
            },
            experience: {
                title: "Experiencia laboral",
                jobs: [
                    {
                        role: "Barra",
                        place: "OGHAM Fuencarral",
                        location: "Madrid",
                        period: "junio a principios de septiembre 2026",
                        bullets: [
                            "Creación de bebidas",
                            "Tira de cervezas",
                            "Limpieza del local",
                            "Creación de pizarras semanales llamativas para aprovechar su gusto gráfico en el trabajo"
                        ]
                    },
                    {
                        role: "Ayudante de cocina y sala",
                        place: "Don Panko Chamberí (alta cocina japonesa)",
                        location: "Madrid",
                        period: "2025",
                        bullets: [
                            "Apoyo en cocina durante servicio Omakase: preparación, mise en place y aprendizaje de técnicas japonesas",
                            "Asistencia en emplatados y coordinación con el chef",
                            "Servicio en sala como camarera: atención al cliente y gestión del ritmo de servicio",
                            "Limpieza, organización y apoyo general en un entorno de alta exigencia"
                        ]
                    },
                    {
                        role: "Catering",
                        place: "Grupo Ucalsa",
                        location: "Madrid",
                        period: "2023",
                        bullets: [
                            "Apoyo en eventos y servicios de catering",
                            "Montaje, preparación y recogida de espacios",
                            "Atención al cliente en entornos dinámicos"
                        ]
                    },
                    {
                        role: "Cuidado de menores",
                        place: "",
                        location: "Madrid",
                        period: "2020-2025",
                        bullets: [
                            "Cuidado ocasional de niños y apoyo en tareas domésticas",
                            "Desarrollo de habilidades de responsabilidad, comunicación y organización"
                        ]
                    }
                ]
            },
            languages: {
                title: "Idiomas",
                items: [
                    "Español: nativo",
                    "Inglés: avanzado"
                ]
            }
        },
        programsTitle: "Programas Controlados",
        qualitiesTitle: "Cualidades",
        sobreMiTitle: "Sobre Mí",
        sobreMiBody: "Hola!!! Soy Paula Pavía, aunque se me conoce como Peuve. Estudio Diseño Gráfico en la Escuela Superior de Diseño de Madrid y me muevo entre la comunicación visual, identidad y edición. Básicamente, me obsesiona cómo una idea puede convertirse en algo visual capaz de transmitir.\n\nTrabajo con un perfil bastante variado — identidad de marca, cartelería, fotografía, ilustración, 3D... me cuesta quedarme en un solo sitio. Domino el universo Adobe, y también me muevo bien con C4D, Blender, Figma o Procreate. Me gusta entrar en los proyectos desde los dos lados a la vez, el conceptual y el técnico, porque creo que ahí es donde pasan las cosas interesantes.\n\nSoy creativa, algo nerviosa y bastante perfeccionista. Me importa mucho el detalle, pero también el porqué detrás de las cosas. Si el diseño no tiene algo que decir, ¿para qué existe?",
        qualities: [
            "Dirección de arte",
            "Pensamiento conceptual",
            "Narrativa visual",
            "Atención al detalle",
            "Adaptabilidad de estilo",
            "Trabajo en equipo",
            "Comunicación visual",
            "Organización de proyectos"
        ],
        botRight: "disfruta.",
        themeGroupAria: "Tema de color",
        themeLightAria: "Blanco y negro",
        themeDarkAria: "Negativo",
        themeBlueAria: "Azul y blanco",
        introText1: ["Haz click en la pantalla", "otra vez", "otra vez!", "Ayúdame a bajar esto...", "Gracias...", "Gracias...", "Gracias...", ""],
        introText2: ["", "", "Oyes...", "otra vez!!!!", "", "", "", ""],
        closeZoom: "Cerrar imagen ampliada",
        menuAria: "Categorías del portfolio",
        pendingNote: "Imágenes próximamente."
    },
    en: {
        portfolioLabel: "Design Portfolio",
        langBtn: "ES",
        langBtnAria: "Switch to Spanish",
        categories: {
            sobre_mi: "About Me",
            protagonistas: "Highlights",
            editorial: "Editorial Design",
            identidad_marca: "Brand Identity",
            carteles: "Posters",
            fotografia: "Photography",
            diseno_web: "Web Design",
            edicion_imagen: "Image Editing",
            video: "Video",
            tipografia: "Typography",
            ilustracion: "Illustration",
            "3D": "3D",
            tatuaje: "Tattoo",
            huella: "Leave your mark"
        },
        huella: {
            title: "Leave your mark",
            intro: "Draw, add text or images, move or resize them, then publish. @ is optional.",
            draw: "Draw",
            text: "Text",
            image: "Image",
            photo: "Photo",
            clear: "Clear",
            undo: "Undo",
            publish: "Publish",
            brushSize: "Size",
            textSize: "Text size",
            imageSize: "Image size",
            handlePlaceholder: "@handle (optional)",
            handleLabel: "Instagram / handle (optional)",
            notePlaceholder: "Short note (optional)",
            noteLabel: "Note (optional)",
            textPlaceholder: "Type and press Enter…",
            wallTitle: "Signature wall",
            emptyWall: "No marks yet. Be the first.",
            firebaseHint: "Set up Firebase to enable the shared wall. Until then, marks stay on this device.",
            needDraw: "Draw something before publishing",
            rateLimit: "Wait {s}s before publishing again",
            publishing: "Publishing…",
            published: "Published!",
            publishedLocal: "Saved on this device",
            publishedLocalFallback: "Saved here (Firebase unavailable)",
            publishedLocalFallbackDetail: "Saved here — Firebase: {err}",
            firebasePermission: "Firebase denied permission (permission-denied). Publish the HUELLA.md rules in Firestore.",
            firebaseNetwork: "Firebase network error. Check your connection or open via http/https (not file://).",
            firebaseFileProtocol: "Firebase often fails on file://. Use a local server (http://localhost) or host the site online.",
            firebaseTooLarge: "Drawing is too large for Firebase. Try a simpler mark.",
            publishingFile: "Publishing… (file:// may fail)",
            publishError: "Could not export the drawing",
            markAlt: "Mark",
            viewerLabel: "Enlarged mark",
            viewerClose: "Close mark",
            viewerPrev: "Previous mark",
            viewerNext: "Next mark",
            viewerOpen: "View mark larger",
            viewerCount: "{n} / {total}",
            cameraDenied: "No camera access. You can still upload an image.",
            cameraCapture: "Capture",
            cameraCancel: "Cancel",
            cameraTitle: "Take a photo",
            imageLoadError: "Could not load the image"
        },
        toolsLabel: "Tools",
        contactBtn: "Contact",
        contactTitle: "Contact",
        contactIntro: "Got a project in mind? Write to me and let's make it happen.",
        contactName: "Your name",
        contactEmail: "Your email",
        contactMessage: "Your message",
        contactSend: "Send",
        cvBtn: "CV",
        cvTitle: "Résumé / CV",
        cv: {
            skills: {
                title: "Skills",
                items: [
                    "Adobe Photoshop and Illustrator (advanced)",
                    "3D modeling, texturing and rendering (Blender, Cinema 4D)",
                    "SketchUp (academic level)",
                    "Brand design and visual identity",
                    "Visual presentations and communication",
                    "Digital organization (Figma, Notion)",
                    "Originality · Proactivity · Creativity"
                ]
            },
            specialization: {
                title: "Specialization and interests",
                body: "Drawn to <strong>experimental design</strong>, <strong>fanzine-making</strong> and <strong>emotional design</strong> that seeks to <strong>change people</strong>."
            },
            education: {
                title: "Education",
                items: [
                    {
                        title: "Bachelor's Degree in Graphic Design",
                        place: "Escuela Superior de Diseño de Madrid",
                        years: "2022—2026",
                        detail: "Training in visual identity, digital design, programming, photography and 3D modeling."
                    },
                    {
                        title: "Arts Baccalaureate",
                        place: "IES Lope de Vega",
                        years: "2020-2022"
                    },
                    {
                        title: "Secondary Education (ESO)",
                        place: "IES Joaquín Turina",
                        years: "2016-2020",
                        detail: "Debate team and Model United Nations (finalist)."
                    },
                    {
                        title: "Primary Education",
                        place: "La Salle San Rafael",
                        years: "2007-2016"
                    }
                ]
            },
            additional: {
                title: "Additional information",
                items: [
                    "Spanish nationality",
                    "Place of birth: Madrid",
                    "Availability: mornings, weekends and remote work",
                    "Mobility: excellent public transport connections"
                ]
            },
            experience: {
                title: "Work experience",
                jobs: [
                    {
                        role: "Bar staff",
                        place: "OGHAM Fuencarral",
                        location: "Madrid",
                        period: "June to early September 2026",
                        bullets: [
                            "Beverage preparation",
                            "Beer taps",
                            "Venue cleaning",
                            "Creating eye-catching weekly chalkboard menus, bringing her graphic sensibility into the job"
                        ]
                    },
                    {
                        role: "Kitchen and front-of-house assistant",
                        place: "Don Panko Chamberí (fine Japanese cuisine)",
                        location: "Madrid",
                        period: "2025",
                        bullets: [
                            "Kitchen support during Omakase service: prep, mise en place and learning Japanese techniques",
                            "Assistance with plating and coordination with the chef",
                            "Front-of-house service as a waitress: customer care and managing service pace",
                            "Cleaning, organization and general support in a high-demand environment"
                        ]
                    },
                    {
                        role: "Catering",
                        place: "Grupo Ucalsa",
                        location: "Madrid",
                        period: "2023",
                        bullets: [
                            "Support at events and catering services",
                            "Setup, preparation and clear-down of spaces",
                            "Customer service in fast-paced environments"
                        ]
                    },
                    {
                        role: "Childcare",
                        place: "",
                        location: "Madrid",
                        period: "2020-2025",
                        bullets: [
                            "Occasional childcare and help with household tasks",
                            "Building responsibility, communication and organizational skills"
                        ]
                    }
                ]
            },
            languages: {
                title: "Languages",
                items: [
                    "Spanish: native",
                    "English: advanced"
                ]
            }
        },
        programsTitle: "Software",
        qualitiesTitle: "Strengths",
        sobreMiTitle: "About Me",
        sobreMiBody: "Hi!!! I'm Paula Pavía, also known as Peuve. I study Graphic Design at the Escuela Superior de Diseño de Madrid and work across visual communication, identity and editorial. I'm obsessed with how an idea can become something visual that actually communicates.\n\nMy practice is broad — brand identity, posters, photography, illustration, 3D… I rarely stay in one place. I'm fluent in the Adobe suite, and I also work with C4D, Blender, Figma and Procreate. I like entering projects from both sides at once, conceptual and technical, because that's where the interesting things happen.\n\nI'm creative, a bit restless and quite perfectionist. Detail matters to me — and so does the why behind things. If design has nothing to say, what's the point?",
        qualities: [
            "Art direction",
            "Conceptual thinking",
            "Visual storytelling",
            "Attention to detail",
            "Stylistic range",
            "Teamwork",
            "Visual communication",
            "Project organization"
        ],
        botRight: "enjoy.",
        themeGroupAria: "Color theme",
        themeLightAria: "Black and white",
        themeDarkAria: "Inverted",
        themeBlueAria: "Blue and white",
        introText1: ["Click the screen", "again", "again!", "Help me bring this down...", "Thanks...", "Thanks...", "Thanks...", ""],
        introText2: ["", "", "Hey...", "again!!!!", "", "", "", ""],
        closeZoom: "Close enlarged image",
        menuAria: "Portfolio categories",
        pendingNote: "Images coming soon."
    }
};

/* Project copy lives in peuve-projects.js */
