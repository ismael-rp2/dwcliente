"use strict";
import { cargarDatosLentamente } from './biblioteca.js';

// Simulamos los datos que vienen de un JSON
const inventario = [
    { id: 1, nombre: "Ratón Gaming" },
    { id: 2, nombre: "Teclado Mecánico" },
    { id: 3, nombre: "Monitor 144Hz" }
];

// Llamamos a la función pasándole el array
cargarDatosLentamente(inventario);