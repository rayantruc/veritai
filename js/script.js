/* =========================================================
   VeritAI – script.js
   BTS SIO1 – SLAM
   ========================================================= */

'use strict';

// ── Smooth scroll sur les liens internes ────────────────
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var targetId = this.getAttribute('href');
    if (targetId === '#') return;
    var target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();

    // Fermer le menu burger si ouvert
    var navCollapse = document.getElementById('navbarMain');
    if (navCollapse && navCollapse.classList.contains('show')) {
      var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    }

    var navHeight = document.getElementById('mainNav').offsetHeight;
    var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
});

// ── Validation du formulaire ────────────────────────────
var form = document.getElementById('contactForm');
var successMsg = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    var original = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = 'Envoi en cours…';

    setTimeout(function() {
      form.reset();
      form.classList.remove('was-validated');
      btn.disabled = false;
      btn.innerHTML = original;
      if (successMsg) {
        successMsg.classList.remove('d-none');
        setTimeout(function() { successMsg.classList.add('d-none'); }, 5000);
      }
    }, 1200);
  });
}
