
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cabecera from './Cabecera.jsx';
import Menu from './Menu.jsx';
import Contenido from './Contenido.jsx';
import Pie from './Pie.jsx';
import Inicio from './Inicio.jsx';
import Peliculas from './Peliculas.jsx';
import Interpretes from './Interpretes.jsx';
import Galeria from './Galeria.jsx';
import AcercaDe from './AcercaDe.jsx';
import './App.css';

/**
 * Componente principal de Filmoteca.
 * Mantiene la estructura visual y permite cambiar
 * entre las distintas páginas mediante rutas internas.
 */
const App = () => {
  return (
    <div className="app">
      <Cabecera />
      <Menu />

      <Contenido>
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="peliculas" element={<Peliculas />} />
          <Route path="interpretes" element={<Interpretes />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="acerca-de" element={<AcercaDe />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </Contenido>

      <Pie />
    </div>
  );
};

export default App;
