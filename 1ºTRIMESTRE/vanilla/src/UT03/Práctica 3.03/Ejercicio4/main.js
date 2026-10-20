"use strict";

import { imprimirObjeto } from "./biblioteca.js";


const persona = {
  nombre: "Ana",
  edad: 28,
  profesion: "Desarrolladora Web",
  activo: true,
  hobbies: ["leer", "viajar", "programar"],
  direccion: {
    ciudad: "Madrid",
    codigoPostal: "28001"
  },
  saludar: function() {
    return `Hola, me llamo ${this.nombre}`;
  }
};


console.log(imprimirObjeto(persona));