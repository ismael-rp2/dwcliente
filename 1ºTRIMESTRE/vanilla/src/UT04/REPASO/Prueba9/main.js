"use strict";
import { inicializarSorteo } from './biblioteca.js';

// Simulamos el contenido exacto de un archivo .json (es puro texto)
const datosJSON = `[
    { "id": 1, "nombre": "Ana García", "participa": true },
    { "id": 2, "nombre": "Luis Pérez", "participa": false },
    { "id": 3, "nombre": "Carlos Gómez", "participa": true },
    { "id": 4, "nombre": "Marta López", "participa": true }
]`;

inicializarSorteo(datosJSON);