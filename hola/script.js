// REQUERIMIENTO 2: Contador de visitas
let visitas = localStorage.getItem('visitas') || 0;
visitas++;
localStorage.setItem('visitas', visitas);
document.getElementById('contador').innerText = visitas;

// REQUERIMIENTO 4 y 10: Estrella y Estela
const estrella = document.getElementById('estrella');
document.addEventListener('mousemove', (e) => {
    estrella.style.left = e.pageX + 'px';
    estrella.style.top = e.pageY + 'px';

    let p = document.createElement('span');
    p.classList.add('particula');
    p.innerText = Math.round(Math.random()); 
    p.style.left = e.pageX + 'px';
    p.style.top = e.pageY + 'px';
    document.body.appendChild(p);

    setTimeout(() => { p.remove(); }, 1000);
});

// REQUERIMIENTO 9: Botones y Música random cada 15 segundos
setInterval(() => {
    const elementosMoviles = document.querySelectorAll('.btn-link, .btn-bd, #btn-gravedad, #contenedor-musica');
    elementosMoviles.forEach(el => {
        let x = Math.random() * (window.innerWidth - 250);
        let y = Math.random() * (window.innerHeight - 250);
        el.style.position = 'absolute';
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    });
}, 15000);

// REQUERIMIENTO 11: Gravedad Cero
function activarGravedad() {
    const elementos = document.querySelectorAll('.elemento-gravedad');
    elementos.forEach(el => {
        el.classList.add('flotando');
        el.style.left = Math.random() * 80 + '%';
        el.style.top = Math.random() * 80 + '%';
    });
    alert("¡Gravedad desactivada!");
}