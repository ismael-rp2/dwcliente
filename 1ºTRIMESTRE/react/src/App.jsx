import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu/Menu";
import Inicio from "./pages/Inicio";
import Error from "./pages/Error";
import Tema03 from "./pages/Tema03.jsx";
import Tema04 from "./pages/Tema04.jsx";

// 1. Importamos el nuevo submenú que acabamos de crear
import MenuPracticaExamen from "./pages/MenuPracticaExamen.jsx";

import PadreCumpleanos from './components/UT03/PracticaExamen/Ejercicio1/PadreCumpleanos.jsx';
import AppPractica405 from "./components/UT04/Practica4.05/App.jsx";

/**
 * Enrutador principal del portafolio.
 */
const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <main style={{ padding: '2rem', fontFamily: 'monospace', backgroundColor: '#1e1e1e', color: '#fff', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          
          {/* Rutas UT03 */}
          <Route path="/ut03" element={<Tema03 />} />
          <Route path="/ut03/practica-examen" element={<MenuPracticaExamen />} />
          <Route path="/ut03/practica-examen/ejercicio1" element={<PadreCumpleanos />} />
          
          {/* Rutas UT04 */}
          <Route path="/ut04" element={<Tema04 />} />

          <Route path="/ut04/practica-4-05/*" element={<AppPractica405 />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;