
let indiceActual = 0;

const arrayDeImagenes = [
    "https://img.freepik.com/vector-gratis/pintor-trabajador_24877-63506.jpg",
    "https://media.gettyimages.com/id/1044071986/es/vector/cuadro-de-pintura-un-artista-alegre.jpg?s=612x612&w=gi&k=20&c=ph20O4Q2fS-OY1_OxcCFo0nUabIIO-oj5J64xw_XJhU=",
    "https://previews.123rf.com/images/lankogal/lankogal1509/lankogal150900020/46477041-dos-j%C3%B3venes-pintores-de-casas-hermosas-en-ropa-de-trabajo-cepillo-de-celebraci%C3%B3n-y-el-rodillo.jpg",
    "https://www.shutterstock.com/image-photo/painter-very-delicate-hands-mixing-260nw-2355626471.jpg",
    "https://st2.depositphotos.com/1017986/5755/i/450/depositphotos_57557081-stock-photo-group-of-builders-with-tools.jpg"
  ];
  
  const imagen1 = document.querySelector('.imagen-1');
  const imagen2 = document.querySelector('.imagen-2');
  const imagen3 = document.querySelector('.imagen-3');
  
  
  
 export const init = () => {
    imagen1.src = arrayDeImagenes[indiceActual];
    imagen2.src = arrayDeImagenes[(indiceActual + 1) % arrayDeImagenes.length];
    imagen3.src = arrayDeImagenes[(indiceActual + 2) % arrayDeImagenes.length];
  };
  
export const moverIzquierda = () => {
  indiceActual = (indiceActual - 1 + arrayDeImagenes.length) % arrayDeImagenes.length;
  imagen1.src = arrayDeImagenes[indiceActual];
  imagen2.src = arrayDeImagenes[(indiceActual + 1) % arrayDeImagenes.length];
  imagen3.src = arrayDeImagenes[(indiceActual + 2) % arrayDeImagenes.length];
};

export const moverDerecha = () => {
  indiceActual = (indiceActual + 1) % arrayDeImagenes.length;
  imagen1.src = arrayDeImagenes[indiceActual];
  imagen2.src = arrayDeImagenes[(indiceActual + 1) % arrayDeImagenes.length];
  imagen3.src = arrayDeImagenes[(indiceActual + 2) % arrayDeImagenes.length];
};

