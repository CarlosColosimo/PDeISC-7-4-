// Array con las palabras posibles para adivinar
const palabras = [ 
    "JAVASCRIPT", "AHORCADO", "PROGRAMACION", 
    "HTML", "CSS", "AMOR", "PAZ", "FELICIDAD",
    "SOL", "LUNA", "ESTRELLAS", "CIELO", "TIERRA", 
    "MAR", "OCEANO", "MONTAÑA", "RIO", "ARBOL", "FLOR",
    "PERRO", "GATO", "AVION", "COCHE", "BICICLETA", "LIBRO",
    "MUSICA", "ARTE", "PINTURA", "ESCULTURA", "CIENCIA", "MATEMATICAS",
    "FISICA", "FRANCIA", "ALEMANIA", "ARGENTINA", "COLOMBIA", "BOLIVIA", 
    "CUBA", "PERU", "DINAMARCA", "HUGANDA", "CANADA", "MEXICO", "URUGUAY",
    "FIDEOS", "ÑOQUIS", "MILANESA", "PURE", "SORRENTINOS", "POLENTA", "INGLATERRA",
    "HAMBURGUESA", "TECLADO", "JSON", "PAJARO", "PROFESOR", "ALUMNO", "PELOTA", "VOCALES", "VISUAL"
];

let palabraElegida = ''; // Almacena la palabra seleccionada aleatoriamente
let palabraAdivinada = []; // Array para almacenar letras adivinadas o guiones bajos
let errores = 0; // Contador de errores
const maxErrores = 7; // Número máximo de errores permitidos
let puntos = 0; // Contador de puntos
let playerName = ''; // Almacena el nombre del jugador

// Toma de elementos del HTML
const elementoPalabra = document.getElementById('word');
const elementoMensaje = document.getElementById('message');
const elementoLetras = document.getElementById('letters');
const botonReiniciar = document.getElementById('reset');
const imagenAhorcado = document.getElementById('ahorcadoImagen');
const elementoPuntos = document.getElementById('score');
const intro = document.getElementById('intro');
const formName = document.getElementById('name-form');
const playerNameInput = document.getElementById('player-name');

// Función para elegir una palabra aleatoria del array
function elegirPalabra() {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    palabraElegida = palabras[indiceAleatorio];
}

// Función para mostrar la palabra en la interfaz con guiones bajos para las letras no adivinadas
function mostrarPalabra() {
    elementoPalabra.innerHTML = palabraAdivinada.join(' ');
}

// Función para actualizar el puntaje en función de la cantidad de puntos ganados o perdidos
function actualizarPuntos(cantidad) {
    puntos += cantidad;
    elementoPuntos.innerHTML = puntos;
}

// Función para reiniciar el juego, reseteando errores, puntaje y el estado de las letras
function reiniciarJuego() {
    errores = 0;
    palabraAdivinada = [];
    puntos = 0;
    elementoMensaje.innerHTML = '';
    elementoPuntos.innerHTML = puntos;

    // Habilita todos los botones de letras
    elementoLetras.querySelectorAll('.letter').forEach(boton => {
        boton.disabled = false;
    });

    // Reinicia la imagen del ahorcado
    imagenAhorcado.src = `images/0.png`;

    // Elige una nueva palabra y la muestra como guiones bajos
    elegirPalabra();
    for (let i = 0; i < palabraElegida.length; i++) {
        palabraAdivinada.push('_');
    }
    mostrarPalabra();
}

// Función para manejar el intento de adivinar una letra
function manejarAdivinanza(event) {
    const letra = event.target.innerHTML;
    let adivinanzaCorrecta = false;

    // Verifica si la letra está en la palabra elegida y actualiza el array `palabraAdivinada`
    for (let i = 0; i < palabraElegida.length; i++) {
        if (palabraElegida[i] === letra) {
            palabraAdivinada[i] = letra;
            adivinanzaCorrecta = true;
        }
    }

    // Actualiza los puntos en función de si la adivinanza fue correcta o no
    if (adivinanzaCorrecta) {
        actualizarPuntos(50);
    } else {
        errores++;
        imagenAhorcado.src = `images/${errores}.png`; // Muestra la imagen del ahorcado según los errores
        actualizarPuntos(-5);
    }

    mostrarPalabra(); // Muestra la palabra con las letras adivinadas
    event.target.disabled = true; // Deshabilita el botón de la letra adivinada
    verificarEstadoJuego(); // Verifica si el juego ha terminado
}

// Función para guardar el puntaje en la base de datos
function guardarPuntaje() {
    fetch('http://localhost:3000/guardar-puntaje', { // URL del endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: playerName,
            puntos: puntos,
            fecha: new Date().toISOString() // Fecha actual en formato ISO
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then(data => {
        console.log('Puntaje guardado con éxito', data);
    })
    .catch(error => {                                                             
        console.error('Error al guardar el puntaje:', error);
    });
}

// Función para verificar el estado del juego (si ganó o perdió)
function verificarEstadoJuego() {
    if (!palabraAdivinada.includes('_')) { // Verifica si ganó (no hay guiones bajos)
        elementoMensaje.innerHTML = '¡Ganaste!';
        elementoLetras.querySelectorAll('.letter').forEach(boton => {
            boton.disabled = true;
        });
        guardarPuntaje(); // Guarda el puntaje en la base de datos
    } else if (errores >= maxErrores) { // Verifica si perdió (excedió el límite de errores)
        elementoMensaje.innerHTML = `Perdiste. La palabra era: ${palabraElegida}`;
        elementoLetras.querySelectorAll('.letter').forEach(boton => {
            boton.disabled = true;
        });
        guardarPuntaje();
    }
}

// Manejador para el envío del formulario de nombre
formName.addEventListener('submit', function(event) {
    event.preventDefault();
    playerName = playerNameInput.value.trim();
    if (playerName) {
        intro.style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        reiniciarJuego();
    }
});

// Agrega un listener al botón de reiniciar juego
botonReiniciar.addEventListener('click', reiniciarJuego);

// Agrega un listener a los botones de letras para manejar cada adivinanza
elementoLetras.querySelectorAll('.letter').forEach(boton => {
    boton.addEventListener('click', manejarAdivinanza);
});
