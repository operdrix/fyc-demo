// Récupère le bouton et le sous-menu
const adminButton = document.querySelector('.menu-button');
const adminSubmenu = document.getElementById('submenu-admin');

// Toggle du sous-menu au clic
adminButton.addEventListener('click', () => {
  const isExpanded = adminButton.getAttribute('aria-expanded') === 'true';
  adminButton.setAttribute('aria-expanded', !isExpanded);
});

// (Facultatif) Refermer le sous-menu si on clique ailleurs
document.addEventListener('click', (e) => {
  if (!adminButton.contains(e.target) && !adminSubmenu.contains(e.target)) {
    adminButton.setAttribute('aria-expanded', false);
  }
});