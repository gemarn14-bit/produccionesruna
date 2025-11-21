document.addEventListener('DOMContentLoaded', function () {
  const deck = document.querySelector('.deck');
  if (!deck) return;

  const cards = Array.from(deck.querySelectorAll('.card'));
  const btnPrev = document.getElementById('prev');
  const btnNext = document.getElementById('next');

  if (!cards.length) return;

  let current = 0;
  const stepPercent = 110; // separación entre cartas

  // Renderizamos todas las cartas alrededor del "current"
  function render() {
    cards.forEach((card, i) => {
      // calculamos la posición relativa circular
      let offset = i - current;

      // si offset es negativo y mayor que la mitad, lo ajustamos para infinito
      if (offset < -cards.length / 2) offset += cards.length;
      if (offset > cards.length / 2) offset -= cards.length;

      const translateX = offset * stepPercent;
      const scale = (i === current) ? 1 : 0.82;
      const opacity = (i === current) ? 1 : 0.6;
      const z = (i === current) ? 40 : (Math.max(0, 30 - Math.abs(offset)));

      card.style.transform = `translate(-50%, -50%) translateX(${translateX}%) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = z;
      card.classList.toggle('active', i === current);
    });
  }

  // Pasar a la siguiente carta
  function next() {
    current = (current + 1) % cards.length;
    render();
  }

  // Pasar a la carta anterior
  function prev() {
    current = (current - 1 + cards.length) % cards.length;
    render();
  }

  // Listeners de botones
  btnNext?.addEventListener('click', next);
  btnPrev?.addEventListener('click', prev);

  // Teclado
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  // Autoplay (opcional, 3s)
  let autoplay = setInterval(next, 3000);
  deck.addEventListener('mouseenter', () => clearInterval(autoplay));
  deck.addEventListener('mouseleave', () => autoplay = setInterval(next, 3000));

  // Primera renderización
  render();
});


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MELL2WWHZK');
