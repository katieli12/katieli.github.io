const menuButton = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.nav-links');
      menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        navLinks.classList.toggle('is-open', !isOpen);
      });
      navLinks.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
          menuButton.setAttribute('aria-expanded', 'false');
          navLinks.classList.remove('is-open');
        }
      });
      const experienceItems = document.querySelectorAll('.reveal-item');
      if ('IntersectionObserver' in window) {
        const experienceObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });
        experienceItems.forEach((item) => experienceObserver.observe(item));
      } else {
        experienceItems.forEach((item) => item.classList.add('is-visible'));
      }
      document.querySelector('#year').textContent = new Date().getFullYear();
