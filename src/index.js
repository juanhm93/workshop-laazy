import { registerImage } from "./lazy";
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/



console.log('Happy hacking :)')

// crear 1 imagen



const minimun = 1;
const maximun = 122;
const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun 

const createImageNode = () => {
  const container = document.createElement('div');
  container.className = "p-4"
  const imagen = document.createElement('img');
  imagen.className = "mx-auto bg-purple-600";
  imagen.style.minHeight = '150px'
  imagen.width = '320';
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; //TODO

  container.appendChild(imagen);
  return container;
}

const nuevaImagen = createImageNode();
// agregar en contenedor #images
const mountNode = document.querySelector('#images');

const addButton = document.querySelector('#add');
// agregar imagenes
const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
  appendedImages++;
  printLog();
}
const cleanButton = document.querySelector('#remove');

const removeContent = () => mountNode.innerHTML = '';

cleanButton.addEventListener('click',removeContent)
// const accion = () => console.log('hey')
addButton.addEventListener("click", addImage)

// mountNode.appendChild(nuevaImagen)