
function createElement(type, text){
    const el = document.createElement(type);

    if(text){
        const textEl = document.createTextNode(text);
        el.appendChild(textEl);
    }
   
    return el;
}

function addParagraphe( text ){
    const newP = document.querySelector('#parent').appendChild(createElement('p', text));
    return newP;
}

const body = document.querySelector('body');

const div = createElement('div');
div.setAttribute('id', 'parent');

body.appendChild(div);

const p = addParagraphe('Some text in parent ');
const strong = createElement('strong', 'some inner child');
p.appendChild(strong);

addParagraphe('Some other child');
const lastP = addParagraphe('Last child ');

const link = createElement('a', 'lien vers google');
link.setAttribute('id', 'link');
link.setAttribute('title', 'google');
link.setAttribute('href','https://google.com');

lastP.appendChild(link);



const items = ['France', 'Allemagne', 'Espagne'];
addParagraphe('p', 'Générer une liste');

const list = createElement('ul');
items.forEach( item => {
    const itemEl = createElement('li', item);
    list.appendChild(itemEl);
})

document.querySelector('#parent').appendChild(list);