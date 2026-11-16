import React from 'react';
import './AcercaDe.css';

// AcercaDe identifica la versión, autoría y última modificación de la aplicación.
const AcercaDe = () => (
  <section className="pagina-acerca">
    <h2>Esta es la página acerca de</h2>
    <dl className="datos-aplicacion">
      <div><dt>Aplicación</dt><dd className="datos">Filmoteca</dd></div>
      <div><dt>Versión</dt><dd className="datos">1.0.0</dd></div>
      <div><dt>Creador</dt><dd className="datos">Nombre y apellidos del alumno/a</dd></div>
      <div><dt>Fecha de modificación</dt><dd className="datos">16/11/2026</dd></div>
      <div><dt>Tecnologías</dt><dd className="datos">React y react-router-dom</dd></div>
    </dl>
    <p className="aviso-autor">Ismael Reyes Pérez</p>
  </section>
);

export default AcercaDe;
