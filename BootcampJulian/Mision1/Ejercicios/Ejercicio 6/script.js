const number1Input = document.getElementById('number1'); // El primer campo de número
const number2Input = document.getElementById('number2'); // El segundo campo de número
const sumButton = document.getElementById('sumButton');   // El botón de sumar
const resultDisplay = document.getElementById('resultDisplay'); // El párrafo donde se muestra el resultado

sumButton.addEventListener('click', function() {
    // Obtener los valores de los inputs y convertirlos a números enteros
    const num1 = parseInt(number1Input.value);
    const num2 = parseInt(number2Input.value);

    // Limpiar el mensaje de resultado anterior
    resultDisplay.textContent = 'El resultado es: ';

    // Validar si ambos valores son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Por favor, ingresa solo números válidos.';
        resultDisplay.style.color = 'red'; // Cambia el color del mensaje de error
        return; // Detiene la función si hay un error
    }

    // Realizar la suma
    const sum = num1 + num2;

    // Mostrar el resultado en la página
    resultDisplay.textContent = `El resultado es: ${sum}`;
    resultDisplay.style.color = '#333'; // Restablece el color del resultado a normal
});