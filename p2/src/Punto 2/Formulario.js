import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
    // Estados para almacenar los valores del formulario y los errores de validación
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [errores, setErrores] = useState({});

    // Función para validar el nombre
    const validarNombre = (valor) => {
        if (valor.trim().length < 3) {
            return 'El nombre debe tener al menos 3 caracteres.';
        }
        return '';
    };

    // Función para validar el correo electrónico
    const validarCorreo = (valor) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo
        if (!regex.test(valor)) {
            return 'El correo electrónico no es valido.';
        }
        return '';
    };

    // Función para validar la contraseña
    const validarContrasena = (valor) => {
        if (valor.length < 6) {
            return 'La contraseña debe tener al menos 6 caracteres.';
        }
        return '';
    };

    // Función para manejar los cambios en los campos del formulario
    const manejarCambio = (evento) => {
        const { name, value } = evento.target;

        // Actualiza el estado correspondiente y valida el campo
        switch (name) {
            case 'nombre':
                setNombre(value);
                setErrores((prev) => ({ ...prev, nombre: validarNombre(value) }));
                break;
            case 'correo':
                setCorreo(value);
                setErrores((prev) => ({ ...prev, correo: validarCorreo(value) }));
                break;
            case 'contrasena':
                setContrasena(value);
                setErrores((prev) => ({ ...prev, contrasena: validarContrasena(value) }));
                break;
            default:
                break;
        }
    };

    return (
        <form className="formulario">
            {/* Campo para el nombre */}
            <div className="campo">
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={manejarCambio}
                />
                {/* Muestra el mensaje de error si existe */}
                {errores.nombre && <p className="error">{errores.nombre}</p>}
            </div>

            {/* Campo para el correo electrónico */}
            <div className="campo">
                <label htmlFor="correo">Correo Electrónico:</label>
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={correo}
                    onChange={manejarCambio}
                />
                {/* Muestra el mensaje de error si existe */}
                {errores.correo && <p className="error">{errores.correo}</p>}
            </div>

            {/* Campo para la contraseña */}
            <div className="campo">
                <label htmlFor="contrasena">Contraseña:</label>
                <input
                    type="password"
                    id="contrasena"
                    name="contrasena"
                    value={contrasena}
                    onChange={manejarCambio}
                />
                {/* Muestra el mensaje de error si existe */}
                {errores.contrasena && <p className="error">{errores.contrasena}</p>}
            </div>

            {/* Botón para enviar el formulario */}
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
