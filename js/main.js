document.addEventListener("DOMContentLoaded", function () {


    // ── DATOS DE LA GALERÍA ──────────────────────────────────────────────────
    const galleries = {
        fotografia: [
            {
                carpeta: "conciertos",
                portada: "foto (7).webp",
                titulo: "Conciertos",
                descripcion: "Fotografía de música en vivo.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["foto (3).webp", "foto (6).webp", "foto (7).webp", "foto (8).webp", "foto (10).webp", "foto (11).webp", "foto (14).webp"]
            },
            {
                carpeta: "cianotipias",
                portada: "final1ciano.webp",
                titulo: "Cianotipias",
                descripcion: "Serie de retratos en cianotipia que reinterpreta la sensibilidad de Anna Atkins desde el rostro humano. Las copias funcionan como un pequeño herbario emocional, donde el azul de Prusia, el semitono y las variaciones del proceso químico intensifican gestos de felicidad, seriedad, tristeza y humor.",
                herramientas: ["Técnicas analógicas"],
                imagenes: ["final1ciano.webp", "final2ciano.webp", "final3ciano.webp", "final4ciano.webp", "final5ciano.webp", "final6ciano.webp"]
            },
            {
                carpeta: "gran via_clase",
                portada: "GRANVIA_PORTADA.webp",
                titulo: "Gran Vía",
                descripcion: "Proyecto fotográfico urbano sobre la Gran Vía.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["GRANVIA_PORTADA.webp", "GRANVIA_Edit_1.webp", "GRANVIA_Edit_13.webp", "GRANVIA_Edit_18.webp", "GRANVIA_Edit_21.webp", "GRANVIA_Edit_24.webp", "GRANVIA_Edit_27.webp", "GRANVIA_Edit_29.webp", "GRANVIA_Edit_30.webp", "GRANVIA_Edit_31.webp", "GRANVIA_Edit_38.webp", "GRANVIA_Edit_40.webp", "GRANVIA_Edit_42.webp"]
            },
            {
                carpeta: "teatros canal",
                portada: "TODOS_indexado_COLOR.webp",
                titulo: "Teatros Canal",
                descripcion: "Cobertura fotográfica en los Teatros Canal.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["TODOS_indexado_COLOR.webp", "AZULEJA_color_llora.webp", "DESI_indexado_EJEJEJEJE.webp", "DRAMA_indexado_COLOR.webp", "FLAUTA_indexado_COLOR.webp", "gemelas_COLOR.webp", "HENAR_indexado_COLOR.webp", "PEUVE_indexado_COLOR.webp", "ROBERTA_indexado_COLOR.webp"]
            },
            {
                carpeta: "Trade Dj",
                portada: "ESTUDIO_Edit_2_17.webp",
                titulo: "Trade DJ",
                descripcion: "Sesión fotográfica y edición para Trade DJ.",
                herramientas: ["Photoshop", "Lightroom"],
                imagenes: [
                    "ESTUDIO_Edit_2_10.webp", "ESTUDIO_Edit_2_11.webp", "ESTUDIO_Edit_2_12.webp",
                    "ESTUDIO_Edit_2_13.webp", "ESTUDIO_Edit_2_17.webp", "ESTUDIO_Edit_2_18.webp",
                    "ESTUDIO_Edit_2_19.webp", "ESTUDIO_Edit_2_20.webp", "ESTUDIO_Edit_2_21.webp",
                    "ESTUDIO_Edit_2_22.webp", "ESTUDIO_Edit_2_23.webp", "ESTUDIO_Edit_2_24.webp",
                    "ESTUDIO_Edit_2_25.webp", "ESTUDIO_Edit_2_26.webp"
                ]
            },
            {
                carpeta: "dia a dia",
                portada: "foto (2).webp",
                titulo: "Día a Día",
                descripcion: "Fotografía cotidiana y documental.",
                herramientas: ["Lightroom"],
                imagenes: ["foto (1).webp", "foto (2).webp", "foto (22).webp", "foto (23).webp", "foto (24).webp"]
            },
            {
                carpeta: "diego",
                portada: "2026PabloESTUDIO_IMG_1728.webp",
                titulo: "Diego",
                descripcion: "Retrato en clave baja de Diego con una estética indie y rock alternativo, inspirada en portadas de discos de finales de los 90. La serie trabaja sombras dominantes, contraste fuerte y luz direccional para construir una atmósfera introspectiva, melancólica y emocional.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["2026PabloESTUDIO_IMG_1720.webp", "2026PabloESTUDIO_IMG_1721.webp", "2026PabloESTUDIO_IMG_1728.webp", "2026PabloESTUDIO_IMG_9846.webp", "2026PabloESTUDIO_IMG_9848.webp", "2026PabloESTUDIO_IMG_9850.webp"]
            },
            {
                carpeta: "fiesta",
                portada: "foto (9).webp",
                titulo: "Fiesta",
                descripcion: "Fotografía de ambiente y eventos.",
                herramientas: ["Lightroom"],
                imagenes: ["foto (9).webp", "foto (12).webp", "foto (13).webp", "foto (21).webp", "TARRIOEDIT.webp", "Bodegon_Edit_18.webp", "Bodegon_Edit_31.webp", "2026PabloESTUDIO_DSCN8180.webp", "CasaLuna_2026PabloESTUDIO_DSCN816501.webp"]
            },
            {
                carpeta: "retratos clase",
                portada: "ESTUDIO_Edit_2_14.webp",
                titulo: "Retratos de Clase",
                descripcion: "Retratos en clave alta realizados en estudio desde una mirada divertida y espontánea. La serie toma referencias de portadas de pop adolescente, discos de cambio de etapa y estética de clase de instituto para construir imágenes luminosas, expresivas y cercanas.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["ESTUDIO_Edit_2_13.webp", "ESTUDIO_Edit_2_14.webp", "ESTUDIO_Edit_2_15.webp", "ESTUDIO_Edit_2_17.webp", "ESTUDIO_Edit_2_18.webp", "ESTUDIO_Edit_2_20.webp", "ESTUDIO_Edit_2_21.webp"]
            },
            {
                carpeta: "sevilla",
                portada: "foto (4).webp",
                titulo: "Sevilla",
                descripcion: "Fotografía de viaje y ciudad.",
                herramientas: ["Lightroom"],
                imagenes: ["foto (4).webp", "foto (5).webp", "foto (18).webp", "foto (19).webp", "foto (20).webp"]
            },
            {
                carpeta: "vinateros 1",
                portada: "_MG_9781.webp",
                titulo: "Vinateros I",
                descripcion: "Sesión fotográfica en Vinateros.",
                herramientas: ["Lightroom"],
                imagenes: ["_MG_9781.webp", "_MG_9784.webp", "_MG_9787.webp", "_MG_9788.webp", "_MG_9789.webp", "_MG_9790.webp", "_MG_9794.webp", "_MG_9795.webp", "_MG_9796.webp", "_MG_9797.webp", "_MG_9802.webp", "_MG_9803.webp", "_MG_9836.webp", "_MG_9843.webp", "_MG_9845.webp", "_MG_9848.webp", "_MG_9849.webp", "_MG_9850.webp", "_MG_9856.webp", "_MG_9857.webp"]
            },
            {
                carpeta: "fotos_encarna",
                portada: "",
                pendiente: true,
                titulo: "Fotos Encarna",
                descripcion: "Serie fotográfica hecha en el barrio de Vinateros: retratos de gente de la calle, desde una mirada cercana y documental al vecindario.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: []
            },
            {
                carpeta: "vinateros 2",
                portada: "Vinateros2_1.webp",
                titulo: "Vinateros II",
                descripcion: "Sesión fotográfica en Vinateros.",
                herramientas: ["Lightroom"],
                imagenes: ["Vinateros2_1.webp", "Vinateros2_2.webp", "Vinateros2_3.webp", "Vinateros2_4.webp", "Vinateros2_5.webp", "Vinateros2_6.webp", "Vinateros2_7.webp", "Vinateros2_8.webp", "Vinateros2_9.webp", "Vinateros2_10.webp", "Vinateros2_11.webp", "Vinateros2_12.webp", "Vinateros2_13.webp", "Vinateros2_14.webp"]
            },
            {
                carpeta: "Vinateros 3",
                portada: "ESTUDIO_Edit_2_01.webp",
                titulo: "Vinateros III",
                descripcion: "Sesión fotográfica en Vinateros.",
                herramientas: ["Lightroom", "Photoshop"],
                imagenes: ["ESTUDIO_Edit_2_01.webp", "ESTUDIO_Edit_2_02.webp", "ESTUDIO_Edit_2_03.webp", "ESTUDIO_Edit_2_04.webp", "ESTUDIO_Edit_2_06.webp", "ESTUDIO_Edit_2_08.webp", "ESTUDIO_Edit_2_09.webp", "ESTUDIO_Edit_2_30.webp", "ESTUDIO_Edit_2_33.webp", "ESTUDIO_Edit_2_42.webp", "ESTUDIO_Edit_2_43.webp", "ESTUDIO_Edit_2_44.webp", "ESTUDIO_Edit_2_45.webp", "ESTUDIO_Edit_2_46.webp", "ESTUDIO_Edit_2_47.webp", "ESTUDIO_Edit_2_49.webp", "ESTUDIO_Edit_2_50.webp"]
            },
            {
                carpeta: "TorneoLaura1",
                portada: "IMG_9602.webp",
                titulo: "Torneo Laura I",
                descripcion: "Cobertura fotográfica deportiva.",
                herramientas: ["Lightroom"],
                imagenes: ["IMG_9485.webp", "IMG_9506.webp", "IMG_9520.webp", "IMG_9521.webp", "IMG_9537.webp", "IMG_9542.webp", "IMG_9545.webp", "IMG_9555.webp", "IMG_9560.webp", "IMG_9592.webp", "IMG_9597.webp", "IMG_9602.webp", "IMG_9605.webp", "IMG_9607.webp", "IMG_9620.webp", "IMG_9622.webp", "IMG_9627.webp", "IMG_9647.webp", "IMG_9670.webp", "IMG_9676.webp", "IMG_9680.webp", "IMG_9697.webp", "IMG_9698.webp", "IMG_9703.webp", "IMG_9716.webp", "IMG_9722.webp", "IMG_9725.webp", "IMG_9735.webp", "IMG_9736.webp", "IMG_9750.webp", "IMG_9757.webp", "IMG_9763.webp", "IMG_9771.webp", "IMG_9775.webp"]
            },
            {
                carpeta: "TorneoLaura2",
                portada: "LauraTorneo_IMG_1167.webp",
                titulo: "Torneo Laura II",
                descripcion: "Cobertura fotográfica deportiva.",
                herramientas: ["Lightroom"],
                imagenes: ["LauraTorneo_IMG_1001.webp", "LauraTorneo_IMG_1004.webp", "LauraTorneo_IMG_1005.webp", "LauraTorneo_IMG_1007.webp", "LauraTorneo_IMG_1008.webp", "LauraTorneo_IMG_1009.webp", "LauraTorneo_IMG_1010.webp", "LauraTorneo_IMG_1011.webp", "LauraTorneo_IMG_1014.webp", "LauraTorneo_IMG_1020.webp", "LauraTorneo_IMG_1023.webp", "LauraTorneo_IMG_1024.webp", "LauraTorneo_IMG_1027.webp", "LauraTorneo_IMG_1028.webp", "LauraTorneo_IMG_1030.webp", "LauraTorneo_IMG_1034.webp", "LauraTorneo_IMG_1035.webp", "LauraTorneo_IMG_1036.webp", "LauraTorneo_IMG_1037.webp", "LauraTorneo_IMG_1043.webp", "LauraTorneo_IMG_1044.webp", "LauraTorneo_IMG_1045.webp", "LauraTorneo_IMG_1046.webp", "LauraTorneo_IMG_1047.webp", "LauraTorneo_IMG_1049.webp", "LauraTorneo_IMG_1051.webp", "LauraTorneo_IMG_1053.webp", "LauraTorneo_IMG_1054.webp", "LauraTorneo_IMG_1055.webp", "LauraTorneo_IMG_1058.webp", "LauraTorneo_IMG_1059.webp", "LauraTorneo_IMG_1060.webp", "LauraTorneo_IMG_1062.webp", "LauraTorneo_IMG_1066.webp", "LauraTorneo_IMG_1072.webp", "LauraTorneo_IMG_1073.webp", "LauraTorneo_IMG_1074.webp", "LauraTorneo_IMG_1077.webp", "LauraTorneo_IMG_1084.webp", "LauraTorneo_IMG_1091.webp", "LauraTorneo_IMG_1094.webp", "LauraTorneo_IMG_1098.webp", "LauraTorneo_IMG_1099.webp", "LauraTorneo_IMG_1100.webp", "LauraTorneo_IMG_1102.webp", "LauraTorneo_IMG_1103.webp", "LauraTorneo_IMG_1109.webp", "LauraTorneo_IMG_1111.webp", "LauraTorneo_IMG_1118.webp", "LauraTorneo_IMG_1122.webp", "LauraTorneo_IMG_1125.webp", "LauraTorneo_IMG_1131.webp", "LauraTorneo_IMG_1135.webp", "LauraTorneo_IMG_1138.webp", "LauraTorneo_IMG_1140.webp", "LauraTorneo_IMG_1141.webp", "LauraTorneo_IMG_1142.webp", "LauraTorneo_IMG_1150.webp", "LauraTorneo_IMG_1152.webp", "LauraTorneo_IMG_1155.webp", "LauraTorneo_IMG_1160.webp", "LauraTorneo_IMG_1162.webp", "LauraTorneo_IMG_1165.webp", "LauraTorneo_IMG_1167.webp", "LauraTorneo_IMG_1172.webp", "LauraTorneo_IMG_1178.webp", "LauraTorneo_IMG_1180.webp", "LauraTorneo_IMG_1183.webp", "LauraTorneo_IMG_1184.webp", "LauraTorneo_IMG_1187.webp", "LauraTorneo_IMG_1188.webp", "LauraTorneo_IMG_1192.webp", "LauraTorneo_IMG_1196.webp", "LauraTorneo_IMG_1197.webp", "LauraTorneo_IMG_1201.webp", "LauraTorneo_IMG_1202.webp", "LauraTorneo_IMG_1204.webp", "LauraTorneo_IMG_1205.webp", "LauraTorneo_IMG_1206.webp", "LauraTorneo_IMG_1212.webp", "LauraTorneo_IMG_1215.webp", "LauraTorneo_IMG_1218.webp", "LauraTorneo_IMG_1219.webp", "LauraTorneo_IMG_1220.webp", "LauraTorneo_IMG_1221.webp", "LauraTorneo_IMG_1224.webp", "LauraTorneo_IMG_1226.webp", "LauraTorneo_IMG_1227.webp", "LauraTorneo_IMG_1231.webp", "LauraTorneo_IMG_1234.webp", "LauraTorneo_IMG_1237.webp", "LauraTorneo_IMG_1241.webp", "LauraTorneo_IMG_1244.webp", "LauraTorneo_IMG_1257.webp", "LauraTorneo_IMG_1259.webp", "LauraTorneo_IMG_1263.webp", "LauraTorneo_IMG_1264.webp", "LauraTorneo_IMG_1265.webp", "LauraTorneo_IMG_1268.webp", "LauraTorneo_IMG_1271.webp", "LauraTorneo_IMG_1274.webp", "LauraTorneo_IMG_1275.webp", "LauraTorneo_IMG_1277.webp", "LauraTorneo_IMG_1281.webp", "LauraTorneo_IMG_1282.webp", "LauraTorneo_IMG_1283.webp", "LauraTorneo_IMG_1284.webp", "LauraTorneo_IMG_1285.webp", "LauraTorneo_IMG_1288.webp", "LauraTorneo_IMG_1292.webp", "LauraTorneo_IMG_1293.webp", "LauraTorneo_IMG_1295.webp", "LauraTorneo_IMG_1298.webp", "LauraTorneo_IMG_1301.webp", "LauraTorneo_IMG_1304.webp", "LauraTorneo_IMG_1307.webp", "LauraTorneo_IMG_1309.webp", "LauraTorneo_IMG_1311.webp", "LauraTorneo_IMG_1314.webp", "LauraTorneo_IMG_1317.webp", "LauraTorneo_IMG_1322.webp", "LauraTorneo_IMG_1326.webp", "LauraTorneo_IMG_1331.webp", "LauraTorneo_IMG_1333.webp", "LauraTorneo_IMG_1334.webp", "LauraTorneo_IMG_1336.webp", "LauraTorneo_IMG_1341.webp", "LauraTorneo_IMG_1342.webp", "LauraTorneo_IMG_1343.webp", "LauraTorneo_IMG_1345.webp", "LauraTorneo_IMG_1346.webp"]
            }
        ],

        carteles: [
            {
                carpeta: "nodo",
                portada: "Free_Poster_Mockup.webp",
                titulo: "NODO",
                descripcion: "Identidad para un colectivo anónimo y multidisciplinar que cruza música, tatuaje, graffiti, diseño y arte desde un tono crítico y activista. El sistema visual parte del nodo como punto de conexión invisible: eventos secretos, códigos, coordenadas y piezas gráficas que convierten la comunicación en exploración.",
                herramientas: ["Illustrator", "Photoshop"],
                imagenes: ["carteles (1).webp", "carteles (2).webp", "carteles (3).webp", "carteles (4).webp", "Free_Poster_Mockup.webp", "Free_Poster_Mockup2.webp"]
            },
            {
                carpeta: "teatros_canal",
                portada: "carteles (9).webp",
                titulo: "Teatros Canal",
                descripcion: "Cartelería para los Teatros Canal.",
                herramientas: ["Illustrator", "InDesign"],
                imagenes: ["carteles (5).webp", "carteles (6).webp", "carteles (7).webp", "carteles (8).webp", "carteles (9).webp", "carteles (10).webp"]
            },
            {
                carpeta: "cata la lata",
                portada: "TODO_1.webp",
                titulo: "Cata la Lata",
                descripcion: "Cata la Lata was my submission for the annual ANFACO seafood-can design competition. Instead of following the usual “serious food packaging” aesthetic, I wanted to do the complete opposite — something playful, colorful, and a bit childish in the best way possible. I created a visual identity that feels fun and energetic, using bright colors and simple illustrations to give the cans a personality of their own. My goal was to break away from the traditional, conservative look that most canned-food brands have, and show that packaging can be lighthearted and expressive without losing clarity. The whole project was about exploring how design can change the way we perceive everyday products. By giving the cans a cute, friendly vibe, I wanted to make them feel approachable and memorable — something you’d pick up not just for what’s inside, but because the outside makes you smile.",
                herramientas: ["Illustrator"],
                imagenes: ["TODO_1.webp", "mock_atun1.webp", "mock_mejillones1.webp", "mock_sardinillas1.webp"]
            },
            {
                carpeta: "don pollo",
                portada: "DON POLLO.webp",
                titulo: "Don Pollo",
                descripcion: "Cartel para el documental Don Pollo, hecho por Kappah y estrenado en los Cines Callao.",
                herramientas: ["Illustrator"],
                imagenes: ["DON POLLO.webp"]
            },
            {
                carpeta: "ExperimentacionTipografica",
                portada: "Portada.webp",
                titulo: "Experimentación Tipográfica",
                descripcion: "Serie de ejercicios de experimentación tipográfica.",
                herramientas: ["Illustrator", "Photoshop"],
                imagenes: ["Portada.webp", "baskerville_lilith.webp", "futura_akira_Mesa de trabajo 1.webp", "helvetica_clasificacion.webp", "lilith_Mesa de trabajo 1.webp", "Minion_ergo_Mesa de trabajo 1.webp", "rockwell_Mesa de trabajo 1.webp", "tipo_akira_Mesa de trabajo 1.webp", "tipo_evaREI_Mesa de trabajo 1.webp", "tipo_lain_Mesa de trabajo 1.webp"]
            },
            {
                carpeta: "discapacidad",
                portada: "Mockup discapacidad.webp",
                titulo: "Discapacidad",
                descripcion: "Carteles para el concurso de la Fundación DFA. Serie que visibiliza la diversidad funcional desde una perspectiva inclusiva y respetuosa. El proyecto busca romper estereotipos y generar empatía mediante el uso de color, composición y mensajes directos: un trabajo con intención social, donde el diseño se convierte en vehículo de sensibilización.",
                herramientas: ["Illustrator", "Photoshop"],
                imagenes: ["Mockup discapacidad.webp"]
            },
            {
                carpeta: "poster_rei",
                portada: "",
                pendiente: true,
                titulo: "Poster REI",
                descripcion: "Proyecto de estampación para una camiseta, acompañado de fotos que realicé. (Imágenes próximamente.)",
                herramientas: ["Estampación", "Photoshop"],
                imagenes: []
            },
            {
                carpeta: "disco_diego",
                portada: "DEIGO1.webp",
                titulo: "Disco Diego",
                descripcion: "Diseño de portada de disco.",
                herramientas: ["Illustrator", "Photoshop"],
                imagenes: ["DEIGO1.webp", "DEIGO2.webp"]
            },
            {
                carpeta: "clase",
                portada: "Free_Book_Mockup_7.webp",
                titulo: "Trabajos de Clase",
                descripcion: "Trabajos de diseño gráfico realizados en clase.",
                herramientas: ["Illustrator", "InDesign"],
                imagenes: ["Free_Book_Mockup_7.webp"]
            }
        ],

        ilustracion: [
            {
                carpeta: "carta",
                portada: "ilustracion (8).webp",
                titulo: "Carta Pokémon",
                descripcion: "Ilustración inspirada en el universo Pokémon.",
                herramientas: ["Procreate", "Illustrator"],
                imagenes: ["ilustracion (8).webp"]
            },
            {
                carpeta: "nubi",
                portada: "assets/diseno_web/nubi/NUBI.mp4",
                titulo: "Nubi",
                descripcion: "Nubi is a class project that came out of a collaboration between Illustration and Programming class. I wanted to create something small but charming, so I ended up designing a cute pixel-art world full of pastel colors and dreamy vibes. The story follows Nubi, the Dream Keeper, a little guardian who accidentally falls asleep on the job. Because of that, people start having nightmares, and everything in the dream world gets mixed up. Your mission as the player is to help her fix the mess by finding and matching the lost dreams in a memory-style game. I illustrated all the characters, icons, and environments in pixel art, focusing on soft palettes and cozy, magical atmospheres. The whole project was a way for me to explore how illustration can shape the mood of a game, even when the mechanics are super simple. It’s playful, sweet, and a bit nostalgic — exactly the kind of game I would’ve loved as a kid.",
                herramientas: ["Procreate", "Illustrator", "Photoshop", "Visual Studio", "HTML", "CSS", "JS"],
                imagenes: ["dibujos_nubi.webp", "dibujos_nubi2.webp", "assets/diseno_web/nubi/NUBI.mp4"]
            },
            {
                carpeta: "infografia",
                portada: "ilustracion (4).webp",
                titulo: "Infografía E-waste + IA",
                descripcion: "This project was created for my illustration class, using a Berlin-format layout, and I worked on it with my classmate Ana Maldonado. We wanted to explore the impact of electronic waste, but instead of focusing only on the negative side, we also looked at how AI can actually help reduce e-waste and support recycling systems instead of just contributing to pollution. The idea was to take all the data we found and turn it into something visual and expressive. Instead of traditional charts, we created data avatars and classificatory figures that represent statistics as characters. It made the information feel more alive and easier to connect with — like the devices we throw away still have something to say.",
                herramientas: ["Illustrator", "InDesign"],
                imagenes: ["ilustracion (4).webp", "ilustracion (11).webp"]
            },
            {
                carpeta: "jornadas",
                portada: "ilustracion (5).webp",
                titulo: "Jornadas",
                descripcion: "Carteles divertidos hechos con ilustración mediante collage para representar la mezcla de lo clásico y lo moderno como interrupción de la IA en nuestra sociedad. Piezas creadas para las jornadas de IA de la universidad.",
                herramientas: ["Illustrator", "Collage"],
                imagenes: ["ilustracion (5).webp", "ilustracion (6).webp", "ilustracion (7).webp"]
            },
            {
                carpeta: "lego",
                portada: "ilustracion (1).webp",
                titulo: "LEGO",
                descripcion: "Libro en el que represento poesías sobre el amor mediante construcciones LEGO e ilustración. Un proyecto editorial que une escritura, juguete y dibujo para hablar del amor desde lo modular y lo construido a mano.",
                herramientas: ["Illustrator", "Procreate"],
                imagenes: ["ilustracion (1).webp", "ilustracion (2).webp", "ilustracion (9).webp", "ilustracion (10).webp"]
            },
            {
                carpeta: "libro",
                portada: "ilustracion (3).webp",
                titulo: "Libro",
                descripcion: "Ilustración para una publicación editorial planteada como una ruta por algunos de los mejores restaurantes del mundo. El proyecto organiza el viaje gastronómico a través de España, Japón y Perú, combinando una voz visual más expresiva con una estructura editorial limpia.",
                herramientas: ["Procreate"],
                imagenes: ["ilustracion (3).webp"]
            },
            {
                carpeta: "dibujo y otros",
                portada: "henar_scaner.webp",
                titulo: "Dibujo y Otros",
                descripcion: "Varios trabajos de dibujo e ilustración.",
                herramientas: ["Lápiz", "Procreate"],
                imagenes: ["henar_scaner.webp", "666.bikadimsum.666.ana (1).webp", "PAVIABRAVO,Paula_lápiz de color1.webp"]
            },
            {
                carpeta: "moda",
                portada: "claudia_ilustracion.webp",
                titulo: "Moda",
                descripcion: "Ilustración de moda.",
                herramientas: ["Procreate"],
                imagenes: ["claudia_ilustracion.webp"]
            },
            {
                carpeta: "pompi",
                portada: "portada_pompi.webp",
                titulo: "Pompi",
                descripcion: "Serie de ilustraciones.",
                herramientas: ["Procreate"],
                imagenes: ["portada_pompi.webp", "IMG_6364.webp", "IMG_6365.webp", "IMG_6367.webp", "IMG_6369.webp", "IMG_6371.webp"]
            }
        ],

        ilustracion_tipografia: [
            {
                carpeta: "galaktype",
                portada: "GALAKTYPE_Mesa de trabajo 1.webp",
                titulo: "GALAKTYPE",
                descripcion: "Galaktype is a grid-based typeface I designed as a personal exploration of the Star Wars universe. I wanted to capture the feeling of that world, not reproduce it. So instead of starting from the movies or the logos, I built the entire typeface using the Death Star’s structure as my initial grid. From there, I pulled inspiration from ships, panels, and the overall sci-fi aesthetic to shape the rest of the letters. The project became a mix of geometry, diagonals, and rhythm. I played with sharp angles, circular constructions, and mechanical forms to create something that feels futuristic and familiar, but still original. It’s basically my love letter to Star Wars, filtered through a more graphic and structural lens. For me, this typeface was an exercise in reinterpretation — taking an iconic visual universe and breaking it down into shapes, rules, and patterns that could live inside a completely new alphabet. It’s part homage, part formal analysis, and part playful experimentation with how far a grid can go.",
                herramientas: ["Illustrator", "FontLab"],
                imagenes: ["GALAKTYPE_Mesa de trabajo 1.webp", "GALAKTYPE-02.webp", "GALAKTYPE-03.webp", "GALAKTYPE-04.webp", "GALAKTYPE-05.webp", "GALAKTYPE-06.webp", "GALAKTYPE-07.webp"]
            },
            {
                carpeta: "person4",
                portada: "",
                pendiente: true,
                link: "https://person4.framer.website",
                titulo: "PERSON4",
                descripcion: "Tipografía experimental ilustrada y variable basada en un sistema modular de caracteres no alfanuméricos. Con minúsculas, mayúsculas y números, cada tecla activa un elemento gráfico (ojos, bocas, narices, pelo, accesorios…) para crear caras y personajes al escribir. Es variable: pesos y ejes cambian emoción, forma o proporción. Cruza tipografía, ilustración y sistemas generativos. Pruébala: https://person4.framer.website",
                herramientas: ["Illustrator", "FontLab", "Framer"],
                imagenes: []
            }
        ],

        "3D": [
            {
                carpeta: "camara",
                portada: "3d (3).webp",
                titulo: "Cámara",
                descripcion: "Modelado y render de cámara en Blender.",
                herramientas: ["Blender"],
                imagenes: ["3d (3).webp", "3d (4).webp", "3d (6).webp"]
            },
            {
                carpeta: "chupachups",
                portada: "3d (9).webp",
                titulo: "Chupa Chups",
                descripcion: "Modelado y render de producto Chupa Chups en Blender.",
                herramientas: ["Blender"],
                imagenes: ["3d (9).webp", "3d (10).webp", "3d (11).webp"]
            },
            {
                carpeta: "cartapokemon",
                portada: "3d (5).webp",
                titulo: "Carta Pokémon",
                descripcion: "Render 3D de carta Pokémon con materiales y iluminación.",
                herramientas: ["Blender"],
                imagenes: ["3d (5).webp"]
            },
            {
                carpeta: "trabajos de clase",
                portada: "3d (1).webp",
                titulo: "Trabajos de Clase",
                descripcion: "Ejercicios y proyectos de 3D realizados en clase.",
                herramientas: ["Blender"],
                imagenes: ["3d (1).webp", "3d (2).webp", "3d (7).webp", "3d (8).webp", "3d (12).webp", "3d (13).webp"]
            }
        ],

        editorial: [
            {
                carpeta: "fanzine1_LaMirada",
                portada: "editorial (10).webp",
                titulo: "La Mirada",
                descripcion: "Uno de los proyectos de los que más orgullosa estoy: mi fanzine para la asignatura de Sistemas de Reproducción. Trata uno de los temas que más me han obsesionado, la mirada. El librillo reúne imágenes propias editadas al detalle —con modelos y amigos— y reflexiones sobre la psicología y la simbología de cómo nos vemos a nosotros mismos y cómo nos ven los demás. Gracias especialmente a @_liraaa711 por protagonizar mi parte favorita del libro y por uno de los textos más bonitos que he recibido; a @saraavvs y @laestanqueradevnt por las fotos de portada, contraportada y packaging; y a todas las personas que han colaborado en este y otros proyectos.",
                herramientas: ["Técnicas de impresión", "Collage", "Serigrafía"],
                imagenes: ["editorial (10).webp", "editorial (11).webp", "editorial (12).webp", "editorial (13).webp", "editorial (14).webp", "editorial (15).webp"]
            },
            {
                carpeta: "fanzine2_LaPerdidaDeUnoMismo",
                portada: "VIDEO_ZINEv1.mp4",
                titulo: "La Pérdida de Uno Mismo",
                descripcion: "This project was originally created for a production class, where the only strict requirement was to deliver a box with its fanzine and poster. I turned it into a full experimental piece about dissociation, identity, and the feeling of slowly losing your sense of self. I designed the box to look like a psychiatrist’s clinical briefcase, the kind that holds patient files, notes, and fragments of different identities. Inside, I included the main fanzine, a poster, a small clinical notebook, four ID cards, and twelve CDs with songs, films, and bands/singers that emotionally connect to the theme. Everything inside feels like evidence of someone trying to understand who they are. The fanzine mixes collage, photomontage, poetry, and short texts. I wanted it to feel intimate and a bit unsettling, like reading someone’s private thoughts or flipping through a mind that’s splitting into pieces. My goal wasn’t just to explain dissociation, but to make the viewer feel it: the fragmentation, the distance, the confusion, and the quiet ache of not recognizing yourself.",
                herramientas: ["Photoshop", "Illustrator", "InDesign", "Encuadernación cosida manual"],
                imagenes: [
                    "VIDEO_ZINEv1.mp4",
                    "Brillo_contraste 1zine.webp",
                    "Color e intensidad 1zine.webp",
                    "Documento_2026-03-01_204253_1zine.webp",
                    "Documento_2026-03-01_204253_36zine.webp",
                    "Foto_2026-03-02_204405 copiazine.webp",
                    "Foto_2026-03-02_204405_1 copiazine.webp",
                    "Foto_2026-03-02_204405_2zine.webp"
                ]
            },
            {
                carpeta: "cocina",
                portada: "editorial (1).webp",
                titulo: "Sentimiento y Sabor",
                descripcion: "Best Restaurants is an illustrated editorial project where I created a fictional collection of gastronomy books. Each book focuses on a different country, and the idea was to highlight five standout restaurants through a mix of illustration, storytelling, and design. For now, I fully developed the Spain volume, and I planned two more — Japan and Peru — which remain as concepts. The book includes illustrations of each chef, their signature dishes, and their restaurants, along with short descriptions and one recipe from each place. I wanted the whole thing to feel cohesive and visually striking, so I built a system that mixes bold colors, expressive drawings, and a clean layout that ties everything together. For me, this project was a way to explore how illustration can elevate editorial design and make information feel more personal and engaging. Instead of just listing restaurants, I wanted to capture the personality behind each chef and the atmosphere of their cuisine. It’s a playful, colorful take on gastronomy — something between a guidebook, an art book, and a collection of stories.",
                herramientas: ["InDesign", "Procreate"],
                imagenes: ["editorial (1).webp", "editorial (2).webp", "editorial (3).webp", "editorial (4).webp", "editorial (5).webp", "editorial (6).webp", "editorial (7).webp"]
            },
            {
                carpeta: "maquetacion para clase",
                portada: "editorial (8).webp",
                titulo: "Maquetación para Clase",
                descripcion: "Proyectos de diseño editorial realizados en clase.",
                herramientas: ["InDesign"],
                imagenes: ["editorial (8).webp", "editorial (9).webp"]
            },
            {
                carpeta: "ciudades_invisibles",
                portada: "",
                pendiente: true,
                titulo: "Ciudades invisibles",
                descripcion: "Para la asignatura de estampación, cada estudiante recibió una ciudad de Las ciudades invisibles de Italo Calvino. A mí me tocó Eufemia: un fanzine artesanal con cosido japonés y cinco pliegos que cuentan visualmente la ciudad. Trabajé estampación, transfer, collage y serigrafía para capturar lo onírico y simbólico del texto. Un proyecto pequeño y muy manual sobre cómo las técnicas de impresión construyen atmósfera y narrativa.",
                herramientas: ["Photoshop", "Illustrator", "InDesign", "Estampación", "Cosido japonés"],
                imagenes: []
            }
        ],

        identidad_marca: [
            {
                carpeta: "bit",
                portada: "assets/video/BIT/Ident_01_PaulaPavia_BIT.mp4",
                titulo: "BIT",
                descripcion: "Identidad visual para un festival de competición de videojuegos retro, con cada edición centrada en un juego concreto. La edición parte de Street Fighter y combina estética maximalista, colores corporativos, tipografía contundente y tratamiento ASCII de imágenes para construir carteles, entradas, acreditaciones, pulseras, merch y aplicaciones de evento.",
                herramientas: ["Illustrator", "InDesign"],
                imagenes: [
                    "identidad (3).webp", "identidad (22).webp", "botellas_GENERALES.webp",
                    "CAMISETAS_BIT.webp", "CANTIMPLORA_2025.webp", "ENTRADAS_SEPARADOS.webp",
                    "HORARIO.webp", "MOCK_3POSTER.webp", "Mupimetro_Jugadores.webp",
                    "MUPI_mock.webp", "PULSERAS_total.webp", "TOTE_BIT.webp", "streetfight.webp",
                    "assets/video/BIT/Ident_01_PaulaPavia_BIT.mp4",
                    "assets/video/BIT/Ident_02_PaulaPavia_BIT.mp4",
                    "assets/video/BIT/Ident_03_PaulaPavia_BIT.mp4"
                ]
            },
            {
                carpeta: "canal",
                portada: "assets/video/CANAL/CANAL_Publi.mp4",
                titulo: "CANAL",
                descripcion: "Rediseño de identidad para Teatros del Canal orientado a atraer a un público más joven. La propuesta parte del teatro como espacio de transformación, conexión y expresión colectiva, y construye una marca flexible y contemporánea —cercana, informal, juvenil y llamativa— alejándose de la estética elegante del teatro tradicional. El sistema combina color, expresiones y movimiento: un logotipo diagonal inspirado en el edificio, isotipos emocionales, paleta naranja y azul vinculada al metro Canal, retícula flexible e imágenes indexadas de alta expresividad. Todas las imágenes del proyecto fueron realizadas por mí, con la colaboración de modelos y amigos.",
                herramientas: ["Illustrator", "InDesign", "After Effects"],
                imagenes: [
                    "identidad (1).webp", "identidad (2).webp", "identidad (18).webp",
                    "identidad (19).webp", "identidad (20).webp", "identidad (21).webp", "identidad (23).webp",
                    "1_canal.webp", "2_canal.webp", "3_canal.webp", "4_canal.webp", "5_canal.webp",
                    "6_canal.webp", "7_canal.webp", "8_canal.webp", "9_canal.webp",
                    "Azuleja_CanalOBRA.webp", "gemelas_mupi_v3.webp", "LaPaz_Cartel.webp",
                    "Mesa de trabajo 4.webp", "metro2.webp", "metro3.webp", "Metro_ROBERTA.webp",
                    "Ticket2.webp", "assets/video/CANAL/CANAL_Publi.mp4"
                ]
            },
            {
                carpeta: "cesida",
                portada: "identidad (17).webp",
                titulo: "CESIDA",
                descripcion: "Rediseño de identidad para CESIDA orientado a construir una marca más empática, cercana y humana. La propuesta convierte la organización en una suma de caras, lazos y voces: un sistema visual basado en inclusión, foco y comunidad, con submarcas, paleta de pares cromáticos, cartelería, papelería, merch, web responsive y piezas audiovisuales para combatir el estigma y desmontar mitos sobre el VIH.",
                herramientas: ["Illustrator", "InDesign"],
                imagenes: [
                    "identidad (4).webp", "identidad (5).webp", "identidad (6).webp", "identidad (7).webp",
                    "identidad (8).webp", "identidad (9).webp", "identidad (10).webp", "identidad (11).webp",
                    "identidad (12).webp", "identidad (13).webp", "identidad (14).webp", "identidad (15).webp",
                    "identidad (16).webp", "identidad (17).webp"
                ]
            },
            {
                carpeta: "MARIHUANA_rediseño",
                portada: "Sin título-2_Mesa de trabajo 1 copia.webp",
                titulo: "Rediseño Bronca Total",
                descripcion: "Rediseño de una tarjeta de visita para una tienda vinculada a tribus urbanas como el heavy, punk, rock y siniestro. El proyecto parte de una investigación sobre estereotipos, lectura simbólica y público real para alejar la marca de una estética hippie/confusa y acercarla a un imaginario punk y alternativo nacido alrededor de los años 70 y 80.",
                herramientas: ["Illustrator"],
                imagenes: [
                    "Sin título-2.webp", "Sin título-2-06.webp", "Sin título-2-07.webp",
                    "Sin título-2-08.webp", "Sin título-2-09.webp", "Sin título-2_Mesa de trabajo 1 copia.webp"
                ]
            },
            {
                carpeta: "pv_pegas",
                portada: "",
                pendiente: true,
                titulo: "PV PEGAS",
                descripcion: "Proyecto en torno a una pegatina propia y su difusión por Madrid. Pieza de identidad personal expandida en la calle. (Imágenes próximamente.)",
                herramientas: ["Illustrator"],
                imagenes: []
            }
        ],

        edicion_imagen: [
            {
                carpeta: "claudia",
                portada: "ClaudiaJon.webp",
                titulo: "Claudia",
                descripcion: "Proyecto personal de retrato y edición fotográfica. Se centra en capturar la esencia de una persona a través de recursos visuales que van más allá de la representación literal: un ejercicio de sensibilidad y observación.",
                herramientas: ["Photoshop", "Lightroom"],
                imagenes: [
                    "ClaudiaJon.webp", "ClaudiaJon2.webp", "ClaudiaJon3.webp", "ClaudiaJon4.webp",
                    "ClaudiaJon5.webp", "ClaudiaJon6.webp", "ClaudiaJon7.webp", "ClaudiaJon8.webp",
                    "ClaudiaJon9.webp", "ClaudiaJon10.webp", "ClaudiaJon11.webp", "ClaudiaJon12.webp"
                ]
            },
            {
                carpeta: "rosalia",
                portada: "LeireEdit_image0000108.webp",
                titulo: "Rosalía",
                descripcion: "Edición y retoque fotográfico de serie de retratos.",
                herramientas: ["Photoshop", "Lightroom"],
                imagenes: [
                    "LeireEdit_image0000108.webp", "LeireEdit_image0000209.webp", "LeireEdit_image0000303.webp",
                    "LeireEdit_image0000402.webp", "LeireEdit_image0000501.webp", "LeireEdit_image0000604.webp",
                    "LeireEdit_image0000705.webp", "LeireEdit_image0000806.webp", "LeireEdit_image0000907.webp"
                ]
            },
            {
                carpeta: "clase/diego",
                portada: "2026PabloESTUDIO_IMG_1720.webp",
                titulo: "Diego — Clase",
                descripcion: "Edición de retratos en clave baja con una estética indie y rock alternativo, inspirada en discos de finales de los 90. El tratamiento potencia sombras, contraste y una luz direccional de carácter natural para llevar la imagen hacia un tono más introspectivo y emocional.",
                herramientas: ["Photoshop", "Lightroom"],
                imagenes: [
                    "2026PabloESTUDIO_IMG_1720.webp", "2026PabloESTUDIO_IMG_1721.webp",
                    "2026PabloESTUDIO_IMG_1728.webp", "2026PabloESTUDIO_IMG_9846.webp",
                    "2026PabloESTUDIO_IMG_9848.webp", "2026PabloESTUDIO_IMG_9850.webp"
                ]
            },
            {
                carpeta: "clase/retratos",
                portada: "Estudio__DSC002402.webp",
                titulo: "Retratos — Clase",
                descripcion: "Serie de retratos editados en clave alta, planteados desde una energía espontánea, luminosa y cercana. La propuesta trabaja referencias de pop adolescente, series y estética de clase de instituto para reforzar el carácter de cada retratado.",
                herramientas: ["Photoshop", "Lightroom"],
                imagenes: [
                    "Estudio__DSC002402.webp", "Estudio__DSC009004.webp", "Estudio_MMS_510901.webp",
                    "Estudio_MMS_511803.webp", "Estudio_MMS_514105.webp",
                    "2026PabloESTUDIO__MG_1681-3.webp", "2026PabloESTUDIO__MG_1681.webp"
                ]
            },
            {
                carpeta: "editadas (fotos de desi y henar)",
                portada: "DSC_0452.webp",
                titulo: "Desi y Henar",
                descripcion: "Edición fotográfica de sesión con Desi y Henar.",
                herramientas: ["Photoshop", "Lightroom"],
                imagenes: [
                    "DSC_0078.webp", "DSC_0081.webp", "DSC_0087.webp", "DSC_0090.webp",
                    "DSC_0160.webp", "DSC_0308.webp", "DSC_0360.webp", "DSC_0365.webp",
                    "DSC_0406.webp", "DSC_0428.webp", "DSC_0430.webp", "DSC_0444.webp",
                    "DSC_0446.webp", "DSC_0452.webp", "DSC_0454.webp", "DSC_0527.webp", "DSC_0543.webp"
                ]
            }
        ],

        diseno_web: [
            {
                carpeta: "nubi",
                portada: "NUBI.mp4",
                titulo: "Videojuego ilustrado — NUBI",
                descripcion: "Nubi is a class project that came out of a collaboration between Illustration and Programming class. I wanted to create something small but charming, so I ended up designing a cute pixel-art world full of pastel colors and dreamy vibes. The story follows Nubi, the Dream Keeper, a little guardian who accidentally falls asleep on the job. Because of that, people start having nightmares, and everything in the dream world gets mixed up. Your mission as the player is to help her fix the mess by finding and matching the lost dreams in a memory-style game. I illustrated all the characters, icons, and environments in pixel art, focusing on soft palettes and cozy, magical atmospheres. The whole project was a way for me to explore how illustration can shape the mood of a game, even when the mechanics are super simple. It’s playful, sweet, and a bit nostalgic — exactly the kind of game I would’ve loved as a kid.",
                herramientas: ["Procreate", "Illustrator", "Photoshop", "Visual Studio", "HTML", "CSS", "JS"],
                imagenes: ["dibujos_nubi.webp", "dibujos_nubi2.webp", "NUBI.mp4"]
            },
            {
                carpeta: "6Napse",
                portada: "6Napse_Port.webp",
                titulo: "6NAPSE — Juego ilustrado 8bit",
                descripcion: "Videojuego narrativo y educativo sobre empatía, comunicación emocional y relaciones interpersonales, en estética pixel y modo historia con decisiones. El jugador conversa con seis personajes, cada uno con inseguridades y sensibilidades distintas, y debe elegir respuestas respetuosas para avanzar. La estética retro de terminal y el pixel art refuerzan la idea de 6NAPSE como conexión emocional entre sistemas. Juego: https://paulapeuve.github.io/6NAPSE/",
                herramientas: ["Procreate", "HTML", "CSS", "JS"],
                imagenes: ["6Napse_Port.webp", "6NapseBLACK.webp", "6NapseGREEN.webp", "alma (1).webp", "alma (2).webp", "axel (1).webp", "axel (2).webp", "Luna (1).webp", "Luna (2).webp", "Mateo (1).webp", "Mateo (2).webp", "Nico (1).webp", "Nico (2).webp", "Valeria (1).webp", "Valeria (2).webp"]
            }
        ],

        video: [
            {
                carpeta: "BIT",
                portada: "Ident_01_PaulaPavia_BIT.mp4",
                titulo: "BIT - Publicidad",
                descripcion: "Piezas audiovisuales creadas para la identidad de BIT, un festival de competición de videojuegos retro. Las animaciones trasladan el sistema gráfico del proyecto a motion, manteniendo la energía arcade, el tratamiento ASCII y el universo visual de la edición centrada en Street Fighter.",
                herramientas: ["After Effects", "Illustrator"],
                imagenes: [
                    "Ident_01_PaulaPavia_BIT.mp4",
                    "Ident_02_PaulaPavia_BIT.mp4",
                    "Ident_03_PaulaPavia_BIT.mp4"
                ]
            },
            {
                carpeta: "CANAL",
                portada: "CANAL_Publi.mp4",
                titulo: "CANAL - Publicidad",
                descripcion: "Pieza audiovisual para la nueva identidad de Teatros del Canal. El motion traslada el tono juvenil, expresivo y directo de la marca a vídeo, usando color, ritmo e impacto visual para presentar el teatro como un espacio vivo, inclusivo y preparado para nuevas generaciones.",
                herramientas: ["After Effects", "Illustrator"],
                imagenes: ["CANAL_Publi.mp4"]
            },
            {
                carpeta: "lo-opuesto",
                portada: "lo-opuesto-portada.webp",
                titulo: "Lo Opuesto",
                descripcion: "Animación abstracta sobre dos estados opuestos: la euforia y felicidad asociadas al consumo, y el bajón físico y emocional posterior. La pieza trabaja el contraste entre un ojo sobrio en blanco, gris y negro, una fase central saturada y rítmica marcada por filtros HSL y movimiento al beat, y una vuelta final más lenta, cansada y cerrada.",
                herramientas: ["After Effects"],
                imagenes: ["lo-opuesto-portada.webp", "lo-opuesto-proceso.webp"]
            },
                        {
                carpeta: "RADIO3",
                portada: "IDENTLargo_Radio3.mp4",
                titulo: "Radio 3",
                descripcion: "Identidad audiovisual y piezas de motion para Radio 3.",
                herramientas: ["After Effects", "Premiere"],
                imagenes: [
                    "IDENTLargo_Radio3.mp4",
                    "MOSCA_Radio3.mp4"
                ]
            },
            {
                carpeta: "MBFW Visuals",
                portada: "GENDERLESS_visual.mp4",
                titulo: "MBFW Visuals",
                descripcion: "Piezas visuales y motion graphics para pasarela.",
                herramientas: ["After Effects", "Premiere"],
                imagenes: [
                    "GENDERLESS_visual.mp4",
                    "GENDERLESS_visual2.mp4",
                    "VIDEOS_visual1.mp4",
                    "VIDEOS_visual2.mp4",
                    "VIDEOS_visual3.mp4",
                    "VIDEOS_visual4.mp4",
                    "VIDEOS_visual5.mp4",
                    "VIDEOS_visual6.mp4"
                ]
            },
              {
                carpeta: "Bien",
                portada: "Bien_publi.mp4",
                titulo: "Bien Publicidad",
                descripcion: "Pieza audiovisual realizada como proyecto independiente.",
                herramientas: ["Premiere", "After Effects"],
                imagenes: ["Bien_publi.mp4"]
            }
        ],
        tatuaje: [
            { portada: "Tatuaje (1).webp" },
            { portada: "Tatuaje (2).webp" },
            { portada: "Tatuaje (3).webp" },
            { portada: "Tatuaje (4).webp" },
            { portada: "Tatuaje (5).webp" },
            { portada: "Tatuaje (6).webp" },
            { portada: "Tatuaje (7).webp" },
            { portada: "Tatuaje (8).webp" },
            { portada: "Tatuaje (9).webp" },
            { portada: "Tatuaje (10).webp" },
            { portada: "Tatuaje (11).webp" },
            { portada: "Tatuaje (12).webp" },
            { portada: "Tatuaje (13).webp" },
            { portada: "Tatuaje (14).webp" },
            { portada: "Tatuaje (15).webp" },
            { portada: "Tatuaje (16).webp" },
            { portada: "Tatuaje (17).webp" },
            { portada: "Tatuaje (18).webp" },
            { portada: "Tatuaje (19).webp" },
            { portada: "Tatuaje (20).webp" },
            { portada: "Tatuaje (21).webp" },
            { portada: "Tatuaje (22).webp" },
            { portada: "Tatuaje (23).webp" },
            { portada: "Tatuaje (24).webp" },
            { portada: "Tatuaje (25).webp" },
            { portada: "Tatuaje (26).webp" },
            { portada: "Tatuaje (27).webp" },
            { portada: "Tatuaje (28).webp" },
            { portada: "Tatuaje (29).webp" },
            { portada: "Tatuaje (30).webp" },
            { portada: "Tatuaje (31).webp" },
            { portada: "Tatuaje (34).webp" },
            { portada: "Tatuaje (35).webp" },
        ],
    };

    // ── HELPERS ──────────────────────────────────────────────────────────────
    const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov", ".m4v"];
    let currentLang = localStorage.getItem("peuve-lang") || "es";
    let currentTheme = localStorage.getItem("peuve-theme") || "light";
    let currentCategoria = "editorial";
    let openProjectRef = null;

    function ui() {
        return (window.PEUVE_I18N && window.PEUVE_I18N[currentLang]) || window.PEUVE_I18N.es;
    }

    function localizeField(value, fallback) {
        if (value == null || value === "") return fallback || "";
        if (typeof value === "string") return value;
        return value[currentLang] || value.es || value.en || fallback || "";
    }

    function projectTitle(proyecto) {
        const map = window.PEUVE_PROJECTS && window.PEUVE_PROJECTS[proyecto.carpeta];
        if (map && map.titulo) return localizeField(map.titulo, proyecto.titulo);
        return localizeField(proyecto.titulo);
    }

    function projectDesc(proyecto) {
        const map = window.PEUVE_PROJECTS && window.PEUVE_PROJECTS[proyecto.carpeta];
        if (map && map.descripcion) return localizeField(map.descripcion, proyecto.descripcion);
        return localizeField(proyecto.descripcion);
    }

    function esVideo(archivo) {
        return VIDEO_EXTENSIONS.some(ext => String(archivo || "").toLowerCase().endsWith(ext));
    }

    function normalizarMedia(media) {
        if (typeof media === "string") {
            return { src: media, type: esVideo(media) ? "video" : "image" };
        }
        if (media && typeof media === "object") {
            const src = media.src || "";
            return { src, type: media.type || (esVideo(src) ? "video" : "image") };
        }
        return { src: "", type: "image" };
    }

    function optimizarImagen(img, prioridad = false) {
        img.decoding = "async";
        img.loading = prioridad ? "eager" : "lazy";
        img.fetchPriority = prioridad ? "high" : "low";
    }

    function basePath(categoria) {
        return `assets/${categoria}/`;
    }

    function resolveMediaSrc(src, base, subcarpeta) {
        if (!src) return "";
        if (src.startsWith("assets/") || src.startsWith("/")) return src;
        return `${base}${subcarpeta}${src}`;
    }


    // ── SWIPER ───────────────────────────────────────────────────────────────
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 12,
        grabCursor: true,
        scrollbar: { el: ".swiper-scrollbar", draggable: true }
    });


    // ── VISOR DE IMAGEN (zoom desde popup) ───────────────────────────────────
    const imageZoomOverlay = document.createElement("div");
    imageZoomOverlay.className = "image-zoom-overlay";
    imageZoomOverlay.innerHTML = `
        <div class="image-zoom-box">
            <button class="image-zoom-close" aria-label="Cerrar imagen ampliada">✕</button>
            <img class="image-zoom-img" alt="">
        </div>
    `;
    document.body.appendChild(imageZoomOverlay);

    const zoomImg = imageZoomOverlay.querySelector(".image-zoom-img");
    const zoomCloseBtn = imageZoomOverlay.querySelector(".image-zoom-close");

    function abrirVisor(src, alt) {
        zoomImg.src = src;
        zoomImg.alt = alt || "";
        imageZoomOverlay.classList.add("open");
    }

    function cerrarVisor() {
        imageZoomOverlay.classList.remove("open");
        zoomImg.src = "";
    }

    zoomCloseBtn.addEventListener("click", cerrarVisor);
    imageZoomOverlay.addEventListener("click", e => { if (e.target === imageZoomOverlay) cerrarVisor(); });


    // ── POPUP ────────────────────────────────────────────────────────────────
    const overlay = document.getElementById("popup-overlay");
    const popupInner = document.getElementById("popup-inner");
    const closeBtn = document.getElementById("popup-close");

    function abrirPopup(proyecto, categoria) {
        const base = basePath(categoria);
        const subcarpeta = proyecto.carpeta ? `${proyecto.carpeta}/` : "";
        openProjectRef = { proyecto, categoria };
        const strings = ui();
        const title = projectTitle(proyecto);
        const desc = projectDesc(proyecto);
        const pendingNote = (!proyecto.portada || proyecto.pendiente)
            ? `<p class="popup-desc">${strings.pendingNote}</p>`
            : "";

        popupInner.innerHTML = `
            <h2 class="popup-title">${title}</h2>
            <p class="popup-desc">${desc}</p>
            ${pendingNote}
            <p class="popup-tools-label">${strings.toolsLabel}</p>
            <div class="popup-tools">${(proyecto.herramientas || []).map(h => `<span class="popup-tag">${h}</span>`).join("")}</div>
            <div class="popup-images-grid"></div>
        `;

        const grid = popupInner.querySelector(".popup-images-grid");

        (proyecto.imagenes || []).forEach(item => {
            const media = normalizarMedia(item);
            if (!media.src) return;
            const src = resolveMediaSrc(media.src, base, subcarpeta);

            if (media.type === "video") {
                const v = document.createElement("video");
                v.src = src;
                v.className = "popup-project-video";
                v.controls = true;
                v.preload = "metadata";
                v.playsInline = true;
                grid.appendChild(v);
            } else {
                const img = document.createElement("img");
                img.src = src;
                img.alt = title;
                img.className = "popup-project-img";
                optimizarImagen(img);
                img.addEventListener("click", () => abrirVisor(img.src, img.alt));
                grid.appendChild(img);
            }
        });

        overlay.classList.add("open");
        popupInner.scrollTop = 0;
    }

    function cerrarPopup() {
        overlay.classList.remove("open");
        openProjectRef = null;
    }

    closeBtn.addEventListener("click", cerrarPopup);
    overlay.addEventListener("click", e => { if (e.target === overlay) cerrarPopup(); });
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            if (imageZoomOverlay.classList.contains("open")) cerrarVisor();
            else cerrarPopup();
        }
    });


    // ── GALERÍA ──────────────────────────────────────────────────────────────
    function cargarGaleria(categoria) {
        currentCategoria = categoria;
        const galeria = document.getElementById("galeria");
        const sobreMiSection = document.getElementById("sobre-mi-section");

        if (categoria === "sobre_mi") {
            galeria.style.display = "none";
            sobreMiSection.style.display = "flex";
            document.body.classList.add("view-sobre-mi");
            const menu = document.querySelector(".main-menu");
            if (menu) {
                // Misma posición que el resto de secciones (banda bajo las imgs)
                if (window.innerWidth > 1125) {
                    const topVal = menu.style.top;
                    const topNum = parseFloat(topVal);
                    if (!topVal || (topVal.endsWith("vh") && topNum < 60) || (topVal.endsWith("px") && topNum < window.innerHeight * 0.55)) {
                        menu.style.top = "76vh";
                    }
                }
                menu.style.transform = "";
                menu.style.transition = "";
            }
            // Encaja el bloque entre header y menú (no entre menú y bot)
            const layoutSobreMi = () => {
                if (!document.body.classList.contains("view-sobre-mi")) return;
                const header = document.querySelector("header");
                const menuEl = document.querySelector(".main-menu");
                const top = (header?.getBoundingClientRect().bottom || 64) + 8;
                const menuTop = menuEl?.getBoundingClientRect().top ?? window.innerHeight * 0.76;
                const bottom = Math.max(8, window.innerHeight - menuTop + 6);
                sobreMiSection.style.setProperty("--sobre-top", `${top}px`);
                sobreMiSection.style.setProperty("--sobre-bottom", `${bottom}px`);
            };
            requestAnimationFrame(layoutSobreMi);
            window.addEventListener("resize", layoutSobreMi);
            sobreMiSection._layoutSobreMi = layoutSobreMi;
            applySobreMi();
            return;
        }

        galeria.style.display = "block";
        sobreMiSection.style.display = "none";
        document.body.classList.remove("view-sobre-mi");
        if (sobreMiSection._layoutSobreMi) {
            window.removeEventListener("resize", sobreMiSection._layoutSobreMi);
            delete sobreMiSection._layoutSobreMi;
        }
        sobreMiSection.style.removeProperty("--sobre-top");
        sobreMiSection.style.removeProperty("--sobre-bottom");

        const proyectos = galleries[categoria];
        if (!proyectos) return;

        const wrapper = document.querySelector(".swiper-wrapper");
        wrapper.innerHTML = "";

        proyectos.forEach((proyecto, index) => {
            // Hide until images exist
            if (proyecto.pendiente || !proyecto.portada) return;

            const slide = document.createElement("div");
            slide.className = "swiper-slide";

            const portada = normalizarMedia(proyecto.portada);
            const subcarpeta = proyecto.carpeta ? `${proyecto.carpeta}/` : "";
            const src = resolveMediaSrc(portada.src, basePath(categoria), subcarpeta);
            const title = projectTitle(proyecto);
            const esTatuaje = categoria === "tatuaje";

            let mediaEl;
            if (portada.type === "video") {
                const v = document.createElement("video");
                v.src = src;
                v.className = "slide-video";
                v.muted = true;
                v.loop = true;
                v.autoplay = true;
                v.playsInline = true;
                v.preload = "metadata";
                mediaEl = v;
            } else {
                const img = document.createElement("img");
                img.src = src;
                img.alt = title || (esTatuaje ? "Tatuaje" : "");
                optimizarImagen(img, index < 3);
                mediaEl = img;
            }

            slide.appendChild(mediaEl);

            if (!esTatuaje && title) {
                const label = document.createElement("div");
                label.className = "slide-label";
                label.textContent = title;
                slide.appendChild(label);
            }

            let pointerDown = false, dragging = false, startX = 0, startY = 0;
            slide.addEventListener("pointerdown", e => {
                if (e.pointerType === "mouse" && e.button !== 0) return;
                pointerDown = true; dragging = false;
                startX = e.clientX; startY = e.clientY;
            });
            slide.addEventListener("pointermove", e => {
                if (!pointerDown) return;
                if (Math.abs(e.clientX - startX) > 8 || Math.abs(e.clientY - startY) > 8) {
                    dragging = true;
                }
            });
            slide.addEventListener("pointerup", e => {
                if (!pointerDown) return;
                pointerDown = false;
                if (e.pointerType === "mouse" && e.button !== 0) return;
                if (dragging) return;
                if (esTatuaje) {
                    abrirVisor(src, title || "Tatuaje");
                } else {
                    abrirPopup(proyecto, categoria);
                }
            });
            slide.addEventListener("pointercancel", () => { pointerDown = false; });

            wrapper.appendChild(slide);
        });

        swiper.update();
    }



    document.querySelectorAll(".main-menu a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            cargarGaleria(link.getAttribute("data-categoria"));
        });
    });

    // Menú móvil (dentro del scope para acceder a cargarGaleria)
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobilePanel = document.getElementById("mobile-menu-panel");
    if (mobileBtn && mobilePanel) {
        mobileBtn.addEventListener("click", () => {
            mobilePanel.style.display =
                mobilePanel.style.display === "flex" ? "none" : "flex";
        });
        document.querySelectorAll("#mobile-menu-panel a").forEach(a => {
            a.addEventListener("click", () => {
                cargarGaleria(a.getAttribute("data-categoria"));
                mobilePanel.style.display = "none";
            });
        });
    }

    cargarGaleria("editorial");

    function applySobreMi() {
        const strings = ui();
        const titleEl = document.getElementById("sobre-mi-title");
        const descEl = document.getElementById("sobre-mi-desc");
        const programsEl = document.getElementById("programs-title");
        const contactBtn = document.getElementById("open-contacto");
        if (titleEl) titleEl.textContent = strings.sobreMiTitle;
        if (descEl) descEl.textContent = strings.sobreMiBody;
        if (programsEl) programsEl.textContent = strings.programsTitle;
        if (contactBtn) contactBtn.textContent = strings.contactBtn;
    }

    function applyLangUI() {
        const strings = ui();
        document.documentElement.lang = currentLang;

        const portfolioLabel = document.getElementById("portfolio-label");
        if (portfolioLabel) portfolioLabel.textContent = strings.portfolioLabel;

        const langBtn = document.getElementById("lang-toggle");
        if (langBtn) {
            langBtn.textContent = strings.langBtn;
            langBtn.setAttribute("aria-label", strings.langBtnAria);
        }

        const botRight = document.getElementById("bot-right-text");
        if (botRight) botRight.textContent = strings.botRight;

        const menu = document.querySelector(".main-menu");
        if (menu) menu.setAttribute("aria-label", strings.menuAria);

        document.querySelectorAll(".main-menu a, #mobile-menu-panel a").forEach(a => {
            const key = a.getAttribute("data-categoria");
            if (key && strings.categories[key]) a.textContent = strings.categories[key];
        });

        const zoomClose = document.querySelector(".image-zoom-close");
        if (zoomClose) zoomClose.setAttribute("aria-label", strings.closeZoom);

        // Intro copy if still visible
        const t1 = document.getElementById("instruction-text1");
        const t2 = document.getElementById("instruction-text2");
        const scene = window.PEUVE_INTRO_SCENE || 0;
        if (t1 && strings.introText1[scene] != null) t1.innerText = strings.introText1[scene];
        if (t2 && strings.introText2[scene] != null) t2.innerText = strings.introText2[scene];

        applySobreMi();
        cargarGaleria(currentCategoria);

        if (openProjectRef && overlay.classList.contains("open")) {
            abrirPopup(openProjectRef.proyecto, openProjectRef.categoria);
        }

        window.dispatchEvent(new CustomEvent("peuve-lang", { detail: { lang: currentLang } }));
    }

    function applyTheme(theme) {
        currentTheme = theme;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("peuve-theme", theme);
        document.querySelectorAll(".theme-swatch").forEach(btn => {
            btn.classList.toggle("is-active", btn.getAttribute("data-theme") === theme);
        });
    }

    document.getElementById("lang-toggle")?.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";
        localStorage.setItem("peuve-lang", currentLang);
        applyLangUI();
    });

    document.querySelectorAll(".theme-swatch").forEach(btn => {
        btn.addEventListener("click", () => applyTheme(btn.getAttribute("data-theme")));
    });

    applyTheme(currentTheme);
    applyLangUI();


    // ── CONTACTO (popup desde Sobre Mí) ─────────────────────────────────────
    const btnContacto = document.getElementById("open-contacto");
    if (btnContacto) {
        btnContacto.addEventListener("click", () => {
            const strings = ui();
            openProjectRef = null;
            popupInner.innerHTML = `
                <h2 class="popup-title">${strings.contactTitle}</h2>
                <p class="popup-desc">${strings.contactIntro}</p>
                <form class="contact-form" action="mailto:paulapavia@gmail.com" method="post" enctype="text/plain">
                    <input class="contact-input" type="text" name="nombre" placeholder="${strings.contactName}" required>
                    <input class="contact-input" type="email" name="email" placeholder="${strings.contactEmail}" required>
                    <textarea class="contact-input contact-textarea" name="mensaje" placeholder="${strings.contactMessage}" required></textarea>
                    <button class="contact-btn" type="submit">${strings.contactSend}</button>
                </form>
                <p class="popup-desc" style="margin-top:20px;">
                    Instagram: <a href="https://www.instagram.com/jpeuveg" target="_blank" rel="noopener noreferrer">@jpeuveg</a>
                </p>
            `;
            overlay.classList.add("open");
            popupInner.scrollTop = 0;
        });
    }
});


