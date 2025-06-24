const changeColorBtn = document.getElementById('changeColorBtn');
const body = document.body; // Esto nos da una referencia directa al <body> de la página

changeColorBtn.addEventListener('click', function() {
    // Función para generar un color hexadecimal aleatorio (ej: #RRGGBB)
    function getRandomHexColor() {
        const letters = '0123456789ABCDEF'; // Caracteres para los colores hexadecimales
        let color = '#'; // Empieza con el símbolo de almohadilla
        for (let i = 0; i < 6; i++) { // Seis caracteres para el color (RRGGBB)
            color += letters[Math.floor(Math.random() * 16)]; // Elige un carácter aleatorio 16 veces
        }
        return color;
    }

    // Obtener un color aleatorio
    const randomColor = getRandomHexColor();

    // Cambiar el color de fondo del <body>
    body.style.backgroundColor = randomColor;
});