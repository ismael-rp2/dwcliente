import {useState} from 'react'

const ContadorLimite = () => {

    const [contador, setContador] = useState(0);
    
    const incrementar = () => {
      setContador(contador + 1);
    };

    const decrementar = () => {
      setContador(contador - 1);
    };

  return (
    <>
    <h2>Contador: {contador}</h2>
    <div>
        <button
          onClick={incrementar}
          disabled={contador === 10}>Incrementar </button>
        <br></br>
        <button
          onClick={decrementar}
          disabled={contador === 0}>Decrementar</button>
    </div>
    </>
      
  )
};

export default ContadorLimite
