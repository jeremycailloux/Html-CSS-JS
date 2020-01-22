const button = document.querySelector('button');

const parent = document.createElement('ul');
const body = document.querySelector('body');
body.appendChild(parent);
console.log(parent);

const newElementChild = document.createElement('li');
parent.appendChild(newElementChild);
const text = document.createTextNode('Element 1');
newElementChild.appendChild(text);

const newElementSecondChild = document.createElement('li');
parent.appendChild(newElementSecondChild);
const text2 = document.createTextNode('Element 2');
newElementSecondChild.appendChild(text2);

const newElementLastChild = document.createElement('li');
parent.appendChild(newElementLastChild);
const text3 = document.createTextNode('Element 3');
newElementLastChild.appendChild(text3);

button.addEventListener('click', (e) => {

    const style = parent.getAttribute('style');

    if (style) {
        parent.setAttribute('style', '')
    }
    else {
        parent.setAttribute('style', 'display: none')
    }
});
