import React from 'react';
import BotonSecreto from './BotonSecreto';

const App = () => {

    const lanzarMisiles = () => {
        alert("¡BOOM!");
    };

  return (
    <>
        <div>
            <BotonSecreto accionOculta={lanzarMisiles}/>
        </div>
    </>
  )
}

export default App
