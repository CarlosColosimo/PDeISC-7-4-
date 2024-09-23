import React from 'react';
import './Skills.css';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const Skills = () => (
  <section className="skills">
    <h2>Habilidades</h2>
    <ul>
      {skills.map((skill, index) => <li key={index}>{skill}</li>)}
    </ul>
  </section>
);

export default Skills;
