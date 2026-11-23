import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';
/** Página de error para rutas internas no reconocidas. */
const Error = () => (
  <section className="error-filmoteca">
    <h2>Error 404</h2>
    <p>La página solicitada no existe en Filmoteca.</p>
    <Link to="/ut04/practica-4-05">Volver al inicio</Link>
  </section>
);
export default Error;
