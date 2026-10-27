import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// IMPORTANTE: Asegúrate de que el nombre del archivo en la carpeta termine siendo exactamente "Peliculas.jsx"
import Peliculas from './components/UT03/Práctica3.07/Peliculas.jsx';
import Listado from './components/UT03/Práctica3.08/Listado.jsx';
import ContadorLimite from './components/UT03/Práctica3.08/ContadorLimite.jsx';
import ContadorLikes from './components/UT03/Práctica3.08/ContadorLikes.jsx';
import Matricula from './components/UT03/Práctica3.09/Matricula.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Eliminamos la etiqueta <App /> */}
    {/*<Peliculas />*/}
    {/* <Listado /> */}
    {/* <ContadorLimite /> */}
    {/* <ContadorLikes /> */}
    <Matricula />
  </StrictMode>,
)