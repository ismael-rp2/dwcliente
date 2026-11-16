"use strict";

const aplicarRebajas = () => {
    const clasePrecio = document.getElementsByClassName(`precio`);
    const clasePrecioArray = [...clasePrecio];


    const preciosNuevos = clasePrecioArray.map((valor, indice) => {
        const extraerTexto = valor.textContent;
        const descuento = extraerTexto * 0.2;
        return extraerTexto - descuento;
    });

    clasePrecioArray.forEach((valor, indice) => {
        valor.textContent = `${preciosNuevos[indice]}`;
        valor.textContent = `${preciosNuevos[indice]}`;
        valor.textContent = `${preciosNuevos[indice]}`;
    });
};

export { aplicarRebajas };