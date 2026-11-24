"use strict";

const comenzarSaludos = () => {
  const botonComenzar = document.getElementById("comenzar");
  if (!botonComenzar) return;

  const botonParar = document.getElementById("parar");
  if (!botonParar) return;

  const body = document.body;
  let intervalo = null;
  let contador = 2;

  botonComenzar.addEventListener("click", () => {
    if (intervalo === null) {
      intervalo = setInterval(() => {
        generarTexto(body);
        console.log(`Hola segundo ${contador}`);
        contador += 2;
      }, 2000);
      console.log("Has pulsado Comenzar");
    }
  });

  botonParar.addEventListener("click", () => {
    console.log("Has pulsado Parar");
    clearInterval(intervalo);
    intervalo = null; // Permite volver a iniciar el intervalo después de pararlo
  });
};



const generarTexto = (contenedor) => {
  const h1 = document.createElement("h1");
  h1.textContent = "¡Hola Feo!";
  contenedor.appendChild(h1);
};

export { comenzarSaludos };