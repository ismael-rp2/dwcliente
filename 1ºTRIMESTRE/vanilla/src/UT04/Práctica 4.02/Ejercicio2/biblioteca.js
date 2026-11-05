"use strict";


const esPrimo = (numero) => {
  for (let i = 2; i * i <= numero; i++) 
    if (numero % i === 0){ 
        return false; 
    } 
    return numero > 1;
};


//FORMA 1
/* 
const crearTabla = () => {
    const tabla = document.createElement("table");

    let numero = 1;

    for(let i = 0; i < 10; i++){
        const tr = document.createElement("tr");

        for(let j = 0; j < 10; j++){
            const td = document.createElement("td");
            td.textContent = `${numero}`;
            tr.appendChild(td);
            numero++;
        };

        tabla.appendChild(tr);
    };

    document.body.appendChild(tabla);
};


const idSet = setTimeout(() => {
 const celdas = document.getElementById("feo").getElementsByTagName("td");
    console.log(celdas);


    const celdas = [...document.getElementById("feo").getElementsByTagName("td")];
    console.log(celdas);

    celdas.map((celda) => {
        if(esPrimo(parseInt(celda.textContent))){
            celda.classList.add("primo");
        }
    });


 }, 200);

export {crearTabla}; */


//FORMA 2
const crearTabla = (identificador) => {
    
    let tabla = `<table id="${identificador}">`; //Se cierra al final
    
    let numero = 1;

    for(let i = 0; i < 10; i++){
        tabla = `${tabla}<tr>`;//Abro las filas

        for(let j = 0; j < 10; j++){
            tabla = `${tabla}<td>${numero}</td>`; //Cierro y abro columna
            numero++;
        };
        tabla = `${tabla}</tr>`;//Cierro filas
    };
    tabla = `${tabla}</table>`;
    return tabla;
};

const idSet = setTimeout(() => {
    const celdas = [...document.getElementById(`feo`).getElementsByTagName("td")];
    console.log(celdas);

    celdas.map((celda) => {
        if(esPrimo(parseInt(celda.textContent))){
            celda.classList.add("primo");
        }
    });


 }, 200);


export {crearTabla};