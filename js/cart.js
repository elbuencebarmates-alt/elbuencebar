function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
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
// Carga y audita los datos guardados en LocalStorage (Previene manipulación de precios)
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("el_buen_cebar_carrito");
  if (carritoGuardado) {
    try {
      const parsed = JSON.parse(carritoGuardado);
      if (Array.isArray(parsed)) {
        carrito = parsed.filter(item => {
          if (!item || !item.id) return false;
          // Validar que el producto exista en la base de datos real PRODUCTOS
          const prod = typeof PRODUCTOS !== 'undefined' ? PRODUCTOS.find(p => p.id === item.id) : null;
          if (prod) {
            // Re-sanitizar y fijar campos
            item.nombre = prod.nombre;
            item.categoria = prod.categoria;
            // Clampear cantidad entera segura entre 1 y 99
            item.cantidad = Math.max(1, Math.min(99, Math.floor(parseInt(item.cantidad) || 1)));
            // Auditar precio (mantener si es promo de caja $8.000 o bombilla $7.500)
            if (item.precioCustom) {
              item.precio = Math.max(0, Number(item.precioCustom));
            } else {
              item.precio = prod.precio;
            }
            return true;
          }
          return false;
        });
      } else {
        carrito = [];
      }
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
function agregarAlCarrito(id, cantidad = 1, opcion = "", event = null, skipUpsell = false, precioCustom = null) {
  // Buscar producto en la base de datos (PRODUCTOS está en products.js)
  const producto = PRODUCTOS.find(p => p.id === id);
  if (!producto) return;

  // Interceptar si es un Mate y no viene de confirmación de Upsell
  if (producto.categoria === "mates" && !skipUpsell) {
    mostrarUpsellModal(id, cantidad, opcion, event);
    return;
  }

  // Lógica de animación Fly-to-Cart
  let delayDrawer = 0;
  if (event) {
    const btn = event.currentTarget || event.target;
    if (btn) {
      const card = btn.closest(".product-card");
      if (card) {
        const imgToClone = card.querySelector(".product-card__image--primary") || card.querySelector(".product-card__image");
        const cartTarget = document.querySelector("button[data-cart-toggle]");
        
        if (imgToClone && cartTarget) {
          delayDrawer = 800; // Demorar apertura del drawer para dar tiempo a la animación
          
          const imgRect = imgToClone.getBoundingClientRect();
          const targetRect = cartTarget.getBoundingClientRect();
          
          const clone = document.createElement("img");
          clone.src = imgToClone.src;
          clone.classList.add("flying-image");
          clone.style.left = `${imgRect.left}px`;
          clone.style.top = `${imgRect.top}px`;
          clone.style.width = `${imgRect.width}px`;
          clone.style.height = `${imgRect.height}px`;
          
          document.body.appendChild(clone);
          
          requestAnimationFrame(() => {
            clone.style.left = `${targetRect.left + (targetRect.width / 2) - 40}px`;
            clone.style.top = `${targetRect.top + (targetRect.height / 2) - 40}px`;
            clone.style.width = "20px";
            clone.style.height = "20px";
            clone.style.opacity = "0.2";
            clone.style.transform = "rotate(360deg)";
          });
          
          setTimeout(() => {
            clone.remove();
            
            // Efecto rebote en el carrito
            cartTarget.classList.add("cart-bounce-animation");
            setTimeout(() => {
              cartTarget.classList.remove("cart-bounce-animation");
            }, 500);
          }, 800);
        }
      }
    }
  }

  // Buscar si la opción corresponde a una variante con precio o imagen propios
  let precioFinal = precioCustom !== null ? precioCustom : producto.precio;
  let imagenFinal = producto.imagen;
  if (precioCustom === null && producto.variantes && opcion) {
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
  
  if (delayDrawer > 0) {
    setTimeout(() => {
      abrirCarritoDrawer();
    }, delayDrawer);
  } else {
    abrirCarritoDrawer();
  }
}

// MODAL COMBO MATERO (CROSS-SELL / ADICIONALES)
function mostrarUpsellModal(mateId, cantidad = 1, opcion = "", originalEvent = null) {
  const mate = PRODUCTOS.find(p => p.id === mateId);
  if (!mate) return;

  let modalOverlay = document.getElementById("upsell-modal-overlay");
  if (!modalOverlay) {
    modalOverlay = document.createElement("div");
    modalOverlay.id = "upsell-modal-overlay";
    modalOverlay.className = "upsell-modal-overlay";
    document.body.appendChild(modalOverlay);
  }

  const precioMate = mate.precio;
  const precioCaja = 8000;
  const precioBombilla = 7500;

  modalOverlay.innerHTML = `
    <div class="upsell-modal-card">
      <button class="upsell-modal-close" onclick="cerrarUpsellModal()">&times;</button>
      
      <div class="upsell-badge">
        ✨ PROMO COMBO MATERO COMPLETO
      </div>
      
      <h3 class="upsell-title">¿Querés armar tu Set Matero Completo?</h3>
      <p class="upsell-subtitle">Aprovechá a equipar tu mate con caja de regalo o bombilla a precio promocional</p>
      
      <div class="upsell-product-preview">
        <img src="${mate.imagen}" alt="${mate.nombre}">
        <div class="upsell-product-info">
          <div class="upsell-product-name">${mate.nombre} ${opcion ? `(${opcion})` : ''}</div>
          <div class="upsell-product-price">$${precioMate.toLocaleString('es-AR')}</div>
        </div>
      </div>
      
      <div class="upsell-addons-list">
        <label class="upsell-addon-card selected" id="card-addon-caja">
          <input type="checkbox" id="chk-addon-caja" class="upsell-addon-checkbox" checked onchange="actualizarTotalUpsell(${precioMate})">
          <img src="assets/images/caja-presentacion-feliz-dia-mama.png" alt="Caja de Regalo" class="upsell-addon-img">
          <div class="upsell-addon-details">
            <div class="upsell-addon-title">📦 Caja de Regalo de Presentación</div>
            <div class="upsell-addon-desc">Caja rígida grabada ideal para regalo o protección</div>
          </div>
          <div class="upsell-addon-price">+$8.000</div>
        </label>
        
        <label class="upsell-addon-card selected" id="card-addon-bombilla">
          <input type="checkbox" id="chk-addon-bombilla" class="upsell-addon-checkbox" checked onchange="actualizarTotalUpsell(${precioMate})">
          <img src="assets/images/bombilla-acero-pala-bronce.png" alt="Bombilla de Acero" class="upsell-addon-img">
          <div class="upsell-addon-details">
            <div class="upsell-addon-title">⚡ Bombilla de Acero Inoxidable</div>
            <div class="upsell-addon-desc">Formato pico de loro con pala grande microperforada</div>
          </div>
          <div class="upsell-addon-price">+$7.500</div>
        </label>
      </div>
      
      <div class="upsell-total-bar">
        <span>TOTAL DEL COMBO:</span>
        <span class="upsell-total-amount" id="upsell-total-display">$${(precioMate + precioCaja + precioBombilla).toLocaleString('es-AR')}</span>
      </div>
      
      <div class="upsell-actions">
        <button class="btn btn--primary btn--lg" id="btn-upsell-confirm">
          🛒 AGREGAR COMBO MATERO
        </button>
        <button class="upsell-skip-btn" onclick="confirmarUpsellSoloMate('${mateId}', ${cantidad}, '${opcion.replace(/'/g, "\\'")}')">
          No gracias, llevar solo el mate
        </button>
      </div>
    </div>
  `;

  modalOverlay.style.display = "flex";

  document.getElementById("btn-upsell-confirm").onclick = () => {
    const addCaja = document.getElementById("chk-addon-caja").checked;
    const addBombilla = document.getElementById("chk-addon-bombilla").checked;

    cerrarUpsellModal();

    // 1. Agregar Mate principal
    agregarAlCarrito(mateId, cantidad, opcion, originalEvent, true);

    // 2. Agregar adicionales seleccionados (Caja a $8.000 promocional)
    if (addCaja) {
      agregarAlCarrito("caja-presentacion-feliz-dia-mama", 1, "Adicional Combo Promo", null, true, 8000);
    }
    if (addBombilla) {
      agregarAlCarrito("bombilla-acero-inoxidable", 1, "Adicional Combo Promo", null, true, 7500);
    }
  };
}

function actualizarTotalUpsell(precioMate) {
  const chkCaja = document.getElementById("chk-addon-caja");
  const chkBombilla = document.getElementById("chk-addon-bombilla");
  const cardCaja = document.getElementById("card-addon-caja");
  const cardBombilla = document.getElementById("card-addon-bombilla");
  
  if (chkCaja) {
    if (chkCaja.checked) cardCaja.classList.add("selected");
    else cardCaja.classList.remove("selected");
  }

  if (chkBombilla) {
    if (chkBombilla.checked) cardBombilla.classList.add("selected");
    else cardBombilla.classList.remove("selected");
  }

  let total = precioMate;
  if (chkCaja && chkCaja.checked) total += 8000;
  if (chkBombilla && chkBombilla.checked) total += 7500;

  const display = document.getElementById("upsell-total-display");
  if (display) {
    display.textContent = `$${total.toLocaleString('es-AR')}`;
  }
}

function confirmarUpsellSoloMate(mateId, cantidad, opcion) {
  cerrarUpsellModal();
  agregarAlCarrito(mateId, cantidad, opcion, null, true);
}

function cerrarUpsellModal() {
  const modalOverlay = document.getElementById("upsell-modal-overlay");
  if (modalOverlay) {
    modalOverlay.style.display = "none";
  }
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
      const opcionHtml = item.opcion ? `<span class="cart-item__option">Variante: ${escapeHTML(item.opcion)}</span>` : "";
      itemsHtml += `
        <div class="cart-item">
          <img src="${item.imagen}" alt="${escapeHTML(item.nombre)}" class="cart-item__image">
          <div class="cart-item__details">
            <div>
              <div class="cart-item__title">${escapeHTML(item.nombre)}</div>
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

// Muestra una notificación visual en la esquina (Glassmorphism Toast con progreso)
let toastTimeout = null;

function mostrarToast(mensaje) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast";
    toast.innerHTML = `
      <div class="toast-content-wrapper">
        <svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span class="toast-message"></span>
      </div>
      <div class="toast-progress-container">
        <div class="toast-progress" id="toast-progress-bar"></div>
      </div>
    `;
    document.body.appendChild(toast);
  }

  const bar = toast.querySelector("#toast-progress-bar");
  
  // Limpiar cualquier estado anterior
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  toast.classList.remove("toast--show");
  if (bar) {
    bar.style.transition = "none";
    bar.style.width = "100%";
  }

  // Escribir mensaje
  toast.querySelector(".toast-message").textContent = mensaje;

  // Forzar reflow y animar en el siguiente frame
  requestAnimationFrame(() => {
    toast.classList.add("toast--show");
    
    // Iniciar decremento de la barra de progreso
    if (bar) {
      requestAnimationFrame(() => {
        bar.style.transition = "width 3s linear";
        bar.style.width = "0%";
      });
    }

    toastTimeout = setTimeout(() => {
      toast.classList.remove("toast--show");
    }, 3000);
  });
}

