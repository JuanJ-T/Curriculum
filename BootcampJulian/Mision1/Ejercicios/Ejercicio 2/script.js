const clickButton = document.getElementById('clickButton');
const clickCountSpan = document.getElementById('clickCount');

let count = 0; // Inicializamos el contador en 0

clickButton.addEventListener('click', function() {
    count++; // Incrementamos el contador en 1 cada vez que se hace clic
    clickCountSpan.textContent = count; // Actualizamos el texto en pantalla con el nuevo valor
});