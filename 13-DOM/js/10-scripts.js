const enlace = document.createElement('A');
//agregamdp texto
enlace.textContent = 'Nuevo Enlace';
//agregndo hrewf

enlace.href = '/nuevo-enlace';
console.log(enlace);

enlace.target = "_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
enlace.onclick = miFuncion;

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    alert('diste click');
}

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//crear card
const card = document.createElement('div');
card.classList.add('card');

//asignar la img
card.appendChild(imagen);

card.appendChild(info);

//insertar en el html

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);