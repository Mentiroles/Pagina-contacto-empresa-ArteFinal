import handleButtons from "./utils/menu.js";
import {init} from "./utils/carrusel.js";
import {moverDerecha, moverIzquierda} from "./utils/carrusel.js";

const carrusel = document.querySelector('.carrusel');
const contacto = document.getElementById('Contacto');
const servicios = document.getElementById('Servicios');
const nosotros = document.getElementById('Nosotros');

const botonDerecha = document.querySelector('.boton-derecha');
const botonIzquierda = document.querySelector('.boton-izquierda');

init();


botonDerecha.addEventListener('click', moverDerecha);
botonIzquierda.addEventListener('click', moverIzquierda);


contacto.addEventListener('click', handleButtons);
servicios.addEventListener('click', handleButtons);
nosotros.addEventListener('click', handleButtons);

