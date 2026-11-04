import {useState} from 'react'


const usuarioJSON = {
  nombre: "Elena",
  apellidos: "Martín",
  contacto: {
    email: "elena@ejemplo.com",
    direccion: {
      calle: "Avenida de la Libertad",
      numero: 42
    }
  }
};


const PerfilUsuario = () => {

    const [usuarios, setUsuarios] = useState(usuarioJSON);
    

    const cambiarCalle = (nuevaCalle) => {
        if(nuevaCalle === ""){
            console.error(`ERROR - La calle es inváliza, zoquete.`);
            return;
        };

        setUsuarios({...usuarios, contacto: {
            ...usuarios.contacto,
            direccion: {
                ...usuarios.contacto.direccion,
                calle: nuevaCalle
            }
        }});
    };

  return (
    <>
        <div>
            <h2>{usuarios.nombre} {usuarios.apellidos}</h2>
            <p>Email: {usuarios.contacto?.email}<br/>
                Dirección: {usuarios.contacto?.direccion?.calle}</p>
            <button onClick={() => cambiarCalle("Calle del Sobresaliente")}>Calle del Sobresaliente</button>
        </div>
    </>      
  );
};

export default PerfilUsuario
