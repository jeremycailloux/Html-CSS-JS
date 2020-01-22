const parent = document.querySelector('#parent');
const childs = parent.childNodes;
childs.forEach(child => {
    if(child.nodeType === 1){
        console.log(child);
    }
});

const lastP = parent.lastElementChild;
console.log(lastP.firstChild.nodeValue)

const first = parent.firstElementChild;
const second = first.nextElementSibling;
console.log( second.firstChild.nodeValue );
second.textContent = 'some other text';

//const lastElement = parent.lastElementChild;
const lastElement = document.querySelector('div p:last-child');

console.log(lastElement.parentNode);

const firstP = lastElement.previousElementSibling.previousElementSibling;
console.log(firstP.firstElementChild.firstChild.nodeValue);