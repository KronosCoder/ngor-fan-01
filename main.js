const EMOJIS = ['🌸', '💕', '🌷', '💗', '🥕', '🥕', '🥕', '🥕', '🥕'];

(function spawnParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = 18;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.classList.add('particle');
    el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

    const x = Math.random() * 100;
    const dur = 6 + Math.random() * 7;
    const delay = Math.random() * 9;
    const size = 0.65 + Math.random() * 0.8;

    el.style.setProperty('--x', x + 'vw');
    el.style.setProperty('--dur', dur + 's');
    el.style.setProperty('--delay', delay + 's');
    el.style.fontSize = size + 'rem';

    container.appendChild(el);
  }
})();

function openLetter() {
  const wrapper = document.getElementById('envelopeWrapper');
  const hint = document.getElementById('hintText');
  const letterEl = document.getElementById('letterContainer');

  if (!wrapper || wrapper.dataset.opened) return;
  wrapper.dataset.opened = 'true';

  wrapper.style.transition = 'opacity 0.45s ease';
  wrapper.style.opacity = '0';

  if (hint) {
    hint.style.transition = 'opacity 0.3s ease';
    hint.style.opacity = '0';
  }

  setTimeout(() => {
    if (wrapper) wrapper.style.display = 'none';
    if (hint) hint.style.display = 'none';
    if (letterEl) letterEl.classList.add('visible');
  }, 480);
}

function goToNext() {
  const letter = document.getElementById('letterContainer');
  if (letter) {
    letter.style.transition = 'opacity 0.4s ease';
    letter.style.opacity = '0';
  }

  setTimeout(() => {
    window.location.href = 'sec_page.html';
  }, 420);
}
