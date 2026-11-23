import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cabecera from './Cabecera.jsx';
import Menu from './Menu.jsx';
import Contenido from './Contenido.jsx';
import Pie from './Pie.jsx';
import Inicio from './Inicio.jsx';
import Peliculas from './Peliculas.jsx';
import PeliculaDetalle from './PeliculaDetalle.jsx';
import Interpretes from './Interpretes.jsx';
import Galeria from './Galeria.jsx';
import GaleriaInicio from './GaleriaInicio.jsx';
import GaleriaTitulo from './GaleriaTitulo.jsx';
import GaleriaInterprete from './GaleriaInterprete.jsx';
import GaleriaDirector from './GaleriaDirector.jsx';
import AcercaDe from './AcercaDe.jsx';
import Error from './Error.jsx';
import './App.css';

/** Estructura fija y rutas internas de Filmoteca. */
const App = () => (
  <div className="app">
    <Cabecera />
    <Menu />
    <Contenido>
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="peliculas" element={<Peliculas />} />
        <Route path="peliculas/:id" element={<PeliculaDetalle />} />
        <Route path="interpretes" element={<Interpretes />} />
        <Route path="galeria" element={<Galeria />}>
          <Route index element={<GaleriaInicio />} />
          <Route path="titulo" element={<GaleriaTitulo />} />
          <Route path="interprete" element={<GaleriaInterprete />} />
          <Route path="director" element={<GaleriaDirector />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="acerca-de" element={<AcercaDe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Contenido>
    <Pie />
  </div>
);
export default App;
