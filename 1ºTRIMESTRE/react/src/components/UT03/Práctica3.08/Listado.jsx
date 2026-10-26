import {useState} from 'react';
import './Listado.css';

const Listado = () => {
    const [listaNumeros, setListaNumeros] = useState([]);
  

    //Generar Numero
    const generarNumero = () => {
        //Generar el numero aleatorio
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        
        //Comprobar si tiene el numero
        const numeroRepetido = listaNumeros.includes(numeroAleatorio);
        console.log(`Numero que se repite: ${numeroAleatorio}`);

        //Actualizar el estado si no esta repetido
        if(!numeroRepetido){
            setListaNumeros([...listaNumeros, numeroAleatorio]);
        }
    };
  
    //Funcion Eliminar
    const vaciaLista = () => {
        setListaNumeros([]);
    };



    return (
    <>
        <div>
            <h2>Generador de Números</h2>
            
            <div>
                <button onClick={generarNumero}>Generar</button>
                <button onClick={vaciaLista}>Eliminar</button>    
            </div>

            <ul>
                {listaNumeros.map((valor, indice) => (
                    <li key={indice}>Numero: {valor}</li>
                ))}
            </ul>
        </div>
    </>
  );
};

export default Listado