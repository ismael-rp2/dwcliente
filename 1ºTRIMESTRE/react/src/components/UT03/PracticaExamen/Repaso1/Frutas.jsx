import React from 'react'

const Frutas = () => {
    const [cesta, setCesta] = useState([
    { id: 1, fruta: "Manzana" }
    ]);

    const anadirFresa = () => {
        const fresa = { id: 2, fruta: "Fresa" };
        const yaExiste = cesta.some((valor) => valor.id === fresa.id);
        if(!yaExiste){
            setCesta([...cesta, fresa]);
        } else {
            console.log("ERROR - El objeto ya existe");
        }
    };




  return (
    <>
        <div>
            
        </div>
    </>
  )
}

export default Frutas
