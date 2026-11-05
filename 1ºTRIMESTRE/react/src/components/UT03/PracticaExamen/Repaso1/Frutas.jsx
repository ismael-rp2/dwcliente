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


    const [notas, setNotas] = useState([
    { id: 1, asignatura: "React", nota: 4 },
    { id: 2, asignatura: "Java", nota: 8 }
    ]);

    const aprobarReact = () => {
    const arrayModificado = notas.map((valor) => {
        if (valor.id === 1) {
            return { ...valor, nota: 5 };
        } else {
            return valor;
        }
    });

    setNotas(arrayModificado);
};


  return (
    <>
        <div>
            
        </div>
    </>
  )
}

export default Frutas
