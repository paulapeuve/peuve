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
                descripcion: "Técnica fotográfica alternativa de cianotipia.",
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
                descripcion: "Sesión fotográfica en estudio.",
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
                carpeta: "partido de futbol laura",
                portada: "foto (16).JPG",
                titulo: "Partido de Fútbol",
                descripcion: "Cobertura fotográfica deportiva.",
                herramientas: ["Lightroom"],
                imagenes: ["foto (15).JPG", "foto (16).JPG", "foto (17).JPG"]
            },
            {
                carpeta: "retratos clase",
                portada: "ESTUDIO_Edit_2_14.webp",
                titulo: "Retratos de Clase",
                descripcion: "Serie de retratos en estudio realizados en clase.",
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
                descripcion: "Proyecto basado en la idea de conexión, red o estructura. Explora cómo los elementos se relacionan entre sí para formar sistemas visuales.",
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
                descripcion: "Diseño gráfico para Cata la Lata.",
                herramientas: ["Illustrator", "Photoshop"],
                imagenes: ["TODO_1.webp", "mock_atun1.webp", "mock_mejillones1.webp", "mock_sardinillas1.webp"]
            },
            {
                carpeta: "don pollo",
                portada: "DON POLLO.webp",
                titulo: "Don Pollo",
                descripcion: "Diseño gráfico para Don Pollo.",
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
                descripcion: "Proyecto de diseño gráfico.",
                herramientas: ["Illustrator", "Photoshop"],
                imagenes: ["Mockup discapacidad.webp"]
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
                portada: "NUBI.mp4",
                titulo: "Nubi",
                descripcion: "Proyecto de ilustración para Nubi.",
                herramientas: ["Procreate", "Illustrator"],
                imagenes: ["dibujos_nubi.webp", "dibujos_nubi2.webp", "NUBI.mp4"]
            },
            {
                carpeta: "infografia",
                portada: "ilustracion (4).webp",
                titulo: "Infografía E-waste + IA",
                descripcion: "Proyecto de ilustración creado con la compañera Ana Maldonado para la clase de ilustración, en formato Berlín.",
                herramientas: ["Illustrator", "Procreate"],
                imagenes: ["ilustracion (4).webp", "ilustracion (11).webp"]
            },
            {
                carpeta: "jornadas",
                portada: "ilustracion (5).webp",
                titulo: "Jornadas",
                descripcion: "Serie de ilustraciones para jornadas y eventos.",
                herramientas: ["Illustrator"],
                imagenes: ["ilustracion (5).webp", "ilustracion (6).webp", "ilustracion (7).webp"]
            },
            {
                carpeta: "lego",
                portada: "ilustracion (1).webp",
                titulo: "LEGO",
                descripcion: "Proyecto editorial inspirado en la filosofía modular de LEGO.",
                herramientas: ["Illustrator", "Procreate"],
                imagenes: ["ilustracion (1).webp", "ilustracion (2).webp", "ilustracion (9).webp", "ilustracion (10).webp"]
            },
            {
                carpeta: "libro",
                portada: "ilustracion (3).webp",
                titulo: "Libro",
                descripcion: "Ilustración para proyecto editorial.",
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
                descripcion: "Proyecto tipográfico GALAKTYPE.",
                herramientas: ["Illustrator", "FontLab"],
                imagenes: ["GALAKTYPE_Mesa de trabajo 1.webp", "GALAKTYPE-02.webp", "GALAKTYPE-03.webp", "GALAKTYPE-04.webp", "GALAKTYPE-05.webp", "GALAKTYPE-06.webp", "GALAKTYPE-07.webp"]
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
                descripcion: "Fanzine artesanal con encuadernación japonesa que narra visualmente Eufemia, de Italo Calvino.",
                herramientas: ["Técnicas de impresión", "Collage", "Serigrafía"],
                imagenes: ["editorial (10).webp", "editorial (11).webp", "editorial (12).webp", "editorial (13).webp", "editorial (14).webp", "editorial (15).webp"]
            },
            {
                carpeta: "fanzine2_LaPerdidaDeUnoMismo",
                portada: "VIDEO_ZINEv1.mp4",
                titulo: "La Pérdida de Uno Mismo",
                descripcion: "Pieza experimental sobre disociación, identidad y la sensación de perder el sentido de uno mismo.",
                herramientas: ["InDesign", "Photoshop", "Collage"],
                imagenes: [
                    "Brillo_contraste 1zine.webp",
                    "Color e intensidad 1zine.webp",
                    "Documento_2026-03-01_204253_1zine.webp",
                    "Documento_2026-03-01_204253_36zine.webp",
                    "Foto_2026-03-02_204405 copiazine.webp",
                    "Foto_2026-03-02_204405_1 copiazine.webp",
                    "Foto_2026-03-02_204405_2zine.webp",
                    "VIDEO_ZINEv1.mp4"
                ]
            },
            {
                carpeta: "cocina",
                portada: "editorial (1).webp",
                titulo: "Sentimiento y Sabor",
                descripcion: "Proyecto editorial ilustrado que recoge una colección ficticia de libros de gastronomía.",
                herramientas: ["InDesign", "Illustrator", "Procreate"],
                imagenes: ["editorial (1).webp", "editorial (2).webp", "editorial (3).webp", "editorial (4).webp", "editorial (5).webp", "editorial (6).webp", "editorial (7).webp"]
            },
            {
                carpeta: "mauqetacion para clase",
                portada: "editorial (8).webp",
                titulo: "Maquetación para Clase",
                descripcion: "Proyectos de diseño editorial realizados en clase.",
                herramientas: ["InDesign"],
                imagenes: ["editorial (8).webp", "editorial (9).webp"]
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
                    "identidad (3).webp", "identidad (22).webp", "botellas_GENERALES.webp",
                    "CAMISETAS_BIT.webp", "CANTIMPLORA_2025.webp", "ENTRADAS_SEPARADOS.webp",
                    "HORARIO.webp", "MOCK_3POSTER.webp", "Mupimetro_Jugadores.webp",
                    "MUPI_mock.webp", "PULSERAS_total.webp", "TOTE_BIT.webp", "streetfight.webp",
                    "Ident_01_PaulaPavia_BIT.mp4", "Ident_02_PaulaPavia_BIT.mp4", "Ident_03_PaulaPavia_BIT.mp4"
                ]
            },
            {
                carpeta: "canal",
                portada: "CANAL_Publi.mp4",
                titulo: "CANAL",
                descripcion: "Proyecto centrado en la creación de una identidad visual dinámica.",
                herramientas: ["Illustrator", "InDesign", "After Effects"],
                imagenes: [
                    "identidad (1).webp", "identidad (2).webp", "identidad (18).webp",
                    "identidad (19).webp", "identidad (20).webp", "identidad (21).webp", "identidad (23).webp",
                    "1_canal.webp", "2_canal.webp", "3_canal.webp", "4_canal.webp", "5_canal.webp",
                    "6_canal.webp", "7_canal.webp", "8_canal.webp", "9_canal.webp",
                    "Azuleja_CanalOBRA.webp", "gemelas_mupi_v3.webp", "LaPaz_Cartel.webp",
                    "Mesa de trabajo 4.webp", "metro2.webp", "metro3.webp", "Metro_ROBERTA.webp",
                    "Ticket2.webp", "CANAL_Publi.mp4"
                ]
            },
            {
                carpeta: "cesida",
                portada: "identidad (17).webp",
                titulo: "CESIDA",
                descripcion: "Identidad visual para CESIDA.",
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
                titulo: "Rediseño Marihuana",
                descripcion: "Proyecto de rediseño de identidad.",
                herramientas: ["Illustrator"],
                imagenes: [
                    "Sin título-2.webp", "Sin título-2-06.webp", "Sin título-2-07.webp",
                    "Sin título-2-08.webp", "Sin título-2-09.webp", "Sin título-2_Mesa de trabajo 1 copia.webp"
                ]
            }
        ],

        edicion_imagen: [
            {
                carpeta: "claudia",
                portada: "ClaudiaJon.webp",
                titulo: "Claudia",
                descripcion: "Proyecto personal de retrato y edición fotográfica.",
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
                descripcion: "Edición fotográfica de sesión de estudio realizada en clase.",
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
                descripcion: "Serie de retratos editados en clase.",
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
                descripcion: "Diseño y desarrollo de videojuego web ilustrado.",
                herramientas: ["Procreate", "HTML", "CSS", "JS"],
                imagenes: ["dibujos_nubi.webp", "dibujos_nubi2.webp", "NUBI.mp4"]
            },
            {
                carpeta: "6Napse",
                portada: "6Napse_Port.webp",
                titulo: "6NAPSE — Juego ilustrado 8bit",
                descripcion: "Ilustración y programación JS, CSS y HTML de juego web inspirado en la estética 8bit, con temática de juego-ético. https://paulapeuve.github.io/6NAPSE/",
                herramientas: ["Procreate", "HTML", "CSS", "JS"],
                imagenes: ["6Napse_Port.webp", "6NapseBLACK.webp", "6NapseGREEN.webp", "alma (1).webp", "alma (2).webp", "axel (1).webp", "axel (2).webp", "Luna (1).webp", "Luna (2).webp", "Mateo (1).webp", "Mateo (2).webp", "Nico (1).webp", "Nico (2).webp", "Valeria (1).webp", "Valeria (2).webp"]
            }
        ],

        video: [
            {
                carpeta: "BIT",
                portada: "Ident_01_PaulaPavia_BIT.mp4",
                titulo: "BIT - Publicidad",
                descripcion: "Piezas audiovisuales creadas para la identidad de BIT.",
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
                descripcion: "Spot audiovisual para la identidad visual de Canal.",
                herramientas: ["After Effects", "Illustrator"],
                imagenes: ["CANAL_Publi.mp4"]
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
            { carpeta: "", portada: "Tatuaje (1).webp", titulo: "Tatuaje 1", descripcion: "", herramientas: [], imagenes: ["Tatuaje (1).webp"] },
            { carpeta: "", portada: "Tatuaje (2).webp", titulo: "Tatuaje 2", descripcion: "", herramientas: [], imagenes: ["Tatuaje (2).webp"] },
            { carpeta: "", portada: "Tatuaje (3).webp", titulo: "Tatuaje 3", descripcion: "", herramientas: [], imagenes: ["Tatuaje (3).webp"] },
            { carpeta: "", portada: "Tatuaje (4).webp", titulo: "Tatuaje 4", descripcion: "", herramientas: [], imagenes: ["Tatuaje (4).webp"] },
            { carpeta: "", portada: "Tatuaje (5).webp", titulo: "Tatuaje 5", descripcion: "", herramientas: [], imagenes: ["Tatuaje (5).jpg"] },
            { carpeta: "", portada: "Tatuaje (6).webp", titulo: "Tatuaje 6", descripcion: "", herramientas: [], imagenes: ["Tatuaje (6).jpg"] },
            { carpeta: "", portada: "Tatuaje (7).webp", titulo: "Tatuaje 7", descripcion: "", herramientas: [], imagenes: ["Tatuaje (7).jpg"] },
            { carpeta: "", portada: "Tatuaje (8).webp", titulo: "Tatuaje 8", descripcion: "", herramientas: [], imagenes: ["Tatuaje (8).jpg"] },
            { carpeta: "", portada: "Tatuaje (9).webp", titulo: "Tatuaje 9", descripcion: "", herramientas: [], imagenes: ["Tatuaje (9).jpg"] },
            { carpeta: "", portada: "Tatuaje (10).webp", titulo: "Tatuaje 10", descripcion: "", herramientas: [], imagenes: ["Tatuaje (10).jpg"] },
            { carpeta: "", portada: "Tatuaje (11).webp", titulo: "Tatuaje 11", descripcion: "", herramientas: [], imagenes: ["Tatuaje (11).jpg"] },
            { carpeta: "", portada: "Tatuaje (13).webp", titulo: "Tatuaje 13", descripcion: "", herramientas: [], imagenes: ["Tatuaje (13).jpg"] },
            { carpeta: "", portada: "Tatuaje (14).webp", titulo: "Tatuaje 14", descripcion: "", herramientas: [], imagenes: ["Tatuaje (14).jpg"] },
            { carpeta: "", portada: "Tatuaje (15).webp", titulo: "Tatuaje 15", descripcion: "", herramientas: [], imagenes: ["Tatuaje (15).jpg"] },
            { carpeta: "", portada: "Tatuaje (16).webp", titulo: "Tatuaje 16", descripcion: "", herramientas: [], imagenes: ["Tatuaje (16).jpg"] },
            { carpeta: "", portada: "Tatuaje (17).webp", titulo: "Tatuaje 17", descripcion: "", herramientas: [], imagenes: ["Tatuaje (17).jpg"] },
            { carpeta: "", portada: "Tatuaje (18).webp", titulo: "Tatuaje 18", descripcion: "", herramientas: [], imagenes: ["Tatuaje (18).jpg"] },
            { carpeta: "", portada: "Tatuaje (19).webp", titulo: "Tatuaje 19", descripcion: "", herramientas: [], imagenes: ["Tatuaje (19).jpg"] },
            { carpeta: "", portada: "Tatuaje (20).webp", titulo: "Tatuaje 20", descripcion: "", herramientas: [], imagenes: ["Tatuaje (20).jpg"] },
            { carpeta: "", portada: "Tatuaje (21).webp", titulo: "Tatuaje 21", descripcion: "", herramientas: [], imagenes: ["Tatuaje (21).jpg"] },
            { carpeta: "", portada: "Tatuaje (22).webp", titulo: "Tatuaje 22", descripcion: "", herramientas: [], imagenes: ["Tatuaje (22).jpg"] },
            { carpeta: "", portada: "Tatuaje (23).webp", titulo: "Tatuaje 23", descripcion: "", herramientas: [], imagenes: ["Tatuaje (23).jpg"] },
            { carpeta: "", portada: "Tatuaje (24).webp", titulo: "Tatuaje 24", descripcion: "", herramientas: [], imagenes: ["Tatuaje (24).jpg"] },
            { carpeta: "", portada: "Tatuaje (25).webp", titulo: "Tatuaje 25", descripcion: "", herramientas: [], imagenes: ["Tatuaje (25).jpg"] },
            { carpeta: "", portada: "Tatuaje (26).webp", titulo: "Tatuaje 26", descripcion: "", herramientas: [], imagenes: ["Tatuaje (26).jpg"] },
            { carpeta: "", portada: "Tatuaje (27).webp", titulo: "Tatuaje 27", descripcion: "", herramientas: [], imagenes: ["Tatuaje (27).jpg"] },
            { carpeta: "", portada: "Tatuaje (28).webp", titulo: "Tatuaje 28", descripcion: "", herramientas: [], imagenes: ["Tatuaje (28).jpg"] },
        ],
    };

    // ── HELPERS ──────────────────────────────────────────────────────────────
    const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov", ".m4v"];

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

        popupInner.innerHTML = `
            <h2 class="popup-title">${proyecto.titulo}</h2>
            <p class="popup-desc">${proyecto.descripcion}</p>
            <p class="popup-tools-label">Herramientas</p>
            <div class="popup-tools">${proyecto.herramientas.map(h => `<span class="popup-tag">${h}</span>`).join("")}</div>
            <div class="popup-images-grid"></div>
        `;

        const grid = popupInner.querySelector(".popup-images-grid");

        proyecto.imagenes.forEach(item => {
            const media = normalizarMedia(item);
            if (!media.src) return;
            const src = `${base}${subcarpeta}${media.src}`;

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
                img.alt = proyecto.titulo;
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
        const galeria = document.getElementById("galeria");
        const sobreMiSection = document.getElementById("sobre-mi-section");

        if (categoria === "sobre_mi") {
            galeria.style.display = "none";
            sobreMiSection.style.display = "flex";
            document.body.classList.add("view-sobre-mi");
            return;
        }

        galeria.style.display = "block";
        sobreMiSection.style.display = "none";
        document.body.classList.remove("view-sobre-mi");

        const proyectos = galleries[categoria];
        if (!proyectos) return;

        const wrapper = document.querySelector(".swiper-wrapper");
        wrapper.innerHTML = "";

        proyectos.forEach((proyecto, index) => {
            const slide = document.createElement("div");
            slide.className = "swiper-slide";

            const portada = normalizarMedia(proyecto.portada);
            const subcarpeta = proyecto.carpeta ? `${proyecto.carpeta}/` : "";
            const src = `assets/${categoria}/${subcarpeta}${portada.src}`;

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
                img.alt = proyecto.titulo;
                optimizarImagen(img, index < 3);
                mediaEl = img;
            }

            const label = document.createElement("div");
            label.className = "slide-label";
            label.textContent = proyecto.titulo;

            slide.appendChild(mediaEl);
            slide.appendChild(label);

            // Distinguir click real de arrastre
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
                if (!dragging) abrirPopup(proyecto, categoria);
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


    // ── CONTACTO (popup desde Sobre Mí) ─────────────────────────────────────
    const btnContacto = document.getElementById("open-contacto");
    if (btnContacto) {
        btnContacto.addEventListener("click", () => {
            popupInner.innerHTML = `
                <h2 class="popup-title">Contacto</h2>
                <p class="popup-desc">¿Tienes un proyecto en mente? Escríbeme y lo hacemos realidad.</p>
                <form class="contact-form" action="mailto:paulapavia@gmail.com" method="post" enctype="text/plain">
                    <input class="contact-input" type="text" name="nombre" placeholder="Tu nombre" required>
                    <input class="contact-input" type="email" name="email" placeholder="Tu email" required>
                    <textarea class="contact-input contact-textarea" name="mensaje" placeholder="Tu mensaje" required></textarea>
                    <button class="contact-btn" type="submit">Enviar</button>
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
    const text1 = ["Haz click en la pantalla", "otra vez", "otra vez!", "Ayúdame a bajar esto...", "Gracias...", "Gracias...", "Gracias...", ""];
    const text2 = ["", "", "Oyes...", "otra vez!!!!", "", "", "", ""];

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
        // En móvil el main-menu está oculto, animamos la bot-bar
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
            // Animar el menú hasta su posición real (bottom: 44px expresado como top)
            const topFinal = window.innerHeight - menuEl.offsetHeight - 44;
            menuEl.style.transition = "top 0.4s ease-in-out";
            menuEl.style.top = topFinal + "px";

            // Al terminar la transición, quitar todo inline y dejar que el CSS tome el control
            menuEl.addEventListener("transitionend", function handler() {
                menuEl.removeEventListener("transitionend", handler);
                menuEl.style.transition = "";
                menuEl.style.top = "";
                menuEl.style.bottom = "";
                menuEl.style.position = "";
            });

            if (botBar) botBar.style.transform = "";
        } else {
            menuEl.style.transform = "translateY(0)";
        }
    }

    function avanzarEscena() {
        if (currentScene >= images.length - 1) return;
        currentScene++;
        moverMenu(currentScene);
        imgEl.src = `assets/ilustraciones/${images[currentScene]}`;
        text1El.innerText = text1[currentScene];
        text2El.innerText = text2[currentScene];

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

    introEl.addEventListener("click", avanzarEscena);
    introEl.addEventListener("touchend", function (e) {
        e.preventDefault();
        avanzarEscena();
    }, { passive: false });
});