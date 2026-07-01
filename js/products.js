/* ==========================================================================
   BASE DE DATOS DE PRODUCTOS - EL BUEN CEBAR
   ========================================================================== */

const PRODUCTOS = [
  // ═══════════════════════════════════════════
  // CATEGORÍA: MATES
  // ═══════════════════════════════════════════
  
  // Subcategoría: Imperial
  {
    id: "mate-imperial-clasico",
    nombre: "Mate Imperial Clásico",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 29500,
    imagen: "assets/images/mate-imperial.jpg",
    descripcion: "Mate Imperial clásico de calabaza seleccionada, forrado en cuero vacuno legítimo con costura reforzada a mano y virola de alpaca lisa. Una pieza fundamental del ritual matero.",
    destacado: true,
    detalles: [
      "Calabaza brasilera de paredes gruesas",
      "Forrado en cuero vacuno grueso de curtido vegetal",
      "Virola de alpaca pulida a espejo",
      "Base reforzada de 4 patas firmes"
    ]
  },
  {
    id: "mate-imperial-premium",
    nombre: "Mate Imperial Premium",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 38000,
    imagen: "assets/images/mate-imperial.jpg",
    descripcion: "El rey de la mesa. Calabaza gruesa extra-grande seleccionada, forrado en cuero premium de exportación, virola ancha trabajada artesanalmente con relieves de alpaca.",
    destacado: true,
    detalles: [
      "Calabaza extra-grande seleccionada por su simetría",
      "Cuero vacuno premium extra grueso",
      "Virola ancha de alpaca con cincelados artesanales de alta complejidad",
      "Costura uruguaya fina hecha a mano"
    ]
  },
  {
    id: "mate-imperial-cuero-liso",
    nombre: "Mate Imperial de Cuero Liso",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 31000,
    imagen: "assets/images/mate-imperial.jpg",
    descripcion: "Estilo elegante y minimalista. Forrado en cuero vacuno liso de textura suave y terminación satinada, complementado con virola de alpaca pulida.",
    destacado: false,
    detalles: [
      "Cuero vacuno liso premium",
      "Calabaza seleccionada de tamaño mediano-grande",
      "Virola de alpaca cincelada simple",
      "Costura invisible reforzada"
    ]
  },
  {
    id: "mate-imperial-croco",
    nombre: "Mate Imperial Croco",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 32500,
    imagen: "assets/images/mate-imperial.jpg",
    descripcion: "Distinción con carácter. Forrado en cuero vacuno legítimo con grabado texturizado símil cocodrilo en color marrón oscuro. Virola de alpaca.",
    destacado: false,
    detalles: [
      "Cuero vacuno con grabado croco de alta definición",
      "Calabaza brasilera de alta densidad",
      "Virola de alpaca maciza lisa o cincelada",
      "Patas de apoyo firmes reforzadas internamente"
    ]
  },
  {
    id: "mate-imperial-alpaca",
    nombre: "Mate Imperial con Virola de Alpaca",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 35000,
    imagen: "assets/images/mate-imperial.jpg",
    descripcion: "Un clásico con detalles que marcan la diferencia. Virola de alpaca cincelada a mano con motivos tradicionales criollos, montada sobre calabaza forrada en cuero rústico.",
    destacado: false,
    detalles: [
      "Virola de alpaca alemana de alta pureza",
      "Cincelados florales tradicionales en la virola",
      "Cuero vacuno marrón chocolate",
      "Costuras de alta resistencia hechas con hilo encerado"
    ]
  },
  {
    id: "mate-imperial-boca-ancha",
    nombre: "Mate Imperial premium boca ancha",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 40000,
    imagen: "assets/images/mate-imperial-boca-ancha-negro.png",
    descripcion: "Nuestra mejor calidad. Selección de materiales premium: costura a mano con hilo encerado. Cuenta con una distinguida guarda de alpaca cincelada y calabazas brasileras seleccionadas.",
    destacado: true,
    detalles: [
      "Calabaza brasilera seleccionada por su espesor",
      "Virola superior con guarda de alpaca cincelada",
      "Formato boca ancha para cebadas más cómodas"
    ],
    variantes: [
      { nombre: "Cuero Negro Liso", imagen: "assets/images/mate-imperial-boca-ancha-negro.png", precio: 40000 },
      { nombre: "Cuero Marrón Liso", imagen: "assets/images/mate-imperial-boca-ancha-marron.png", precio: 40000 },
      { nombre: "Cuero Crudo", imagen: "assets/images/mate-imperial-boca-ancha-crudo.png", precio: 55000 }
    ]
  },
  {
    id: "mate-imperial-croco-repujado",
    nombre: "Mate Imperial Croco y Repujado",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 50000,
    imagen: "assets/images/mate-imperial-croco-negro.png",
    descripcion: "Una selección exclusiva de mates imperiales premium con texturas únicas. Podés elegir entre el cuero vacuno grabado estilo cocodrilo o el diseño repujado temático de Argentina. Piezas terminadas a mano con virola de alpaca cincelada.",
    destacado: true,
    detalles: [
      "Calabaza brasilera de alto espesor seleccionada",
      "Cuero vacuno legítimo grabado estilo croco o repujado",
      "Virola de alpaca pulida a espejo con cincelados de flores",
      "Costura reforzada a mano con hilo encerado"
    ],
    variantes: [
      { nombre: "Imperial cuero croco negro", imagen: "assets/images/mate-imperial-croco-negro.png", precio: 50000 },
      { nombre: "Imperial cuero croco marron", imagen: "assets/images/mate-imperial-croco-marron.png", precio: 50000 },
      { nombre: "Imperial argentina cuero repujado negro", imagen: "assets/images/mate-imperial-repujado-negro.png", precio: 55000 },
      { nombre: "Imperial cuero croco rosa", imagen: "assets/images/mate-imperial-croco-rosa.png", precio: 50000 }
    ]
  },
  {
    id: "mate-imperial-base-alpaca",
    nombre: "Imperial con base de alpaca",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 50000,
    imagen: "assets/images/mate-imperial-base-alpaca-marron.png",
    descripcion: "Nuestra mejor selección de mates imperiales con base de alpaca trabajada artesanalmente. Podés elegir entre cuero marrón repujado pelota, cuero negro liso, bases de alpaca calada (negro o marrón) o el exclusivo cuero labrado rosa con grabado 'Feliz Día Mamá'.",
    destacado: true,
    detalles: [
      "Base de alpaca cincelada y reforzada (sin patas expuestas)",
      "Virola superior de alpaca combinada",
      "Calabaza brasilera de alto espesor",
      "Costura fina reforzada hecha a mano"
    ],
    variantes: [
      { nombre: "cuero marron repujado pelota", imagen: "assets/images/mate-imperial-base-alpaca-marron.png", precio: 50000 },
      { nombre: "cuero negro liso", imagen: "assets/images/mate-imperial-base-alpaca-negro.png", precio: 55000 },
      { nombre: "con base de alpaca calada negro", imagen: "assets/images/mate-imperial-base-alpaca-calada-negro.png", precio: 60000 },
      { nombre: "con base de alpaca calada marron", imagen: "assets/images/mate-imperial-base-alpaca-calada-marron.png", precio: 60000 },
      { nombre: "cuero labrado rosa feliz dia mama", imagen: "assets/images/mate-imperial-labrado-rosa-mama.png", precio: 50000 }
    ]
  },
  {
    id: "mate-imperial-botitas-alpaca",
    nombre: "Imperial con botitas de alpaca marron liso",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 55000,
    imagen: "assets/images/mate-imperial-botitas-alpaca.png",
    descripcion: "Un diseño sumamente distinguido y tradicional. Este mate imperial de cuero marrón liso cuenta con cuatro patas reforzadas recubiertas con detalles ornamentales de alpaca (botitas), brindándole una presencia e imponencia únicas en la mesa.",
    destacado: true,
    detalles: [
      "Calabaza brasilera de alto espesor seleccionada",
      "Forrado en cuero vacuno marrón liso de primera",
      "Patas con apliques ornamentales de alpaca (botitas)",
      "Virola superior de alpaca cincelada artesanalmente"
    ],
    variantes: [
      { nombre: "Marrón Liso", imagen: "assets/images/mate-imperial-botitas-alpaca.png", precio: 55000 }
    ]
  },
  {
    id: "mate-imperial-base-alpaca-pelotas",
    nombre: "Imperial con base de alpaca y pelotas",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 50000,
    imagen: "assets/images/mate-imperial-base-alpaca-pelotas-negro.png",
    descripcion: "Un diseño sumamente llamativo y original. Este mate imperial cuenta con una base de alpaca con detalles esféricos de bronce (pelotitas) en la base de las patas. Disponible en cuero negro liso, cuero marrón o en textura animal print con pelo.",
    destacado: true,
    detalles: [
      "Base de alpaca trabajada a mano con pelotitas de bronce",
      "Virola superior de alpaca con cincelados criollos",
      "Calabaza brasilera de alto espesor seleccionada",
      "Opciones de cuero vacuno liso o cuero con pelo animal print"
    ],
    variantes: [
      { nombre: "cuero negro", imagen: "assets/images/mate-imperial-base-alpaca-pelotas-negro.png", precio: 50000 },
      { nombre: "cuero marron", imagen: "assets/images/mate-imperial-base-alpaca-pelotas-marron.png", precio: 50000 },
      { nombre: "animal print", imagen: "assets/images/mate-imperial-base-alpaca-pelotas-animal.png", precio: 55000 }
    ]
  },
  {
    id: "mate-imperial-personalizado",
    nombre: "Mate Imperial Personalizado",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 45000,
    imagen: "assets/images/mate-imperial.jpg",
    descripcion: "Diseñamos tu mate soñado. Podés elegir apliques en bronce sobre la virola de alpaca (iniciales, números, escudos o logos corporativos) y tipo de cuero.",
    destacado: true,
    detalles: [
      "Apliques de bronce soldados a mano en la virola",
      "Elección de cuero (Liso, Croco, Negro, Marrón)",
      "Incluye estuche de guardado artesanal",
      "Trabajo coordinado directamente post-compra por email/WhatsApp"
    ]
  },
  {
    id: "mate-imperial-grabado-laser",
    nombre: "Mate Imperial con Grabado Láser",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 36000,
    imagen: "assets/images/mate-imperial.jpg",
    descripcion: "Tu identidad grabada para siempre. Grabado láser de alta precisión sobre la virola de alpaca. Nombres, frases cortas, logos de clubes o fechas especiales.",
    destacado: false,
    detalles: [
      "Grabado láser de fibra óptica de alta definición sobre metal",
      "Diseño a elección del cliente",
      "Calabaza seleccionada forrada en cuero legítimo",
      "Costura artesanal reforzada"
    ]
  },
  {
    id: "mate-imperial-calabaza",
    nombre: "Mate Imperial de Calabaza",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 28000,
    imagen: "assets/images/mate-imperial.jpg",
    descripcion: "La esencia pura del ritual matero. Mate imperial clásico forrado en cuero donde se luce el formato natural de la calabaza criolla. Virola de alpaca lisa.",
    destacado: false,
    detalles: [
      "Formato clásico cilíndrico-orgánico",
      "Calabaza curada de forma natural",
      "Cuero vacuno curtido con extracto de quebracho",
      "Virola de alpaca apta para uso diario intensivo"
    ]
  },
  {
    id: "mate-imperial-algarrobo",
    nombre: "Mate Imperial de Algarrobo",
    categoria: "mates",
    subcategoria: "imperial",
    precio: 29000,
    imagen: "assets/images/mate-imperial.jpg",
    descripcion: "Madera noble y aroma único. Interior torneado en madera de algarrobo estacionado, forrado por fuera en cuero vacuno con virola de alpaca. Aporta un sabor dulzón y es súper fácil de curar.",
    destacado: false,
    detalles: [
      "Interior de madera de algarrobo macizo torneado",
      "No junta humedad ni hongos, ideal para uso intermitente",
      "Exterior forrado en cuero vacuno costurado a mano",
      "Virola superior de alpaca lisa"
    ]
  },

  // Subcategoría: Torpedo
  {
    id: "mate-torpedo-clasico",
    nombre: "Mate Torpedo Clásico",
    categoria: "mates",
    subcategoria: "torpedo",
    precio: 24500,
    imagen: "assets/images/mate-torpedo.jpg",
    descripcion: "Mate de calabaza seleccionada con formato torpedo (más angosto abajo y ensanchado arriba), forrado en cuero de vaqueta con virola de acero inoxidable pulido.",
    destacado: false,
    detalles: [
      "Calabaza con formato torpedo ergonómico",
      "Forrado en cuero vaqueta color marrón o negro",
      "Virola de acero inoxidable de alta resistencia",
      "Costuras firmes y base de apoyo estable"
    ]
  },
  {
    id: "mate-torpedo-premium",
    nombre: "Mate Torpedo Premium",
    categoria: "mates",
    subcategoria: "torpedo",
    precio: 31000,
    imagen: "assets/images/mate-torpedo.jpg",
    descripcion: "Torpedo estilizado con calabaza de alto espesor, forrado en cuero vacuno premium extra-grueso y virola de alpaca pulida con cincelados de flores o grecas.",
    destacado: true,
    detalles: [
      "Calabaza extra-gruesa seleccionada",
      "Cuero vacuno curtido al cromo para mayor suavidad y brillo",
      "Virola de alpaca cincelada a mano",
      "Excelente agarre y comodidad al cebar"
    ]
  },
  {
    id: "mate-torpedo-termico",
    nombre: "Mate Torpedo Térmico",
    categoria: "mates",
    subcategoria: "torpedo",
    precio: 22000,
    imagen: "assets/images/mate-torpedo.jpg",
    descripcion: "Práctico e innovador. Conserva la forma de un mate torpedo de cuero pero cuenta con un interior de acero inoxidable de doble capa de vacío, manteniendo el agua a temperatura ideal sin curado.",
    destacado: false,
    detalles: [
      "Interior de acero inoxidable 304 térmico",
      "Exterior forrado en cuero vacuno legítimo",
      "Fácil limpieza, no junta hongos y no requiere curado",
      "Virola de acero inoxidable"
    ]
  },
  {
    id: "mate-torpedo-cuero",
    nombre: "Mate Torpedo de Cuero",
    categoria: "mates",
    subcategoria: "torpedo",
    precio: 26000,
    imagen: "assets/images/mate-torpedo.jpg",
    descripcion: "Rústico y durable. Elaborado a partir de calabaza seleccionada de torpedo, revestida enteramente en cuero crudo curtido artesanalmente con costuras cruzadas expuestas.",
    destacado: false,
    detalles: [
      "Cuero de excelente espesor teñido a mano",
      "Costuras uruguayas tradicionales rústicas",
      "Virola de acero inoxidable embutida",
      "Muy resistente a caídas y raspaduras"
    ]
  },
  {
    id: "mate-torpedo-croco",
    nombre: "Mate Torpedo Croco",
    categoria: "mates",
    subcategoria: "torpedo",
    precio: 27000,
    imagen: "assets/images/mate-torpedo.jpg",
    descripcion: "La elegancia del formato torpedo combinada con el cuero grabado croco. Virola de acero inoxidable de gran brillo y terminación.",
    destacado: false,
    detalles: [
      "Cuero vacuno grabado símil cocodrilo",
      "Calabaza brasilera de paredes densas",
      "Virola de acero inoxidable embutida a presión",
      "Excelente base para mantener el mate parado"
    ]
  },
  {
    id: "mate-torpedo-calabaza",
    nombre: "Mate Torpedo de Calabaza",
    categoria: "mates",
    subcategoria: "torpedo",
    precio: 24000,
    imagen: "assets/images/mate-torpedo.jpg",
    descripcion: "El formato torpedo más tradicional. Calabaza criolla seleccionada por artesanos de Ramos Mejía, revestida en cuero curtido orgánico. Mantiene la esencia del ritual.",
    destacado: false,
    detalles: [
      "Calabaza pulida internamente",
      "Cuero vacuno natural marrón claro (suela)",
      "Virola de acero inoxidable",
      "Costura en espiral hecha con tiento"
    ]
  },

  // Subcategoría: Camionero
  {
    id: "mate-camionero-clasico",
    nombre: "Mate Camionero Clásico",
    categoria: "mates",
    subcategoria: "camionero",
    precio: 23000,
    imagen: "assets/images/mate-camionero.jpg",
    descripcion: "Formato Camionero (boca ensanchada hacia afuera, ideal para evitar que la yerba caiga), forrado en cuero de vaqueta con virola de acero inoxidable.",
    destacado: false,
    detalles: [
      "Calabaza con formato camionero tradicional",
      "Boca ancha volcada hacia el exterior",
      "Forrado en cuero vaqueta marrón",
      "Virola de acero inoxidable pulido"
    ]
  },
  {
    id: "mate-camionero-premium",
    nombre: "Mate Camionero Premium",
    categoria: "mates",
    subcategoria: "camionero",
    precio: 29500,
    imagen: "assets/images/mate-camionero.jpg",
    descripcion: "Camionero de gran tamaño, cuero seleccionado extra grueso teñido en tonos amaderados profundos y virola de alpaca ancha cincelada artesanalmente.",
    destacado: true,
    detalles: [
      "Calabaza extra-grande seleccionada",
      "Cuero de exportación teñido a mano",
      "Virola de alpaca cincelada con motivos florales",
      "Costura fina artesanal"
    ]
  },
  {
    id: "mate-camionero-algarrobo",
    nombre: "Mate Camionero de Algarrobo",
    categoria: "mates",
    subcategoria: "camionero",
    precio: 25000,
    imagen: "assets/images/mate-camionero.jpg",
    descripcion: "El camionero de madera. Interior torneado en algarrobo seleccionando maderas duras, forrado por fuera en cuero rústico de costura reforzada y virola de acero inoxidable.",
    destacado: false,
    detalles: [
      "Interior de madera de algarrobo de primera calidad",
      "Excelente curado y conservación del sabor original",
      "Exterior en cuero vacuno cosido a mano",
      "Boca ancha volcada típica del camionero"
    ]
  },
  {
    id: "mate-camionero-cuero",
    nombre: "Mate Camionero de Cuero",
    categoria: "mates",
    subcategoria: "camionero",
    precio: 24500,
    imagen: "assets/images/mate-camionero.jpg",
    descripcion: "Calabaza con forma camionero, revestida con cuero vacuno grueso con terminaciones naturales rústicas y virola de acero inoxidable.",
    destacado: false,
    detalles: [
      "Cuero curtido al quebracho color chocolate",
      "Costura tradicional a mano con hilo encerado",
      "Virola de acero inoxidable duradera",
      "Fácil de sostener y de base ancha"
    ]
  },

  // Subcategoría: Mate Térmico
  {
    id: "mate-termico-acero",
    nombre: "Mate Térmico de Acero",
    categoria: "mates",
    subcategoria: "termico",
    precio: 18000,
    imagen: "assets/images/mate-termico.jpg",
    descripcion: "La solución urbana y minimalista. Fabricado en acero inoxidable 304 de doble capa aislante de vacío. No requiere curado, no transmite sabores y mantiene la yerba templada por horas.",
    destacado: true,
    detalles: [
      "Acero inoxidable de grado alimenticio AISI 304",
      "Doble pared de vacío (evita que el exterior se caliente)",
      "Acabado en pintura texturada al horno en color verde oliva o crema",
      "Súper higiénico y fácil de lavar"
    ]
  },

  // ═══════════════════════════════════════════
  // CATEGORÍA: BOMBILLAS
  // ═══════════════════════════════════════════
  {
    id: "bombilla-pico-loro",
    nombre: "Bombilla Pico de Loro",
    categoria: "bombillas",
    subcategoria: "loro",
    precio: 8500,
    imagen: "assets/images/bombilla.jpg",
    descripcion: "Bombilla tradicional de alpaca con formato curvo 'pico de loro'. Excelente caudal de agua, filtro de cuchara clásico y cuerpo de espesor medio para evitar quemaduras.",
    destacado: true,
    detalles: [
      "Fabricada íntegramente en alpaca",
      "Pico curvo anatómico muy cómodo",
      "Filtro tipo cuchara de alta filtración",
      "Largo total aproximado: 19 cm"
    ]
  },
  {
    id: "bombilla-pico-loro-cincelada",
    nombre: "Bombilla Pico de Loro Cincelada",
    categoria: "bombillas",
    subcategoria: "loro",
    precio: 11000,
    imagen: "assets/images/bombilla.jpg",
    descripcion: "Elegancia y arte en cada mate. Bombilla pico de loro de alpaca con su caño totalmente cincelado a mano con relieves tradicionales criollos.",
    destacado: false,
    detalles: [
      "Cincelado artesanal a lo largo de todo el caño",
      "Filtro tipo pala reforzada y soldaduras en plata",
      "No transmite calor a los labios",
      "Presentada en estuche individual de cartón kraft"
    ]
  },
  {
    id: "bombilla-bombillon",
    nombre: "Bombillón de caño liso",
    categoria: "bombillas",
    subcategoria: "bombillon",
    precio: 15000,
    imagen: "assets/images/bombillon-alpaca-cincelado.png",
    descripcion: "Bombillones de caño liso diseñados para mates de boca ancha y profundos. Disponibles en alpaca con caño cincelado o en acero inoxidable con formato pico de loro y pala grande.",
    destacado: true,
    detalles: [
      "Caño de gran diámetro para un caudal óptimo",
      "Pala grande microperforada de excelente filtrado",
      "Terminaciones pulidas a espejo y difusor de calor",
      "Largo ideal de 20-21 cm para mates imperiales o camioneros"
    ],
    variantes: [
      { nombre: "alpaca con caño cincelado", imagen: "assets/images/bombillon-alpaca-cincelado.png", precio: 15000 },
      { nombre: "acero con pico de loro y pala grande", imagen: "assets/images/bombillon-acero-pala.png", precio: 10000 }
    ]
  },
  {
    id: "bombilla-acero-inoxidable",
    nombre: "Bombilla de Acero Inoxidable",
    categoria: "bombillas",
    subcategoria: "acero",
    precio: 6000,
    imagen: "assets/images/bombilla.jpg",
    descripcion: "La bombilla eterna. Fabricada en acero inoxidable 304 pulido a espejo. Cuenta con filtro de resorte desmontable de muy fácil limpieza y mantenimiento.",
    destacado: false,
    detalles: [
      "Acero inoxidable AISI 304 higiénico",
      "Resorte desmontable regulable para limpiar",
      "Pico plano y ancho",
      "Apta para lavavajillas"
    ]
  },
  {
    id: "bombilla-alpaca",
    nombre: "Bombilla de Alpaca",
    categoria: "bombillas",
    subcategoria: "alpaca",
    precio: 9500,
    imagen: "assets/images/bombilla.jpg",
    descripcion: "Bombilla de alpaca recta clásica, con coco/filtro plano y detalle de virola de bronce torneada. Sencilla, noble y muy duradera.",
    destacado: false,
    detalles: [
      "Alpaca pulida clásica",
      "Filtro plano tipo paleta soldada",
      "Detalle de bronce difusor térmico",
      "Ideal para mates torpedo y camioneros"
    ]
  },

  // ═══════════════════════════════════════════
  // CATEGORÍA: TERMOS
  // ═══════════════════════════════════════════
  {
    id: "termo-acero-1l",
    nombre: "Termo de Acero Inoxidable 1 Litro",
    categoria: "termos",
    subcategoria: "acero",
    precio: 34000,
    imagen: "assets/images/termo.jpg",
    descripcion: "Termo clásico de acero inoxidable de doble capa de 1 litro. Cuenta con tapón cebador de precisión (pico cebador clásico) que asegura un chorro continuo y controlado.",
    destacado: false,
    detalles: [
      "Capacidad: 1 Litro",
      "Doble pared de aislamiento de vacío de acero 304",
      "Pico cebador especial para mate",
      "Manija plegable de transporte"
    ]
  },
  {
    id: "termo-stanley-style",
    nombre: "Termo Tipo Stanley",
    categoria: "termos",
    subcategoria: "stanley",
    precio: 49000,
    imagen: "assets/images/termo.jpg",
    descripcion: "Termo premium de gran resistencia térmica. Fabricado con paredes de acero de gran calibre capaces de aguantar golpes y caídas sin perder vacío. Mantiene el agua caliente por más de 24 horas.",
    destacado: true,
    detalles: [
      "Capacidad: 1.2 Litros",
      "Pared exterior rugosa antideslizante color verde martillado",
      "Conserva calor y frío por 24 horas",
      "Tapa aislante que funciona como vaso o taza"
    ]
  },
  {
    id: "termo-negro-mate",
    nombre: "Termo Negro Mate",
    categoria: "termos",
    subcategoria: "negro",
    precio: 36000,
    imagen: "assets/images/termo.jpg",
    descripcion: "Estilo sofisticado y moderno. Termo de acero inoxidable con pintura al horno color negro mate de tacto suave y pico cebador de flujo continuo de 1 litro.",
    destacado: true,
    detalles: [
      "Capacidad: 1 Litro",
      "Acabado Negro Mate micro-texturado antihuellas",
      "Pico vertedor de 360 grados ideal para matear",
      "Conserva el agua caliente por 18 horas"
    ]
  },
  {
    id: "termo-personalizado",
    nombre: "Termo Personalizado",
    categoria: "termos",
    subcategoria: "personalizado",
    precio: 42000,
    imagen: "assets/images/termo.jpg",
    descripcion: "Tu termo grabado para toda la vida. Grabamos tu logo, nombre o diseño personalizado en láser de fibra óptica sobre termos de acero inoxidable pulido o pintados.",
    destacado: false,
    detalles: [
      "Grabado láser inalterable sobre metal o pintura",
      "Termo de acero inoxidable de 1 litro incluido",
      "Coordinación del diseño post-compra por email/WhatsApp",
      "Ideal para regalos empresariales o personales"
    ]
  },

  // ═══════════════════════════════════════════
  // CATEGORÍA: MATERAS
  // ═══════════════════════════════════════════
  {
    id: "matera-bolso",
    nombre: "Bolso Matero",
    categoria: "materas",
    subcategoria: "bolso",
    precio: 29000,
    imagen: "assets/images/matera.jpg",
    descripcion: "Bolso matero premium de cuero vacuno legítimo. Compartimento central amplio con separadores internos rígidos para termo, mate, yerbero y bombilla. Correa bandolera de cuero regulable.",
    destacado: true,
    detalles: [
      "100% Cuero vacuno flor de excelente calidad",
      "Separadores internos tapizados con material lavable",
      "Correa de hombro reforzada y cómoda de llevar",
      "Hebillas y herrajes de bronce viejo"
    ]
  },
  {
    id: "matera-canasta",
    nombre: "Canasta Matera",
    categoria: "materas",
    subcategoria: "canasta",
    precio: 22000,
    imagen: "assets/images/matera.jpg",
    descripcion: "La clásica canasta matera abierta. Confeccionada en cuero grueso de suela rígida con manija superior de madera noble torneada. Cómoda, rústica y de rápido acceso.",
    destacado: false,
    detalles: [
      "Cuero de suela rígida remachado",
      "Manija de madera maciza lustrada de gran comodidad",
      "Capacidad perfecta para termo Stanley, mate y latas",
      "Costuras de refuerzo a la vista"
    ]
  },
  {
    id: "matera-ecocuero",
    nombre: "Matera de Ecocuero",
    categoria: "materas",
    subcategoria: "ecocuero",
    precio: 17500,
    imagen: "assets/images/matera.jpg",
    descripcion: "Bolso rígido matero fabricado en ecocuero reforzado e impermeable. Excelente durabilidad frente a salpicaduras, manija de colgar ajustable y cierre superior con cremallera.",
    destacado: false,
    detalles: [
      "Confeccionado en ecocuero de alta resistencia al desgaste",
      "Fácil limpieza exterior e interior impermeable",
      "Cierre superior de cremallera metálica",
      "Precio súper competitivo"
    ]
  },

  // ═══════════════════════════════════════════
  // CATEGORÍA: YERBEROS Y AZUCAREROS
  // ═══════════════════════════════════════════
  {
    id: "set-yerbero-azucarera",
    nombre: "Set Yerbero + Azucarera",
    categoria: "yerberos-azucareros",
    subcategoria: "set",
    precio: 14500,
    imagen: "assets/images/set-yerbero.jpg",
    descripcion: "Set de dos latas reforzadas con pico vertedor plástico dosificador, revestidas enteramente en cuero ecológico cosido a mano con el sello grabado a fuego de El Buen Cebar.",
    destacado: true,
    detalles: [
      "Incluye lata yerbera (grande) y lata azucarera (mediana)",
      "Picos vertedores de plástico resistente para verter sin derrames",
      "Revestimiento de ecocuero cosido artesanalmente",
      "Excelente calce en bolsos y canastas materas"
    ]
  },
  {
    id: "yerbero-individual",
    nombre: "Yerbero Individual",
    categoria: "yerberos-azucareros",
    subcategoria: "individual",
    precio: 8900,
    imagen: "assets/images/set-yerbero.jpg",
    descripcion: "Lata yerbera individual reforzada con vertedor plástico de alta resistencia, forrada en cuero vacuno legítimo. Ideal para llevar la yerba justa a tus salidas.",
    destacado: false,
    detalles: [
      "Lata de hojalata premium higiénica",
      "Forrado en cuero vacuno legítimo marrón",
      "Vertedor plástico dosificador superior",
      "Capacidad: 250g de yerba mate aproximadamente"
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
