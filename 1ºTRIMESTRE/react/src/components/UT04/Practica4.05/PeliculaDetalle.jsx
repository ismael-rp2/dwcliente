import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Elenco from './Elenco.jsx';
import Taquilla from './Taquilla.jsx';
import datosPeliculas from './peliculas.json';
import './PeliculaDetalle.css';

/**
 * PeliculaDetalle obtiene el id de la URL y busca la película correspondiente.
 * Muestra toda la información almacenada en el JSON, reutilizando Elenco y Taquilla.
 */

//Esto es algo muy chulo que 
const PeliculaDetalle = () => {
  const { id } = useParams();
  const pelicula = datosPeliculas.peliculas.find((elemento) => elemento.id === Number(id));

  if (!pelicula) {
    return (
      <section className="pagina-detalle">
        <h2>Película no encontrada</h2>
        <p>No existe ninguna película con ese identificador.</p>
        <Link className="detalle-volver" to="/ut04/practica-4-05/peliculas">Volver al listado</Link>
      </section>
    );
  }

  return (
    <section className="pagina-detalle">
      <Link className="detalle-volver" to="/ut04/practica-4-05/peliculas">← Volver a películas</Link>
      <h2>{pelicula.nombre}</h2>
      <div className="detalle-principal">
        <img className="detalle-cartel" src={pelicula.cartelera} alt={`Cartel de ${pelicula.nombre}`} />
        <div className="detalle-informacion">
          <p><strong>Año de estreno:</strong> {pelicula.anio}</p>
          <p><strong>Director:</strong> {pelicula.director}</p>
          <p><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
          <p><strong>Nota:</strong> {pelicula.nota}/10</p>
          <h3>Sinopsis</h3>
          <p>{pelicula.resumen}</p>
        </div>
      </div>

      <button>Recaudación</button>
      <br></br>
      <button>Elenco</button>
      <Taquilla recaudacion={pelicula.recaudacion} />
      <Elenco actores={pelicula.actores} />
    </section>
  );
};

export default PeliculaDetalle;
