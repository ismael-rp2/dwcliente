"use strict";

const inicializarPromociones = () => {

    //Seleccionar promociones
    const contenedorPromociones = document.querySelector(`#promociones`);
    //console.log(contenedorPromociones.textContent);

    const textarea = contenedorPromociones.querySelector(`textarea`);
    const button = contenedorPromociones.querySelector(`button`);
    const p = contenedorPromociones.querySelector(`p`);
    const ul = contenedorPromociones.querySelector(`ul`);

    button.addEventListener(`click`, () => {
        p.textContent = `Estado: Ofertas generadas`;
        const textareaArray = textarea.value.split(`,`);
        
        if(!ul) return;

        textareaArray.forEach((valor) => {
            const descuentoAleatorio = Math.floor(Math.random() * (50 - 10 + 1) + 10);
            //console.log(descuentoAleatorio);
            const id = crypto.randomUUID();

            const claseCalculada = descuentoAleatorio >= 30 
            ? `super-oferta`
            : `oferta-normal`;

                ul.insertAdjacentHTML(`beforeend`, 
                    `<li id="${id}" class="${claseCalculada}">
                        Nombre: ${valor.trim()} || Descuento: ${descuentoAleatorio}%
                        </li>`);
                
        });
    })
};

export {inicializarPromociones};