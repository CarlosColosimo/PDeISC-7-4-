import React, { useState } from 'react';
import './Formulario.css';

function manejarEnvio(e, nombre, setMensaje) {
  e.preventDefault();
  setMensaje(`¡Bienvenido, ${nombre}!`);
}

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <div className="formulario">
      <form onSubmit={(e) => manejarEnvio(e, nombre, setMensaje)}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Formulario;
