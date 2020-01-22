//Créer du html avec js
//Ajout d'un élément à la liste
//Ajout de la balise div
const parent = document.createElement('div');
parent.setAttribute('id' ,'parent');
const body = document.querySelector('body');

body.appendChild(parent);
console.log(parent);

//Ajout d'élémnts enfants
//first child, une balise p
const newElementChild = document.createElement('p');
parent.appendChild(newElementChild);
const text = document.createTextNode('Some text in parent');
newElementChild.appendChild(text);
const newElementInFirstChild = document.createElement('strong')
newElementChild.appendChild(newElementInFirstChild);
const textInFirstChild = document.createTextNode(' Some inner child');
newElementInFirstChild.appendChild(textInFirstChild);
console.log(newElementChild);

const newElementSecondChild = document.createElement('p');
parent.appendChild(newElementSecondChild);
const text2 = document.createTextNode('Some Other child');
newElementSecondChild.appendChild(text2);
console.log(newElementSecondChild);

const newElementLastChild = document.createElement('p');
parent.appendChild(newElementLastChild);
const text3 = document.createTextNode('Last child');
newElementLastChild.appendChild(text3);
console.log(newElementLastChild);

