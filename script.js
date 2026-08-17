// Nav scroll state
const nav = document.getElementById('nav');
const fab = document.querySelector('.fab');
const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 30);
  if (fab) fab.classList.toggle('show', y > 600);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');
burger?.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
});
navMobile?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navMobile.classList.remove('open');
  burger.classList.remove('open');
}));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// FAQ single-open behavior
document.querySelectorAll('.faq details').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) document.querySelectorAll('.faq details').forEach(x => { if (x !== d) x.open = false; });
  });
});

// Form (client-side only)
const form = document.getElementById('consultForm');
const thanks = document.getElementById('formThanks');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  if (!data.get('name') || !data.get('email') || !data.get('phone') || !data.get('concern')) {
    alert('Please complete the required fields.');
    return;
  }
  thanks.classList.add('show');
  form.reset();
  setTimeout(() => thanks.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
});

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
