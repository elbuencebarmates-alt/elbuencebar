/* ==========================================================================
   INTERACTIVIDAD GLOBAL - EL BUEN CEBAR
   ========================================================================== */

// Detección inicial del modo oscuro (inmediato para evitar flash visual)
(function initDarkMode() {
  const darkModeSaved = localStorage.getItem('dark-mode');
  // Por defecto para usuarios nuevos (sin preferencia guardada) siempre carga Modo Claro.
  // Solo se activa el modo oscuro si el usuario lo encendió explícitamente y quedó guardado.
  if (darkModeSaved === 'true') {
    document.documentElement.classList.add('dark-mode');
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  inicializarHeader();
  inicializarMenuMovil();
  actualizarFechaCopyright();
  inicializarScrollReveal();
  inicializarModoOscuro();
  inicializarBotonWhatsApp();
});

// 1. Efecto Scroll en la Cabecera (Header shadow & shrink)
function inicializarHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const chequearScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  };

  // Ejecutar al cargar la página por si inicia con scroll
  chequearScroll();
  window.addEventListener("scroll", chequearScroll);
}

// 2. Menú de Navegación en Dispositivos Móviles
function inicializarMenuMovil() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("mobile-nav--open");
    
    if (isOpen) {
      mobileNav.classList.remove("mobile-nav--open");
      hamburger.classList.remove("hamburger--active");
      document.body.style.overflow = ""; // Restaura scroll
    } else {
      mobileNav.classList.add("mobile-nav--open");
      hamburger.classList.add("hamburger--active");
      document.body.style.overflow = "hidden"; // Deshabilita scroll de fondo
    }
  });

  // Cerrar menú móvil si se hace clic en un enlace
  const enlaces = mobileNav.querySelectorAll(".nav__link");
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
      mobileNav.classList.remove("mobile-nav--open");
      hamburger.classList.remove("hamburger--active");
      document.body.style.overflow = "";
    });
  });
}

// 3. Actualización dinámica del año en el pie de página
function actualizarFechaCopyright() {
  const copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
}

// 4. Revelado suave de elementos al hacer scroll
function inicializarScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (elements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-on-scroll--visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(element => {
    observer.observe(element);
  });
}

// 5. Soporte y botón flotante de Modo Oscuro (Dark Mode)
function inicializarModoOscuro() {
  // Crear el botón flotante dinámicamente
  const btn = document.createElement("button");
  btn.className = "dark-mode-toggle";
  btn.id = "dark-mode-btn";
  btn.setAttribute("aria-label", "Cambiar modo de color");
  
  // Icono SVG dinámico sol/luna
  const sunIcon = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  const actualizarIcono = () => {
    const isDark = document.documentElement.classList.contains("dark-mode");
    btn.innerHTML = isDark ? sunIcon : moonIcon;
  };

  actualizarIcono();
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDark ? "true" : "false");
    actualizarIcono();
    
    // Feedback táctil con micro-animación en click
    btn.style.transform = "scale(0.9) translateY(0)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  });
}

// 6. Botón flotante interactivo de WhatsApp con popup para seleccionar ambas líneas
function inicializarBotonWhatsApp() {
  const floatBtn = document.createElement("button");
  floatBtn.className = "whatsapp-float";
  floatBtn.id = "whatsapp-float-btn";
  floatBtn.setAttribute("aria-label", "Contactar por WhatsApp");
  floatBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const popup = document.createElement("div");
  popup.className = "whatsapp-popup";
  popup.id = "whatsapp-popup";
  popup.innerHTML = `
    <div class="whatsapp-popup__header">
      <div class="whatsapp-popup__title">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp Oficial
      </div>
      <button class="whatsapp-popup__close" id="whatsapp-popup-close">&times;</button>
    </div>
    <div class="whatsapp-popup__body">
      <a href="https://wa.me/5491124713099" target="_blank" class="whatsapp-option-btn">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        <div>
          <strong>Atención al Cliente</strong>
          <span>+54 9 11 2471-3099</span>
        </div>
      </a>
      <a href="https://wa.me/5491124561523" target="_blank" class="whatsapp-option-btn">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        <div>
          <strong>Atención al Cliente</strong>
          <span>+54 9 11 2456-1523</span>
        </div>
      </a>
    </div>
  `;

  document.body.appendChild(floatBtn);
  document.body.appendChild(popup);

  floatBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.classList.toggle("whatsapp-popup--open");
  });

  const closeBtn = document.getElementById("whatsapp-popup-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("whatsapp-popup--open");
    });
  }

  document.addEventListener("click", (e) => {
    if (!popup.contains(e.target) && e.target !== floatBtn) {
      popup.classList.remove("whatsapp-popup--open");
    }
  });
}

