// Data da festa: 08/08/2026 às 20h
const partyDate = new Date('2026-08-08T20:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = partyDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

  if (distance < 0) {
    document.querySelector('.timer').innerHTML = '<h2 style="color:#00e5ff">🎉 A FESTA COMEÇOU! 🎉</h2>';
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Música
function playMusic() {
  const music = document.getElementById('bgMusic');
  music.volume = 0.35;
  music.play();
}
