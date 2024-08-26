import React, { useState } from 'react';
import './Contador.css';

function incrementar(contador, setContador) {
  setContador(contador + 1);
}

function decrementar(contador, setContador) {
  setContador(contador - 1);
}

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="contador">
      <h1>{contador}</h1>
      <button onClick={() => incrementar(contador, setContador)}>Incrementar</button>
      <button onClick={() => decrementar(contador, setContador)}>Decrementar</button>
    </div>
  );
}

export default Contador;
