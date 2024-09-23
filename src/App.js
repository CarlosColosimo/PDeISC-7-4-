import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App light">
      {/* Header */}
      <Header />

      {/* Sección Sobre Mí */}
      <About />

      {/* Sección de Habilidades */}
      <Skills />

      {/* Sección de Proyectos */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
