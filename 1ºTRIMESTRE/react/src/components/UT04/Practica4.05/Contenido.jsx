import React from 'react';
import './Contenido.css';

// Contenido es el contenedor común donde Routes inserta la página seleccionada.
const Contenido = ({ children }) => (
  <main className="contenido">
    {children}
  </main>
);

export default Contenido;
