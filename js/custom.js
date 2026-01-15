// Scroll Reveal Effect
const sr = ScrollReveal({
  reset: true,
});

sr.reveal('.landing-text-box', {
  duration: 1000,
  origin: 'right',
  distance: '80px',
});

sr.reveal('.meet-text-box', {
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
});

sr.reveal('.meet-wrapper img, .feature', {
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
  interval: 200,
});
