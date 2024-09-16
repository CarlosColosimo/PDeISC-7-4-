// src/pages/CreateTask.js
import { useState } from 'react';
import { tasks } from '../data';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      fullDescription: description,
      date: new Date().toLocaleDateString(),
      completed,
    };
    tasks.push(newTask);
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <div>
      <h1>Crear Nueva Tarea</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Completa
        </label>
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
};

export default CreateTask;
