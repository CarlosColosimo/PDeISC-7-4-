import React, { useState, useEffect } from 'react';
import "./GaleriaImg.css";
import img1 from './imgs/img1.jpg';
import img2 from './imgs/img2.jpg';
import img3 from './imgs/img3.jpg';
import img4 from './imgs/img4.jpg';
import img5 from './imgs/img5.jpg';
import img6 from './imgs/img6.jpg';
import img7 from './imgs/img7.jpg';
import img8 from './imgs/img8.jpg';

const GaleriaImg = () => {
    // Array de imágenes para la galería
    const imagenes = [img1, img2, img3, img4, img5, img6, img7, img8];

    // Estado para el índice de la imagen actual
    const [indiceActual, setIndiceActual] = useState(0);

    // Función para manejar las teclas presionadas
    const manejarTeclaPresionada = (evento) => {
        if (evento.key === 'ArrowRight') {
            // Avanza a la siguiente imagen (hacia la derecha)
            setIndiceActual((indiceActual + 1) % imagenes.length);
        } else if (evento.key === 'ArrowLeft') {
            // Retrocede a la imagen anterior (hacia la izquierda)
            setIndiceActual((indiceActual - 1 + imagenes.length) % imagenes.length);
        } else if (evento.key === 'ArrowDown') {
            // Avanza a la siguiente imagen (hacia abajo)
            setIndiceActual((indiceActual + 1) % imagenes.length);
        } else if (evento.key === 'ArrowUp') {
            // Retrocede a la imagen anterior (hacia arriba)
            setIndiceActual((indiceActual - 1 + imagenes.length) % imagenes.length);
        }
    };

    // Hook useEffect para agregar y eliminar el listener de eventos de teclado
    useEffect(() => {
        window.addEventListener('keydown', manejarTeclaPresionada);

        // Cleanup function para eliminar el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('keydown', manejarTeclaPresionada);
        };
    }, [indiceActual]); // Dependencia en indiceActual para ejecutar el efecto cuando cambie

    return (
        <div className="galeria">
            <h1>Galería de Imágenes</h1>
            <img src={imagenes[indiceActual]} alt={`Imagen ${indiceActual + 1}`} />
        </div>
    );
};

export default GaleriaImg;
