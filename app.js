// TOMAMOS LOS VALORES QUE ESTAN EN EL HTML
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

let palabraElegida = '';
let palabraAdivinada = [];
let errores = 0;
const maxErrores = 7;
let puntos = 0;
let playerName = '';

// TOMAMOS LOS VALORES QUE ESTAN EN EL HTML
const elementoPalabra = document.getElementById('word');
const elementoMensaje = document.getElementById('message');
const elementoLetras = document.getElementById('letters');
const botonReiniciar = document.getElementById('reset');
const imagenAhorcado = document.getElementById('ahorcadoImagen');
const elementoPuntos = document.getElementById('score');
const intro = document.getElementById('intro');
const formName = document.getElementById('name-form');
const playerNameInput = document.getElementById('player-name');


// FUNCION PARA ELEGIR UNA PALABRA ALEATORIA
function elegirPalabra() {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    palabraElegida = palabras[indiceAleatorio];
}

// FUNCION PARA MOSTRAR LA PALABRA CON GUIONES
function mostrarPalabra() {
    elementoPalabra.innerHTML = palabraAdivinada.join(' ');
}

// FUNCION PARA ACTUALIZAR LOS PUNTOS
function actualizarPuntos(cantidad) {
    puntos += cantidad;
    elementoPuntos.innerHTML = puntos;
}

// FUNCION PARA REINICIAR EL JUEGO
function reiniciarJuego() {
    errores = 0;
    palabraAdivinada = [];
    puntos = 0;
    elementoMensaje.innerHTML = '';
    elementoPuntos.innerHTML = puntos;

    elementoLetras.querySelectorAll('.letter').forEach(boton => {
        boton.disabled = false;
    });
    imagenAhorcado.src = `images/0.png`;
    elegirPalabra();

    for (let i = 0; i < palabraElegida.length; i++) {
        palabraAdivinada.push('_');
    }
    mostrarPalabra();
}

// FUNCION PARA MANEJAR LA ADIVINANZA
function manejarAdivinanza(event) {
    const letra = event.target.innerHTML;
    let adivinanzaCorrecta = false;

    for (let i = 0; i < palabraElegida.length; i++) {
        if (palabraElegida[i] === letra) {
            palabraAdivinada[i] = letra;
            adivinanzaCorrecta = true;
        }
    }

    if (adivinanzaCorrecta) {
        actualizarPuntos(50);
    } else {
        errores++;
        imagenAhorcado.src = `images/${errores}.png`;
        actualizarPuntos(-5);
    }
    mostrarPalabra();
    event.target.disabled = true;
    verificarEstadoJuego();
}


// FUNCION PARA GUARDAR EL PUNTAJE EN LA BASE DE DATOS
function guardarPuntaje() {
    fetch('http://localhost:3000/guardar-puntaje', { // URL DEL ENDPOINT
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: playerName,
            puntos: puntos,
            fecha: new Date().toISOString() // USA LA FECHA ACTUAL
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor'); //-------------| VERIFICA LOS DATOS 
        }
        return response.json();
    })
    .then(data => {
        console.log('Puntaje guardado con éxito', data);
    })
    .catch(error => {                                                             
        console.error('Error al guardar el puntaje:', error); // -----------------|
    });
}

// FUNCION PARA VERIFICAR SI GANAMOS O PERDIMOS
function verificarEstadoJuego() {
    if (!palabraAdivinada.includes('_')) {
        elementoMensaje.innerHTML = '¡Ganaste!';
        elementoLetras.querySelectorAll('.letter').forEach(boton => {
            boton.disabled = true;
        });
        guardarPuntaje();
    } else if (errores >= maxErrores) {
        elementoMensaje.innerHTML = `Perdiste. La palabra era: ${palabraElegida}`;
        elementoLetras.querySelectorAll('.letter').forEach(boton => {
            boton.disabled = true;
        });
        guardarPuntaje();
    }
}


// MANEJAR EL ENVÍO DEL FORMULARIO DE NOMBRE
formName.addEventListener('submit', function(event) {
    event.preventDefault();
    playerName = playerNameInput.value.trim();
    if (playerName) {
        intro.style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        reiniciarJuego();
    }
});

// AGREGAMOS UN LISTENER AL BOTÓN DE REINICIAR JUEGO
botonReiniciar.addEventListener('click', reiniciarJuego);

// AGREGAMOS UN LISTENER A LOS BOTONES DE LAS LETRAS
elementoLetras.querySelectorAll('.letter').forEach(boton => {
    boton.addEventListener('click', manejarAdivinanza);

});
