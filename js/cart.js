/* ==========================================================================
   GESTOR DEL CARRITO - EL BUEN CEBAR
   ========================================================================== */

// Configuración del Carrito
const SHIPPING_THRESHOLD = 150000; // Envío gratis a partir de $150.000 ARS
const FLAT_SHIPPING_COST = 3500;   // Costo de envío fijo si no supera el límite

let carrito = [];

// Inicialización del Carrito
document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();
  inicializarEventosCarrito();
  actualizarUI();
});

// Carga los datos guardados en LocalStorage
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("el_buen_cebar_carrito");
  if (carritoGuardado) {
    try {
      carrito = JSON.parse(carritoGuardado);
    } catch (e) {
      carrito = [];
    }
  }
}

// Guarda los datos en LocalStorage y actualiza la UI
function guardarCarrito() {
  localStorage.setItem("el_buen_cebar_carrito", JSON.stringify(carrito));
  actualizarUI();
  
  // Despacha un evento personalizado para otras páginas
  const event = new CustomEvent("cartUpdated", { detail: carrito });
  document.dispatchEvent(event);
}

// Agrega un producto al carrito
function agregarAlCarrito(id, cantidad = 1, opcion = "") {
  // Buscar producto en la base de datos (PRODUCTOS está en products.js)
  const producto = PRODUCTOS.find(p => p.id === id);
  if (!producto) return;

  // Buscar si la opción corresponde a una variante con precio o imagen propios
  let precioFinal = producto.precio;
  let imagenFinal = producto.imagen;
  if (producto.variantes && opcion) {
    const varEncontrada = producto.variantes.find(v => v.nombre.toLowerCase().trim() === opcion.toLowerCase().trim());
    if (varEncontrada) {
      precioFinal = varEncontrada.precio;
      if (varEncontrada.imagen) {
        imagenFinal = varEncontrada.imagen;
      }
    }
  }

  // Buscar si ya existe el item con la misma opción en el carrito
  const itemExistente = carrito.find(item => item.id === id && item.opcion === opcion);

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: precioFinal,
      imagen: imagenFinal,
      categoria: producto.categoria,
      opcion: opcion,
      cantidad: cantidad
    });
  }

  guardarCarrito();
  mostrarToast(`${producto.nombre} agregado al carrito.`);
  abrirCarritoDrawer();
}

// Elimina un producto del carrito
function eliminarDelCarrito(id, opcion = "") {
  carrito = carrito.filter(item => !(item.id === id && item.opcion === opcion));
  guardarCarrito();
}

// Modifica la cantidad de un producto
function modificarCantidad(id, opcion, delta) {
  const item = carrito.find(item => item.id === id && item.opcion === opcion);
  if (!item) return;

  item.cantidad += delta;
  
  if (item.cantidad <= 0) {
    eliminarDelCarrito(id, opcion);
  } else {
    guardarCarrito();
  }
}

// Calcula los subtotales
function obtenerSubtotal() {
  return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

// Calcula los costos de envío
function obtenerCostoEnvio() {
  const subtotal = obtenerSubtotal();
  if (subtotal === 0) return 0;
  return subtotal >= SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING_COST;
}

// Inicializa los eventos que abren y cierran el drawer del carrito
function inicializarEventosCarrito() {
  // Buscar toggles de carrito
  const cartToggles = document.querySelectorAll("[data-cart-toggle]");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartClose = document.getElementById("cart-close");

  cartToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      abrirCarritoDrawer();
    });
  });

  if (cartOverlay) {
    cartOverlay.addEventListener("click", (e) => {
      if (e.target === cartOverlay) {
        cerrarCarritoDrawer();
      }
    });
  }

  if (cartClose) {
    cartClose.addEventListener("click", cerrarCarritoDrawer);
  }
}

function abrirCarritoDrawer() {
  const cartOverlay = document.getElementById("cart-overlay");
  if (cartOverlay) {
    cartOverlay.classList.add("cart-overlay--open");
    document.body.style.overflow = "hidden"; // Deshabilita scroll de fondo
  }
}

function cerrarCarritoDrawer() {
  const cartOverlay = document.getElementById("cart-overlay");
  if (cartOverlay) {
    cartOverlay.classList.remove("cart-overlay--open");
    document.body.style.overflow = ""; // Restaura scroll de fondo
  }
}

