import {useState} from 'react';

const Fichaje = () => {
    const [fechaFichaje, setFechaFichaje] = useState(null);

      // Función que se ejecuta al hacer clic en el botón
    const fichar = () => {
        setFechaFichaje(new Date());
    };


    return (
    <>
        <div>
            <button onClick={fichar}>Fichar</button>
            {fechaFichaje ? (
                <p>Ultimo fichaje regitrado el día {String(fechaFichaje.getDate()).padStart(2, '0')} del mes {String(fechaFichaje.getMonth() + 1).padStart(2, '0')}</p>
            ) : (
                <p>Aun no has fichado hoy</p>
            )}
        </div>
    </>
    )
}

export default Fichaje
