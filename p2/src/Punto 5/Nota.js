import React, { useState, useEffect, useRef } from 'react';
import "./Nota.css";

const Nota = () => {
    const [nota, setNota] = useState('');
    const [guardado, setGuardado] = useState(false);
    const timeoutRef = useRef(null);

    // Función para guardar la nota
    const guardarNota = () => {
        console.log("Nota guardada:", nota);
        setGuardado(true);
        setTimeout(() => setGuardado(false), 2000); // Mostrar mensaje de guardado por 2 segundos
    };

    // Función para manejar el cambio en el textarea
    const manejarCambio = (event) => {
        setNota(event.target.value);
        setGuardado(false);

        // Limpiar el timeout anterior si existe
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Configurar un nuevo timeout para guardar la nota
        timeoutRef.current = setTimeout(guardarNota, 1000); // Guardar después de 1 segundo de inactividad
    };

    // Limpiar el timeout al desmontar el componente
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div>
            <h1>Aplicación de Notas</h1>
            <textarea
                rows="10"
                cols="30"
                value={nota}
                onChange={manejarCambio}
                placeholder="Escribe tu nota aquí..."
            />
            {guardado && <p>Nota guardada</p>}
        </div>
    );
};

export default Nota;