// Actualiza todos los elementos de la interfaz relacionados con el carrito
function actualizarUI() {
  // 1. Actualizar insignias de cantidad (Header)
  const insignias = document.querySelectorAll(".cart-badge");
  const totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0);
  
  insignias.forEach(insignia => {
    insignia.textContent = totalCantidad;
    insignia.style.display = totalCantidad > 0 ? "flex" : "none";
  });

  // 2. Renderizar items en el Drawer
  const cartList = document.getElementById("cart-items-list");
  const cartSummary = document.getElementById("cart-drawer-summary");
  
  if (!cartList) return; // Si no estamos en una página con drawer, salimos

  if (carrito.length === 0) {
    cartList.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Tu carrito está vacío</p>
        <a href="catalogo.html" class="btn btn--primary btn--sm" style="margin-top: 16px;">Ver Catálogo</a>
      </div>
    `;
    if (cartSummary) cartSummary.style.display = "none";
  } else {
    if (cartSummary) cartSummary.style.display = "block";
    
    // Generar indicador de envío gratis
    const subtotal = obtenerSubtotal();
    const costoEnvio = obtenerCostoEnvio();
    let shippingHtml = "";
    
    if (subtotal >= SHIPPING_THRESHOLD) {
      shippingHtml = `
        <div class="shipping-meter">
          <div class="shipping-meter__text">¡Tenés <span>Envío Gratis</span>!</div>
          <div class="shipping-meter__bar">
            <div class="shipping-meter__fill" style="width: 100%"></div>
          </div>
        </div>
      `;
    } else {
      const faltante = SHIPPING_THRESHOLD - subtotal;
      const porcentaje = (subtotal / SHIPPING_THRESHOLD) * 100;
      shippingHtml = `
        <div class="shipping-meter">
          <div class="shipping-meter__text">Faltan <span>$${faltante.toLocaleString('es-AR')}</span> para el <strong>Envío Gratis</strong>.</div>
          <div class="shipping-meter__bar">
            <div class="shipping-meter__fill" style="width: ${porcentaje}%"></div>
          </div>
        </div>
      `;
    }

    let itemsHtml = shippingHtml;

    carrito.forEach(item => {
      const opcionHtml = item.opcion ? `<span class="cart-item__option">Variante: ${item.opcion}</span>` : "";
      itemsHtml += `
        <div class="cart-item">
          <img src="${item.imagen}" alt="${item.nombre}" class="cart-item__image">
          <div class="cart-item__details">
            <div>
              <div class="cart-item__title">${item.nombre}</div>
              ${opcionHtml}
            </div>
            <div class="cart-item__qty-box">
              <button class="qty-btn" onclick="modificarCantidad('${item.id}', '${item.opcion}', -1)">-</button>
              <span class="qty-val">${item.cantidad}</span>
              <button class="qty-btn" onclick="modificarCantidad('${item.id}', '${item.opcion}', 1)">+</button>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: flex-end;">
            <button class="cart-item__remove" onclick="eliminarDelCarrito('${item.id}', '${item.opcion}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
            <div class="cart-item__price">$${(item.precio * item.cantidad).toLocaleString('es-AR')}</div>
          </div>
        </div>
      `;
    });

    cartList.innerHTML = itemsHtml;

    // Actualizar resumen de precios
    const subtotalElem = document.getElementById("cart-subtotal");
    const envioElem = document.getElementById("cart-shipping");
    const totalElem = document.getElementById("cart-total");

    if (subtotalElem) subtotalElem.textContent = `$${subtotal.toLocaleString('es-AR')}`;
    if (envioElem) {
      envioElem.textContent = costoEnvio === 0 ? "GRATIS" : `$${costoEnvio.toLocaleString('es-AR')}`;
    }
    if (totalElem) {
      totalElem.textContent = `$${(subtotal + costoEnvio).toLocaleString('es-AR')}`;
    }
  }
}

// Muestra una notificación visual en la esquina
function mostrarToast(mensaje) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast";
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 8 12 12 16 14"></polyline>
      </svg>
      <span class="toast-message"></span>
    `;
    document.body.appendChild(toast);
  }

  toast.querySelector(".toast-message").textContent = mensaje;
  toast.classList.add("toast--show");

  setTimeout(() => {
    toast.classList.remove("toast--show");
  }, 3000);
}
