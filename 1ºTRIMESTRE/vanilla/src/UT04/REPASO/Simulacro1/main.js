"use strict";
import { iniciarAltaEmpleados } from './biblioteca.js';

const nuevosEmpleados = [
    { nombre: "Ismael", puesto: "Desarrollador Frontend" },
    { nombre: "Lucía", puesto: "Diseñadora UX" },
    { nombre: "Marcos" }, // Ojo, no tiene puesto
    { nombre: "Elena", puesto: "Directora IT" }
];

iniciarAltaEmpleados(nuevosEmpleados);