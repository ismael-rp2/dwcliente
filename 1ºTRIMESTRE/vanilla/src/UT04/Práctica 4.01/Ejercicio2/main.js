"use strict";

import { 
    numeroAleatorio,

} from "./biblioteca.js";


setInterval(() => {
    const destino = document.getElementById("lista");
    const infoHTML = `<li>Número: ${numeroAleatorio()}</li>`;
    destino.insertAdjacentHTML('beforeend', infoHTML);
}, 2000);