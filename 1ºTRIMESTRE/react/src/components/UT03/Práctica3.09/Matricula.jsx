import { useState } from 'react';

// Archivo: Matricula.jsx
import matriculadosJSON from '../../../assets/matriculados.json';
import './Matricula.css';
import Discente from './Discente.jsx'; // Importamos el componente separado

const Matricula = () => {
    // 1. ESTADO "BASE DATOS": Alumnos reales matriculados (aquí es de donde leemos)
    const [alumnosTotales, setAlumnosTotales] = useState(matriculadosJSON.discentes); 
    
    // 2. ESTADO "VISTA": Alumnos filtrados que se muestran en pantalla (aquí escribimos)
    const [alumnosVisibles, setAlumnosVisibles] = useState(matriculadosJSON.discentes); 
    
    const [ordenAscendente, setOrdenAscendente] = useState(true);

    // --- FILTROS: Ahora leen de "alumnosTotales", no del JSON original ---
    const filtrar2DAW = () => {
        const estudiantes2DAW = alumnosTotales.filter((alumno) => alumno.curso === "2DAW");
        setAlumnosVisibles(estudiantes2DAW);
    };

    const filtrarPrimerCurso = () => {
        const primerCurso = alumnosTotales.filter((alumno) => alumno.curso.includes("1"));
        setAlumnosVisibles(primerCurso);
    };

    const filtrarCicloDAW = () => {
        const cicloDAW = alumnosTotales.filter((alumno) => alumno.curso.includes("DAW"));
        setAlumnosVisibles(cicloDAW);
    };

    const filtrarLectura = () => {
        const lectores = alumnosTotales.filter((alumno) => alumno.aficiones.includes("lectura"));
        setAlumnosVisibles(lectores);
    };

    const ordenarApellidos = () => {
        // Ordenamos solo los que están visibles en la pantalla ahora mismo
        const ordenados = alumnosVisibles.toSorted((a, b) => {
            if(ordenAscendente){
                return a.apellidos.localeCompare(b.apellidos);
            } else {
                return b.apellidos.localeCompare(a.apellidos);
            }
        });
        setAlumnosVisibles(ordenados);
        setOrdenAscendente(!ordenAscendente); 
    };

    const reiniciarListado = () => {
        // 1. Resucitamos a todos en la "base de datos" restaurando el JSON original
        setAlumnosTotales(matriculadosJSON.discentes);
        
        // 2. Los mostramos todos en la vista actual
        setAlumnosVisibles(matriculadosJSON.discentes);
    };

    const desmatricularAlumno = (idBorrar) => {
        // 1. Lo borramos de la base de datos (para que no reviva en futuros filtros)
        const nuevosTotales = alumnosTotales.filter((alumno) => alumno.id !== idBorrar);
        setAlumnosTotales(nuevosTotales);

        // 2. Lo borramos de la vista actual (para que desaparezca de inmediato)
        const nuevosVisibles = alumnosVisibles.filter((alumno) => alumno.id !== idBorrar);
        setAlumnosVisibles(nuevosVisibles);
    };

    return (
        <div className='contenedor-matricula'>
            <h1>Gestión de Matrículas</h1>

            <div className='panel-botones' style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
                <button onClick={filtrar2DAW}>Solo 2ºDAW</button>
                <button onClick={filtrarPrimerCurso}>Primer Curso</button>
                <button onClick={filtrarCicloDAW}>Ciclo DAW</button>
                <button onClick={filtrarLectura}>Afición Lectura</button>
                <button onClick={ordenarApellidos}>Ordenar Apellidos ({ordenAscendente ? "A-Z" : "Z-A"})</button>
                <button onClick={reiniciarListado}>Reiniciar Listado</button>
            </div>

            <div className='listado-alumnos'>
                {/* Buena práctica de tu profesor: comprobar antes de mapear */}
                {Array.isArray(alumnosVisibles) && alumnosVisibles.length > 0 ? (
                    alumnosVisibles.map((alumno) => (
                        <Discente
                            key={alumno.id} // Mejor usar el ID único que el índice
                            nombre={alumno.nombre}
                            apellidos={alumno.apellidos}
                            curso={alumno.curso}
                            aficiones={alumno.aficiones}
                            comida={alumno.comida}
                            funcionDesmatricular={() => desmatricularAlumno(alumno.id)} // Pasamos el ID
                        />
                    ))
                ) : (
                    <p style={{ color: "red" }}>No hay alumnos matriculados que cumplan este filtro.</p>
                )}
            </div>
        </div>
    );
};

export default Matricula;