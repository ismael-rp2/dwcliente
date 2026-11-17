"use strict";

const lanzarNotificaciones = (mensajes) => {
    
    //Seleccionar panel-notificacion
    const panelNotificacion = document.getElementById(`panel-notificaciones`);
    panelNotificacion.innerHTML = "";//Vaciarlo

    //Variable contador
    let contador = 0;

    const intervalo = setInterval(() => {
        if(mensajes.length > contador){
            const texto = mensajes[contador];
            const id = crypto.randomUUID(); //Generar ID

            panelNotificacion.insertAdjacentHTML(`beforeend`,
                `<div id="noti-${id}" class="alerta">
                    <p>${texto}</p>
                    <button class="btn-min">Minimizar</button>
                </div>`
            );

            //Capturar div con ID creado
            const divCreado = document.getElementById(`noti-${id}`);
            const boton = divCreado.querySelector(`.btn-min`);

            // 4. Añadimos el evento con función flecha
            boton.addEventListener(`click`, () => {
                divCreado.classList.toggle(`minimizada`);
            });

            setTimeout(() => {
                divCreado.remove();
            },5000)
            
            contador ++;
            } else {
                clearInterval(intervalo);
            }
    }, 2000);
};


export { lanzarNotificaciones };