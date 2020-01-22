const elements = document.querySelectorAll('#contenu span');
//console.log(elements);
elements.forEach((item) => console.log(item));
const elements2 = document.querySelectorAll('div span');
//console.log(elements2);
elements2.forEach((item) => console.log(item));

const elements3 = document.querySelectorAll('li');
elements3.forEach((item) => console.log(item));

const elements4 = document.querySelectorAll('li a');
elements4.forEach((item) => console.log(item));

//Affecter un lien à la balise <a>
let link = document.querySelector('a');
link.setAttribute('id', 'link'); //pas demandé
link.setAttribute('href', 'https://nouveau_lien');

//Ajouter une classe à toutes les balises <span>
const spans = document.querySelectorAll('span');
spans.forEach((item) => item.className = 'classeAjoutée');

//Mettre en italique les items de la liste
const listItems = document.querySelectorAll('ul li');
listItems.forEach((item) => item.setAttribute('style', 'font-style: italic'));

//Remplacer le contenu du span dans la section introduction par un paragraphe d’introduction
const intro = document.querySelector('#contenu span');
intro.textContent = 'Introduction: qefhejfhsdjklvhl';


//Naviguer entre les noeuds
const parent = document.querySelector('#parent');
const child = parent.firstElementChild;

// child.firstChild => nœud textuel
console.log(child.firstChild.nodeValue);

// child.lastElementChild => nœud element <strong>
// child.lastElementChild.firstChild => nœud textuel
console.log(child.lastElementChild.firstChild.nodeValue);

//Exercice

//Depuis le parent
//Afficher la liste des éléments enfant

const allchild = parent.childNodes;

allchild.forEach((child) => {
    if (child.nodeType == 1) {
        console.log(child);
    }
})

//naviguer vers le dernier élément pour afficher son contenu
console.log(parent.lastElementChild);

//Naviguer vers le deuxième élément et remplacer le contenu du paragraphe
console.log(parent.firstElementChild.nextElementSibling.textContent = 'nouveau texte');

//Suite cours

//Ajouter un nouveau élément dans la div id parent (une nouvelle div avec un lien, un nouveau child)
//On créé les balises et on défini les attributs de l'élément
const newElement = document.createElement('a');
newElement.setAttribute('href', 'https://google.com');
//On créé un nouveau noeud et on insère le noeud
const text = document.createTextNode('un nouveau lien');
newElement.appendChild(text);
//On insère l'élément dans la dic id parent
const parent = document.querySelector('#parent');
parent.appendChild(newElement);





