const numberInput = document.getElementById('numberInput');
const checkMultipleBtn = document.getElementById('checkMultipleBtn');
const resultMessage = document.getElementById('resultMessage');

checkMultipleBtn.addEventListener('click', function() {
    const number = parseInt(numberInput.value);

    resultMessage.textContent = ''; // Limpiamos el mensaje anterior
    resultMessage.className = '';   // Limpiamos las clases de color anteriores

    // Validar si es un número
    if (isNaN(number)) {
        resultMessage.textContent = 'Por favor, ingresa un número válido.';
        resultMessage.className = 'not-multiple'; // Usa el estilo de error
        return;
    }

    // Usamos el operador módulo (%) para saber si es múltiplo de 5
    // Si un número dividido por 5 da un residuo de 0, es múltiplo de 5.
    if (number % 5 === 0) {
        resultMessage.textContent = `El número ${number} es múltiplo de 5.`;
        resultMessage.className = 'is-multiple';
    } else {
        resultMessage.textContent = `El número ${number} NO es múltiplo de 5.`;
        resultMessage.className = 'not-multiple';
    }
});