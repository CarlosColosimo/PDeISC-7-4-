// src/pages/Home.js
import { tasks } from '../data';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
