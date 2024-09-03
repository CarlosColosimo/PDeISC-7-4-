import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GaleriaImg from './Punto 1/Galeria';
import Formulario from './Punto 2/Formulario';
import AdivinaNumero from './Punto 3/AdivinaNumero';
import BotonesInteractividad from './Punto 4/Botones';
import reportWebVitals from './reportWebVitals';
import Nota from './Punto 5/Nota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Nota/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
