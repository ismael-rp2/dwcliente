"use strict";

import { mostrarContenido } from "./biblioteca.js";


window.onload = () => {

    //Seleccionamos el elemento
    const primerDiv = document.getElementById(`primer-div`);
    primerDiv.addEventListener(`click`, (evento) => {
        mostrarContenido(evento);
    });


};