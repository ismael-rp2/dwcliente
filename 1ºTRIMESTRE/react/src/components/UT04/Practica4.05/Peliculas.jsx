import React from 'react';
import { Link } from 'react-router-dom';
import datosPeliculas from './peliculas.json';
import './Peliculas.css';

/** Recorre el catálogo sin modificarlo y enlaza cada resumen con su ficha ampliada. */
const Peliculas = () => (
  <section className="pagina-peliculas">
    <h2>Esta es la página de películas</h2>
    <p className="texto-intro">Selecciona una película para consultar todos sus datos.</p>
    <div className="contenedor-peliculas">
      {datosPeliculas.peliculas.map((pelicula) => (
        <Link className="peliculas-enlace" key={pelicula.id} to={String(pelicula.id)}>
          <img className="peliculas-miniatura" src={pelicula.cartelera} alt={`Cartel de ${pelicula.nombre}`} />
          <div className="peliculas-datos">
            <h3>{pelicula.nombre}</h3>
            <p>Año de exhibición: {pelicula.anio}</p>
            <span className="peliculas-ver">Ver ficha completa</span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Peliculas;
