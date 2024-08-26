import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HolaMundo from "./Punto 1/HolaMundo";
import Tarjeta from "./Punto 2/Tarjeta";
import Contador from "./Punto 3/Contador";
import ListaDeTareas from "./Punto 4/ListasDeTareas";
import Formulario from './Punto 5/Formulario';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HolaMundo/>
    <Tarjeta
    
    imagen={""}
    nombre={"Carlos"}
    apellido={"colosimo"}
    profecion={"Alumno"}

    />
    <Contador/>
    <ListaDeTareas/>
    <Formulario/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
