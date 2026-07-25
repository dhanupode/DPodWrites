// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinksEl.style.display === 'flex';
    navLinksEl.style.display = open ? 'none' : 'flex';
    navLinksEl.style.flexDirection = 'column';
    navLinksEl.style.position = 'absolute';
    navLinksEl.style.top = '64px';
    navLinksEl.style.right = '20px';
    navLinksEl.style.background = '#141c30';
    navLinksEl.style.border = '1px solid #223050';
    navLinksEl.style.borderRadius = '12px';
    navLinksEl.style.padding = '12px 20px';
    navLinksEl.style.gap = '14px';
  });
  navLinksEl.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => { navLinksEl.style.display = 'none'; });
  });
}

// Reveal-on-scroll for section headers
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section-label, .section-title, .section-intro').forEach((el) => {
  observer.observe(el);
});
