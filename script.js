/**
 * GLOBERUS — Interactivad ligera y rapida (Sin dependencias externas)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu movil hamburguesa
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar menu al hacer clic en un enlace de navegacion
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Selector de pestanas para Modos de Entreno (Sensaciones, Pulso, Vatios)
  const tabButtons = document.querySelectorAll('.modo-tab-btn');
  const tabContents = document.querySelectorAll('.modo-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      // Actualizar estado de los botones
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Actualizar paneles visibles
      tabContents.forEach(content => {
        if (content.id === targetId) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });

  // 3. Clic en los telefonos del Hero para abrirlos en el visor modal
  const heroPhones = document.querySelectorAll('.phone-card');
  heroPhones.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.getAttribute('data-title') || 'Captura de Globerus';
      if (img) {
        openModal(img.getAttribute('src'), title);
      }
    });
  });

  // 4. Permitir abrir capturas también con teclado
  document.querySelectorAll('.single-phone[role="button"]').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // 5. Cerrar el modal con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeLaunchModal();
    }
  });
});

// 6. Modal informativo de lanzamiento próximo
function openLaunchModal(e) {
  if (e) e.preventDefault();
  const modal = document.getElementById('launchModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeLaunchModal() {
  const modal = document.getElementById('launchModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// 6. Funciones globales de Lightbox / Modal
function openModal(src, caption) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');

  if (modal && modalImg) {
    modalImg.src = src;
    if (modalCaption) {
      modalCaption.textContent = caption || '';
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
  }
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}
