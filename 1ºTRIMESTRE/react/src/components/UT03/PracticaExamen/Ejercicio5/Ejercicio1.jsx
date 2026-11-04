import { useState } from 'react'

const Ejercicio1 = () => {
  const estadoInicial = [
    { id: 1, nombre: "Juan", aficion: "Leer" },
    { id: 2, nombre: "María", aficion: "Correr" }
  ];

  const [alumnos, setAlumnos] = useState(estadoInicial);  

  // Esto está de 10/10. Perfecto uso del .map() y spread en objetos.
  const cambiarAficionJuan = () => {
    setAlumnos( identificadorAficion => identificadorAficion.map(
      valor => valor.id === 1 ? {...valor, aficion: "Programar"} : valor
    ));
  };

  const matricularNuevo = () => {
    const nuevoAlumno = { id: 3, nombre: "Carlos", aficion: "Pintar" };

    const yaExiste = alumnos.some((valor) => {
      return valor.id === nuevoAlumno.id
    });

    if(!yaExiste){
      setAlumnos([...alumnos, nuevoAlumno]);
    } else {
      console.log("carlos ya esta matriculado");
    }

  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={cambiarAficionJuan} style={{ marginRight: "10px" }}>Cambiar Afición Juan</button>
        <button onClick={matricularNuevo}>Añadir a Carlos</button>
      </div>
      
      <div>
        <ul>
          {alumnos.map((valor) => (
            // He añadido la key (obligatoria siempre en un map) y espacios visuales
            <li key={valor.id}>
              <strong>ID:</strong> {valor.id} | <strong>Nombre:</strong> {valor.nombre} | <strong>Afición:</strong> {valor.aficion}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Ejercicio1;