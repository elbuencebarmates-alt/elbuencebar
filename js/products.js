/* ==========================================================================
   BASE DE DATOS DE PRODUCTOS - EL BUEN CEBAR ARTESANAL
   ========================================================================== */

const PRODUCTOS = [
  {
    "id": "mate-imperial-boca-ancha",
    "nombre": "MATE IMPERIAL PREMIUM BOCA ANCHA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 30000,
    "imagen": "assets/images/mate-imperial-boca-ancha-negro.png",
    "descripcion": "Nuestra mejor calidad. Selección de materiales premium: costura a mano con hilo encerado. Cuenta con una distinguida guarda de alpaca cincelada y calabazas brasileras seleccionadas.",
    "destacado": true,
    "detalles": [
      "Calabaza brasilera seleccionada por su espesor",
      "Virola superior con guarda de alpaca cincelada",
      "Formato boca ancha para cebadas más cómodas"
    ],
    "variantes": [
      {
        "nombre": "CUERO NEGRO LISO",
        "imagen": "assets/images/mate-imperial-boca-ancha-negro.png",
        "precio": 30000
      },
      {
        "nombre": "CUERO MARRÓN LISO",
        "imagen": "assets/images/mate-imperial-boca-ancha-marron.png",
        "precio": 30000
      },
      {
        "nombre": "CUERO CRUDO",
        "imagen": "assets/images/mate-imperial-boca-ancha-crudo.png",
        "precio": 30000
      }
    ]
  },
  {
    "id": "mate-imperial-croco-repujado",
    "nombre": "MATE IMPERIAL CROCO Y REPUJADO",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 40000,
    "imagen": "assets/images/mate-imperial-croco-negro.png",
    "descripcion": "Una selección exclusiva de mates imperiales premium con texturas únicas. Podés elegir entre el cuero vacuno grabado estilo cocodrilo o el diseño repujado temático de Argentina. Piezas terminadas a mano con virola de alpaca cincelada.",
    "destacado": true,
    "detalles": [
      "Calabaza brasilera de alto espesor seleccionada",
      "Cuero vacuno legítimo grabado estilo croco o repujado",
      "Virola de alpaca pulida a espejo con cincelados de flores",
      "Costura reforzada a mano con hilo encerado"
    ],
    "variantes": [
      {
        "nombre": "IMPERIAL CUERO CROCO NEGRO",
        "imagen": "assets/images/mate-imperial-croco-negro.png",
        "precio": 40000
      },
      {
        "nombre": "IMPERIAL CUERO CROCO MARRON",
        "imagen": "assets/images/mate-imperial-croco-marron.png",
        "precio": 40000
      },
      {
        "nombre": "IMPERIAL ARGENTINA CUERO REPUJADO NEGRO",
        "imagen": "assets/images/mate-imperial-repujado-negro.png",
        "precio": 40000
      },
      {
        "nombre": "IMPERIAL CUERO CROCO ROSA",
        "imagen": "assets/images/mate-imperial-croco-rosa.png",
        "precio": 40000
      }
    ]
  },
  {
    "id": "mate-imperial-base-alpaca",
    "nombre": "IMPERIAL CON BASE DE ALPACA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 40000,
    "imagen": "assets/images/mate-imperial-base-alpaca-marron.png",
    "descripcion": "Nuestra mejor selección de mates imperiales con base de alpaca trabajada artesanalmente. Podés elegir entre cuero marrón repujado pelota, cuero negro liso, bases de alpaca calada (negro o marrón) o el exclusivo cuero labrado rosa con grabado 'Feliz Día Mamá'.",
    "destacado": true,
    "detalles": [
      "Base de alpaca cincelada y reforzada (sin patas expuestas)",
      "Virola superior de alpaca combinada",
      "Calabaza brasilera de alto espesor",
      "Costura fina reforzada hecha a mano"
    ],
    "variantes": [
      {
        "nombre": "CUERO MARRON REPUJADO PELOTA",
        "imagen": "assets/images/mate-imperial-base-alpaca-marron.png",
        "precio": 40000
      },
      {
        "nombre": "CUERO NEGRO LISO",
        "imagen": "assets/images/mate-imperial-base-alpaca-negro.png",
        "precio": 40000
      },
      {
        "nombre": "CON BASE DE ALPACA CALADA NEGRO",
        "imagen": "assets/images/mate-imperial-base-alpaca-calada-negro.png",
        "precio": 40000
      },
      {
        "nombre": "CON BASE DE ALPACA CALADA MARRON",
        "imagen": "assets/images/mate-imperial-base-alpaca-calada-marron.png",
        "precio": 40000
      },
      {
        "nombre": "CUERO LABRADO ROSA FELIZ DIA MAMA",
        "imagen": "assets/images/mate-imperial-labrado-rosa-mama.png",
        "precio": 40000
      }
    ]
  },
  {
    "id": "mate-imperial-botitas-alpaca",
    "nombre": "IMPERIAL CON BOTITAS DE ALPACA MARRON LISO",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 50000,
    "imagen": "assets/images/mate-imperial-botitas-alpaca.png",
    "descripcion": "Un diseño sumamente distinguido y tradicional. Este mate imperial de cuero marrón liso cuenta con cuatro patas reforzadas recubiertas con detalles ornamentales de alpaca (botitas), brindándole una presencia e imponencia únicas en la mesa.",
    "destacado": true,
    "detalles": [
      "Calabaza brasilera de alto espesor seleccionada",
      "Forrado en cuero vacuno marrón liso de primera",
      "Patas con apliques ornamentales de alpaca (botitas)",
      "Virola superior de alpaca cincelada artesanalmente"
    ],
    "variantes": [
      {
        "nombre": "MARRÓN LISO",
        "imagen": "assets/images/mate-imperial-botitas-alpaca.png",
        "precio": 50000
      }
    ]
  },
  {
    "id": "mate-imperial-base-alpaca-pelotas",
    "nombre": "IMPERIAL CON BASE DE ALPACA Y PELOTAS",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 45000,
    "imagen": "assets/images/mate-imperial-base-alpaca-pelotas-negro.png",
    "descripcion": "Un diseño sumamente llamativo y original. Este mate imperial cuenta con una base de alpaca con detalles esféricos de bronce (pelotitas) en la base de las patas. Disponible en cuero negro liso, cuero marrón o en textura animal print con pelo.",
    "destacado": true,
    "detalles": [
      "Base de alpaca trabajada a mano con pelotitas de bronce",
      "Virola superior de alpaca con cincelados criollos",
      "Calabaza brasilera de alto espesor seleccionada",
      "Opciones de cuero vacuno liso o cuero con pelo animal print"
    ],
    "variantes": [
      {
        "nombre": "CUERO NEGRO",
        "imagen": "assets/images/mate-imperial-base-alpaca-pelotas-negro.png",
        "precio": 45000
      },
      {
        "nombre": "CUERO MARRON",
        "imagen": "assets/images/mate-imperial-base-alpaca-pelotas-marron.png",
        "precio": 45000
      },
      {
        "nombre": "ANIMAL PRINT",
        "imagen": "assets/images/mate-imperial-base-alpaca-pelotas-animal.png",
        "precio": 45000
      }
    ]
  },
  {
    "id": "mate-imperial-algarrobo",
    "nombre": "MATE IMPERIAL DE ALGARROBO CON VIROLA DE ALPACA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 35000,
    "imagen": "assets/images/mate-imperial-algarrobo.png",
    "descripcion": "Mate premium tallado en madera maciza de algarrobo seleccionado de gran durabilidad y sabor noble. Cuenta con detalles de virola de alpaca y base firme.",
    "destacado": false,
    "detalles": [
      "Interior de madera de algarrobo macizo torneado",
      "No junta humedad ni hongos, muy duradero",
      "Cuerpo de madera maciza seleccionada de alta calidad",
      "Virola superior de alpaca premium calada o lisa"
    ]
  },
  {
    "id": "mate-imperial-azul-pelotas-bronce",
    "nombre": "IMPERIAL COLOR AZUL CON BASE DE PELOTAS DE BRONCE",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 50000,
    "imagen": "assets/images/imperial-azul-pelotas-bronce.png",
    "descripcion": "Mate Imperial de cuero teñido en azul profundo con base de pelotas metálicas y virola de alpaca cincelada. Una pieza de diseño única.",
    "destacado": false,
    "detalles": [
      "Cuero legítimo teñido en tono azul premium",
      "Base de alpaca con aplique de pelotitas de bronce",
      "Virola cincelada con motivos florales",
      "Interior de calabaza seleccionada de gran espesor"
    ]
  },
  {
    "id": "mate-imperial-animal-print-calabaza",
    "nombre": "IMPERIAL ANIMAL PRINT CALABAZA AHUECADA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 45000,
    "imagen": "assets/images/imperial-animal-print-calabaza.png",
    "descripcion": "Exclusivo mate Imperial con forrado en cuero de pelo natural con diseño Animal Print y virola de alpaca cincelada.",
    "destacado": false,
    "detalles": [
      "Cuero con pelo natural diseño animal print",
      "Virola de alpaca cincelada artesanalmente",
      "Base de apoyo de cuero legítimo",
      "Interior de calabaza brasilera de alto grosor"
    ]
  },
  {
    "id": "mate-imperial-roma-cincelado",
    "nombre": "IMPERIAL ROMA CON BASE COMPLETA CINCELADA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 35000,
    "imagen": "assets/images/imperial-roma-cincelado.png",
    "descripcion": "Mate Imperial modelo Roma, forrado en cuero con terminación repujada y base completa de alpaca totalmente cincelada.",
    "destacado": false,
    "detalles": [
      "Cuero vacuno con trabajo repujado",
      "Base completa de alpaca torneada y cincelada a mano",
      "Virola de alpaca con relieves",
      "Interior de calabaza premium"
    ]
  },
  {
    "id": "mate-imperial-cuero-jean",
    "nombre": "IMPERIAL CUERO JEAN CON INTERIOR DE ACERO",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 40000,
    "imagen": "assets/images/imperial-cuero-jean.png",
    "descripcion": "Mate Imperial forrado en cuero con textura estilo jean de color azul e interior térmico de acero inoxidable. Higiénico y moderno.",
    "destacado": false,
    "detalles": [
      "Forrado en cuero seleccionado con grabado textura Jean",
      "Interior de acero inoxidable doble pared térmico",
      "Virola de alpaca lisa",
      "Excelente base de 4 patas firmes"
    ]
  },
  {
    "id": "mate-torpedo-alpaca-calada",
    "nombre": "TORPEDO CON VIROLA DE ALPACA CALADA",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 40000,
    "imagen": "assets/images/torpedo-alpaca-calada-negro.png",
    "descripcion": "Un torpedo premium único en su tipo. Elaborado sobre calabaza brasilera de alto espesor, forrado en cuero vacuno con terminación repujada y costura cruzada a mano. Destaca su imponente virola de alpaca calada y cincelada con base de alpaca ancha.",
    "destacado": true,
    "detalles": [
      "Calabaza de excelente espesor y formato torpedo",
      "Cuero legítimo repujado cincelado",
      "Virola y base ancha de alpaca calada artesanalmente",
      "Costura reforzada a mano con hilo encerado"
    ],
    "variantes": [
      {
        "nombre": "NEGRO",
        "imagen": "assets/images/torpedo-alpaca-calada-negro.png",
        "precio": 40000
      },
      {
        "nombre": "MARRÓN",
        "imagen": "assets/images/torpedo-alpaca-calada-marron.png",
        "precio": 40000
      }
    ]
  },
  {
    "id": "mate-torpedo-algarrobo-alpaca",
    "nombre": "TORPEDO ALGARROBO CON VIROLA DE ALPACA CINCELADA",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 40000,
    "imagen": "assets/images/mate-torpedo-algarrobo-alpaca.png",
    "descripcion": "Mate premium tallado en madera maciza de algarrobo seleccionado de gran durabilidad y sabor noble. Cuenta con virola de alpaca cincelada artesanalmente.",
    "destacado": false,
    "detalles": [
      "Madera maciza de algarrobo torneado premium",
      "Virola de alpaca cincelada artesanalmente",
      "Cuerpo de madera maciza seleccionada de alta calidad",
      "Formato torpedo clásico"
    ]
  },
  {
    "id": "mate-torpedo-algarrobo-laqueado",
    "nombre": "TORPEDO DE ALGARROBO LAQUEADO VIROLA CINCELADA",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 40000,
    "imagen": "assets/images/mate-torpedo-algarrobo-laqueado.png",
    "descripcion": "Mate de algarrobo de exportación con terminación laqueada brillante, virola cincelada y base de apoyo de madera maciza.",
    "destacado": false,
    "detalles": [
      "Acabado laqueado brillante que protege la madera",
      "Virola cincelada de diseño patrio",
      "Excelente espesor de madera de algarrobo laqueada",
      "Base de apoyo súper estable"
    ]
  },
  {
    "id": "mate-camionero-algarrobo-premium",
    "nombre": "CAMIONERO DE ALGARROBO PREMIUM CON VIROLA DE ACERO",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 35000,
    "imagen": "assets/images/camionero-algarrobo-premium-real.jpg",
    "descripcion": "Mate Camionero 100% algarrobo macizo seleccionado con virola de acero inoxidable pulido de calidad premium.",
    "destacado": true,
    "detalles": [
      "Madera de algarrobo macizo estacionado de alto espesor",
      "Virola de acero inoxidable inoloro pulida a espejo",
      "Terminación pulida a mano con cera natural de abejas",
      "Excelente estabilidad y durabilidad noble"
    ]
  },
  {
    "id": "mate-termico-stanley-negro",
    "nombre": "MATE TÉRMICO CON VUELO COLOR NEGRO",
    "categoria": "mates",
    "subcategoria": "termico",
    "precio": 5000,
    "imagen": "assets/images/mate-termico-stanley-negro.png",
    "descripcion": "Mate térmico fabricado en acero inoxidable de doble pared de vacío (tipo Stanley), con virola/vuelo superior. Mantiene la temperatura perfecta por horas y es súper higiénico.",
    "destacado": true,
    "detalles": [
      "Acero inoxidable de doble pared de vacío de grado alimenticio",
      "Virola con vuelo estilo clásico",
      "Fácil de lavar, higiénico y no junta humedad",
      "Conserva calor/frío de la yerba por horas"
    ]
  },
  {
    "id": "mate-torpedo-repujado-borravino",
    "nombre": "TORPEDO DE CUERO REPUJADO BORRAVINO CON BASE DE ALPACA",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 30000,
    "imagen": "assets/images/torpedo-repujado-borravino.png",
    "descripcion": "Mate torpedo premium con interior de calabaza de gran grosor, forrado en cuero legítimo con trabajo repujado color borravino y una imponente virola de alpaca ancha con base de alpaca.",
    "destacado": false,
    "detalles": [
      "Calabaza brasilera de alto espesor",
      "Cuero vacuno legítimo labrado y repujado color borravino",
      "Virola y base ancha de alpaca reforzada",
      "Costura cruzada fina hecha a mano"
    ]
  },
  {
    "id": "bombilla-bombillon",
    "nombre": "BOMBILLÓN DE CAÑO LISO",
    "categoria": "bombillas",
    "subcategoria": "bombillon",
    "precio": 5000,
    "imagen": "assets/images/bombillon-acero-pala.png",
    "descripcion": "Bombillón de acero inoxidable con formato pico de loro y pala grande microperforada de alta capacidad de succión.",
    "destacado": true,
    "detalles": [
      "Caño de gran diámetro para un caudal óptimo",
      "Pala grande microperforada de excelente filtrado",
      "Terminaciones pulidas a espejo y difusor de calor",
      "Largo ideal de 20-21 cm para mates imperiales o camioneros"
    ],
    "variantes": [
      {
        "nombre": "ACERO CON PICO DE LORO Y PALA GRANDE",
        "imagen": "assets/images/bombillon-acero-pala.png",
        "precio": 5000
      }
    ]
  },
  {
    "id": "bombilla-bombillon-labrado-premium",
    "nombre": "BOMBILLÓN DE CAÑO LABRADO PREMIUM",
    "categoria": "bombillas",
    "subcategoria": "bombillon",
    "precio": 35000,
    "imagen": "assets/images/bombillon-labrado-trenzado.png",
    "descripcion": "Bombillón de altísima gama con caño labrado artesanalmente. Cuenta con virolas de bronce torneadas y detalles de orfebrería únicos. Disponible en diseño trenzado con pico dorado, diseño espiralado tradicional o diseño torsión con pala y pico dorados.",
    "destacado": true,
    "detalles": [
      "Trabajo de cincelado y labrado hecho a mano en alpaca",
      "Virolas y apliques de bronce de fundición soldados a mano",
      "Pala y pico pulidos a espejo o con acabados dorados",
      "Largo de 21 cm de gran caudal, ideal para mates imperiales"
    ],
    "variantes": [
      {
        "nombre": "DISEÑO TRENZADO CON PICO DORADO",
        "imagen": "assets/images/bombillon-labrado-trenzado.png",
        "precio": 35000
      },
      {
        "nombre": "DISEÑO ESPIRALADO",
        "imagen": "assets/images/bombillon-labrado-espiralado.png",
        "precio": 35000
      },
      {
        "nombre": "DISEÑO TORSION CON PALA DORADA",
        "imagen": "assets/images/bombillon-labrado-torsion.png",
        "precio": 35000
      }
    ]
  },
  {
    "id": "bombilla-acero-inoxidable",
    "nombre": "BOMBILLA DE ACERO INOXIDABLE CON FILTRO/PALA",
    "categoria": "bombillas",
    "subcategoria": "acero",
    "precio": 15000,
    "imagen": "assets/images/bombilla-acero-pala-bronce.png",
    "descripcion": "Bombillas de acero inoxidable 304 con filtro de pala de alta retención. Muy higiénicas y duraderas. Disponibles en versiones con caño liso y pico de bronce, o formato pico de loro en medidas de 16 cm y 19 cm.",
    "destacado": true,
    "detalles": [
      "Fabricada íntegramente en acero inoxidable AISI 304",
      "Filtro tipo pala soldada muy fácil de limpiar",
      "Pico curvo anatómico muy confortable",
      "Largo según variante: 16 cm o 19 cm"
    ],
    "variantes": [
      {
        "nombre": "CAÑO LISO CON PICO DE BRONCE",
        "imagen": "assets/images/bombilla-acero-pala-bronce.png",
        "precio": 15000
      },
      {
        "nombre": "PICO DE LORO 16CM",
        "imagen": "assets/images/bombilla-acero-pala-16cm.png",
        "precio": 15000
      },
      {
        "nombre": "PICO DE LORO 19CM",
        "imagen": "assets/images/bombilla-acero-pala-19cm.png",
        "precio": 15000
      }
    ]
  },
  {
    "id": "bombilla-chata-grabada",
    "nombre": "BOMBILLA CHATA GRABADA",
    "categoria": "bombillas",
    "subcategoria": "acero",
    "precio": 10000,
    "imagen": "assets/images/bombilla-chata-grabada-combo.png",
    "descripcion": "Bombilla chata clásica fabricada en acero inoxidable con grabado láser de alta precisión. Podés elegir tu diseño favorito: escudos de fútbol de Boca o River, diseño patrio de Argentina, Ruta 40, Copa del Mundo, o grabados especiales para regalar como 'Te amo papá' o 'Te amo mamá'.",
    "destacado": true,
    "detalles": [
      "Fabricada íntegramente en acero inoxidable 304",
      "Grabado láser indeleble de gran definición",
      "Doble anillo de bronce en el cuello",
      "Fácil succión y excelente filtrado de yerba"
    ],
    "variantes": [
      {
        "nombre": "BOCA JUNIORS",
        "imagen": "assets/images/bombilla-chata-boca.png",
        "precio": 10000
      },
      {
        "nombre": "RIVER PLATE",
        "imagen": "assets/images/bombilla-chata-river.png",
        "precio": 10000
      },
      {
        "nombre": "COPA DEL MUNDO",
        "imagen": "assets/images/bombilla-chata-copa.png",
        "precio": 10000
      },
      {
        "nombre": "ARGENTINA",
        "imagen": "assets/images/bombilla-chata-argentina.png",
        "precio": 10000
      },
      {
        "nombre": "TE AMO PAPÁ",
        "imagen": "assets/images/bombilla-chata-papa.png",
        "precio": 10000
      },
      {
        "nombre": "TE AMO MAMÁ",
        "imagen": "assets/images/bombilla-chata-mama.png",
        "precio": 10000
      },
      {
        "nombre": "RUTA 40",
        "imagen": "assets/images/bombilla-chata-ruta40.png",
        "precio": 10000
      }
    ]
  },
  {
    "id": "bombilla-chata-lisa",
    "nombre": "BOMBILLA CHATA LISA",
    "categoria": "bombillas",
    "subcategoria": "acero",
    "precio": 5000,
    "imagen": "assets/images/bombilla-chata-lisa-curva.png",
    "descripcion": "Bombilla chata lisa de acero inoxidable 304 pulido a espejo. Su diseño minimalista y elegante cuenta con un anillo difusor de calor en el cuello. Disponible en versión con curva o versión recta.",
    "destacado": true,
    "detalles": [
      "Fabricada en acero inoxidable AISI 304 higiénico",
      "Formato chato tradicional muy cómodo al uso",
      "Anillo difusor de calor de bronce",
      "Variante recta de 17 cm y variante curva de 19 cm"
    ],
    "variantes": [
      {
        "nombre": "CON CURVA",
        "imagen": "assets/images/bombilla-chata-lisa-curva.png",
        "precio": 5000
      },
      {
        "nombre": "RECTA",
        "imagen": "assets/images/bombilla-chata-lisa-recta.png",
        "precio": 5000
      }
    ]
  },
  {
    "id": "bombillon-alpaca-premium-loro",
    "nombre": "BOMBILLON PREMIUM ARTESANAL 100% ALPACA - PICO LORO",
    "categoria": "bombillas",
    "subcategoria": "alpaca",
    "precio": 20000,
    "imagen": "assets/images/bombillon-alpaca-premium-loro.png",
    "descripcion": "Exclusivo bombillón artesanal fabricado íntegramente en alpaca con pico en curva pronunciada (pico de loro) y detalles florales cincelados a mano.",
    "destacado": false,
    "detalles": [
      "Fabricación artesanal en alpaca premium",
      "Pico de loro curvado anatómico muy cómodo",
      "Cincelados tradicionales en el caño",
      "Filtro tipo pala de alta capacidad de succión"
    ]
  },
  {
    "id": "termo-argentina-360",
    "nombre": "TERMO GRABADO ARGENTINA 360",
    "categoria": "termos",
    "subcategoria": "negro",
    "precio": 35000,
    "imagen": "assets/images/termo-argentina-360.png",
    "descripcion": "Termo media manija de acero inoxidable de 1 litro con pintura texturada en negro mate. Cuenta con un exclusivo grabado láser de 360 grados temático de la Selección Argentina y motivos patrios.",
    "destacado": true,
    "detalles": [
      "Acero inoxidable doble pared de vacío (mantiene frío/calor por 24hs)",
      "Pintura rugosa texturada antideslizante negra",
      "Grabado láser de 360 grados de alta definición",
      "Media manija rebatible y tapón cebador de precisión"
    ]
  },
  {
    "id": "termo-media-manija-total-black",
    "nombre": "TERMO MEDIA MANIJA NEGRO TOTAL BLACK",
    "categoria": "termos",
    "subcategoria": "negro",
    "precio": 35000,
    "imagen": "assets/images/termo-media-manija-total-black.png",
    "descripcion": "Termo de acero inoxidable con pintura epoxy negro mate de alta resistencia, media manija rebatible y tapón cebador ergonómico.",
    "destacado": false,
    "detalles": [
      "Pintura siliconada de alta resistencia",
      "Conserva calor/frío por más de 20 horas",
      "Media manija para un agarre cómodo",
      "Capacidad: 1 Litro"
    ]
  },
  {
    "id": "termo-system-12-lts",
    "nombre": "TERMO SYSTEM 1L NEGRO CON MANIJA Y TAPAMATE",
    "categoria": "termos",
    "subcategoria": "negro",
    "precio": 35000,
    "imagen": "assets/images/termo-system-12-lts.png",
    "descripcion": "Termo de 1 litro con manija rígida lateral y tapón con sistema cebador hermético de alta precisión, incluye tapa que sirve como mate térmico.",
    "destacado": false,
    "detalles": [
      "Manija fija lateral de transporte cómodo",
      "Tapón cebador hermético a prueba de fugas",
      "Acero inoxidable 304 de doble capa",
      "Conserva calor por 24hs"
    ]
  },
  {
    "id": "matera-mesa-valija",
    "nombre": "MESA MATERA VALIJA 2 EN 1",
    "categoria": "materas",
    "subcategoria": "madera",
    "precio": 25000,
    "imagen": "assets/images/mesa-matera-valija.png",
    "descripcion": "Práctica mesa matera plegable fabricada en madera seleccionada que se convierte en valija para transportar tu termo, mate, yerbero y bombilla de manera segura y cómoda. Ideal para el parque, la plaza o tus viajes.",
    "destacado": true,
    "detalles": [
      "Fabricada en madera maciza pulida y tratada",
      "Formato 2 en 1 (Mesa de apoyo y Valija de transporte)",
      "Manija de agarre ergonómica",
      "Traba de seguridad metálica"
    ]
  },
  {
    "id": "canasta-cuero-grande",
    "nombre": "CANASTA 100% CUERO GRANDE REFORZADA",
    "categoria": "materas",
    "subcategoria": "canasta",
    "precio": 40000,
    "imagen": "assets/images/canasta-cuero-grande.png",
    "descripcion": "Canasta matera confeccionada en cuero legítimo de alta resistencia con terminación de costuras reforzadas a mano y remaches de bronce.",
    "destacado": false,
    "detalles": [
      "Cuero vacuno legítimo extra grueso seleccionado",
      "Costura doble reforzada de gran resistencia",
      "Remaches de bronce reforzados en manija y uniones",
      "Manija superior fija de gran comodidad"
    ]
  },
  {
    "id": "matera-media-canasta",
    "nombre": "MEDIA CANASTA MATERA DE CUERO",
    "categoria": "materas",
    "subcategoria": "canasta",
    "precio": 40000,
    "imagen": "assets/images/media-canasta-cuero-negro.png",
    "descripcion": "Media canasta matera fabricada en cuero legítimo vacuno con costuras reforzadas a mano en tiento y mango rígido. Ideal para transportar termo y mate de manera segura y cómoda. Disponible en colores Negro o Marrón Suela.",
    "destacado": false,
    "detalles": [
      "Cuero vacuno legítimo de excelente resistencia",
      "Costuras tradicionales reforzadas hechas a mano",
      "Manija fija rígida y división interna para termo y mate",
      "Tamaño práctico y compacto para uso diario"
    ],
    "variantes": [
      {
        "nombre": "NEGRA",
        "imagen": "assets/images/media-canasta-cuero-negro.png",
        "precio": 40000
      },
      {
        "nombre": "MARRÓN SUELA",
        "imagen": "assets/images/media-canasta-cuero-suela.png",
        "precio": 40000
      }
    ]
  },
  {
    "id": "mediacanasta-pelo-vacuno",
    "nombre": "MEDIACANASTA PREMIUM DE PELO VACUNO COLORES SURTIDOS",
    "categoria": "materas",
    "subcategoria": "canasta",
    "precio": 50000,
    "imagen": "assets/images/mediacanasta-pelo-vacuno.jpg",
    "descripcion": "Esta canasta viene con pelo natural, por lo cual presentan todas diferentes tonos y manchas, volviendo cada modelo único. En caso de querer un tono particular, una vez realizada la compra solicita foto de la misma a través de WhatsApp.",
    "destacado": true,
    "detalles": [
      "Pelo natural vacuno con estampados y colores únicos",
      "Costuras reforzadas a mano para máxima duración",
      "Manija rígida fija para un transporte cómodo y seguro",
      "Diseño premium con división interna"
    ]
  },
  {
    "id": "set-yerbero-negro-mate",
    "nombre": "SET DE YERBERO Y AZUCARERA NEGRO MATE",
    "categoria": "yerberos-azucareros",
    "subcategoria": "set",
    "precio": 25000,
    "imagen": "assets/images/set-yerbero-negro-mate.png",
    "descripcion": "Set de latas yerbera y azucarera con picos vertedores de plástico dosificadores de alta resistencia, revestidas en cuerina negra mate con costuras reforzadas.",
    "destacado": false,
    "detalles": [
      "Lata yerbera (grande) y lata azucarera (mediana)",
      "Picos vertedores plásticos antiderrames",
      "Revestimiento sintético negro mate de fácil limpieza",
      "Calce perfecto para bolsos y canastas"
    ]
  },
  {
    "id": "set-yerbero-acero",
    "nombre": "SET DE YERBERO Y AZUCARERA COLOR ACERO",
    "categoria": "yerberos-azucareros",
    "subcategoria": "set",
    "precio": 25000,
    "imagen": "assets/images/set-yerbero-acero.png",
    "descripcion": "Set de latas para yerba y azúcar con acabado color acero pulido, picos vertedores dosificadores superiores de alta resistencia.",
    "destacado": false,
    "detalles": [
      "Hojalata premium con recubrimiento color acero brillante",
      "Picos vertedores plásticos higiénicos",
      "Fácil de transportar y limpiar",
      "Diseño moderno y elegante"
    ]
  },
  {
    "id": "cosito-acero",
    "nombre": "COSITO PARA EL MATE DE ACERO INOXIDABLE",
    "categoria": "accesorios",
    "subcategoria": "limpieza",
    "precio": 10000,
    "imagen": "assets/images/cosito-acero.jpg",
    "descripcion": "El accesorio ideal para vaciar la yerba del mate de manera rápida, limpia y sin desperdicios. Fabricado 100% en acero inoxidable de alta calidad, duradero y fácil de lavar.",
    "destacado": false,
    "detalles": [
      "Fabricado íntegramente en acero inoxidable 304",
      "Facilita la limpieza del mate en un solo movimiento",
      "Resistente, higiénico y de larga vida útil"
    ]
  },
  {
    "id": "imperial-repujado-marron",
    "nombre": "IMPERIAL DE ALPACA CUERO REPUJADO MARRÓN",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 40000,
    "imagen": "assets/images/imperial-alpaca-repujado-marron.jpg",
    "descripcion": "Mate imperial premium fabricado con calabaza brasilera de alto espesor, forrado en cuero vacuno legítimo labrado con diseño repujado marrón y una hermosa virola de alpaca cincelada artesanalmente.",
    "destacado": false,
    "detalles": [
      "Calabaza brasilera de gran grosor",
      "Forrado en cuero legítimo repujado marrón",
      "Virola superior de alpaca cincelada a mano",
      "Base reforzada de excelente estabilidad"
    ]
  },
  {
    "id": "imperial-premium-chocolate",
    "nombre": "MATE IMPERIAL PREMIUM LISO CHOCOLATE BASE DE ALPACA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 40000,
    "imagen": "assets/images/imperial-premium-chocolate.jpg",
    "descripcion": "El mate definitivo. Cuenta con una virola de alpaca pulida a espejo con guarda trabajada, forrado en cuero liso premium color chocolate, base ancha de alpaca y cuatro delicadas pelotitas de bronce como soporte. Incluye bombilla pico de loro de acero inoxidable.",
    "destacado": true,
    "detalles": [
      "Guarda superior de alpaca cincelada",
      "Cuero vacuno liso premium color chocolate",
      "Base ancha de alpaca reforzada con pelotas de bronce",
      "Incluye bombilla pico de loro de acero inoxidable"
    ]
  },
  {
    "id": "torpedo-pelotitas-bronce",
    "nombre": "MATE TORPEDO CON PELOTITAS DE BRONCE Y VIROLA CINCELADA",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 30000,
    "imagen": "assets/images/torpedo-pelotitas-bronce.jpg",
    "descripcion": "Torpedo con base y virola de alpaca. La virola tiene distintos cinceles hechos a mano. Calabazas seleccionadas, forradas en cuero liso. Incluye bombilla de acero inoxidable con filtro de pala.",
    "destacado": false,
    "detalles": [
      "Calabaza seleccionada de excelente espesor",
      "Forrado en cuero liso de alta calidad",
      "Virola cincelada a mano y base de alpaca con pelotitas de bronce",
      "Incluye bombilla de acero inoxidable con filtro de pala"
    ],
    "variantes": [
      {
        "nombre": "CUERO NEGRO LISO",
        "imagen": "assets/images/torpedo-pelotitas-bronce.jpg",
        "precio": 30000
      },
      {
        "nombre": "CUERO MARRÓN LISO",
        "imagen": "assets/images/torpedo-pelotitas-bronce.jpg",
        "precio": 30000
      }
    ]
  },
  {
    "id": "torpedo-negro-interior-de-calabaza-virola-acero-boca-ancha-con-bombilla",
    "nombre": "TORPEDO NEGRO INTERIOR DE CALABAZA VIROLA ACERO BOCA ANCHA CON BOMBILLA",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 25000,
    "imagen": "assets/images/torpedo-negro-interior-de-calabaza-virola-acero-boca-ancha-con-bombilla.jpeg",
    "descripcion": "Excelente producto artesanal de primera calidad, ideal para disfrutar del ritual del mate.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "imperial-con-dije-de-bronce-sol-argentino-soldado-con-bombilla-de-regalo",
    "nombre": "IMPERIAL CON DIJE DE BRONCE SOL ARGENTINO SOLDADO CON BOMBILLA DE REGALO",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 45000,
    "imagen": "assets/images/imperial-con-dije-de-bronce-sol-argentino-soldado-con-bombilla-de-regalo.jpeg",
    "descripcion": "Excelente producto artesanal de primera calidad, ideal para disfrutar del ritual del mate.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "torpedo-criollo-guarda-de-alpaca-cincelada-interior-calabaza-con-bombilla-pico-loro",
    "nombre": "TORPEDO CRIOLLO, GUARDA DE ALPACA CINCELADA, INTERIOR CALABAZA CON BOMBILLA PICO LORO",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 55000,
    "imagen": "assets/images/torpedo-criollo-guarda-de-alpaca-cincelada-interior-calabaza-con-bombilla-pico-loro.jpg",
    "descripcion": "Torpedo  criollo base de cuero, con diferentes diseños tallados, color negro con interior calabaza.\r\n\r\nGuarda de alpaca cincelada.\r\n\r\nIncluye bombilla pico loro de acero inoxidable con filtro /pala.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "torpedo-de-alpaca-cincelada-interior-calabaza-animal-print-con-bombilla-de-regalo",
    "nombre": "TORPEDO DE ALPACA CINCELADA INTERIOR CALABAZA ANIMAL PRINT CON BOMBILLA DE REGALO",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 45000,
    "imagen": "assets/images/torpedo-de-alpaca-cincelada-interior-calabaza-animal-print-con-bombilla-de-regalo.jpg",
    "descripcion": "Torpedo de cuero con interior calabaza, guarda de alpaca cincelada.\r\n\r\nReforzado con patas rígidas",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "imperial-escudo-de-bronce-boca-guarda-de-alpaca",
    "nombre": "IMPERIAL ESCUDO DE BRONCE - BOCA, GUARDA DE ALPACA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 50000,
    "imagen": "assets/images/imperial-escudo-de-bronce-boca-guarda-de-alpaca.jpg",
    "descripcion": "Imperial interior calabaza con guarda de alpaca, con escudo en bronce de Boca soldado.\r\n\r\ncuero vacuno 100%",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "mate-torpedo-interior-acero-inoxidable-con-bombilla",
    "nombre": "MATE TORPEDO INTERIOR ACERO INOXIDABLE + BOMBILLA PICO DE LORO DE ACERO INOX CON FILTRO/PALA",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 35000,
    "imagen": "assets/images/mate-torpedo-interior-acero-inoxidable-con-bombilla.webp",
    "descripcion": "Mate Torpedo forrado en cuero con interior de acero inoxidable.\r\n\r\nIncluye bombilla pico de loro de acero inoxidable de regalo.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "termo-media-manija",
    "nombre": "TERMOS MEDIA MANIJA ACERO",
    "categoria": "termos",
    "subcategoria": "media-manija",
    "precio": 35000,
    "imagen": "assets/images/termo-media-manija.jpg",
    "descripcion": "Termo media manija de 1 litro y de acero inoxidable.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "termo-original-luminox-lumilagro-1-litro-pico-cebador-con-caja",
    "nombre": "TERMO ORIGINAL LUMINOX LUMILAGRO 1 LITRO PICO CEBADOR CON CAJA",
    "categoria": "termos",
    "subcategoria": "media-manija",
    "precio": 50000,
    "imagen": "assets/images/termo-original-luminox-lumilagro-1-litro-pico-cebador-con-caja.jpeg",
    "descripcion": "Excelente producto artesanal de primera calidad, ideal para disfrutar del ritual del mate.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "bombillon-de-alpaca-classic-con-pico-de-loro",
    "nombre": "BOMBILLON DE ALPACA \"CLASSIC\" CON PICO DE LORO",
    "categoria": "bombillas",
    "subcategoria": "alpaca",
    "precio": 15000,
    "imagen": "assets/images/bombillon-de-alpaca-classic-con-pico-de-loro.jpeg",
    "descripcion": "Bombillon sin diseños en el caño. caño grueso y pala ancha de alpaca\r\n\r\nPico de loro de bronce.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "termo-12-lts-pico-system-color-cobre",
    "nombre": "TERMO 1,2 LTS. PICO SYSTEM COLOR COBRE",
    "categoria": "termos",
    "subcategoria": "media-manija",
    "precio": 35000,
    "imagen": "assets/images/termo-12-lts-pico-system-color-cobre.jpeg",
    "descripcion": "termo color cobre con pico system y tapa para usar. omo mate.\r\n\r\n1,2 lts.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "vaso-quencher-de-1-2l-colores-surtidos",
    "nombre": "VASO QUENCHER DE 1.2L COLORES SURTIDOS",
    "categoria": "termos",
    "subcategoria": "vasos",
    "precio": 25000,
    "imagen": "assets/images/vaso-quencher-de-1-2l-colores-surtidos.jpeg",
    "descripcion": "TAPA ANTIVUELCO\r\n\r\nSORBETE DE PLASTICO\r\n\r\nCOLORES SURTIDOS",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "botella-flip-de-650ml-colores-surtidos",
    "nombre": "BOTELLA FLIP DE 650ML COLORES SURTIDOS",
    "categoria": "termos",
    "subcategoria": "vasos",
    "precio": 25000,
    "imagen": "assets/images/botella-flip-de-650ml-colores-surtidos.jpeg",
    "descripcion": "PICO VERTEDOR\r\n\r\nTAPA ANTIVUELCO\r\n\r\nCOLORES SURTIDOS",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "porta-mate-premium-para-la-palanca-de-cambio-reforzado-doble-costura",
    "nombre": "PORTA MATE DE ECO CUERO PARA LA PALANCA DE CAMBIO",
    "categoria": "accesorios",
    "subcategoria": "soporte",
    "precio": 5000,
    "imagen": "assets/images/porta-mate-premium-para-la-palanca-de-cambio-reforzado-doble-costura.jpeg",
    "descripcion": "porta mate de eco cuero. idéntico a los de cuero.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "pico-system-blanco",
    "nombre": "PICO SYSTEM BLANCO",
    "categoria": "accesorios",
    "subcategoria": "repuesto",
    "precio": 5000,
    "imagen": "assets/images/pico-system-blanco.jpeg",
    "descripcion": "Excelente producto artesanal de primera calidad, ideal para disfrutar del ritual del mate.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "porta-mate-de-cuero-vacuno-100-para-la-palanca-de-cambio-premium",
    "nombre": "PORTA MATE DE CUERO VACUNO PARA PALANCA DE CAMBIO(BORRAVINO Y NEGRO)",
    "categoria": "accesorios",
    "subcategoria": "soporte",
    "precio": 15000,
    "imagen": "assets/images/porta-mate-de-cuero-vacuno-100-para-la-palanca-de-cambio-premium.jpeg",
    "descripcion": "Porta mate artesanales de cuero\r\n\r\n10 cm de diámetro",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ],
    "variantes": [
      {
        "nombre": "BORRAVINO",
        "imagen": "assets/images/porta-mate-de-cuero-vacuno-100-para-la-palanca-de-cambio-premium.jpeg",
        "precio": 15000
      },
      {
        "nombre": "NEGRO",
        "imagen": "assets/images/porta-mate-de-cuero-vacuno-100-para-la-palanca-de-cambio-premium.jpeg",
        "precio": 15000
      }
    ]
  },
  {
    "id": "mochila-bolso-matero-chaulata-verde-enebro-con-detalles-en-suela",
    "nombre": "MOCHILA/BOLSO MATERO + CHAULATA  CON DETALLES EN SUELA",
    "categoria": "bolsos",
    "subcategoria": "mochila",
    "precio": 25000,
    "imagen": "assets/images/mochila-bolso-matero-chaulata-verde-enebro-con-detalles-en-suela.jpeg",
    "imagenes": [
      "assets/images/mochila-bolso-matero-chaulata-verde-enebro-con-detalles-en-suela.jpeg",
      "assets/images/mochila-bolso-matero-chaulata-verde-enebro-con-detalles-en-suela-2.jpeg"
    ],
    "descripcion": "Mochila con tiras para bolso color verde enebro, con detalles suela.\r\n\r\nincluye sujetador para bolso y yerbera grande y yerbera chica reforzadas por dentro.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "bolsito-viral-tik-tok-con-chaulata",
    "nombre": "BOLSO MATERO CUERINA PREMIUM CON SUJETADOR DE TERMO + YERBERO + AZUCARERO",
    "categoria": "bolsos",
    "subcategoria": "bolso",
    "precio": 25000,
    "imagen": "assets/images/bolsito-viral-tik-tok-con-chaulata.jpeg",
    "descripcion": "Bolsito de tela con chaulata.\r\n\r\nApto para termo stanley de 1,4",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "bolso-matero-tela-premiun-con-sujetador-de-termo-yerbero-azucarero-copia",
    "nombre": "BOLSO MATERO TELA PREMIUM CON SUJETADOR DE TERMO + YERBERO + AZUCARERO",
    "categoria": "bolsos",
    "subcategoria": "bolso",
    "precio": 25000,
    "imagen": "assets/images/bolso-matero-tela-premiun-con-sujetador-de-termo-yerbero-azucarero-copia.jpeg",
    "descripcion": "Bolsito de tela con chaulata",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "mochila-bolso-matero-animal-print-con-chaulatas",
    "nombre": "MOCHILA / BOLSO MATERO ANIMAL PRINT CON CHAULATAS",
    "categoria": "bolsos",
    "subcategoria": "mochila",
    "precio": 25000,
    "imagen": "assets/images/mochila-bolso-matero-animal-print-con-chaulatas.jpeg",
    "descripcion": "Incluye mochila/bolso color animal print con yerbero y azucarero haciendo juego.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "canastas-de-cuero-con-escudo-de-futbol-color-negro",
    "nombre": "CANASTAS DE CUERO CON ESCUDO DE FUTBOL COLOR NEGRO",
    "categoria": "materas",
    "subcategoria": "canasta",
    "precio": 40000,
    "imagen": "assets/images/canastas-de-cuero-con-escudo-de-futbol-color-negro.jpeg",
    "descripcion": "Excelente producto artesanal de primera calidad, ideal para disfrutar del ritual del mate.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "camionero-criollo-calabaza-laqueada-virola-acero-bombilla-de-acero",
    "nombre": "CAMIONERO CRIOLLO CALABAZA LAQUEADA VIROLA ACERO + BOMBILLA",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 30000,
    "imagen": "assets/images/camionero-criollo-calabaza-laqueada.jpeg",
    "descripcion": "Mate Camionero criollo de calabaza brasilera seleccionada forrada en cuero vacuno con virola de acero e incluye bombilla de regalo.",
    "destacado": true,
    "detalles": [
      "Calabaza brasilera de alto espesor laqueada",
      "Forrado en cuero vacuno vacuno vacuno seleccionado",
      "Virola de acero inoxidable",
      "Incluye bombilla de regalo"
    ]
  },
  {
    "id": "camionero-algarrobo-grabado-predisenados-bombilla",
    "nombre": "CAMIONERO ALGARROBO GRABADO PREDISEÑADOS + BOMBILLA",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 25000,
    "imagen": "assets/images/camionero-algarrobo-grabado-predisenados-bombilla.jpeg",
    "descripcion": "Mate Camionero de algarrobo con grabados temáticos prediseñados a láser e incluye bombilla.",
    "destacado": false,
    "detalles": [
      "Madera de algarrobo macizo",
      "Grabado láser de alta precisión",
      "Incluye bombilla de regalo",
      "Listo para regalar"
    ]
  },
  {
    "id": "matepa-gruesa-acero-con-sujetador",
    "nombre": "MATEPA GRUESA DE ACERO CON SUJETADOR",
    "categoria": "accesorios",
    "subcategoria": "repuesto",
    "precio": 10000,
    "imagen": "assets/images/accesorios-matepa-acero.png",
    "descripcion": "Tapa mate o matepa gruesa fabricada en acero inoxidable con sujetador incorporado. Ideal para cebar sin salpicaduras y mantener el calor.",
    "destacado": false,
    "detalles": [
      "Fabricado en acero inoxidable de alto espesor",
      "Sujetador lateral de agarre seguro",
      "Evita salpicaduras y mantiene la temperatura de la yerba"
    ]
  },
  {
    "id": "luz-mate-colores-surtidos",
    "nombre": "LUZ MATE COLORES SURTIDOS",
    "categoria": "accesorios",
    "subcategoria": "novedades",
    "precio": 5000,
    "imagen": "assets/images/accesorios-luz-mate.png",
    "descripcion": "Práctica luz LED para bombilla de mate. Ideal para cebar de noche o en viajes. Viene con pila incluida y gancho sujetador universal.",
    "destacado": false,
    "detalles": [
      "Luz LED blanca de alta visibilidad",
      "Pila incluida de larga duración",
      "Gancho de sujeción compatible con cualquier bombilla"
    ]
  },
  {
    "id": "mesa-plegable-de-madera",
    "nombre": "MESA PLEGABLE DE MADERA",
    "categoria": "accesorios",
    "subcategoria": "combos",
    "precio": 35000,
    "imagen": "assets/images/accesorios-mesa-madera.png",
    "descripcion": "Mesa matera plegable de madera de pino seleccionado con posa-termos y posa-mates integrados. Muy liviana y fácil de transportar.",
    "destacado": false,
    "detalles": [
      "Fabricada en madera de pino pulida y natural",
      "Diseño plegable súper compacto y liviano",
      "Espacio para termo, mate y accesorios"
    ]
  },
  {
    "id": "vaso-fernetero-liso-negro",
    "nombre": "VASO FERNETERO LISO NEGRO",
    "categoria": "termos",
    "subcategoria": "vasos",
    "precio": 5000,
    "imagen": "assets/images/termos-vaso-fernetero.png",
    "descripcion": "Vaso térmico fernetero de acero inoxidable con pintura texturada en negro mate. Excelente capacidad y aislamiento térmico doble pared para mantener tu bebida fría por horas.",
    "destacado": false,
    "detalles": [
      "Fabricado en acero inoxidable doble pared térmico",
      "Pintura siliconada negra de alta resistencia",
      "Ideal para fernet, cerveza y bebidas frías"
    ]
  },
  {
    "id": "yerba-canarias-edicion-especial-1kg",
    "nombre": "YERBA MATE CANARIAS EDICIÓN ESPECIAL",
    "descripcion": "Disfrutá del sabor auténtico de la Yerba Mate Canarias Edición Especial. Una selección premium importada desde Uruguay, ideal para cebadas de larga duración, con sabor persistente y equilibrado. Edición limitada elegida por El Buen Cebar.",
    "precio": 5000,
    "imagen": "assets/images/yerba-canarias-edicion-especial.png",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": true,
    "detalles": [
      "Yerba mate uruguaya premium",
      "Sabor suave y persistente",
      "Edición Especial de selección"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-canarias-edicion-especial.png",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-canarias-edicion-especial.png",
        "precio": 15000
      }
    ]
  },
  {
    "id": "yerba-canarias-jengibre-te-verde",
    "nombre": "YERBA MATE CANARIAS TÉ VERDE Y JENGIBRE",
    "descripcion": "La Yerba Mate Canarias con Té Verde y Jengibre combina el sabor clásico del mate con las propiedades del té verde y el toque picante del jengibre. Una mezcla refrescante y energizante, perfecta para quienes buscan algo diferente.",
    "precio": 5000,
    "imagen": "assets/images/yerba-canarias-jengibre-te-verde-500g.jpg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": true,
    "detalles": [
      "Con té verde y jengibre natural",
      "Sabor refrescante y energizante",
      "Excelente duración de cebadas"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-canarias-jengibre-te-verde-500g.jpg",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-canarias-jengibre-te-verde-1kg.jpg",
        "precio": 10000
      }
    ]
  },
  {
    "id": "yerba-baldo-tradicional-500g",
    "nombre": "YERBA MATE BALDO TRADICIONAL",
    "descripcion": "Yerba Mate Baldo Tradicional, una de las marcas más reconocidas de Uruguay. De hoja gruesa, con palo, de sabor robusto y duradero. Ideal para los amantes del mate clásico.",
    "precio": 5000,
    "imagen": "assets/images/yerba-baldo-tradicional-500g.png",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": true,
    "detalles": [
      "Yerba uruguaya con palo",
      "Sabor robusto y tradicional",
      "Excelente calidad seleccionada"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-baldo-tradicional-500g.png",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-baldo-tradicional-1kg.png",
        "precio": 15000
      },
      {
        "nombre": "5 KG",
        "imagen": "assets/images/yerba-baldo-tradicional-500g.jpg",
        "precio": 45000
      }
    ]
  },
  {
    "id": "yerba-pindare-1kg",
    "nombre": "YERBA PINDARE",
    "descripcion": "Yerba Mate Pindare, una yerba brasileña de alta calidad con sabor intenso y particular. Hojas finas, buena duración y aroma característico. Una elección diferente para el paladar exigente.",
    "precio": 5000,
    "imagen": "assets/images/yerba-pindare-1kg.jpg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": false,
    "detalles": [
      "Yerba brasileña importada",
      "Sabor intenso y aroma característico",
      "Molienda fina tradicional"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-pindare-1kg.jpg",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-pindare-1kg.jpg",
        "precio": 10000
      }
    ]
  },
  {
    "id": "yerba-rei-verde-tradicional",
    "nombre": "YERBA MATE REI VERDE TRADICIONAL",
    "descripcion": "Yerba Mate Rei Verde Tradicional, clásica uruguaya de calidad reconocida. Sabor equilibrado, suave al paladar, con buena duración de cebada. Perfecta para el consumo diario.",
    "precio": 5000,
    "imagen": "assets/images/yerba-rei-verde-tradicional-500g.jpg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": false,
    "detalles": [
      "Yerba uruguaya tradicional",
      "Sabor suave y equilibrado",
      "Perfecto para consumo diario"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-rei-verde-tradicional-500g.jpg",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-rei-verde-tradicional-1kg.jpg",
        "precio": 10000
      }
    ]
  },
  {
    "id": "yerba-verdecita-sin-palo-1kg",
    "nombre": "YERBA MATE VERDE CITA SIN PALO",
    "descripcion": "Yerba Mate Verde Cita Sin Palo, una yerba argentina de primer nivel. Sin palo para una infusión más limpia, con sabor fuerte y persistente. Muy apreciada por los cebadores exigentes.",
    "precio": 5000,
    "imagen": "assets/images/yerba-verdecita-sin-palo-1kg.jpg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": false,
    "detalles": [
      "Sin palo - sabor concentrado",
      "Yerba argentina de calidad",
      "Bajo contenido de polvo"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-verdecita-sin-palo-1kg.jpg",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-verdecita-sin-palo-1kg.jpg",
        "precio": 10000
      }
    ]
  },
  {
    "id": "yerba-canarias-serena",
    "nombre": "YERBA MATE CANARIAS SERENA",
    "descripcion": "Yerba Mate Canarias Serena, la línea suave de la reconocida marca uruguaya. Sabor delicado y equilibrado, con hoja fina y buena duración. Ideal para quienes prefieren un mate más tranquilo.",
    "precio": 5000,
    "imagen": "assets/images/yerba-canarias-serena-500g.png",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": false,
    "detalles": [
      "Yerba uruguaya tipo compuesta",
      "Línea suave de Canarias",
      "Sabor delicado y equilibrado"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-canarias-serena-500g.png",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-canarias-serena-1kg.jpg",
        "precio": 10000
      }
    ]
  },
  {
    "id": "yerba-rei-verde-premium",
    "nombre": "YERBA MATE REI VERDE PREMIUM",
    "descripcion": "Yerba Mate Rei Verde Premium, la versión de mayor calidad de la marca uruguaya. Hojas más finas y seleccionadas para una infusión excepcional y duradera.",
    "precio": 5000,
    "imagen": "assets/images/yerba-rei-verde-premium-export-500g.jpg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": false,
    "detalles": [
      "Yerba premium uruguaya",
      "Sabor refinado y superior",
      "Hojas seleccionadas de primera"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-rei-verde-premium-export-500g.jpg",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-rei-verde-premium-1kg.jpg",
        "precio": 10000
      }
    ]
  },
  {
    "id": "yerba-canarias-tradicional",
    "nombre": "YERBA MATE CANARIAS TRADICIONAL",
    "descripcion": "Yerba Mate Canarias Tradicional, la marca de yerba número uno de Uruguay. Compuesta principalmente por hojas seleccionadas de sabor intenso y duradero, libre de palo. Perfecta para cebar mates cargados de sabor.",
    "precio": 5000,
    "imagen": "assets/images/yerba-canarias-tradicional-500g.jpg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": true,
    "detalles": [
      "Yerba uruguaya tradicional sin palo",
      "Sabor intenso y de larga duración",
      "Importada directamente de Uruguay"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-canarias-tradicional-500g.jpg",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-canarias-tradicional-500g.jpg",
        "precio": 10000
      }
    ]
  },
  {
    "id": "yerba-rei-verde-clasica-blanco-500g",
    "nombre": "YERBA REI VERDE CLÁSICA PAQUETE BLANCO 500G",
    "descripcion": "Yerba Mate Rei Verde Clásica paquete blanco 500g. Molienda tradicional uruguaya de sabor suave y persistente.",
    "precio": 5000,
    "imagen": "assets/images/yerba-rei-verde-clasica-blanco-500g.jpeg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": false,
    "detalles": [
      "Yerba mate uruguaya de molienda fina",
      "Paquete blanco clásico 500g",
      "Sabor equilibrado y duradero"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-rei-verde-clasica-blanco-500g.jpeg",
        "precio": 5000
      }
    ]
  },
  {
    "id": "yerba-barao-500g",
    "nombre": "YERBA BARAO 500G",
    "descripcion": "Yerba Mate Barão 500g importada de Brasil. Sabor intenso y molienda fina de alta calidad.",
    "precio": 5000,
    "imagen": "assets/images/yerba-barao-500g.jpeg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": false,
    "detalles": [
      "Yerba mate brasileña importada",
      "Molienda fina premium",
      "Presentación 500g"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-barao-500g.jpeg",
        "precio": 5000
      }
    ]
  },
  {
    "id": "yerba-sara-coco-500g",
    "nombre": "YERBA SARA EDICIÓN LIMITADA COCO 500G",
    "descripcion": "Yerba Mate Sara Edición Limitada sabor Coco en presentación de 500g. Combinación de yerba uruguaya con toque de coco.",
    "precio": 5000,
    "imagen": "assets/images/yerba-sara-coco-500g.jpeg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": true,
    "detalles": [
      "Edición Limitada sabor Coco",
      "Yerba uruguaya de selección especial",
      "Presentación 500g"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-sara-coco-500g.jpeg",
        "precio": 5000
      }
    ]
  },
  {
    "id": "yerba-rei-verde-clasica-blanco-1kg",
    "nombre": "YERBA REI VERDE CLÁSICA PAQUETE BLANCO 1KG",
    "descripcion": "Yerba Mate Rei Verde Clásica paquete blanco 1kg. Molienda tradicional uruguaya de sabor rendidor.",
    "precio": 10000,
    "imagen": "assets/images/yerba-rei-verde-clasica-blanco-1kg.jpeg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": false,
    "detalles": [
      "Yerba mate uruguaya paquete de 1kg",
      "Molienda tradicional paquete blanco",
      "Rendimiento superior en cebadas"
    ],
    "variantes": [
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-rei-verde-clasica-blanco-1kg.jpeg",
        "precio": 15000
      }
    ]
  },
  {
    "id": "yerba-sara-extra-suave",
    "nombre": "YERBA MATE SARA EXTRA SUAVE",
    "descripcion": "Yerba Mate Sara Extra Suave importada de Uruguay. Sabor delicado y muy amable al paladar.",
    "precio": 5000,
    "imagen": "assets/images/yerba-sara-extra-suave.jpeg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": false,
    "detalles": [
      "Yerba uruguaya sin palo",
      "Sabor extra suave y bajo amargor",
      "Excelente durabilidad"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-sara-extra-suave.jpeg",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-sara-extra-suave.jpeg",
        "precio": 10000
      }
    ]
  },
  {
    "id": "yerba-sara-tradicional",
    "nombre": "YERBA MATE SARA TRADICIONAL",
    "descripcion": "Yerba Mate Sara Tradicional paquete rojo. La clásica yerba uruguaya de cuerpo intenso y carácter persistente.",
    "precio": 5000,
    "imagen": "assets/images/yerba-sara-tradicional.jpeg",
    "categoria": "yerbas",
    "subcategoria": "otras",
    "destacado": false,
    "detalles": [
      "Yerba uruguaya tradicional paquete rojo",
      "Sabor intenso y auténtico",
      "Hojas seleccionadas de máxima calidad"
    ],
    "variantes": [
      {
        "nombre": "500 GR",
        "imagen": "assets/images/yerba-sara-tradicional.jpeg",
        "precio": 5000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-sara-tradicional.jpeg",
        "precio": 10000
      }
    ]
  },
  {
    "id": "mate-perita-algarrobo-grande",
    "nombre": "MATE PERITA DE ALGARROBO BARNIZADO PREMIUM GRANDE",
    "categoria": "mates",
    "subcategoria": "madera",
    "precio": 5000,
    "imagen": "assets/images/mate-perita-de-algarrobo-barnizado-premium-grande.jpg",
    "descripcion": "Mate perita de algarrobo macizo barnizado de gran tamaño. Diseño ergonómico muy cómodo de agarrar y duradero.",
    "destacado": true,
    "detalles": [
      "Madera de algarrobo maciza seleccionada",
      "Terminación con barniz de alta protección",
      "Formato perita ergonómico amplio"
    ]
  },
  {
    "id": "mate-ranchero-artesanal-rosas",
    "nombre": "MATE RANCHERO ARTESANAL PINTADO A MANO - MANCHAS ROSAS",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 35000,
    "imagen": "assets/images/mate-ranchero-moldeado-y-pintado-a-mano-trabajo-todo-artesanal-manchas-rosas.jpeg",
    "descripcion": "Mate ranchero moldeado y pintado artesanalmente a mano con exclusivo diseño de manchas rosas y virola de alpaca.",
    "destacado": true,
    "detalles": [
      "Trabajo 100% artesanal moldeado a mano",
      "Diseño exclusivo pintado en tonos rosa",
      "Virola de alpaca trabajada a mano"
    ]
  },
  {
    "id": "box-malvinas-argentinas",
    "nombre": "BOX MALVINAS ARGENTINAS: CAJA + MATE CAMIONERO + BOMBILLA",
    "categoria": "accesorios",
    "subcategoria": "cajas",
    "precio": 30000,
    "imagen": "assets/images/box-malvinas-argentinas-caja-presentacion-camionero-algarrobo-brilloso-laqueado-bombilla-chata-todo-grabado.jpeg",
    "descripcion": "Set completo temático Malvinas Argentinas: incluye caja de presentación grabada, mate camionero de algarrobo laqueado y bombilla chata grabada.",
    "destacado": true,
    "detalles": [
      "Caja de madera con grabado temático",
      "Mate camionero de algarrobo laqueado",
      "Bombilla chata de acero inoxidable"
    ]
  },
  {
    "id": "box-harry-potter",
    "nombre": "BOX TEMÁTICO HARRY POTTER: CAJA + MATE CAMIONERO + BOMBILLA",
    "categoria": "accesorios",
    "subcategoria": "cajas",
    "precio": 30000,
    "imagen": "assets/images/box-harry-potter-caja-presentaci-n-camionero-laqueado-brilloso-y-bombilla-chata-todo-grabado.jpeg",
    "descripcion": "Box especial para fanáticos de Harry Potter: caja de regalo grabada con motivos del colegio Hogwarts, mate camionero laqueado y bombilla chata grabada.",
    "destacado": true,
    "detalles": [
      "Grabado láser temático de alta precisión",
      "Mate de algarrobo laqueado brillante",
      "Presentación lista para regalar"
    ]
  },
  {
    "id": "box-boca-juniors",
    "nombre": "BOX BOCA JUNIORS: CAJA PRESENTACIÓN + MATE CAMIONERO + BOMBILLA",
    "categoria": "accesorios",
    "subcategoria": "cajas",
    "precio": 30000,
    "imagen": "assets/images/box-boca-juniors-caja-presentacion-camionero-algarrobo-brilloso-laqueado-bombilla-chata.jpeg",
    "descripcion": "Combo xeneize de regalo: caja de presentación personalizada con escudo de Boca Juniors, mate camionero de algarrobo laqueado y bombilla chata.",
    "destacado": true,
    "detalles": [
      "Temática oficial Boca Juniors",
      "Mate de algarrobo laqueado de alta terminación",
      "Caja rígida protectora grabada"
    ]
  },
  {
    "id": "box-river-plate",
    "nombre": "BOX RIVER PLATE: CAJA PRESENTACIÓN + MATE CAMIONERO + BOMBILLA",
    "categoria": "accesorios",
    "subcategoria": "cajas",
    "precio": 30000,
    "imagen": "assets/images/box-river-plate-caja-presentacion-camionero-algarrobo-brilloso-laqueado-bombilla-chata.jpeg",
    "descripcion": "Combo millonario de regalo: caja de presentación grabada con escudo de River Plate, mate camionero de algarrobo laqueado y bombilla chata.",
    "destacado": true,
    "detalles": [
      "Temática oficial River Plate",
      "Mate de algarrobo laqueado brillante",
      "Caja de presentación grabada a láser"
    ]
  },
  {
    "id": "caja-presentacion-feliz-dia-mama",
    "nombre": "CAJA PRESENTACIÓN GRABADA FELIZ DÍA DE LA MADRE",
    "categoria": "accesorios",
    "subcategoria": "cajas",
    "precio": 15000,
    "imagen": "assets/images/caja-presentacion-grabada-feliz-dia-de-la-madre-para-mate-y-bombilla-con-sujetador-y-tela-de-pana.jpg",
    "descripcion": "Exclusiva caja de madera lustrada grabada con temática Día de la Madre, interior forrado en tela de pana con sujetadores para mate y bombilla.",
    "destacado": true,
    "detalles": [
      "Madera seleccionada con grabado láser de alta precisión",
      "Interior revestido en suave tela de pana",
      "Sujetadores elásticos para mate y bombilla"
    ]
  },
  {
    "id": "bombilla-grabada-te-amo-mama",
    "nombre": "BOMBILLA CHATA GRABADA TE AMO MAMÁ CON DIJE DE BRONCE",
    "categoria": "bombillas",
    "subcategoria": "acero",
    "precio": 5000,
    "imagen": "assets/images/bombilla-grabada-te-amo-mam-pico-curva-de-acero-inox-chata-con-dije-de-bronce.jpeg",
    "descripcion": "Bombilla chata de acero inoxidable de 19 cm con pico curvo ergonométrico, grabado con la leyenda 'Te Amo Mamá' y aplique de dije en bronce.",
    "destacado": true,
    "detalles": [
      "Acero inoxidable AISI 304 higiénico y lavable",
      "Pico curvo anatómico muy confortable",
      "Aplique ornamental en bronce cincelado"
    ]
  },
  {
    "id": "imperial-fleje-acero-negro-mama",
    "nombre": "MATE IMPERIAL NEGRO GRABADO DÍA DE LA MADRE «TE AMO MAMÁ»",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 25000,
    "imagen": "assets/images/imperial-fleje-y-virola-de-acero-interior-calabaza-color-negro-grabado-d-a-de-la-madre.jpeg",
    "descripcion": "Edición especial Día de la Madre: Mate imperial con virola de acero inoxidable grabada a láser con la frase 'Te amo Mamá - Que tus mates sean eternos', fleje reforzado y forrado en cuero vacuno negro mate.",
    "destacado": true,
    "detalles": [
      "Grabado láser especial Día de la Madre 'Te Amo Mamá'",
      "Fleje y virola de acero inoxidable pulido",
      "Calabaza brasilera seleccionada forrada en cuero vacuno negro"
    ]
  },
  {
    "id": "box-indio-solari",
    "nombre": "BOX TEMÁTICO INDIO SOLARI: CAJA + MATE CAMIONERO + BOMBILLA",
    "categoria": "accesorios",
    "subcategoria": "cajas",
    "precio": 30000,
    "imagen": "assets/images/box-indio-solari-caja-presentaci-n-camionero-laqueado-brilloso-y-bombilla-chata-todo-grabado.jpeg",
    "descripcion": "Edición especial para fanáticos del Indio Solari: caja de madera grabada, mate camionero de algarrobo laqueado y bombilla chata grabada.",
    "destacado": true,
    "detalles": [
      "Grabado temático exclusivo Indio Solari",
      "Mate camionero de algarrobo laqueado a fuego",
      "Bombilla de acero inoxidable de regalo"
    ]
  },
  {
    "id": "box-los-simpsons",
    "nombre": "BOX TEMÁTICO LOS SIMPSONS: CAJA + MATE CAMIONERO + BOMBILLA",
    "categoria": "accesorios",
    "subcategoria": "cajas",
    "precio": 30000,
    "imagen": "assets/images/box-los-simpsons-caja-presentaci-n-camionero-laqueado-brilloso-y-bombilla-chata-todo-grabado.jpeg",
    "descripcion": "Set temático de regalo Los Simpsons: incluye caja rígida de madera grabada con motivos de la serie, mate camionero laqueado y bombilla chata.",
    "destacado": true,
    "detalles": [
      "Grabado láser de alta definición con personajes",
      "Mate camionero laqueado resistente al uso cotidiano",
      "Excelente terminación y presentación"
    ]
  },
  {
    "id": "combo-messi-grabado",
    "nombre": "COMBO LIONEL MESSI 10: CAJA PRESENTACIÓN + MATE + BOMBILLA",
    "categoria": "accesorios",
    "subcategoria": "cajas",
    "precio": 30000,
    "imagen": "assets/images/box-messi-foto-grabado-caja-presentacion-camionero-algarrobo-brilloso-laqueado-bombilla-chata.jpeg",
    "descripcion": "Set homenaje al capitán de la Selección Argentina Lionel Messi: caja con grabado del 10, mate camionero de algarrobo y bombilla chata.",
    "destacado": true,
    "detalles": [
      "Grabado temático de Lionel Messi y la 10",
      "Mate de algarrobo macizo pulido y laqueado",
      "Caja protectora con sujetadores de pana"
    ]
  },
  {
    "id": "termo-media-manija-penales-inglaterra",
    "nombre": "TERMO MEDIA MANIJA NEGRO - GRABADO LISTA DE PENALES INGLATERRA",
    "categoria": "termos",
    "subcategoria": "negro",
    "precio": 35000,
    "imagen": "assets/images/termo-media-manija-negro-grabado-lista-de-penales-inglaterra.jpeg",
    "descripcion": "Termo media manija de acero inoxidable 1 Litro con acabado mate texturado negro y exclusivo grabado láser 360 de la histórica definición por penales contra Inglaterra.",
    "destacado": true,
    "detalles": [
      "Acero inoxidable de doble pared insulada",
      "Conserva agua caliente por más de 20hs",
      "Grabado láser 360º temático Selección Argentina"
    ]
  },
  {
    "id": "lata-yerbera-baldo-visor",
    "nombre": "LATA YERBERA BALDO 500G CON PICO VERTEDOR Y VISOR LATERAL",
    "categoria": "accesorios",
    "subcategoria": "yerberos",
    "precio": 35000,
    "imagen": "assets/images/lata-yerbera-baldo-500gr-con-pico-vertedor-y-visor-lateral-cierre-herm-tico.jpeg",
    "descripcion": "Lata yerbera oficial Baldo de 500g con pico vertedor plástico, visor de nivel transparente lateral y tapa de cierre hermético.",
    "destacado": true,
    "detalles": [
      "Cierre hermético antihumedad",
      "Pico vertedor cómodo para servir yerba",
      "Visor de acrílico transparente para ver la carga"
    ]
  },
  {
    "id": "combo-viajero-negro-completo",
    "nombre": "COMBO MATERO VIAJERO NEGRO: BOLSO + TERMO + YERBERO + AZUCARERO",
    "categoria": "combos",
    "subcategoria": "sets",
    "precio": 30000,
    "imagen": "assets/images/combo-viajero-color-negro-mate-simil-con-vuelo-bolso-matero-grande-con-sujetador-para-termo-yerbero-azucarero.jpeg",
    "descripcion": "Set completo viajero de mate: incluye bolso matero reforzado con sujetadores elásticos, mate con vuelo térmico, yerbero y azucarero haciendo juego.",
    "destacado": true,
    "detalles": [
      "Bolso matero rígido con correa ajustable",
      "Incluye mate térmico con vuelo",
      "Set completo yerbero y azucarero en negro mate"
    ]
  },
  {
    "id": "bombillon-copa-del-mundo",
    "nombre": "BOMBILLÓN COPA DEL MUNDO ALPACA Y BRONCE",
    "categoria": "bombillas",
    "subcategoria": "alpaca",
    "precio": 25000,
    "imagen": "assets/images/bombillon-copa-del-mundo-copa-grande-de-alpaca-y-bronce.jpeg",
    "descripcion": "Exclusivo bombillón de alpaca premium de 19 cm con dije esculpido de la Copa del Mundo en bronce macizo y filtro tipo cuchara de alta succión.",
    "destacado": true,
    "detalles": [
      "Fabricado en alpaca pulida a espejo",
      "Dije tridimensional de la Copa del Mundo en bronce",
      "Excelente flujo de aire y filtrado"
    ]
  },
  {
    "id": "botella-antivuelco-penales-inglaterra",
    "nombre": "BOTELLA ANTIVUELCO NEGRA GRABADA LISTA DE PENALES INGLATERRA",
    "categoria": "termos",
    "subcategoria": "botellas",
    "precio": 25000,
    "imagen": "assets/images/botella-antivuelco-grabada-lista-de-penales-inglatera-color-negro.jpeg",
    "descripcion": "Botella térmica deportiva antivuelco de acero inoxidable grabada con la histórica lista de penales contra Inglaterra en el Mundial 1998.",
    "destacado": true,
    "detalles": [
      "Base antideslizante con traba de seguridad",
      "Pico vertedor deportivo y manija de agarre",
      "Grabado láser inalterable"
    ]
  },
  {
    "id": "imperial-full-alpaca-argentina",
    "nombre": "MATE IMPERIAL FULL ALPACA BANDERA ARGENTINA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 40000,
    "imagen": "assets/images/imperial-premium-full-alpaca-bandera-de-argentina-celeste-y-blanco.jpg",
    "descripcion": "Edición especial de lujo: Mate imperial forrado en cuero de primera con virola y guarda completa cincelada en alpaca con diseño patriótico celeste y blanco.",
    "destacado": true,
    "detalles": [
      "Guarda y virola en alpaca pulida a espejo",
      "Calabaza brasilera seleccionada por grosor",
      "Diseño exclusivo Selección Argentina"
    ]
  },
  {
    "id": "imperial-cuero-vaquita-alpaca",
    "nombre": "MATE IMPERIAL CUERO VAQUITA BLANCO Y NEGRO",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 40000,
    "imagen": "assets/images/mate-imperial-cuero-vaquita-blanco-y-negro-guarda-de-alpaca-calabaza-tama-o-mediano.jpg",
    "descripcion": "Exclusivo mate imperial forrado en cuero vacuno natural con pelo estilo vaquita (blanco y negro) y virola cincelada de alpaca.",
    "destacado": true,
    "detalles": [
      "Cuero con pelo natural diseño vaquita",
      "Virola de alpaca pulida con motivos artesanales",
      "Interior de calabaza brasilera de alto espesor"
    ]
  },
  {
    "id": "imperial-guarda-alpaca-rosa",
    "nombre": "MATE IMPERIAL DE CUERO ROSA CON GUARDA DE ALPACA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 30000,
    "imagen": "assets/images/imperial-guarda-de-alpaca-color-rosa-int-calabaza.jpg",
    "descripcion": "Mate imperial forrado en cuero curtido en tono rosa pastel con virola y guarda cincelada de alpaca premium.",
    "destacado": true,
    "detalles": [
      "Cuero teñido en tono rosa exclusivo",
      "Virola de alpaca cincelada a mano",
      "Calabaza seleccionada de gran rendimiento"
    ]
  },
  {
    "id": "imperial-grabado-racing-club",
    "nombre": "MATE IMPERIAL GRABADO RACING CLUB DE AVELLANEDA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 30000,
    "imagen": "assets/images/imperial-cuero-alpaca-calabaza-grabado-racing-club.jpeg",
    "descripcion": "Mate imperial para fanáticos de Racing Club: forrado en cuero vacuno negro con virola de alpaca grabada a láser con escudo y leyendas del club.",
    "destacado": true,
    "detalles": [
      "Escudo de Racing Club grabado con gran detalle",
      "Virola de alpaca y cuero vacuno legítimo",
      "Calabaza brasilera de pared gruesa"
    ]
  },
  {
    "id": "canasta-cuero-azul-afa",
    "nombre": "CANASTA MATERA DE CUERO AZUL AFA Y SELECCIÓN",
    "categoria": "materas",
    "subcategoria": "cuero",
    "precio": 40000,
    "imagen": "assets/images/canasta-de-100-cuero-azul-con-logos-de-afa-y-escudo-premium-con-division.jpeg",
    "descripcion": "Canasta matera fabricada 100% en cuero legítimo color azul marino con escudos y logos gravados de AFA y la Selección Argentina, con división interior.",
    "destacado": true,
    "detalles": [
      "100% cuero vacuno reinforced",
      "División interna rígida para termo y frascos",
      "Manija y costuras industriales de alta resistencia"
    ]
  },
  {
    "id": "set-asado-valijita-3pzas",
    "nombre": "SET DE ASADO CERRADO VALIJITA (PLATO, CUCHILLO Y TENEDOR)",
    "categoria": "accesorios",
    "subcategoria": "asado",
    "precio": 20000,
    "imagen": "assets/images/set-de-asado-cerrado-valijita-plato-cuchillo-y-tenedor.jpeg",
    "descripcion": "Estuche valijita matera/asado de cuerina con cierre que incluye plato de madera dura de alparrobo o eucalipto, cuchillo y tenedor de acero inox.",
    "destacado": true,
    "detalles": [
      "Estuche valijita con cierre hermético",
      "Incluye plato de madera lustrada",
      "Cuchillo y tenedor parrilleros de acero"
    ]
  },
  {
    "id": "imperial-algarrobo-papa-eternos",
    "nombre": "MATE IMPERIAL DE ALGARROBO GRABADO EL MEJOR PAPÁ DEL MUNDO",
    "categoria": "mates",
    "subcategoria": "madera",
    "precio": 25000,
    "imagen": "assets/images/imperial-de-algarrobo-grabado-el-mejor-papa-del-mundo-que-tus-mates-sean-eternos-guarda-de-alpaca.jpeg",
    "descripcion": "Mate imperial de algarrobo macizo con virola de acero inoxidable grabada a láser con la frase 'El mejor papá del mundo - Que tus mates sean eternos'.",
    "destacado": true,
    "detalles": [
      "Algarrobo seleccionado barnizado de alta calidad",
      "Virola de acero inox con grabado láser profundo",
      "Ideal para regalo del Día del Padre"
    ]
  },
  {
    "id": "imperial-grabado-boca-libertadores",
    "nombre": "MATE IMPERIAL GRABADO BOCA JUNIORS COPA LIBERTADORES",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 30000,
    "imagen": "assets/images/imperial-grabado-boca-libertadores.jpeg",
    "descripcion": "Mate imperial forrado en cuero vacuno negro con virola de alpaca grabada a láser con las Copas Libertadores de Boca Juniors.",
    "destacado": true,
    "detalles": [
      "Edición homenaje Copas Libertadores Boca Juniors",
      "Virola de alpaca pulida e interior de calabaza brasilera",
      "Base de 4 patas reforzadas"
    ]
  },
  {
    "id": "imperial-grabado-independiente",
    "nombre": "MATE IMPERIAL GRABADO CLUB ATLÉTICO INDEPENDIENTE",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 30000,
    "imagen": "assets/images/imperial-grabado-club-atl-tico-independiente.jpeg",
    "descripcion": "Mate imperial forrado en cuero de primera calidad con virola de alpaca grabada a láser con el escudo oficial del Rey de Copas Independiente.",
    "destacado": true,
    "detalles": [
      "Grabado láser del escudo de Independiente",
      "Calabaza brasilera de alto grosor",
      "Virola de alpaca pulida a espejo"
    ]
  },
  {
    "id": "termo-media-manija-corazon-campeon",
    "nombre": "TERMO MEDIA MANIJA NEGRO - GRABADO CORAZÓN DE CAMPEÓN",
    "categoria": "termos",
    "subcategoria": "negro",
    "precio": 35000,
    "imagen": "assets/images/termo-media-manija-negro-grabado-coraz-n-de-campe-n.jpeg",
    "descripcion": "Termo media manija de acero inoxidable 1L texturado negro mate con grabado 360 del escudo de la Selección Argentina y las 3 estrellas 'Corazón de Campeón'.",
    "destacado": true,
    "detalles": [
      "Acero inoxidable insulado de doble pared",
      "Mantención térmica frío/calor 24hs",
      "Grabado 360º de alta calidad"
    ]
  },
  {
    "id": "set-cubiertos-asado-rosmania-12pzas",
    "nombre": "SET DE CUBIERTOS ASADO ESTILO ALEMANIA ROSMANIA - 12 PIEZAS",
    "categoria": "accesorios",
    "subcategoria": "asado",
    "precio": 35000,
    "imagen": "assets/images/set-de-cubiertos-asado-estilo-alemania-rosmania-12-piezas.jpeg",
    "descripcion": "Juego completo de cubiertos para asado de 12 piezas (6 cuchillos y 6 tenedores) de acero inoxidable premium con mango de madera estilo Alemania.",
    "destacado": true,
    "detalles": [
      "6 cuchillos parrilleros de filo serrado",
      "6 tenedores de acero inoxidable",
      "Empuñadura de madera noble reforzada con remaches"
    ]
  },
  {
    "id": "bombillon-recto-premium-alpaca",
    "nombre": "BOMBILLÓN RECTO PREMIUM PICO DE ALPACA Y BRONCE",
    "categoria": "bombillas",
    "subcategoria": "alpaca",
    "precio": 25000,
    "imagen": "assets/images/bombillon-recto-premium-pico-de-alpaca-ca-o-cincelado-doble-dije-de-bronce-pala-ancha-grande-cuchara.jpg",
    "descripcion": "Bombillón recto artesanal de 19 cm en alpaca maciza con caño cincelado, doble dije de bronce esculpido y pala ancha filtro cuchara.",
    "destacado": true,
    "detalles": [
      "100% alpaca premium cincelada a mano",
      "Doble dije ornamental de bronce",
      "Filtro tipo cuchara de fácil limpieza"
    ]
  },
  {
    "id": "canasta-cuero-azul-boca-juniors",
    "nombre": "CANASTA MATERA DE CUERO AZUL BOCA JUNIORS",
    "categoria": "materas",
    "subcategoria": "cuero",
    "precio": 40000,
    "imagen": "assets/images/canasta-de-100-cuero-azul-con-logos-de-boca-juniors-y-escudo-premium-con-division.jpg",
    "descripcion": "Canasta matera 100% cuero vacuno legítimo azul marino con escudos y logos gravados de Boca Juniors y división interior rígida.",
    "destacado": true,
    "detalles": [
      "100% cuero vacuno reinforced",
      "Escudos grabados a fuego de Boca Juniors",
      "División rígida de separación interna"
    ]
  },
  {
    "id": "canasta-afa-celeste-cuero-reforzado",
    "nombre": "CANASTA MATERA CELESTE AFA ARGENTINA CUERO REFORZADO",
    "categoria": "materas",
    "subcategoria": "cuero",
    "precio": 40000,
    "imagen": "assets/images/canasta-afa-argentina-color-celeste-cuero-grueso-reforzado-y-doble-costura.jpeg",
    "descripcion": "Canasta matera de cuero vacuno grueso en tono celeste patria con logos de AFA, doble costura y manija reforzada con remaches.",
    "destacado": true,
    "detalles": [
      "Cuero vacuno grueso color celeste Selección",
      "Doble costura e hilos industriales",
      "Espacio amplio para termo Stanley o Lumilagro de 1.3L"
    ]
  },
  {
    "id": "canasta-cuero-pelos-premium",
    "nombre": "CANASTA MATERA DE CUERO VACUNO CON PELO NATURAL",
    "categoria": "materas",
    "subcategoria": "cuero",
    "precio": 40000,
    "imagen": "assets/images/canasta-de-cuero-con-pelos-premium-con-division.jpeg",
    "descripcion": "Exclusiva canasta matera artesanal confeccionada en cuero vacuno natural con pelo, manchas surtidas únicas y división interior.",
    "destacado": true,
    "detalles": [
      "Cuero vacuno legítimo con pelo natural",
      "Diseño único e irrepetible por pieza",
      "Manija de cuero reforzada con remaches metálicos"
    ]
  },
  {
    "id": "canasta-cuerina-negro-croco",
    "nombre": "CANASTA MATERA CUERO CROCO NEGRO DOBLE COSTURA",
    "categoria": "materas",
    "subcategoria": "ecocuero",
    "precio": 20000,
    "imagen": "assets/images/canasta-de-cuerina-color-negro-cuero-croco-doble-costura-premium.jpeg",
    "descripcion": "Canasta matera rígida en ecocuero textura croco negro con doble costura reforzada, manija de agarre ergonómica y división interna.",
    "destacado": true,
    "detalles": [
      "Ecocuero de alta densidad con textura cocodrilo",
      "Base rígida antideslizante",
      "División para termo y frascos yerbero/azucarero"
    ]
  },
  {
    "id": "bolso-matero-bordo-river-plate",
    "nombre": "BOLSO MATERO COLOR BORDÓ CON ESCUDO DE RIVER PLATE",
    "categoria": "bolsos",
    "subcategoria": "bolsos",
    "precio": 20000,
    "imagen": "assets/images/bolso-bordo-river.jpeg",
    "descripcion": "Bolso matero reforzado en color bordó con escudo oficial de River Plate, incluye sujetador para termo, yerbero y azucarero.",
    "destacado": true,
    "detalles": [
      "Confeccionado con materiales impermeables y lavables",
      "Sujetador elástico interior para fijar el termo",
      "Incluye juego de latas yerbera y azucarera a tono",
      "Correa ajustable para llevar al hombro o cruzado"
    ]
  },
  {
    "id": "combo-bolso-boca-yerbero-azucarero",
    "nombre": "COMBO BOLSO MATERO AZUL BOCA JUNIORS + YERBERO + AZUCARERO",
    "categoria": "combos",
    "subcategoria": "sets",
    "precio": 25000,
    "imagen": "assets/images/combo-bolso-clasico-tela-matero-grande-con-sujetador-para-termo-yerbero-azucarero-color-azul-con-escudo-de-boca-juniors-tela.jpg",
    "descripcion": "Combo completo x3 piezas: bolso matero azul xeneize con escudo de Boca Juniors, lata yerbera y lata azucarera haciendo juego.",
    "destacado": true,
    "detalles": [
      "Bolso térmico grande con espacio para termo de 1.5L",
      "Incluye yerbero y azucarero con pico vertedor",
      "Estampa oficial Boca Juniors"
    ]
  },
  {
    "id": "canasta-cuerina-animal-print",
    "nombre": "CANASTA MATERA DE CUERINA ANIMAL PRINT CON DIVISIÓN",
    "categoria": "materas",
    "subcategoria": "ecocuero",
    "precio": 20000,
    "imagen": "assets/images/canasta-de-cuerina-animal-print-con-division-en-el-medio.jpeg",
    "descripcion": "Canasta matera confeccionada en ecocuero estampado animal print jaguar/leopardo con división central reforzada.",
    "destacado": true,
    "detalles": [
      "Ecocuero estampado animal print exclusivo",
      "Manija reforzada con doble costura",
      "División media para estabilidad del termo"
    ]
  },
  {
    "id": "media-canasta-cuero-marron",
    "nombre": "MEDIA CANASTA 100% CUERO VACUNO MARRÓN",
    "categoria": "materas",
    "subcategoria": "cuero",
    "precio": 35000,
    "imagen": "assets/images/media-canasta-100-cuero-marron.jpeg",
    "descripcion": "Media canasta matera compacta confeccionada en 100% cuero vacuno legítimo color marrón chocolate con manija ergonómica.",
    "destacado": true,
    "detalles": [
      "100% cuero vacuno genuino",
      "Formato compacto ideal para transporte rápido",
      "Costuras industriales de alta durabilidad"
    ]
  },
  {
    "id": "canasta-cuadrada-mango-rigido-animal-print",
    "nombre": "CANASTA CUADRADA MANGO RÍGIDO ANIMAL PRINT",
    "categoria": "materas",
    "subcategoria": "ecocuero",
    "precio": 20000,
    "imagen": "assets/images/canasta-cuadrada-con-mango-r-gido-premium-animal-print.jpeg",
    "descripcion": "Canasta matera rígida de formato cuadrado en ecocuero animal print con manija de agarre rígida estructural de madera y aluminio.",
    "destacado": true,
    "detalles": [
      "Estructura cuadrada autoportante rígida",
      "Manija fija ergonómica premium",
      "Estampa animal print de alto impacto visual"
    ]
  },
  {
    "id": "canasta-mango-rigido-gajos-pelota",
    "nombre": "CANASTA MATERA NEGRA MANGO RÍGIDO GAJOS PELOTA",
    "categoria": "materas",
    "subcategoria": "ecocuero",
    "precio": 20000,
    "imagen": "assets/images/canasta-mango-r-gido-color-negro-con-gajos-pelota.jpeg",
    "descripcion": "Canasta matera en ecocuero negro texturado estilo gajos de pelota de fútbol con manija rígida arqueada.",
    "destacado": true,
    "detalles": [
      "Textura gajos de pelota de fútbol en relieve",
      "Manija rígida reforzada superior",
      "Estructura antideslizante lavable"
    ]
  },
  {
    "id": "canasta-cuerina-rosa-doble-costura",
    "nombre": "CANASTA MATERA DE CUERINA ROSA DOBLE COSTURA",
    "categoria": "materas",
    "subcategoria": "ecocuero",
    "precio": 20000,
    "imagen": "assets/images/canasta-de-cuerina-color-rosa-doble-costura-premium.jpeg",
    "descripcion": "Canasta matera en ecocuero color rosa pastel con doble costura decorativa reforzada e hilos a tono.",
    "destacado": true,
    "detalles": [
      "Color rosa pastel exclusivo",
      "Doble costura e hilos reforzados",
      "Capacidad para termo, mate y frascos"
    ]
  },
  {
    "id": "mochila-bolso-animal-print-set",
    "nombre": "MOCHILA / BOLSO MATERO ANIMAL PRINT + YERBERO + AZUCARERO",
    "categoria": "bolsos",
    "subcategoria": "bolsos",
    "precio": 20000,
    "imagen": "assets/images/mochila-animal-print-set.jpeg",
    "descripcion": "Mochila y bolso matero versátil con estampado animal print moderno, incluye yerbero y azucarero herméticos.",
    "destacado": true,
    "detalles": [
      "Confeccionado con materiales impermeables y lavables",
      "Sujetador elástico interior para fijar el termo",
      "Incluye juego de latas yerbera y azucarera a tono",
      "Correa ajustable para llevar al hombro o cruzado"
    ]
  },
  {
    "id": "mate-vasito-termico-blanco",
    "nombre": "MATE VASITO TÉRMICO BLANCO",
    "categoria": "mates",
    "subcategoria": "termico",
    "precio": 5000,
    "imagen": "assets/images/mate-vasito-termico-blanco.jpeg",
    "descripcion": "Mate vasito térmico liso de color blanco con interior de acero inoxidable higiénico y lavable.",
    "destacado": true,
    "detalles": [
      "Cuerpo de acero inoxidable con aislamiento térmico",
      "Pintura blanca electrostática de alta resistencia",
      "No altera el sabor ni absorbe olores",
      "Medidas estándar para fácil cebado"
    ]
  },
  {
    "id": "mate-vasito-termico-rosa",
    "nombre": "MATE VASITO TÉRMICO ROSA",
    "categoria": "mates",
    "subcategoria": "termico",
    "precio": 5000,
    "imagen": "assets/images/mate-vasito-termico-rosa.jpeg",
    "descripcion": "Mate vasito térmico liso en tono rosa pastel con interior térmico de acero.",
    "destacado": true,
    "detalles": [
      "Construcción interna en acero inoxidable",
      "Tono rosa mate moderno",
      "Aptos para uso diario y viajes"
    ]
  },
  {
    "id": "mate-vasito-copa-inox-blanco",
    "nombre": "VASITO COPA INOX COLOR BLANCO",
    "categoria": "mates",
    "subcategoria": "termico",
    "precio": 5000,
    "imagen": "assets/images/mate-vasito-copa-inox-blanco.jpeg",
    "descripcion": "Mate tipo copa inox de color blanco brillante con doble pared térmica.",
    "destacado": true,
    "detalles": [
      "Doble pared insulada que mantiene la temperatura",
      "Borde suave pulido",
      "Color blanco impoluto"
    ]
  },
  {
    "id": "mate-vasito-copa-inox-negro",
    "nombre": "VASITO COPA INOX COLOR NEGRO",
    "categoria": "mates",
    "subcategoria": "termico",
    "precio": 5000,
    "imagen": "assets/images/mate-vasito-copa-inox-negro.jpeg",
    "descripcion": "Mate tipo copa inox de color negro texturado con interior térmico inoloro.",
    "destacado": true,
    "detalles": [
      "Cuerpo ergonómico en copa",
      "Aislamiento de calor de alta calidad",
      "Acabado profesional negro"
    ]
  },
  {
    "id": "mate-vaso-termico-vuelo-rosa",
    "nombre": "VASO TÉRMICO CON VUELO INTERIOR INOX - COLOR ROSA",
    "categoria": "mates",
    "subcategoria": "termico",
    "precio": 5000,
    "imagen": "assets/images/mate-vaso-termico-vuelo-rosa.jpeg",
    "descripcion": "Mate térmico ergonómico con vuelo superior en tono rosa y pared interna de acero.",
    "destacado": true,
    "detalles": [
      "Vuelo amplio para un fácil vertido y cebado",
      "Base estable antiderrames",
      "Térmico inoloro e inalterable"
    ]
  },
  {
    "id": "mate-camionero-guarda-aluminio",
    "nombre": "MATE CAMIONERO CON VIROLA DE ALUMINIO",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 25000,
    "imagen": "assets/images/camionero-guarda-aluminio.jpeg",
    "descripcion": "Mate Camionero clásico de calabaza brasilera forrado en cuero vacuno con virola liviana de aluminio pulido.",
    "destacado": true,
    "detalles": [
      "Calabaza brasilera de pared gruesa",
      "Forrado en cuero vacuno legítimo",
      "Virola de aluminio pulido liviana",
      "Excelente capacidad para cebado continuo"
    ]
  },
  {
    "id": "mate-camionero-cuero-pelo",
    "nombre": "MATE CAMIONERO CRIOLLO BASE DE CUERO CON PELO",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 30000,
    "imagen": "assets/images/camionero-cuero-pelo.jpeg",
    "descripcion": "Mate Camionero criollo artesanal de calabaza con base revestida en cuero vacuno natural con pelo.",
    "destacado": true,
    "detalles": [
      "Calabaza artesanal de pared gruesa",
      "Base de cuero vacuno legítimo con pelo natural",
      "Diseño rústico único e irrepetible",
      "Cosido artesanalmente a mano"
    ]
  },
  {
    "id": "camionero-criollo-cuero-labrado",
    "nombre": "CAMIONERO CRIOLLO CON BASE DE CUERO LABRADA",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 30000,
    "imagen": "assets/images/camionero-cuero-labrado.jpeg",
    "descripcion": "Mate Camionero criollo de calabaza sin virola con base reforzada en suela de cuero vacuno labrado.",
    "destacado": false,
    "detalles": [
      "Calabaza natural sin virola metálica",
      "Base de suela labrada de alta resistencia",
      "Estilismo criollo tradicional",
      "Formato ergonómico"
    ]
  },
  {
    "id": "camionero-alpaca-cincelada",
    "nombre": "CAMIONERO 100% CALABAZA VIROLA CINCELADA DE ALPACA",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 40000,
    "imagen": "assets/images/camionero-alpaca-cincelada.jpeg",
    "descripcion": "Mate Camionero premium 100% calabaza forrado en cuero liso con virola cincelada artesanal de alpaca de alta gama.",
    "destacado": true,
    "detalles": [
      "Calabaza brasilera seleccionada de alto espesor",
      "Virola de alpaca de primera calidad cincelada a mano",
      "Forrado en cuero vacuno teñido a mano",
      "Costuras de refuerzo de máxima durabilidad"
    ]
  },
  {
    "id": "portamate-cuerina-doble-costura",
    "nombre": "PORTAMATE DE CUERINA DOBLE COSTURA Y DOBLE REMACHE",
    "categoria": "portamates",
    "subcategoria": "portamate",
    "precio": 5000,
    "imagen": "assets/images/portamate-cuerina-doble-costura.jpeg",
    "descripcion": "Portamate artesanal confeccionado en cuerina de alta calidad con doble costura reforzada y doble remache.",
    "destacado": true,
    "detalles": [
      "100% confección artesanal de primera línea",
      "Ideal para usar en la palanca de cambios del auto o transportar tu mate",
      "Costuras reforzadas para máxima durabilidad",
      "Fácil colocación y adaptabilidad"
    ]
  },
  {
    "id": "portamate-cuero-borravino",
    "nombre": "PORTAMATE DE CUERO 100% - BORRAVINO",
    "categoria": "portamates",
    "subcategoria": "portamate",
    "precio": 10000,
    "imagen": "assets/images/portamate-cuero-borravino.jpeg",
    "descripcion": "Portamate 100% cuero vacuno legítimo en tono borravino exclusivo para la palanca de cambios o transporte.",
    "destacado": true,
    "detalles": [
      "100% confección artesanal de primera línea",
      "Ideal para usar en la palanca de cambios del auto o transportar tu mate",
      "Costuras reforzadas para máxima durabilidad",
      "Fácil colocación y adaptabilidad"
    ]
  },
  {
    "id": "portamate-cuero-marron",
    "nombre": "PORTAMATE DE CUERO 100% - MARRÓN",
    "categoria": "portamates",
    "subcategoria": "portamate",
    "precio": 10000,
    "imagen": "assets/images/portamate-cuero-marron.jpeg",
    "descripcion": "Portamate 100% cuero vacuno genuino de tono marrón chocolate con terminaciones artesanales de máxima durabilidad.",
    "destacado": true,
    "detalles": [
      "100% confección artesanal de primera línea",
      "Ideal para usar en la palanca de cambios del auto o transportar tu mate",
      "Costuras reforzadas para máxima durabilidad",
      "Fácil colocación y adaptabilidad"
    ]
  },
  {
    "id": "portamate-cuero-negro",
    "nombre": "PORTAMATE DE CUERO 100% - NEGRO",
    "categoria": "portamates",
    "subcategoria": "portamate",
    "precio": 10000,
    "imagen": "assets/images/portamate-cuero-negro.jpeg",
    "descripcion": "Portamate 100% cuero vacuno premium en color negro mate con remaches y hebilla reforzada.",
    "destacado": true,
    "detalles": [
      "100% confección artesanal de primera línea",
      "Ideal para usar en la palanca de cambios del auto o transportar tu mate",
      "Costuras reforzadas para máxima durabilidad",
      "Fácil colocación y adaptabilidad"
    ]
  },
  {
    "id": "portamate-cuero-suela",
    "nombre": "PORTAMATE DE CUERO 100% - SUELA",
    "categoria": "portamates",
    "subcategoria": "portamate",
    "precio": 10000,
    "imagen": "assets/images/portamate-cuero-suela.jpeg",
    "descripcion": "Portamate 100% cuero vacuno en tono suela tradicional con costuras a tono de alta resistencia.",
    "destacado": true,
    "detalles": [
      "100% confección artesanal de primera línea",
      "Ideal para usar en la palanca de cambios del auto o transportar tu mate",
      "Costuras reforzadas para máxima durabilidad",
      "Fácil colocación y adaptabilidad"
    ]
  },
  {
    "id": "bolso-clasico-matero-rosa-fucsia",
    "nombre": "BOLSO CLÁSICO MATERO ROSA FUCSIA + YERBERO + AZUCARERO",
    "categoria": "bolsos",
    "subcategoria": "bolsos",
    "precio": 20000,
    "imagen": "assets/images/bolso-rosa-fucsia.jpeg",
    "descripcion": "Bolso clásico matero grande en tono rosa fucsia vibrante con sujetador interno de termo, yerbero y azucarero a juego.",
    "destacado": true,
    "detalles": [
      "Confeccionado con materiales impermeables y lavables",
      "Sujetador elástico interior para fijar el termo",
      "Incluye juego de latas yerbera y azucarera a tono",
      "Correa ajustable para llevar al hombro o cruzado"
    ]
  },
  {
    "id": "bolso-cuerina-grande-suela",
    "nombre": "BOLSO MATERO CUERINA GRANDE COLOR SUELA + SET YERBERO",
    "categoria": "bolsos",
    "subcategoria": "bolsos",
    "precio": 20000,
    "imagen": "assets/images/bolso-cuerina-suela.jpeg",
    "descripcion": "Combo de bolso matero grande confeccionado en cuerina resistente color suela con yerbero y azucarero haciendo juego.",
    "destacado": true,
    "detalles": [
      "Confeccionado con materiales impermeables y lavables",
      "Sujetador elástico interior para fijar el termo",
      "Incluye juego de latas yerbera y azucarera a tono",
      "Correa ajustable para llevar al hombro o cruzado"
    ]
  },
  {
    "id": "mochila-bolso-matero-verde-suela",
    "nombre": "MOCHILA / BOLSO MATERO VERDE CON DETALLES EN SUELA + SET YERBERO",
    "categoria": "bolsos",
    "subcategoria": "bolsos",
    "precio": 25000,
    "imagen": "assets/images/mochila-verde-suela.jpeg",
    "descripcion": "Mochila materna de lona premium verde enebro con detalles y correas en cuero suela vacuno, incluye yerbero y azucarero.",
    "destacado": true,
    "detalles": [
      "Confeccionado con materiales impermeables y lavables",
      "Sujetador elástico interior para fijar el termo",
      "Incluye juego de latas yerbera y azucarera a tono",
      "Correa ajustable para llevar al hombro o cruzado"
    ]
  },
  {
    "id": "mochila-bolso-matero-negro-suela",
    "nombre": "MOCHILA / BOLSO MATERO NEGRO CON DETALLES EN SUELA + SET YERBERO",
    "categoria": "bolsos",
    "subcategoria": "bolsos",
    "precio": 20000,
    "imagen": "assets/images/mochila-negro-suela.jpeg",
    "descripcion": "Mochila matera urbana en color negro con detalles contrastantes en cuero suela vacuno y latas yerbera/azucarera.",
    "destacado": true,
    "detalles": [
      "Confeccionado con materiales impermeables y lavables",
      "Sujetador elástico interior para fijar el termo",
      "Incluye juego de latas yerbera y azucarera a tono",
      "Correa ajustable para llevar al hombro o cruzado"
    ]
  },
  {
    "id": "bolso-clasico-boca-juniors",
    "nombre": "BOLSO CLÁSICO TELA MATERO COLOR AZUL CON ESCUDO DE BOCA JUNIORS",
    "categoria": "bolsos",
    "subcategoria": "bolsos",
    "precio": 20000,
    "imagen": "assets/images/bolso-boca-juniors.jpeg",
    "descripcion": "Bolso matero grande de tela reforzada azul con el escudo de Boca Juniors, sujetador para termo, yerbero y azucarero.",
    "destacado": true,
    "detalles": [
      "Confeccionado con materiales impermeables y lavables",
      "Sujetador elástico interior para fijar el termo",
      "Incluye juego de latas yerbera y azucarera a tono",
      "Correa ajustable para llevar al hombro o cruzado"
    ]
  },
  {
    "id": "bolso-clasico-tela-negro",
    "nombre": "BOLSO CLÁSICO TELA MATERO COLOR NEGRO + YERBERO + AZUCARERO",
    "categoria": "bolsos",
    "subcategoria": "bolsos",
    "precio": 20000,
    "imagen": "assets/images/bolso-tela-negro.jpeg",
    "descripcion": "Bolso matero clásico de tela negra lavable con divisiones internas para termo, mate y kit yerbero.",
    "destacado": true,
    "detalles": [
      "Confeccionado con materiales impermeables y lavables",
      "Sujetador elástico interior para fijar el termo",
      "Incluye juego de latas yerbera y azucarera a tono",
      "Correa ajustable para llevar al hombro o cruzado"
    ]
  },
  {
    "id": "bolso-cuerina-grande-negro",
    "nombre": "BOLSO MATERO CUERINA GRANDE COLOR NEGRO + YERBERO + AZUCARERO",
    "categoria": "bolsos",
    "subcategoria": "bolsos",
    "precio": 20000,
    "imagen": "assets/images/bolso-cuerina-negro.jpeg",
    "descripcion": "Bolso matero amplio de cuerina negra mate con costuras reforzadas, sujetador de termo y juego de yerbero/azucarero.",
    "destacado": true,
    "detalles": [
      "Confeccionado con materiales impermeables y lavables",
      "Sujetador elástico interior para fijar el termo",
      "Incluye juego de latas yerbera y azucarera a tono",
      "Correa ajustable para llevar al hombro o cruzado"
    ]
  }
];

// Función para obtener productos por categoría
function obtenerProductosPorCategoria(categoria) {
  if (!categoria || categoria === 'todos') {
    return PRODUCTOS;
  }
  return PRODUCTOS.filter(p => p.categoria === categoria);
}

// Función para buscar productos por nombre o descripción
function buscarProductos(query) {
  const q = query.toLowerCase().trim();
  if (!q) return PRODUCTOS;
  return PRODUCTOS.filter(p => 
    p.nombre.toLowerCase().includes(q) || 
    p.descripcion.toLowerCase().includes(q)
  );
}

// Función para obtener un producto por su ID
function obtenerProductoPorId(id) {
  return PRODUCTOS.find(p => p.id === id);
}

// Función para obtener la imagen secundaria de hover de un producto
function obtenerImagenHover(p) {
  if (p.imagenes && p.imagenes.length >= 2) {
    return p.imagenes[1];
  }
  if (p.variantes && p.variantes.length > 0) {
    const varConImg = p.variantes.find(v => v.imagen && v.imagen !== p.imagen);
    if (varConImg) return varConImg.imagen;
  }
  return p.imagen;
}
