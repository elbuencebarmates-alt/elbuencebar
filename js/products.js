/* ==========================================================================
   BASE DE DATOS DE PRODUCTOS - EL BUEN CEBAR
   ========================================================================== */

const PRODUCTOS = [
  {
    "id": "mate-imperial-boca-ancha",
    "nombre": "Mate Imperial premium boca ancha",
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
        "nombre": "Cuero Negro Liso",
        "imagen": "assets/images/mate-imperial-boca-ancha-negro.png",
        "precio": 40000
      },
      {
        "nombre": "Cuero Marrón Liso",
        "imagen": "assets/images/mate-imperial-boca-ancha-marron.png",
        "precio": 40000
      },
      {
        "nombre": "Cuero Crudo",
        "imagen": "assets/images/mate-imperial-boca-ancha-crudo.png",
        "precio": 55000
      }
    ]
  },
  {
    "id": "mate-imperial-croco-repujado",
    "nombre": "Mate Imperial Croco y Repujado",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 50000,
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
        "nombre": "Imperial cuero croco negro",
        "imagen": "assets/images/mate-imperial-croco-negro.png",
        "precio": 50000
      },
      {
        "nombre": "Imperial cuero croco marron",
        "imagen": "assets/images/mate-imperial-croco-marron.png",
        "precio": 50000
      },
      {
        "nombre": "Imperial argentina cuero repujado negro",
        "imagen": "assets/images/mate-imperial-repujado-negro.png",
        "precio": 55000
      },
      {
        "nombre": "Imperial cuero croco rosa",
        "imagen": "assets/images/mate-imperial-croco-rosa.png",
        "precio": 50000
      }
    ]
  },
  {
    "id": "mate-imperial-base-alpaca",
    "nombre": "Imperial con base de alpaca",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 50000,
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
        "nombre": "cuero marron repujado pelota",
        "imagen": "assets/images/mate-imperial-base-alpaca-marron.png",
        "precio": 50000
      },
      {
        "nombre": "cuero negro liso",
        "imagen": "assets/images/mate-imperial-base-alpaca-negro.png",
        "precio": 55000
      },
      {
        "nombre": "con base de alpaca calada negro",
        "imagen": "assets/images/mate-imperial-base-alpaca-calada-negro.png",
        "precio": 60000
      },
      {
        "nombre": "con base de alpaca calada marron",
        "imagen": "assets/images/mate-imperial-base-alpaca-calada-marron.png",
        "precio": 60000
      },
      {
        "nombre": "cuero labrado rosa feliz dia mama",
        "imagen": "assets/images/mate-imperial-labrado-rosa-mama.png",
        "precio": 50000
      }
    ]
  },
  {
    "id": "mate-imperial-botitas-alpaca",
    "nombre": "Imperial con botitas de alpaca marron liso",
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
        "nombre": "Marrón Liso",
        "imagen": "assets/images/mate-imperial-botitas-alpaca.png",
        "precio": 55000
      }
    ]
  },
  {
    "id": "mate-imperial-base-alpaca-pelotas",
    "nombre": "Imperial con base de alpaca y pelotas",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 50000,
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
        "nombre": "cuero negro",
        "imagen": "assets/images/mate-imperial-base-alpaca-pelotas-negro.png",
        "precio": 50000
      },
      {
        "nombre": "cuero marron",
        "imagen": "assets/images/mate-imperial-base-alpaca-pelotas-marron.png",
        "precio": 50000
      },
      {
        "nombre": "animal print",
        "imagen": "assets/images/mate-imperial-base-alpaca-pelotas-animal.png",
        "precio": 55000
      }
    ]
  },
  {
    "id": "mate-imperial-algarrobo",
    "nombre": "Mate Imperial de Algarrobo con virola de alpaca",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 25000,
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
    "nombre": "Imperial color azul con base de pelotas de bronce",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 25000,
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
    "nombre": "Imperial Animal Print calabaza ahuecada",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 25000,
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
    "nombre": "Imperial Roma con base completa cincelada",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 25000,
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
    "nombre": "Imperial Cuero Jean con interior de acero",
    "categoria": "mates",
    "subcategoria": "imperial",
    "precio": 25000,
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
    "nombre": "Torpedo con virola de alpaca calada",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 45000,
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
        "nombre": "Negro",
        "imagen": "assets/images/torpedo-alpaca-calada-negro.png",
        "precio": 45000
      },
      {
        "nombre": "Marrón",
        "imagen": "assets/images/torpedo-alpaca-calada-marron.png",
        "precio": 45000
      }
    ]
  },
  {
    "id": "mate-torpedo-algarrobo-alpaca",
    "nombre": "Torpedo algarrobo con virola de alpaca cincelada",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 25000,
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
    "nombre": "Torpedo de algarrobo laqueado virola cincelada",
    "categoria": "mates",
    "subcategoria": "torpedo",
    "precio": 25000,
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
    "nombre": "Camionero de Algarrobo premium con guarda de acero",
    "categoria": "mates",
    "subcategoria": "camionero",
    "precio": 25000,
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
    "nombre": "Mate térmico con vuelo color negro",
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
    "nombre": "Torpedo de cuero repujado borravino con base de alpaca",
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
    "nombre": "Bombillón de caño liso",
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
        "nombre": "alpaca con caño cincelado",
        "imagen": "assets/images/bombillon-alpaca-cincelado.png",
        "precio": 15000
      },
      {
        "nombre": "acero con pico de loro y pala grande",
        "imagen": "assets/images/bombillon-acero-pala.png",
        "precio": 10000
      }
    ]
  },
  {
    "id": "bombilla-bombillon-labrado-premium",
    "nombre": "Bombillón de caño labrado premium",
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
        "nombre": "diseño trenzado con pico dorado",
        "imagen": "assets/images/bombillon-labrado-trenzado.png",
        "precio": 25000
      },
      {
        "nombre": "diseño espiralado",
        "imagen": "assets/images/bombillon-labrado-espiralado.png",
        "precio": 25000
      },
      {
        "nombre": "diseño torsion con pala dorada",
        "imagen": "assets/images/bombillon-labrado-torsion.png",
        "precio": 25000
      }
    ]
  },
  {
    "id": "bombilla-acero-inoxidable",
    "nombre": "Bombilla de acero inoxidable con filtro/pala",
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
        "nombre": "caño liso con pico de bronce",
        "imagen": "assets/images/bombilla-acero-pala-bronce.png",
        "precio": 15000
      },
      {
        "nombre": "pico de loro 16cm",
        "imagen": "assets/images/bombilla-acero-pala-16cm.png",
        "precio": 15000
      },
      {
        "nombre": "pico de loro 19cm",
        "imagen": "assets/images/bombilla-acero-pala-19cm.png",
        "precio": 15000
      }
    ]
  },
  {
    "id": "bombilla-chata-grabada",
    "nombre": "Bombilla chata grabada",
    "categoria": "bombillas",
    "subcategoria": "acero",
    "precio": 5000,
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
        "nombre": "Boca Juniors",
        "imagen": "assets/images/bombilla-chata-boca.png",
        "precio": 5000
      },
      {
        "nombre": "River Plate",
        "imagen": "assets/images/bombilla-chata-river.png",
        "precio": 5000
      },
      {
        "nombre": "Copa del Mundo",
        "imagen": "assets/images/bombilla-chata-copa.png",
        "precio": 5000
      },
      {
        "nombre": "Argentina",
        "imagen": "assets/images/bombilla-chata-argentina.png",
        "precio": 5000
      },
      {
        "nombre": "Te amo papá",
        "imagen": "assets/images/bombilla-chata-papa.png",
        "precio": 5000
      },
      {
        "nombre": "Te amo mamá",
        "imagen": "assets/images/bombilla-chata-mama.png",
        "precio": 5000
      },
      {
        "nombre": "Ruta 40",
        "imagen": "assets/images/bombilla-chata-ruta40.png",
        "precio": 5000
      }
    ]
  },
  {
    "id": "bombilla-chata-lisa",
    "nombre": "Bombilla chata lisa",
    "categoria": "bombillas",
    "subcategoria": "acero",
    "precio": 4000,
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
        "nombre": "con curva",
        "imagen": "assets/images/bombilla-chata-lisa-curva.png",
        "precio": 4000
      },
      {
        "nombre": "recta",
        "imagen": "assets/images/bombilla-chata-lisa-recta.png",
        "precio": 4000
      }
    ]
  },
  {
    "id": "bombillon-alpaca-premium-pala",
    "nombre": "Bombillon de alpaca premium, pala ancha y doble dije de bronce, pico recto",
    "categoria": "bombillas",
    "subcategoria": "alpaca",
    "precio": 25000,
    "imagen": "assets/images/bombillon-alpaca-premium-pala.png",
    "descripcion": "Bombillón de alpaca premium con diseño de pico recto, difusores térmicos con doble dije de bronce y pala ancha reforzada para un excelente filtrado.",
    "destacado": false,
    "detalles": [
      "Alpaca 100% de alta pureza con detalles cincelados",
      "Doble dije de bronce macizo difusor de calor",
      "Pala ancha reforzada ideal para yerba uruguaya",
      "Terminación de lujo pulida a espejo"
    ]
  },
  {
    "id": "bombillon-alpaca-premium-loro",
    "nombre": "Bombillon premium artesanal 100% alpaca - pico Loro",
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
    "nombre": "Termo Grabado Argentina 360",
    "categoria": "termos",
    "subcategoria": "negro",
    "precio": 38000,
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
    "nombre": "Termo media manija negro Total Black",
    "categoria": "termos",
    "subcategoria": "negro",
    "precio": 25000,
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
    "nombre": "Termo system 1L negro con manija y tapamate",
    "categoria": "termos",
    "subcategoria": "negro",
    "precio": 25000,
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
    "nombre": "Mesa Matera Valija 2 en 1",
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
    "nombre": "Canasta 100% cuero grande reforzada",
    "categoria": "materas",
    "subcategoria": "canasta",
    "precio": 25000,
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
    "nombre": "Media canasta matera de cuero",
    "categoria": "materas",
    "subcategoria": "canasta",
    "precio": 18000,
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
        "nombre": "Negra",
        "imagen": "assets/images/media-canasta-cuero-negro.png",
        "precio": 18000
      },
      {
        "nombre": "Marrón Suela",
        "imagen": "assets/images/media-canasta-cuero-suela.png",
        "precio": 18000
      }
    ]
  },

  // ═══════════════════════════════════════════
  // CATEGORÍA: YERBEROS Y AZUCAREROS
  // ═══════════════════════════════════════════
  {
    "id": "set-yerbero-negro-mate",
    "nombre": "Set de yerbero y azucarera negro mate",
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
    "nombre": "Set de yerbero y azucarera color acero",
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
