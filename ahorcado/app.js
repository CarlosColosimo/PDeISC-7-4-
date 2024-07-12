
/* ACA DECLARAMOS LAS VARIABLES QUE VAMOS A USAR */


/* ACA GURDAREMOS LAS PALABRAS QUE PUEDEN SALIR DE MANERA RANDOM */
const palabras = [ "JAVASCRIPT", "AHORCADO", "PROGRAMACION", 
                   "HTML", "CSS", "AMOR", "PAZ", "FELICIDAD",
                   "SOL", "LUNA", "ESTRELLAS", "CIELO", "TIERRA", 
                   "MAR", "OCEANO", "MONTAÑA", "RIO", "ARBOL", "FLOR",
                   "PERRO", "GATO", "AVION", "COCHE", "BICICLETA", "LIBRO",
                   "MUSICA", "ARTE", "PINTURA", "ESCULTURA", "CIENCIA", "MATEMATICAS",
                   "FISICA", "FRANCIA", "ALEMANIA", "ARGENTINA", "COLOMBIA", "BOLIVIA", 
                   "CUBA", "PERU", "DINAMARCA", "HUGANDA", "CANADA", "MEXICO", "URUGUAY",
                   "FIDEOS", "ÑOQUIS", "MILANESA", "PURE", "SORRENTINOS", "POLENTA", "INGLATERRA",
                   "HAMBURGUESA", "TECLADO", "JSON", "PAJARO" ];
let palabraElegida = '';
let palabraAdivinada = [];
let errores = 0; //DECLARAMOS LA VARIABLE PARA GUARDAR LOS ERRORES
const maxErrores = 7; //ESTABLESEMOS LO MAXIMO DE ERRORES


/* TOMAMOS LOS VALORES QUE ESTAN EN EL HTML */
const elementoPalabra = document.getElementById('word');
const elementoMensaje = document.getElementById('message');
const elementoLetras = document.getElementById('letters');
const botonReiniciar = document.getElementById('reset');
const imagenAhorcado = document.getElementById('ahorcadoImagen');

/* CON ESTA FUNCION ELEGIMOS LA PALABRA QUE VAMOS A USAR */
function elegirPalabra() {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    palabraElegida = palabras[indiceAleatorio];
}

/* ACA LA MOSTRAMOS */
function mostrarPalabra() {
    elementoPalabra.innerHTML = palabraAdivinada.join(' ');
}

//FUNCION PARA REINICIAR EL JUEGO
function reiniciarJuego() {
    errores = 0;
    palabraAdivinada = [];
    elementoMensaje.innerHTML = '';
    
    /* HABILITAMOS LOS BOTONES DE LAS LETRAS */
    elementoLetras.querySelectorAll('.letter').forEach(boton => {
        boton.disabled = false;
    });
    imagenAhorcado.src = `images/0.png`;
    elegirPalabra();

    /* INIZALIZAMOS LA PALABRA CON GUIONES DE BAJO */
    for (let i = 0; i < palabraElegida.length; i++) {
        palabraAdivinada.push('_');
    }
    mostrarPalabra();
}

/* MANEJAMOS EL EVENTO DE LA ADIVINANZA */
function manejarAdivinanza(event) {
    const letra = event.target.innerHTML;
    let adivinanzaCorrecta = false;

    /* VERIFICAMOS SI LA LETRA ESTA */
    for (let i = 0; i < palabraElegida.length; i++) {
        if (palabraElegida[i] === letra) {
            palabraAdivinada[i] = letra;
            adivinanzaCorrecta = true;
        }
    }

    /* EN CASO CONTRARIO, AUMENAMOS LOS ERRORES, Y MOSTRAMOS LA IMAGEN SIGUINTE, DANDO EL EFECTO DEL AHORACADO */
    if (!adivinanzaCorrecta) {
        errores++;
        imagenAhorcado.src = `images/${errores}.png`;
    }
    mostrarPalabra();
    event.target.disabled = true; /* DESAVILITAMOS LA LETRA YA USADA */
    verificarEstadoJuego();
}

/* VERIFICAMOS SI GANAMOS O PERDIMOS */
function verificarEstadoJuego() {
    
    /* SI YA NO HAY MAS GUIONES, EL PROGRAMA TE MOSTRARA UN MENSAJE DICIENDO QUE GANASTE */
    if (!palabraAdivinada.includes('_')) {
        elementoMensaje.innerHTML = '¡Ganaste!';
        elementoLetras.querySelectorAll('.letter').forEach(boton => {
            boton.disabled = true;
        });

    /* YEN CASO COTRARIO, SI LLEGAMOS AL MAXIMO DE ERRORES Y NO ADIVIAMOS LA PALABRA, EL PROGRAMA TE MOSTRARA UN MENSAJE DICIENDO QUE PERDISTE */
    } else if (errores >= maxErrores) {
        elementoMensaje.innerHTML = `Perdiste. La palabra era: ${palabraElegida}`;
        elementoLetras.querySelectorAll('.letter').forEach(boton => {
            boton.disabled = true;
        });
    }
}

/* AGREGAMOS UN LISTENER ALBOTON DE REINICIAR JUEGO */
botonReiniciar.addEventListener('click', reiniciarJuego);

/* AGREGAMOS UN LISTENER A LOS BOTONES DE LAS LETRAS */
elementoLetras.querySelectorAll('.letter').forEach(boton => {
    boton.addEventListener('click', manejarAdivinanza);
});

/* INICIAMOS EL JUEGO */
reiniciarJuego();
