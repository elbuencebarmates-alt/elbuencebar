/* ==========================================================================
   INTERACTIVIDAD GLOBAL - EL BUEN CEBAR
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  inicializarHeader();
  inicializarMenuMovil();
  actualizarFechaCopyright();
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
