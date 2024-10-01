import handleButtons from "./utils/menu.js";

const carrusel = document.querySelector('.carrusel');
const contacto = document.getElementById('Contacto');
const servicios = document.getElementById('Servicios');
const nosotros = document.getElementById('Nosotros');




const botonDerecha = document.querySelector('.boton-derecha');
const botonIzquierda = document.querySelector('.boton-izquierda');
const imagen1 = document.querySelector('.imagen-1');
const imagen2 = document.querySelector('.imagen-2');
const imagen3 = document.querySelector('.imagen-3');

const arrayDeImagenes = ["https://media.istockphoto.com/id/1436029539/es/foto/feliz-pintor-de-casas-trabajando-en-el-proceso-de-renovaci%C3%B3n-del-hogar.jpg?s=612x612&w=0&k=20&c=BfhBb_YmdJRrN5gph274UtVTHloEXD4nKqqh3kMFSQs=","https://www.shutterstock.com/image-photo/painter-very-delicate-hands-mixing-260nw-2355626471.jpg","https://www.shutterstock.com/image-photo/painter-very-delicate-hands-mixing-260nw-2355626471.jpg" ,"https://media.istockphoto.com/id/472419742/es/vector/pintor.jpg?s=612x612&w=0&k=20&c=eTXy_LHgt0umNk1Du-XPkvwkAT_aSH8OVD-bN5jS2jM=" ,"https://thumbs.dreamstime.com/z/pareja-de-pintores-afroamericanos-sonriendo-pintura-feliz-en-estudio-arte-224038115.jpg" ];
const moverIzquierda = () => {
    const indiceActual = arrayDeImagenes.indexOf(imagen1.src);
    const indiceAnterior = (indiceActual - 1 + arrayDeImagenes.length) % arrayDeImagenes.length;
    imagen1.src = arrayDeImagenes[indiceAnterior];
    imagen2.src = arrayDeImagenes[(indiceAnterior + 1) % arrayDeImagenes.length];
    imagen3.src = arrayDeImagenes[(indiceAnterior + 2) % arrayDeImagenes.length];
  };

const moverDerecha = () => {
    const indiceActual = arrayDeImagenes.indexOf(imagen1.src);
    const indiceSiguiente = (indiceActual + 1) % arrayDeImagenes.length;
    imagen1.src = arrayDeImagenes[indiceSiguiente];
    imagen2.src = arrayDeImagenes[(indiceSiguiente + 1) % arrayDeImagenes.length];
    imagen3.src = arrayDeImagenes[(indiceSiguiente + 2) % arrayDeImagenes.length];
  };

botonDerecha.addEventListener('click', moverDerecha);
botonIzquierda.addEventListener('click', moverIzquierda);


botonDerecha.addEventListener('click', () => {
    console.log("botón derecho clicado");
    moverDerecha();
  });
  
  botonIzquierda.addEventListener('click', () => {
    console.log("botón izquierdo clicado");
    moverIzquierda();
  });

contacto.addEventListener('click', handleButtons);
servicios.addEventListener('click', handleButtons);
nosotros.addEventListener('click', handleButtons);