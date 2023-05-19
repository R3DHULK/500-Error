const explosions = document.querySelectorAll('.explode');
const serverSVG = document.querySelector('.servers');

function explode(e) {
  e.style.display = 'block';
  let servers = serverSVG.getBoundingClientRect();
  e.style.left = `calc(${Math.round(servers.left + (Math.random() * servers.width / 2))}px + 6vmin)`;
  e.style.top = Math.round(servers.top + (Math.random() * servers.height / 2)) + 'px';
  e.style.transform = `rotate(${Math.round(Math.random() * 360)}deg) scale(${0.5 + Math.random() * 0.5})`;
  setTimeout(() => {e.style.display = 'none'}, 200);
}
setInterval(() => { explode(explosions[Math.floor(Math.random() * explosions.length)]) }, 100);