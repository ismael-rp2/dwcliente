import { useState } from 'react'

const productosIniciales = [
    { id: 1, nombre: "Teclado", precio: 20 },
    { id: 2, nombre: "Ratón", precio: 10 }
];

const Inventario = () => {
    const [inventario, setInventario] = useState(productosIniciales);
  
    const subirPrecios = () => {
        const nuevoInventario = inventario.map((valor) => {
            return {...valor, precio: valor.precio + 5};
        });
        
        setInventario(nuevoInventario);
    };

  return (
    <>
        <div>
            <ul>
                {inventario.map((valor) => (
                    <li>{valor.nombre} - {valor.precio}€</li>
                ))}
            </ul>
            <button onClick={subirPrecios}>Subir precios</button>
        </div>
    </>
  )
}

export default Inventario
