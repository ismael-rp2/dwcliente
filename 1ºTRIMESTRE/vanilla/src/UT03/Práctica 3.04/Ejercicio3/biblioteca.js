"use strict";

const usuarios = [
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "espaÃ±ol", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "EspaÃ±a",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  },
  {
    nombre: "Marta",
    preferencias: { tema: "claro", idioma: "catalÃ¡n", edad: 15 },
    contacto: {
      direccion: {
        calle: "Calle tambiÃ©n falsa, 123",
        localidad: "Andorra la Vella",
        pais: "Andorra",
      },
      correoelectronico: "correoandorrano@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Alberto",
    preferencias: { tema: "oscuro", idioma: "espaÃ±ol", edad: 56 },
    contacto: {
      direccion: {
        calle: "Elm Street, 666",
        localidad: "Petrer",
        pais: "EspaÃ±a",
      },
      correoelectronico: "correonulo@yahoo.com",
      telefono: "548632478",
    },
  },
  {
    nombre: "Jacinto",
    preferencias: { tema: "claro", idioma: "inglÃ©s", edad: 17 },
    contacto: {
      direccion: {
        calle: "Elm Street, 667",
        localidad: "Elda",
        pais: "EspaÃ±a",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Rigoberta",
    preferencias: { tema: "claro", idioma: "francÃ©s", edad: 34 },
    contacto: {
      direccion: {
        calle: "Calle inexistente, 6",
        localidad: "Burdeos",
        pais: "Francia",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "232547859",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "espaÃ±ol", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle de mentira, s/n",
        localidad: "Petrer",
        pais: "EspaÃ±a",
      },
      correoelectronico: "estecorreonoexiste@gmail.com",
      telefono: "452158697",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "espaÃ±ol", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "EspaÃ±a",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  },
];


const verificarUsuario = (usuario) => {
    if(!Array.isArray(usuario) || usuario < 0){
        return;
    }
    return usuario;
};




const nuevoUsuario = (nuevoUsuario, listaUsuarios = usuarios) => {
    verificarUsuario(nuevoUsuario)
        ?  [...listaUsuarios, nuevoUsuario]
        : console.error(`ERROR - NO ES UN ARRAY VÁLIDO, ZOQUETE`);
    };  



const mayoresDeEdad = () => {
    let lista = usuarios.map((valor, indice, array) => {
        lista.filter(valor => valor.preferencias.edad >= 18);
    });
    const personas = [...lista];
};


const correoYahoo = () => {

};

//Tema claro, mayores de edad y su país sea ESPAÑA
const temaClaro = () => {

};


const faltanDatos = () => {

};


//Valor por defecto NO indicado
const anadirApellidos = () => {

};


//Añadir a direccion una entrada llamada codigo "00000"
const codigoPostal = () => {

};



//Exportar las funciones
export {nuevoUsuario, mayoresDeEdad, correoYahoo, temaClaro, faltanDatos, anadirApellidos, codigoPostal};