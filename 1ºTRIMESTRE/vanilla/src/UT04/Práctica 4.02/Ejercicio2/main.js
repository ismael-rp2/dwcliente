"use strict";

import { 
    crearTabla
 } from "./biblioteca.js";



 console.log(crearTabla());

 document.body.insertAdjacentHTML(`beforeend`, crearTabla("feo"));