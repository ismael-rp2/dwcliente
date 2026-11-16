
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

/**
 * Menú de navegación de Filmoteca.
 * Cada enlace apunta a una sección de la práctica.
 * NavLink destaca automáticamente la página activa.
 */
const Menu = () => {
  const enlaces = [
    { ruta: '/ut04/practica-4-05', texto: 'Inicio', exacto: true },
    { ruta: '/ut04/practica-4-05/peliculas', texto: 'Películas' },
    { ruta: '/ut04/practica-4-05/interpretes', texto: 'Intérpretes' },
    { ruta: '/ut04/practica-4-05/galeria', texto: 'Galería' },
    { ruta: '/ut04/practica-4-05/acerca-de', texto: 'Acerca de' }
  ];

  return (
    <nav className="menu" aria-label="Menú principal">
      {enlaces.map((enlace) => (
        <NavLink
          key={enlace.ruta}
          to={enlace.ruta}
          end={enlace.exacto}
          className={({ isActive }) =>
            isActive ? 'menu-enlace activo' : 'menu-enlace'
          }
        >
          {enlace.texto}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
