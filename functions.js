// Selecciona el botón y la información correspondientes para cada par
const boton1 = document.getElementById('wish1');
const informacion1 = document.getElementById('infow1');

boton1.addEventListener('click', () => {
    // Alterna la clase 'visible' solo para esta sección
    informacion1.classList.toggle('visible');
});

const boton2 = document.getElementById('wish2');
const informacion2 = document.getElementById('infow2');

boton2.addEventListener('click', () => {
    // Alterna la clase 'visible' solo para esta sección
    informacion2.classList.toggle('visible');
});

const boton3 = document.getElementById('wish3');
const informacion3 = document.getElementById('infow3');

boton3.addEventListener('click', () => {
    // Alterna la clase 'visible' solo para esta sección
    informacion3.classList.toggle('visible');
});

const boton4 = document.getElementById('wish4');
const informacion4 = document.getElementById('infow4');

boton4.addEventListener('click', () => {
    // Alterna la clase 'visible' solo para esta sección
    informacion4.classList.toggle('visible');
});