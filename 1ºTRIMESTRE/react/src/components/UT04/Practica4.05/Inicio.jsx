import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

// Inicio presenta la aplicación y facilita el acceso al catálogo.
const Inicio = () => (
  <section className="pagina-inicio">
    <p className="sobre-titulo">BIENVENIDO/A A FILMOTECA</p>
    <h2>Esta es la página de inicio</h2>
    <p>Consulta nuestro catálogo, descubre quién interpreta cada historia y explora las cartelas de las películas.</p>
    <Link className="boton-enlace" to="/ut04/practica-4-05/peliculas">
        Ver películas
    </Link>
  </section>
);

export default Inicio;
