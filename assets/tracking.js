document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'phone_click', {
          event_category: 'engagement',
          event_label: link.getAttribute('href')
        });
      }
    });
  });

  document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: link.getAttribute('href')
        });
      }
    });
  });
});
