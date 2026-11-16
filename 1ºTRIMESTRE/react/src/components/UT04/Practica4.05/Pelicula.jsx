import React, { useState } from 'react';
import Elenco from './Elenco.jsx';
import Taquilla from './Taquilla.jsx';
import './Pelicula.css';

// Pelicula presenta los datos principales y permite desplegar elenco y recaudación.
const Pelicula = ({ datos }) => {
  const { nombre, cartelera, resumen, actores, recaudacion, director, clasificacion, nota } = datos;
  const [mostrarElenco, setMostrarElenco] = useState(false);
  const [mostrarTaquilla, setMostrarTaquilla] = useState(false);

  return (
    <article className="pelicula-card">
      <h3 className="titulo-pelicula">{nombre}</h3>
      <div className="contenido-principal">
        <div className="cartela-container">
          <img src={cartelera} alt={`Cartel de ${nombre}`} className="cartela" />
        </div>
        <div className="resumen-container">
          <p className="resumen">{resumen}</p>
          <p className="datos-pelicula"><strong>Director:</strong> {director} · <strong>Género:</strong> {clasificacion} · <strong>Nota:</strong> {nota}/10</p>
        </div>
      </div>
      <div className="acciones-pelicula">
        <button type="button" onClick={() => setMostrarElenco(!mostrarElenco)} aria-expanded={mostrarElenco}>
          {mostrarElenco ? 'Ocultar elenco' : 'Ver elenco'}
        </button>
        <button type="button" onClick={() => setMostrarTaquilla(!mostrarTaquilla)} aria-expanded={mostrarTaquilla}>
          {mostrarTaquilla ? 'Ocultar taquilla' : 'Ver taquilla'}
        </button>
      </div>
      {mostrarElenco && <Elenco actores={actores} />}
      {mostrarTaquilla && <Taquilla recaudacion={recaudacion} />}
    </article>
  );
};

export default Pelicula;
