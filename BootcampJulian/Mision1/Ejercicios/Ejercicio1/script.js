const verificarBoton = document.getElementById('ageForm').querySelector('button[type="submit"]');
const campoEdad = document.getElementById('ageInput');

const mensajeParrafo = document.getElementById('message');

verificarBoton.addEventListener('click', function(evento) {

    evento.preventDefault();

    const edadUsuario = parseInt(campoEdad.value);

    if (edadUsuario < 18) {
        mensajeParrafo.textContent = 'Acceso denegado.';
        mensajeParrafo.className = 'access-denied';
    } else {
        mensajeParrafo.textContent = '¡Bienvenido!';
        mensajeParrafo.className = 'access-granted';
    }
});