// ── ANIMACIÓN DE INTRO ───────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
    const images = ["Ilustracion_1.webp", "Ilustracion_2.webp", "Ilustracion_3.webp", "Ilustracion_4.webp", "Ilustracion_5.webp", "Ilustracion_6.webp", "Ilustracion_7.webp", "Ilustracion_8.webp"];
    window.PEUVE_INTRO_SCENE = 0;

    function introCopy() {
        const lang = localStorage.getItem("peuve-lang") || "es";
        const pack = (window.PEUVE_I18N && window.PEUVE_I18N[lang]) || window.PEUVE_I18N.es;
        return pack;
    }

    // Desktop: posiciones con `top` en vh
    const posicionesDesktop = { 0: "24vh", 1: "24vh", 2: "24vh", 3: "26vh", 4: "32vh", 5: "39vh", 6: "46vh", 7: "76vh" };

    // Animacion bot bar movil — valores en vh, 50 = mitad pantalla, 0 = posición final visible
    const posicionesMobile = { 0: "50vh", 1: "46vh", 2: "46vh", 3: "44vh", 4: "40vh", 5: "35vh", 6: "30vh", 7: "0vh" };
    // ─────────────────────────────────────────────────────────────────────────

    let currentScene = 0;
    let autoChangeActive = false;

    const introEl = document.getElementById("intro-animation");
    const imgEl = document.getElementById("animation-img");
    const text1El = document.getElementById("instruction-text1");
    const text2El = document.getElementById("instruction-text2");
    const menuEl = document.querySelector(".main-menu");
    const botBar = document.querySelector(".bot-bar");
    const whiteCover = document.getElementById("intro-white-cover");

    const esMobile = () => window.innerWidth <= 768;

    if (esMobile()) {
        if (botBar) {
            botBar.style.bottom = "50vh";
            botBar.style.position = "fixed";
            botBar.style.transition = "bottom 0.5s ease-in-out";
        }
    }

    function moverMenu(scene) {
        if (esMobile()) {
            if (botBar) botBar.style.bottom = posicionesMobile[scene];
        } else {
            menuEl.style.top = posicionesDesktop[scene];
        }
    }

    function finalizarAnimacion() {
        introEl.style.display = "none";
        if (whiteCover) whiteCover.style.display = "none";

        if (esMobile()) {
            const topFinal = window.innerHeight - menuEl.offsetHeight - 44;
            menuEl.style.transition = "top 0.4s ease-in-out";
            menuEl.style.top = topFinal + "px";

            menuEl.addEventListener("transitionend", function handler() {
                menuEl.removeEventListener("transitionend", handler);
                menuEl.style.transition = "";
                menuEl.style.top = "";
                menuEl.style.bottom = "";
                menuEl.style.position = "";
            });

            if (botBar) botBar.style.transform = "";
        } else {
            // Deja el menú bajo el contenido (misma banda que las imgs de galería)
            menuEl.style.top = "76vh";
            menuEl.style.transform = "";
            menuEl.style.transition = "";
        }
    }

    function setIntroTexts(scene) {
        const pack = introCopy();
        text1El.innerText = pack.introText1[scene] || "";
        text2El.innerText = pack.introText2[scene] || "";
    }

    function avanzarEscena() {
        if (currentScene >= images.length - 1) return;
        currentScene++;
        window.PEUVE_INTRO_SCENE = currentScene;
        moverMenu(currentScene);
        imgEl.src = `assets/ilustraciones/${images[currentScene]}`;
        setIntroTexts(currentScene);

        if (currentScene === 4 && !autoChangeActive) {
            autoChangeActive = true;
            iniciarAuto();
        }
    }

    function iniciarAuto() {
        const interval = setInterval(() => {
            if (currentScene < images.length - 1) {
                avanzarEscena();
            } else {
                clearInterval(interval);
                setTimeout(finalizarAnimacion, 500);
            }
        }, 300);
    }

    setIntroTexts(0);

    introEl.addEventListener("click", avanzarEscena);
    introEl.addEventListener("touchend", function (e) {
        e.preventDefault();
        avanzarEscena();
    }, { passive: false });
});
