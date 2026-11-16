"use strict";
import { inyectarCajas, destacarSegundaCaja, eliminarCajasPares } from './biblioteca.js';

inyectarCajas(3);
destacarSegundaCaja();

//Para que pase un tiempo
setTimeout(() => {
    eliminarCajasPares();
}, 2000);