// === Theme Toggle ===
function initTheme() {
  var saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  updateThemeButton();
}

function toggleTheme() {
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  updateThemeButton();
}

function updateThemeButton() {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.innerHTML = isDark ? '☀️ Claro' : '🌙 Oscuro';
}

// === Sidebar Toggle (Mobile) ===
document.addEventListener('DOMContentLoaded', function() {
  initTheme();

  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('overlay');
  var menuToggle = document.getElementById('menuToggle');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  // === Unit Toggle in Sidebar ===
  document.querySelectorAll('.toggle-unit').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var unit = btn.getAttribute('data-unit');
      var sub = document.getElementById('sub-' + unit);
      var chevron = btn.querySelector('.chevron');
      if (sub) {
        sub.classList.toggle('open');
        chevron.classList.toggle('open');
      }
    });
  });

  // === Topic Toggle (on unit pages) ===
  document.querySelectorAll('.topic-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var body = header.nextElementSibling;
      var toggle = header.querySelector('.toggle');
      body.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  });
});
