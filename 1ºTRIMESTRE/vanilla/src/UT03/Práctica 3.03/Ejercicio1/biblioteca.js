"use strict";

const curso = {
    nombre: "DAW",
    anyo: 2026,
    descripcion: "aqui la descripcion",
    alumnado: ["mar", "ismael"] //array de alumno,
    //calcularMedia: ()=>{} //se llama asi calcularMedia()
};


/**
 * 
 * @param {object} curso Recibe un objeto curso y lo válida 
 * @returns {String} el informe al completo de curso
 */
const generarInforme = (curso) => {

    if(typeof curso !== 'object' || curso === null || Array.isArray(curso)){
        console.error(`ERROR - Los datos introducidos no son válidos. Recuerda que es un objeto curso, zoquete.`)
        return;
    };

    console.log("--- INFORME DEL CURSO ---")

    for(const propiedad in curso){
        console.log(`${propiedad}: ${curso[propiedad]}`);
    };
};

export {generarInforme, curso};
