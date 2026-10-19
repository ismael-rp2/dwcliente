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

    for(const propiedad in discente){
        console.log(`${propiedad}: ${discente[propiedad]}`);
    }
};

const imprimirAficiones = (discente) => {
    console.log(`Aficiones de ${discente[nombre]}`);
    discente.array.forEach( (valor, indice, array) => {
        console.log(`${indice+1}. ${discente[aficiones]}`);
    });

};

const imprimirInforme = () => {

};



export {discente, calcularMedia, imprimirAficiones, imprimirInforme};