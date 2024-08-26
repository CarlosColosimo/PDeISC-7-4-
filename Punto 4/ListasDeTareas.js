import React, { useState } from 'react';
import './ListaDeTareas.css';

function agregarTarea(tareas, setTareas, nuevaTarea) {
  setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
}

function marcarCompletada(tareas, setTareas, index) {
  const nuevasTareas = [...tareas];
  nuevasTareas[index].completada = !nuevasTareas[index].completada;
  setTareas(nuevasTareas);
}

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  return (
    <div className="lista-tareas">
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={() => {
        agregarTarea(tareas, setTareas, nuevaTarea);
        setNuevaTarea('');
      }}>
        Agregar Tarea
      </button>
      <ul>
        {tareas.map((tarea, index) => ( 
          <li
            key={index}
            onClick={() => marcarCompletada(tareas, setTareas, index)}
            className={tarea.completada ? 'completada' : ''}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
