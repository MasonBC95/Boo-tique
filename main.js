// Generate stars
  const starsEl = document.getElementById('stars');
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      --dur: ${Math.random() * 4 + 2}s;
      --op: ${Math.random() * 0.5 + 0.15};
      animation-delay: ${Math.random() * 5}s;
    `;
    starsEl.appendChild(s);
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  // Nav fade on scroll
  const navEl = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navEl.style.background = 'rgba(26,18,8,0.97)';
    } else {
      navEl.style.background = 'linear-gradient(to bottom, rgba(26,18,8,0.95), transparent)';
    }
  });