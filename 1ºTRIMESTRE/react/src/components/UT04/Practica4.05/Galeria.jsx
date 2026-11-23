import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Galeria.css';

/** Muestra las opciones de galería; el filtrado queda pendiente. */
const Galeria = () => (
  <section className="pagina-galeria">
    <h2>Galería de películas</h2>
    <p>Selecciona cómo quieres consultar las cartelas.</p>
    <nav className="galeria-submenu" aria-label="Filtros de galería">
      <Link to="titulo">Por título</Link>
      <Link to="interprete">Por intérprete</Link>
      <Link to="director">Por director</Link>
    </nav>
    <Outlet />
  </section>
);
export default Galeria;
