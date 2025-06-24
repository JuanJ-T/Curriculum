const numberInput = document.getElementById('numberInput');
const showNumbersBtn = document.getElementById('showNumbersBtn');
const numbersDisplay = document.getElementById('numbersDisplay');

showNumbersBtn.addEventListener('click', function() {
    const N = parseInt(numberInput.value);

    numbersDisplay.innerHTML = ''; // Limpia el contenido anterior

    if (isNaN(N) || N < 1) {
        numbersDisplay.innerHTML = '<p style="color: red; font-weight: bold;">Por favor, ingresa un número válido (mayor o igual a 1).</p>';
        return;
    }

    let numbersText = 'Números: '; // Creamos una cadena de texto para guardar los números

    for (let i = 1; i <= N; i++) {
        numbersText += i + ' '; // Agregamos cada número a la cadena, seguido de un espacio
    }

    numbersDisplay.innerHTML = '<p>' + numbersText + '</p>'; // Mostramos la cadena completa como un párrafo
});