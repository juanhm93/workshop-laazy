import h from 'hyperscript';
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
  // const container = document.createElement('div');
  // container.className = "p-4"
 
  // const image = document.createElement('img');
  // image.className = "mx-auto bg-purple-600";
  // image.style.minHeight = '150px'
  // image.width = '320';
  // image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; //TODO

  const image = h('img.mx-auto.bg-purple-600', {
    width: '320',
    'data-src':  `https://randomfox.ca/images/${random()}.jpg`, 
  })

  const container = h('div.p-4',image);
  // container.appendChild(image);
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