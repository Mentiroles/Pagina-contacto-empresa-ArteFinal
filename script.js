import handleButtons from "./utils/menu.js";

const contacto = document.getElementById('Contacto');
const servicios = document.getElementById('Servicios');
const nosotros = document.getElementById('Nosotros');

contacto.addEventListener('click', handleButtons);
servicios.addEventListener('click', handleButtons);
nosotros.addEventListener('click', handleButtons);