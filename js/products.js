/* ==========================================================================
   BASE DE DATOS DE PRODUCTOS - EL BUEN CEBAR
   ========================================================================== */

const PRODUCTOS = [
  {
    "id": "mate-imperial-boca-ancha",
    "nombre": "MATE IMPERIAL PREMIUM BOCA ANCHA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 40000,
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
        "precio": 40000
      },
      {
        "nombre": "CUERO MARRÓN LISO",
        "imagen": "assets/images/mate-imperial-boca-ancha-marron.png",
        "precio": 40000
      },
      {
        "nombre": "CUERO CRUDO",
        "imagen": "assets/images/mate-imperial-boca-ancha-crudo.png",
        "precio": 55000
      }
    ]
  },
  {
    "id": "mate-imperial-croco-repujado",
    "nombre": "MATE IMPERIAL CROCO Y REPUJADO",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 55000,
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
        "precio": 55000
      },
      {
        "nombre": "IMPERIAL CUERO CROCO MARRON",
        "imagen": "assets/images/mate-imperial-croco-marron.png",
        "precio": 55000
      },
      {
        "nombre": "IMPERIAL ARGENTINA CUERO REPUJADO NEGRO",
        "imagen": "assets/images/mate-imperial-repujado-negro.png",
        "precio": 55000
      },
      {
        "nombre": "IMPERIAL CUERO CROCO ROSA",
        "imagen": "assets/images/mate-imperial-croco-rosa.png",
        "precio": 55000
      }
    ]
  },
  {
    "id": "mate-imperial-base-alpaca",
    "nombre": "IMPERIAL CON BASE DE ALPACA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 55000,
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
        "precio": 55000
      },
      {
        "nombre": "CUERO NEGRO LISO",
        "imagen": "assets/images/mate-imperial-base-alpaca-negro.png",
        "precio": 55000
      },
      {
        "nombre": "CON BASE DE ALPACA CALADA NEGRO",
        "imagen": "assets/images/mate-imperial-base-alpaca-calada-negro.png",
        "precio": 55000
      },
      {
        "nombre": "CON BASE DE ALPACA CALADA MARRON",
        "imagen": "assets/images/mate-imperial-base-alpaca-calada-marron.png",
        "precio": 55000
      },
      {
        "nombre": "CUERO LABRADO ROSA FELIZ DIA MAMA",
        "imagen": "assets/images/mate-imperial-labrado-rosa-mama.png",
        "precio": 55000
      }
    ]
  },
  {
    "id": "mate-imperial-botitas-alpaca",
    "nombre": "IMPERIAL CON BOTITAS DE ALPACA MARRON LISO",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 55000,
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
        "precio": 55000
      }
    ]
  },
  {
    "id": "mate-imperial-base-alpaca-pelotas",
    "nombre": "IMPERIAL CON BASE DE ALPACA Y PELOTAS",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 55000,
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
        "precio": 55000
      },
      {
        "nombre": "CUERO MARRON",
        "imagen": "assets/images/mate-imperial-base-alpaca-pelotas-marron.png",
        "precio": 55000
      },
      {
        "nombre": "ANIMAL PRINT",
        "imagen": "assets/images/mate-imperial-base-alpaca-pelotas-animal.png",
        "precio": 55000
      }
    ]
  },
  {
    "id": "mate-imperial-algarrobo",
    "nombre": "MATE IMPERIAL DE ALGARROBO CON VIROLA DE ALPACA",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 47500,
    "imagen": "assets/images/mate-imperial-algarrobo.png",
    "descripcion": "Mate premium tallado en madera maciza de algarrobo seleccionado de gran durabilidad y sabor noble. Cuenta con detalles de virola de alpaca y base firme.",
    "destacado": false,
    "detalles": [
      "Interior de madera de algarrobo macizo torneado",
      "No junta humedad ni hongos, muy duradero",
      "Exterior forrado en cuero vacuno legítimo",
      "Virola superior de alpaca premium calada o lisa"
    ]
  },
  {
    "id": "mate-imperial-azul-pelotas-bronce",
    "nombre": "IMPERIAL COLOR AZUL CON BASE DE PELOTAS DE BRONCE",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 55000,
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
    "precio": 55000,
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
    "precio": 35000,
    "imagen": "assets/images/mate-torpedo-algarrobo-alpaca.png",
    "descripcion": "Mate premium tallado en madera maciza de algarrobo seleccionado de gran durabilidad y sabor noble. Cuenta con virola de alpaca cincelada y excelentes costuras.",
    "destacado": false,
    "detalles": [
      "Madera maciza de algarrobo torneado premium",
      "Virola de alpaca cincelada artesanalmente",
      "Forrado en cuero vacuno seleccionado cosido a mano",
      "Formato torpedo clásico"
    ]
  },
  {
    "id": "mate-torpedo-algarrobo-laqueado",
    "nombre": "TORPEDO DE ALGARROBO LAQUEADO VIROLA CINCELADA",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 35000,
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
    "nombre": "CAMIONERO DE ALGARROBO PREMIUM CON GUARDA DE ACERO",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 35000,
    "imagen": "assets/images/camionero-algarrobo-premium.png",
    "descripcion": "Mate premium tallado en madera maciza de algarrobo seleccionado de gran durabilidad y sabor noble. Cuenta con detalles de virola de alpaca o acero de gran nivel.",
    "destacado": false,
    "detalles": [
      "Madera de algarrobo seleccionado extra gruesa",
      "Virola de acero con cincelados de gran definición",
      "Exterior en cuero vacuno teñido a mano",
      "Terminaciones de alta costura"
    ]
  },
  {
    "id": "mate-termico-stanley-negro",
    "nombre": "MATE TÉRMICO CON VUELO COLOR NEGRO",
    "categoria": "mates",
    "subcategoria": "termico",
    "precio": 18000,
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
    "precio": 25000,
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
    "precio": 15000,
    "imagen": "assets/images/bombillon-alpaca-cincelado.png",
    "descripcion": "Bombillones de caño liso diseñados para mates de boca ancha y profundos. Disponibles en alpaca con caño cincelado o en acero inoxidable con formato pico de loro y pala grande.",
    "destacado": true,
    "detalles": [
      "Caño de gran diámetro para un caudal óptimo",
      "Pala grande microperforada de excelente filtrado",
      "Terminaciones pulidas a espejo y difusor de calor",
      "Largo ideal de 20-21 cm para mates imperiales o camioneros"
    ],
    "variantes": [
      {
        "nombre": "ALPACA CON CAÑO CINCELADO",
        "imagen": "assets/images/bombillon-alpaca-cincelado.png",
        "precio": 15000
      },
      {
        "nombre": "ACERO CON PICO DE LORO Y PALA GRANDE",
        "imagen": "assets/images/bombillon-acero-pala.png",
        "precio": 10000
      }
    ]
  },
  {
    "id": "bombilla-bombillon-labrado-premium",
    "nombre": "BOMBILLÓN DE CAÑO LABRADO PREMIUM",
    "categoria": "bombillas",
    "subcategoria": "bombillon",
    "precio": 25000,
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
        "precio": 25000
      },
      {
        "nombre": "DISEÑO ESPIRALADO",
        "imagen": "assets/images/bombillon-labrado-espiralado.png",
        "precio": 25000
      },
      {
        "nombre": "DISEÑO TORSION CON PALA DORADA",
        "imagen": "assets/images/bombillon-labrado-torsion.png",
        "precio": 25000
      }
    ]
  },
  {
    "id": "bombilla-acero-inoxidable",
    "nombre": "BOMBILLA DE ACERO INOXIDABLE CON FILTRO/PALA",
    "categoria": "bombillas",
    "subcategoria": "acero",
    "precio": 10000,
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
        "precio": 10000
      },
      {
        "nombre": "PICO DE LORO 16CM",
        "imagen": "assets/images/bombilla-acero-pala-16cm.png",
        "precio": 10000
      },
      {
        "nombre": "PICO DE LORO 19CM",
        "imagen": "assets/images/bombilla-acero-pala-19cm.png",
        "precio": 10000
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
    "precio": 10000,
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
        "precio": 10000
      },
      {
        "nombre": "RECTA",
        "imagen": "assets/images/bombilla-chata-lisa-recta.png",
        "precio": 10000
      }
    ]
  },
  {
    "id": "bombillon-alpaca-premium-loro",
    "nombre": "BOMBILLON PREMIUM ARTESANAL 100% ALPACA - PICO LORO",
    "categoria": "bombillas",
    "subcategoria": "alpaca",
    "precio": 25000,
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
    "precio": 40000,
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
    "precio": 29500,
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
    "precio": 54000,
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
    "precio": 54000,
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
        "precio": 54000
      },
      {
        "nombre": "MARRÓN SUELA",
        "imagen": "assets/images/media-canasta-cuero-suela.png",
        "precio": 54000
      }
    ]
  },
  {
    "id": "mediacanasta-pelo-vacuno",
    "nombre": "MEDIACANASTA PREMIUM DE PELO VACUNO COLORES SURTIDOS",
    "categoria": "materas",
    "subcategoria": "canasta",
    "precio": 70000,
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
    "precio": 18000,
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
    "precio": 18000,
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
    "precio": 15000,
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
    "precio": 85500,
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
    "precio": 85500,
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
    "precio": 38000,
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
        "precio": 38000
      },
      {
        "nombre": "CUERO MARRÓN LISO",
        "imagen": "assets/images/torpedo-pelotitas-bronce.jpg",
        "precio": 38000
      }
    ]
  },
  {
    "id": "camionero-cuero-bombilla",
    "nombre": "MATE CAMIONERO DE CUERO CON BOMBILLA PICO DE LORO",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 47500,
    "imagen": "assets/images/camionero-cuero-calabaza.jpg",
    "descripcion": "Mate Camionero de cuero, alpaca y calabaza con bombilla de acero.",
    "destacado": false,
    "detalles": [
      "Calabaza brasilera de alto espesor",
      "Forrado en cuero vacuno legítimo con costuras tradicionales",
      "Virola de alpaca pulida",
      "Incluye bombilla pico de loro de acero inoxidable"
    ]
  },
  {
    "id": "torpedo-negro-interior-de-calabaza-virola-acero-boca-ancha-con-bombilla",
    "nombre": "TORPEDO NEGRO INTERIOR DE CALABAZA VIROLA ACERO BOCA ANCHA CON BOMBILLA",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 20500,
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
    "precio": 35000,
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
    "precio": 39500,
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
    "precio": 36000,
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
    "precio": 38500,
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
    "precio": 26500,
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
    "precio": 29500,
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
    "precio": 60000,
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
    "precio": 20000,
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
    "precio": 30000,
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
    "precio": 20500,
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
    "precio": 19000,
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
    "precio": 4500,
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
    "precio": 6000,
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
    "precio": 12000,
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
        "precio": 12000
      },
      {
        "nombre": "NEGRO",
        "imagen": "assets/images/porta-mate-de-cuero-vacuno-100-para-la-palanca-de-cambio-premium.jpeg",
        "precio": 12000
      }
    ]
  },
  {
    "id": "mochila-bolso-matero-chaulata-verde-enebro-con-detalles-en-suela",
    "nombre": "MOCHILA/BOLSO MATERO + CHAULATA  CON DETALLES EN SUELA",
    "categoria": "bolsos",
    "subcategoria": "mochila",
    "precio": 20000,
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
    "precio": 12500,
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
    "precio": 10500,
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
    "precio": 11000,
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
    "precio": 29000,
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
    "nombre": "CAMIONERO CRIOLLO CALABAZA LAQUEADA VIROLA ACERO + BOMBILLA DE ACERO",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 24000,
    "imagen": "assets/images/camionero-criollo-calabaza-laqueada-virola-acero-bombilla-de-acero.jpeg",
    "descripcion": "Excelente producto artesanal de primera calidad, ideal para disfrutar del ritual del mate.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "camionero-algarrobo-grabado-predisenados-bombilla",
    "nombre": "CAMIONERO ALGARROBO GRABADO PREDISEÑADOS + BOMBILLA",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 18000,
    "imagen": "assets/images/camionero-algarrobo-grabado-predisenados-bombilla.jpeg",
    "descripcion": "Excelente producto artesanal de primera calidad, ideal para disfrutar del ritual del mate.",
    "destacado": false,
    "detalles": [
      "Seleccionado minuciosamente por calidad",
      "Materiales premium garantizados",
      "Diseño artesanal tradicional"
    ]
  },
  {
    "id": "matepa-gruesa-acero-con-sujetador",
    "nombre": "MATEPA GRUESA DE ACERO CON SUJETADOR",
    "categoria": "accesorios",
    "subcategoria": "repuesto",
    "precio": 8000,
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
    "precio": 25000,
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
    "precio": 6000,
    "imagen": "assets/images/yerba-canarias-edicion-especial-1kg.jpg",
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
        "imagen": "assets/images/yerba-canarias-edicion-especial-1kg.jpg",
        "precio": 6000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-canarias-edicion-especial-1kg.jpg",
        "precio": 11000
      }
    ]
  },
  {
    "id": "yerba-canarias-jengibre-te-verde",
    "nombre": "YERBA MATE CANARIAS TÉ VERDE Y JENGIBRE",
    "descripcion": "La Yerba Mate Canarias con Té Verde y Jengibre combina el sabor clásico del mate con las propiedades del té verde y el toque picante del jengibre. Una mezcla refrescante y energizante, perfecta para quienes buscan algo diferente.",
    "precio": 6000,
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
        "precio": 6000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-canarias-jengibre-te-verde-1kg.jpg",
        "precio": 11000
      }
    ]
  },
  {
    "id": "yerba-baldo-tradicional-500g",
    "nombre": "YERBA MATE BALDO TRADICIONAL",
    "descripcion": "Yerba Mate Baldo Tradicional, una de las marcas más reconocidas de Uruguay. De hoja gruesa, con palo, de sabor robusto y duradero. Ideal para los amantes del mate clásico.",
    "precio": 7500,
    "imagen": "assets/images/yerba-baldo-tradicional-500g.jpg",
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
        "imagen": "assets/images/yerba-baldo-tradicional-500g.jpg",
        "precio": 7500
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-baldo-tradicional-500g.jpg",
        "precio": 10000
      },
      {
        "nombre": "5 KG",
        "imagen": "assets/images/yerba-baldo-tradicional-500g.jpg",
        "precio": 43000
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
        "precio": 9500
      }
    ]
  },
  {
    "id": "yerba-rei-verde-tradicional",
    "nombre": "YERBA MATE REI VERDE TRADICIONAL",
    "descripcion": "Yerba Mate Rei Verde Tradicional, clásica uruguaya de calidad reconocida. Sabor equilibrado, suave al paladar, con buena duración de cebada. Perfecta para el consumo diario.",
    "precio": 4000,
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
        "precio": 4000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-rei-verde-tradicional-1kg.jpg",
        "precio": 8000
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
        "precio": 9000
      }
    ]
  },
  {
    "id": "yerba-canarias-serena",
    "nombre": "YERBA MATE CANARIAS SERENA",
    "descripcion": "Yerba Mate Canarias Serena, la línea suave de la reconocida marca uruguaya. Sabor delicado y equilibrado, con hoja fina y buena duración. Ideal para quienes prefieren un mate más tranquilo.",
    "precio": 6000,
    "imagen": "assets/images/yerba-canarias-serena-500g.jpg",
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
        "imagen": "assets/images/yerba-canarias-serena-500g.jpg",
        "precio": 6000
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-canarias-serena-1kg.jpg",
        "precio": 11000
      }
    ]
  },
  {
    "id": "yerba-rei-verde-premium",
    "nombre": "YERBA MATE REI VERDE PREMIUM",
    "descripcion": "Yerba Mate Rei Verde Premium, la versión de mayor calidad de la marca uruguaya. Hojas más finas y seleccionadas para una infusión excepcional y duradera.",
    "precio": 6500,
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
        "precio": 6500
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-rei-verde-premium-1kg.jpg",
        "precio": 12000
      }
    ]
  },
  {
    "id": "yerba-canarias-tradicional",
    "nombre": "YERBA MATE CANARIAS TRADICIONAL",
    "descripcion": "Yerba Mate Canarias Tradicional, la marca de yerba número uno de Uruguay. Compuesta principalmente por hojas seleccionadas de sabor intenso y duradero, libre de palo. Perfecta para cebar mates cargados de sabor.",
    "precio": 5500,
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
        "precio": 5500
      },
      {
        "nombre": "1 KG",
        "imagen": "assets/images/yerba-canarias-tradicional-500g.jpg",
        "precio": 10500
      }
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
