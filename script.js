const fechaBoda = new Date("2025-10-18T15:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const ahora = new Date().getTime();
  const tiempo = fechaBoda - ahora;

  const dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tiempo % (1000 * 60 * 60)) / (1000 * 60));

  countdown.innerHTML = `${dias} días, ${horas} hs, ${minutos} min`;
}, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.4 // Se activa cuando el 40% de la sección entra en vista
});

document.querySelectorAll('.slide').forEach(slide => {
  observer.observe(slide);
});
