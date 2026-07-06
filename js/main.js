// === Sidebar Toggle (Mobile) ===
document.addEventListener('DOMContentLoaded', function() {
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
