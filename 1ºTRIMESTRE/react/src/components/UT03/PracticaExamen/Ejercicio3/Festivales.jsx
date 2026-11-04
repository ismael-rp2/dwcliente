import { useState } from 'react';

const Festivales = () => {
    const festivalesJSON = [
        { id: 1, nombre: "Viña Rock", fecha: "2026-05-02" },
        { id: 2, nombre: "Arenal Sound", fecha: "2026-08-01" },
        { id: 3, nombre: "FIB", fecha: "2027-07-15" }
    ];

    // Iniciamos el estado con la lista completa, igual que en tu componente Matricula
    const [listaFestivales, setListaFestivales] = useState(festivalesJSON);

    // Función de filtrado
    const filtrarFestivales2026 = () => {
        // Hacemos el filter sobre el JSON. "festival" es cada objeto individual.
        const filtrados = festivalesJSON.filter((festival) => {
            // Transformamos la fecha string del festival actual en un objeto Date
            const fechaObj = new Date(festival.fecha);
            // Comprobamos si el año es exactamente 2026
            return fechaObj.getFullYear() === 2026;
        });
        
        // Guardamos el resultado en el estado para que se redibuje la pantalla
        setListaFestivales(filtrados);
    };

    return (
        <div>
            {/* El botón llama a la función */}
            <button onClick={filtrarFestivales2026}>Ver festivales 2026</button>
            
            {/* Recorremos el estado con map para pintar los nombres */}
            <ul>
                {listaFestivales.map((festival) => (
                    <li key={festival.id}> {festival.nombre} - {festival.fecha}</li>
                ))}
            </ul>
        </div>
    );
};

export default Festivales;