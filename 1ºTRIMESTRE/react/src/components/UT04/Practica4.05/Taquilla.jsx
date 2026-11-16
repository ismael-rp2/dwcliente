import React from 'react';
import './Taquilla.css';

// Taquilla separa la presentación del dato económico de la tarjeta de película.
const Taquilla = ({ recaudacion }) => (
  <div className="taquilla-container">
    <h4>Recaudación en taquilla</h4>
    <p className="recaudacion-texto">{recaudacion}</p>
  </div>
);

export default Taquilla;
