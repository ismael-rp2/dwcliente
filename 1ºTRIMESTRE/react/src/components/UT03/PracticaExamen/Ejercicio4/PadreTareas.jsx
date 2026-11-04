// PadreTareas.jsx
import ListarTareas from './ListarTareas';

const PadreTareas = () => {
    // Simulamos un array de datos (como si viniera de tu JSON o de un estado)
    const misTareas = [
        { titulo: "Aprobar el examen de React", estado: false },
        { titulo: "Repasar el .map() y .filter()", estado: true },
        { titulo: "Celebrar el sobresaliente", estado: false }
    ];

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Mi Lista de Tareas</h1>
            
            {/* Llamamos al Encargado y le pasamos el array a través de la prop 'tareas' */}
            <ListarTareas tareas={misTareas} />
        </div>
    );
};

export default PadreTareas;