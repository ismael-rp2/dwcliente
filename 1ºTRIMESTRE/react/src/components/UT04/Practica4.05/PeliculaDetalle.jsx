import { Link, useParams } from 'react-router-dom';
import Elenco from './Elenco.jsx';
import Taquilla from './Taquilla.jsx';
import Error from './Error.jsx';
import datosPeliculas from './peliculas.json';
import './PeliculaDetalle.css';
import React, { useState } from 'react';

/** Obtiene el identificador de la ruta y muestra la ficha completa sin alterar el JSON. */
const PeliculaDetalle = () => {
  const { id } = useParams();
  const pelicula = datosPeliculas.peliculas.find((elemento) => String(elemento.id) === id);

  if (!pelicula) return <Error />;

  // Controlan la visibilidad del elenco y la taquilla.
  const [mostrarElenco, setMostrarElenco] = useState(false);
  const [mostrarTaquilla, setMostrarTaquilla] = useState(false);

  return (
    <section className="pagina-detalle">
      <Link className="detalle-volver" to="/ut04/practica-4-05/peliculas">← Volver al listado</Link>
      <h2>{pelicula.nombre}</h2>
      <div className="detalle-principal">
        <img className="detalle-cartel" src={pelicula.cartelera} alt={`Cartel de ${pelicula.nombre}`} />
        <div className="detalle-informacion">
          <p><strong>Año de exhibición:</strong> {pelicula.anio}</p>
          <p><strong>Director:</strong> {pelicula.director}</p>
          <p><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
          <p><strong>Nota:</strong> {pelicula.nota}/10</p>
          <h3>Sinopsis</h3>
          <p>{pelicula.resumen}</p>
        </div>
      </div>
      
<div className="acciones-pelicula">
  <button
    type="button"
    onClick={() => setMostrarElenco((anterior) => !anterior)}
    aria-expanded={mostrarElenco}
  >
    {mostrarElenco ? 'Ocultar elenco' : 'Ver elenco'}
  </button>

  <button
    type="button"
    onClick={() => setMostrarTaquilla((anterior) => !anterior)}
    aria-expanded={mostrarTaquilla}
  >
    {mostrarTaquilla ? 'Ocultar taquilla' : 'Ver taquilla'}
  </button>
</div>

{mostrarElenco && <Elenco actores={pelicula.actores} />}

{mostrarTaquilla && (
  <Taquilla recaudacion={pelicula.recaudacion} />
)}

    </section>
  );
};

export default PeliculaDetalle;
