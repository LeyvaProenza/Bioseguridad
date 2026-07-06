// === Sidebar Toggle (Mobile) ===
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuToggle = document.getElementById('menuToggle');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  // === Unit Toggle in Sidebar ===
  document.querySelectorAll('.toggle-unit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const unit = btn.getAttribute('data-unit');
      const sub = document.getElementById('sub-' + unit);
      const chevron = btn.querySelector('.chevron');
      if (sub) {
        sub.classList.toggle('open');
        chevron.classList.toggle('open');
      }
    });
  });

  // === Topic Toggle (on unit pages) ===
  document.querySelectorAll('.topic-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const toggle = header.querySelector('.toggle');
      body.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  });
});
