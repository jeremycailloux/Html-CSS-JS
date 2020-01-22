//Créer du html avec js
//Ajout d'un élément à la liste
//Ajout de la balise div
const parent = document.createElement('div');
parent.setAttribute('id' ,'parent');
const body = document.querySelector('body');
body.appendChild(parent);
console.log(parent);