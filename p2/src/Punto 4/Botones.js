import React from 'react';
import './BotonesInteractividad.css';

const BotonesInteractividad = () => {
    // Estado para manejar las clases de estilo de los botones
    const [estilosBotones, setEstilosBotones] = React.useState(Array(10).fill(''));

    // Función para manejar el clic en un botón
    const manejarClick = (index) => {
        setEstilosBotones(prevEstilos => prevEstilos.map((estilo, i) => {
            // Verifica si el botón clickeado es el que debe cambiar de estilo
            if (i === index) {
                switch (index) {
                    case 0:
                        return estilo === 'clicked' ? '' : 'clicked'; // Cambia el color de fondo
                    case 1:
                        return estilo === 'clicked-size' ? '' : 'clicked-size'; // Cambia el tamaño del texto
                    case 2:
                        return estilo === 'clicked-hide' ? '' : 'clicked-hide'; // Oculta el botón
                    case 3:
                        return estilo === 'clicked-show-text' ? '' : 'clicked-show-text'; // Cambia el color de fondo
                    case 4:
                        return estilo === 'clicked-disable' ? '' : 'clicked-disable'; // Desactiva el botón
                    case 5:
                        return estilo === 'clicked-enable' ? '' : 'clicked-enable'; // Activa el botón
                    case 6:
                        return estilo === 'clicked-text-color' ? '' : 'clicked-text-color'; // Cambia el color del texto
                    case 7:
                        return estilo === 'clicked-border' ? '' : 'clicked-border'; // Cambia el borde del botón
                    case 8:
                        return estilo === 'clicked-opacity' ? '' : 'clicked-opacity'; // Cambia la opacidad del botón
                    case 9:
                        return estilo === 'clicked-change-text' ? '' : 'clicked-change-text'; // Cambia el texto del botón
                    default:
                        return ''; // Valor por defecto si no coincide con ningún caso
                }
            }
            // Mantiene el estilo actual para los otros botones
            return estilo;
        }));
        // Muestra una alerta con el número del botón clickeado
        alert(`Botón ${index + 1}: Clic`);
    };

    // Función para manejar el doble clic en un botón
    const manejarDobleClick = (index) => {
        // Muestra una alerta con el número del botón doble clickeado
        alert(`Botón ${index + 1}: Doble clic`);
    };

    return (
        <div className="contenedor-botones">
            {/* Crea un array de 10 elementos para renderizar los botones */}
            {Array.from({ length: 10 }).map((_, index) => (
                <button
                    key={index}
                    className={estilosBotones[index]} // Asigna la clase de estilo correspondiente al botón
                    onClick={() => manejarClick(index)} // Maneja el clic en el botón
                    onDoubleClick={() => manejarDobleClick(index)} // Maneja el doble clic en el botón
                >
                    Boton {index + 1} {/* Muestra el número del botón */}
                </button>
            ))}
        </div>
    );
};

export default BotonesInteractividad;
