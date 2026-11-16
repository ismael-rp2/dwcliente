"use strict";

const cargarInvitados = (lista) => {
    const contenedor = document.getElementById('invitados');
    if(!contenedor) return;
    contenedor.innerHTML = "";

    lista.forEach((nombre) => {
        crearFichaInvitado(nombre, contenedor);
    });

};


const crearFichaInvitado = (nombre, contenedor) => {
    const idUnico = crypto.randomUUID();

    const html = 
        `<div id="inv-${idUnico}" class="invitado-card">
            <button type="button" class="btn-confirmar">Confirmar</button>
        </div>`;    

    contenedor.insertAdjacentHTML('beforeend', html);

    const fichaNueva = document.getElementById(`inv-${idUnico}`);

    const boton = fichaNueva.querySelector(`.btn-confirmar`);

    boton.addEventListener('click', () => 
    fichaNueva.classList.toggle(`confirmado`));
    console.log("Has clickado en conrimar");
    
};


export {cargarInvitados}