import React from 'react';
import './Projects.css';

const projects = [
  { name: 'CEC Fonding', description: 'Este proyecto que empece en 5to año en la secundaria y se basa en una pagina web en que dibujantes pueden subir sus proyecto y la gente pueda donarle, asi a su vez apoyando su ezfuerzo y haciendo que estos creadores de contenido puedan seguir mativandolos, es una pagina muy simple que se divide en tres sectores para creadores y los mismos pueden iniciar secion, los mismos creadores pueden opinar de otros con una funcion de comentarios, finalizando con un espacio hecho solamente para ellos para que puedan seguir su trayectoria, a continuacion les dejo el link del repositorio ya que sigue en preceso.', url: 'https://github.com/CarlosColosimo/CEC.Fondig' },
  { name: 'Recetas Mama Coco', description: 'A diferencia del anterior proyecto este es mucho mas nuevo y lo empece con varios compañeros este año, en lo que consiste es una simple pagina con una gran cantidad de recetas de todo tipo y es un proyrcto bastante ambisioso ya que lo queremos hacer en grande con recetas de todo el mundo conocidas, juton a un espacio donde la gente que entre a la receta que eligio pueda dejar su comentario positivo y demostrar que la pagina le ayudo, al igual que el otro proyecto kes dejo el link a github', url: 'https://github.com/CarlosColosimo/Recetas-Mama-Coco--Proyecto' },
];

const Projects = () => (
  <section className="projects">
    <h2>Proyectos</h2>
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.url}>Ver más</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
