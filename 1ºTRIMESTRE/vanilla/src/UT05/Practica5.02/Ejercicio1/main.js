"use strict";

import { acordeon } from "./biblioteca.js";


window.onload = () => {
    const contenedor = document.getElementById(`contenedor`);

    contenedor.addEventListener(`click`, (evento) => {
        acordeon(evento);
    });
};
