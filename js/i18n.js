/* UI strings + language helpers for PEUVE portfolio */
window.PEUVE_I18N = {
    es: {
        portfolioLabel: "Portfolio de diseño",
        langBtn: "EN",
        langBtnAria: "Cambiar a inglés",
        categories: {
            sobre_mi: "Sobre Mí",
            carteles: "Cartelería",
            fotografia: "Fotografía",
            ilustracion: "Ilustración",
            ilustracion_tipografia: "Tipografía",
            edicion_imagen: "Edición de Imagen",
            diseno_web: "Diseño Web",
            editorial: "Diseño Editorial",
            "3D": "3D",
            identidad_marca: "Identidad de Marca",
            video: "Vídeo",
            tatuaje: "Tatuaje"
        },
        toolsLabel: "Herramientas",
        contactBtn: "Contacto",
        contactTitle: "Contacto",
        contactIntro: "¿Tienes un proyecto en mente? Escríbeme y lo hacemos realidad.",
        contactName: "Tu nombre",
        contactEmail: "Tu email",
        contactMessage: "Tu mensaje",
        contactSend: "Enviar",
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
            carteles: "Posters",
            fotografia: "Photography",
            ilustracion: "Illustration",
            ilustracion_tipografia: "Typography",
            edicion_imagen: "Image Editing",
            diseno_web: "Web Design",
            editorial: "Editorial Design",
            "3D": "3D",
            identidad_marca: "Brand Identity",
            video: "Video",
            tatuaje: "Tattoo"
        },
        toolsLabel: "Tools",
        contactBtn: "Contact",
        contactTitle: "Contact",
        contactIntro: "Got a project in mind? Write to me and let's make it happen.",
        contactName: "Your name",
        contactEmail: "Your email",
        contactMessage: "Your message",
        contactSend: "Send",
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
        introText1: ["Click the screen", "again", "again!", "Help me bring this down...", "Thanks...", "Thanks...", "Thanks...", ""],
        introText2: ["", "", "Hey...", "again!!!!", "", "", "", ""],
        closeZoom: "Close enlarged image",
        menuAria: "Portfolio categories",
        pendingNote: "Images coming soon."
    }
};

