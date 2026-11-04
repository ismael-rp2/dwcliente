import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// IMPORTANTE: Asegúrate de que el nombre del archivo en la carpeta termine siendo exactamente "Peliculas.jsx"
import Peliculas from './components/UT03/Práctica3.07/Peliculas.jsx';
import Listado from './components/UT03/Práctica3.08/Listado.jsx';
import ContadorLimite from './components/UT03/Práctica3.08/ContadorLimite.jsx';
import ContadorLikes from './components/UT03/Práctica3.08/ContadorLikes.jsx';
import Matricula from './components/UT03/Práctica3.09/Matricula.jsx';
import PadreCumpleanos from './components/UT03/PracticaExamen/Ejercicio1/PadreCumpleanos.jsx';
import Fichaje from './components/UT03/PracticaExamen/Ejercicio2/Fichaje.jsx';
import Festivales from './components/UT03/PracticaExamen/Ejercicio3/Festivales.jsx';
import TareaElemento from './components/UT03/PracticaExamen/Ejercicio4/TareaElemento.jsx';
import PadreTareas from './components/UT03/PracticaExamen/Ejercicio4/PadreTareas.jsx';
import Ejercicio1 from './components/UT03/PracticaExamen/Ejercicio5/Ejercicio1.jsx';
import PerfilUsuario from './components/UT03/PracticaExamen/Simulacro1/PerfilUsuario.jsx';
import Inventario from './components/UT03/PracticaExamen/Simulacro1/Inventario.jsx';
import GestorSuscripciones from './components/UT03/PracticaExamen/Simulacro2/GestorSuscripciones.jsx';
import BotonSecreto from './components/UT03/PracticaExamen/Repaso1/BotonSecreto.jsx';
import App from './components/UT03/PracticaExamen/Repaso1/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Eliminamos la etiqueta <App /> */}
    {/*<Peliculas />*/}
    {/* <Listado /> */}
    {/* <ContadorLimite /> */}
    {/* <ContadorLikes /> */}
    {/* <Matricula /> */}
    {/* <PadreCumpleanos /> */}
    {/* <Fichaje /> */}
    {/* <Festivales /> */}
    {/* <PadreTareas /> */}
    {/* <Ejercicio1 /> */}
    {/* <PerfilUsuario /> */}
    {/* <Inventario /> */}
    {/* <GestorSuscripciones /> */}
    <App />
  </StrictMode>,
)