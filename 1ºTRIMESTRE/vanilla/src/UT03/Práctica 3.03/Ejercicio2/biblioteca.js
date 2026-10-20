"use strict";

const discente = {
    "id": 1,
    "nombre": "Ana",
    "apellidos": "García Pérez",
    "aficiones": ["lectura", "baloncesto","fotografía"],
    "notas": {
      "primera": 8.5,
      "segunda": 7.0,
      "tercera": 9.2
    }
};


const calcularMedia = (discente) => {
    if(typeof discente !== 'object' || discente === null || Array.isArray(discente)){
        console.error(`ERROR - No has introducido un objeto .json, espabilda, zoquete.`);
        return;
    }

    let media = (discente.notas.primera + discente.notas.segunda + discente.notas.tercera) / 3;

    console.log(`Nota media: ${media.toFixed(2)}`);
};


const imprimirAficiones = (discente) => {
    console.log(`Aficiones: `);
    discente.aficiones.forEach((valor, indice, array) => {
        console.log(`${indice + 1}. ${valor}`);
    });

};

const imprimirInforme = () => {
    console.log(`--- INFORME DEL ALUMNO ---`);
    console.log(`ID: ${discente.id}`);
    console.log(`Nombre completo: ${discente.nombre} ${discente.apellidos}`);
    calcularMedia(discente);
    imprimirAficiones(discente)
};



export {discente, calcularMedia, imprimirAficiones, imprimirInforme};