/* Project copy overrides keyed by carpeta — used by language toggle */
window.PEUVE_PROJECTS = {
    nubi: {
        titulo: { es: "Nubi", en: "Nubi" },
        descripcion: {
            es: "Proyecto de clase nacido de la colaboración entre Ilustración y Programación. Quería algo pequeño pero con encanto, así que diseñé un mundo pixel art en pasteles y vibes oníricas. La historia sigue a Nubi, la Guardiana de los Sueños, que se queda dormida en el trabajo: la gente empieza a tener pesadillas y el mundo onírico se desordena. Tu misión es ayudarla a arreglar el lío encontrando y emparejando los sueños perdidos en un juego tipo memory. Ilustré personajes, iconos y entornos en pixel art, con paletas suaves y atmósferas mágicas: jugable, dulce y un poco nostálgico.",
            en: "A class project from a collaboration between Illustration and Programming. I wanted something small but charming, so I designed a cute pixel-art world full of pastel colors and dreamy vibes. The story follows Nubi, the Dream Keeper, who accidentally falls asleep on the job — people start having nightmares and the dream world gets mixed up. Your mission is to help her fix the mess by matching lost dreams in a memory-style game. Playful, sweet and a bit nostalgic."
        }
    },
    "6Napse": {
        titulo: { es: "6NAPSE — Juego ilustrado 8bit", en: "6NAPSE — 8-bit story game" },
        descripcion: {
            es: "Videojuego narrativo y educativo sobre empatía, comunicación emocional y relaciones interpersonales, en estética pixel y modo historia con decisiones. El jugador conversa con seis personajes, cada uno con inseguridades y sensibilidades distintas, y debe elegir respuestas respetuosas para avanzar. La estética retro de terminal y el pixel art refuerzan la idea de 6NAPSE como conexión emocional entre sistemas. Juego: https://paulapeuve.github.io/6NAPSE/",
            en: "A narrative educational pixel game about empathy, emotional communication and relationships, built as a story mode with choices. The player talks with six characters — each with different insecurities — and must choose respectful responses to progress. The retro terminal look and pixel art reinforce 6NAPSE as an emotional connection between systems. Play: https://paulapeuve.github.io/6NAPSE/"
        }
    },
    lego: {
        titulo: { es: "LEGO", en: "LEGO" },
        descripcion: {
            es: "Libro en el que represento poesías sobre el amor mediante construcciones LEGO e ilustración. Un proyecto editorial que une escritura, juguete y dibujo para hablar del amor desde lo modular y lo construido a mano.",
            en: "A book where I represent love poems through LEGO constructions and illustration — writing, play and drawing talking about love through modular, handmade forms."
        }
    },
    "cata la lata": {
        titulo: { es: "Cata la Lata", en: "Cata la Lata" },
        descripcion: {
            es: "Propuesta para el concurso anual de diseño de latas de ANFACO. En lugar de seguir la estética seria del packaging alimentario, fui a lo contrario: algo jugoso, colorido y un poco infantil en el mejor sentido. Una identidad divertida y energética que da personalidad a cada lata, sin perder claridad.",
            en: "Submission for the annual ANFACO seafood-can design competition. Instead of serious food packaging, I went playful, colorful and a bit childish in the best way — a fun identity that gives each can personality without losing clarity."
        }
    },
    galaktype: {
        titulo: { es: "GALAKTYPE", en: "GALAKTYPE" },
        descripcion: {
            es: "Tipografía modular basada en retícula, exploración personal del universo Star Wars. Partí de la estructura de la Estrella de la Muerte como retícula y construí un alfabeto futurista y familiar: homenaje, análisis formal y experimentación.",
            en: "A grid-based typeface exploring the Star Wars universe. Built from the Death Star’s structure as the initial grid — futuristic and familiar, part homage, part formal analysis, part playful experimentation."
        }
    },
    person4: {
        titulo: { es: "PERSON4", en: "PERSON4" },
        descripcion: {
            es: "Tipografía experimental ilustrada y variable: cada tecla activa un elemento gráfico para crear caras al escribir. Cruza tipografía, ilustración y sistemas generativos. https://person4.framer.website",
            en: "Illustrated variable experimental typeface: each key triggers a graphic element to build faces while typing. Type, illustration and generative systems. https://person4.framer.website"
        }
    },
    fanzine1_LaMirada: {
        titulo: { es: "La Mirada", en: "The Gaze" },
        descripcion: {
            es: "Fanzine para Sistemas de Reproducción sobre la mirada: imágenes propias editadas y reflexiones sobre cómo nos vemos y cómo nos ven. Gracias a @_liraaa711, @saraavvs, @laestanqueradevnt y a todas las personas que colaboraron.",
            en: "Fanzine for Reproduction Systems about the gaze: carefully edited personal images and reflections on how we see ourselves and how others see us. Thanks to @_liraaa711, @saraavvs, @laestanqueradevnt and everyone who collaborated."
        }
    },
    fanzine2_LaPerdidaDeUnoMismo: {
        titulo: { es: "La Pérdida de Uno Mismo", en: "The Loss of Oneself" },
        descripcion: {
            es: "Pieza experimental sobre disociación e identidad: una caja como maletín clínico con fanzine, cartel, cuaderno, carnés y CDs. Collage, fotomontaje y poesía para hacer sentir la fragmentación, no solo explicarla.",
            en: "Experimental piece about dissociation and identity: a clinical-briefcase box with fanzine, poster, notebook, ID cards and CDs. Collage, photomontage and poetry meant to make fragmentation felt, not only explained."
        }
    },
    cocina: {
        titulo: { es: "Sentimiento y Sabor", en: "Feeling & Flavor" },
        descripcion: {
            es: "Colección editorial ilustrada de libros de gastronomía. Desarrollé el volumen de España; Japón y Perú quedan como conceptos. Ilustración, relato y maquetación limpia para capturar la personalidad de cada chef.",
            en: "Illustrated editorial collection of gastronomy books. Spain volume fully developed; Japan and Peru as concepts. Illustration, storytelling and clean layout to capture each chef’s personality."
        }
    },
    ciudades_invisibles: {
        titulo: { es: "Ciudades invisibles", en: "Invisible Cities" },
        descripcion: {
            es: "Fanzine artesanal de Eufemia (Calvino) con cosido japonés: estampación, transfer, collage y serigrafía. Un proyecto manual sobre atmósfera y narrativa impresa.",
            en: "Handmade Eufemia (Calvino) fanzine with Japanese binding: stamping, transfer, collage and screen printing — hands-on work about print atmosphere and narrative."
        }
    },
    canal: {
        titulo: { es: "CANAL", en: "CANAL" },
        descripcion: {
            es: "Rediseño de Teatros del Canal para un público más joven: marca cercana, informal y expresiva, con color, isotipos emocionales e imágenes indexadas. Todas las fotos las hice yo, con amigos y modelos.",
            en: "Teatros del Canal redesign for a younger audience: close, informal, expressive brand with color, emotional marks and indexed images. All photos shot by me with friends and models."
        }
    },
    bit: {
        titulo: { es: "BIT", en: "BIT" },
        descripcion: {
            es: "Identidad para un festival de videojuegos retro. Edición Street Fighter: maximalismo, tipografía contundente y tratamiento ASCII en carteles, merch y aplicaciones de evento.",
            en: "Identity for a retro video-game festival. Street Fighter edition: maximalism, bold type and ASCII treatment across posters, merch and event applications."
        }
    },
    cesida: {
        titulo: { es: "CESIDA", en: "CESIDA" },
        descripcion: {
            es: "Rediseño de identidad para CESIDA: marca más empática y humana, basada en caras, lazos y comunidad, para combatir el estigma del VIH.",
            en: "CESIDA identity redesign: a more empathetic, human brand built from faces, ribbons and community to fight HIV stigma."
        }
    },
    discapacidad: {
        titulo: { es: "Discapacidad", en: "Disability" },
        descripcion: {
            es: "Carteles para el concurso Fundación DFA: visibilizar la diversidad funcional con empatía, color y mensajes directos.",
            en: "Posters for the Fundación DFA contest: making functional diversity visible with empathy, color and direct messages."
        }
    },
    jornadas: {
        titulo: { es: "Jornadas", en: "AI Conference Posters" },
        descripcion: {
            es: "Carteles de collage para las jornadas de IA de la universidad: lo clásico y lo moderno como interrupción de la IA en la sociedad.",
            en: "Collage posters for the university AI conference: classic and modern as AI interrupting society."
        }
    },
    "don pollo": {
        titulo: { es: "Don Pollo", en: "Don Pollo" },
        descripcion: {
            es: "Cartel para el documental Don Pollo, hecho por Kappah y estrenado en los Cines Callao.",
            en: "Poster for the Don Pollo documentary by Kappah, premiered at Cines Callao."
        }
    },
    claudia: {
        titulo: { es: "Claudia", en: "Claudia" },
        descripcion: {
            es: "Proyecto personal de retrato y edición: capturar la esencia más allá de lo literal.",
            en: "Personal portrait and editing project: capturing essence beyond literal representation."
        }
    },
    infografia: {
        titulo: { es: "Infografía E-waste + IA", en: "E-waste + AI Infographic" },
        descripcion: {
            es: "Infografía en formato Berlín con Ana Maldonado sobre e-waste e IA. Datos convertidos en avatares y figuras clasificatorias.",
            en: "Berlin-format infographic with Ana Maldonado on e-waste and AI — data turned into avatars and classificatory figures."
        }
    },
    fotos_encarna: {
        titulo: { es: "Fotos Encarna", en: "Encarna Photos" },
        descripcion: {
            es: "Serie fotográfica en Vinateros: retratos de gente de la calle, mirada cercana y documental al barrio.",
            en: "Photo series in Vinateros: street portraits of local people, a close documentary look at the neighborhood."
        }
    },
    pv_pegas: {
        titulo: { es: "PV PEGAS", en: "PV PEGAS" },
        descripcion: {
            es: "Proyecto de una pegatina propia y su difusión por Madrid. (Imágenes próximamente.)",
            en: "A project around my sticker and its spread across Madrid. (Images coming soon.)"
        }
    },
    poster_rei: {
        titulo: { es: "Poster REI", en: "REI Poster" },
        descripcion: {
            es: "Estampación para camiseta, acompañada de fotos propias. (Imágenes próximamente.)",
            en: "T-shirt stamping project with my own photos. (Images coming soon.)"
        }
    }
};
