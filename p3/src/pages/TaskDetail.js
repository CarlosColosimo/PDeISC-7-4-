// src/pages/TaskDetail.js
import { useParams } from 'react-router-dom';
import { tasks } from '../data';

const TaskDetail = () => {
  const { id } = useParams();
  const task = tasks.find(task => task.id === parseInt(id));

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.fullDescription}</p>
      <p>Fecha de creación: {task.date}</p>
      <p>Estado: {task.completed ? "Completa" : "Incompleta"}</p>
    </div>
  );
};

export default TaskDetail;
