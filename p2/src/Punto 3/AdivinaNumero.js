import React, { useState } from 'react';
import './AdivinaNumero.css';

const AdivinaNumero = () => {
    // Estado para el número aleatorio a adivinar
    const [numeroAleatorio, setNumeroAleatorio] = useState(Math.floor(Math.random() * 100) + 1);
    // Estado para el intento del usuario
    const [intento, setIntento] = useState('');
    // Estado para el mensaje de resultado
    const [mensaje, setMensaje] = useState('');
    // Estado para los intentos restantes
    const [intentosRestantes, setIntentosRestantes] = useState(10);

    // Función para manejar el cambio en el campo de entrada
    const manejarCambio = (evento) => {
        setIntento(evento.target.value);
    };

    // Función para manejar el envío del formulario
    const manejarEnvio = (evento) => {
        evento.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de página)
        const numeroUsuario = parseInt(intento, 10); // Convierte el intento del usuario a un número entero

        // Verifica si el valor ingresado es un número válido
        if (isNaN(numeroUsuario)) {
            setMensaje("Pone un numero valido");
            return;
        }

        // Compara el intento del usuario con el número aleatorio
        if (numeroUsuario === numeroAleatorio) {
            setMensaje("Adivinaste, muy bien");
        } else if (numeroUsuario < numeroAleatorio) {
            setMensaje("Casi, mas alto");
        } else {
            setMensaje("Te pasaste, mas bajo");
        }

        // Actualiza el número de intentos restantes
        setIntentosRestantes(intentosRestantes - 1);

        // Verifica si se acabaron los intentos
        if (intentosRestantes - 1 === 0 && numeroUsuario !== numeroAleatorio) {
            reiniciarJuego(); // Reinicia el juego si se acabaron los intentos
        }

        // Limpia el campo de entrada
        setIntento('');
    };

    // Función para reiniciar el juego
    const reiniciarJuego = () => {
        setNumeroAleatorio(Math.floor(Math.random() * 100) + 1); // Genera un nuevo número aleatorio
        setIntentosRestantes(10); // Restablece el número de intentos restantes
        setIntento(''); // Limpia el campo de entrada
        setMensaje(''); // Limpia el mensaje de resultado
    };

    return (
        <div className="adivina-numero">
            <h1>Adivina el Numero</h1>
            <form onSubmit={manejarEnvio}>
                <input
                    type="number"
                    value={intento}
                    onChange={manejarCambio}
                    placeholder="Ingresa un numero del 1 al 100"
                />
                <button type="submit">Adivinar</button>
            </form>
            {/* Muestra el mensaje si existe */}
            {mensaje && <p className="mensaje">{mensaje}</p>}
            <p>Intentos restantes: {intentosRestantes}</p>
            <button onClick={reiniciarJuego}>Reiniciar Juego</button>
        </div>
    );
};

export default AdivinaNumero;
