import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Eliminamos la línea de "import App..."

// IMPORTANTE: Asegúrate de que el nombre del archivo en la carpeta termine siendo exactamente "Peliculas.jsx"
import Peliculas from './components/UT03/Práctica3.07/Peliculas.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Eliminamos la etiqueta <App /> */}
    <Peliculas />
  </StrictMode>,
)