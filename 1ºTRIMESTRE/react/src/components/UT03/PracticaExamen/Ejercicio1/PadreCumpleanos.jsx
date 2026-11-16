import {} from 'react';
import Cumpleanos from './Cumpleanos';
import { useNavigate } from 'react-router-dom';


function PadreCumpleanos() {

    const navigate = useNavigate();

  return (
    <>
        <div>
            <Cumpleanos nombre="Laura" fechaNacimiento="1998-05-04" />
        </div>
                
        <button onClick={() => navigate('/ut03/practica-examen')}>
            Volver al menú de prácticas
        </button>
    </>
    )
}

export default PadreCumpleanos
