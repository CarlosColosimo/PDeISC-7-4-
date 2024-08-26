import React from 'react';
import './Tarjeta.css';

function obtenerNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

function Tarjeta({ nombre, apellido, profecion, imagen }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={obtenerNombreCompleto(nombre, apellido)} />
      <h2>{obtenerNombreCompleto(nombre, apellido)}</h2>
      <p>{profecion}</p>
    </div>
  );
}

export default Tarjeta;
 