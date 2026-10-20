"use strict";

const curso = {
    nombre: "DAW",
    anyo: 2026,
    descripcion: "aqui la descripcion",
    alumnado: ["mar", "ismael"], //array de alumno,
    //calcularMedia: ()=>{} //se llama asi calcularMedia()
    matricular(nuevoAlumno){
        if(typeof nuevoAlumno !== 'object' || nuevoAlumno === null || Array.isArray(nuevoAlumno)){
            console.error(`ERROR - Debes de pasar un objeto alumno válido, zoquete.`);
            return;
        }

        this.alumnado = [...this.alumnado, nuevoAlumno];
        console.log(`${nuevoAlumno.nombre} ${nuevoAlumno.apellidos} se ha matriculado en ${curso.nombre}`);
    }
};

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


export {curso, discente};