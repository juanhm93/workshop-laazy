let imageAdded = 0;
let imageLoaded = 0;

const isIntersecting = (entry) => {
  return entry.isIntersecting // true dentro de la pantalla
}
const loadImage = (entry) => {
  const container = entry.target; // el nodo es el div
  const image = container.firstChild;
  const url = image.dataset.src;
  // load image
  image.src = url;
  // debugger
  // console.log('holis');
  // console.log(nodo.nodeName);
  // imagen.src = `https://randomfox.ca/images/${random()}.jpg`;
  // des registra la imagen (unlisten) deja de escuchar la imagen en esta accion
  loadedImages++;
  printLog();
  observer.unobserve(container)
}
// dentro ejecuta una funcion que en este caso es anonima y arrow 
const observer = new IntersectionObserver((entries) => {
  entries
  .filter(isIntersecting)
  .forEach(loadImage)
})

// crear funcion

export const registerImage = (image) => {
  //  intersectionObservador -> observer(image)
  observer.observe(image)
}
