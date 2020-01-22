let selectedElement;

function MenuElement(name, content) {
    this.name = name;
    this.content = content;
}

const menuItems = [
    new MenuElement('Item 1', 'contenu 1'),
    new MenuElement('Item 2', 'contenu 2'),
    new MenuElement('Item 3', 'contenu 3')
];


// ajouter tous les items de menuItems au menu 'nav-items' en tant que <li>

/* 
  lors du click sur un item:
    - on applique la classe 'active' à l'élément sélectionné
    - on retire la classe 'active' du précédent élément sélectionné
    - on remplace le contenu du nav-content avec le contenu de l'élément sélectionné
*/

const menu = document.querySelector('.nav-items');
function createMenuElement(item) {
    const newElement = document.createElement('li')
    const text = document.createTextNode(item.name);
    newElement.appendChild(text);
    return newElement;
}

function createContentElement(item) {
    const newContent = document.createElement('p')
    const contentText = document.createTextNode(item.content);
    newContent.appendChild(contentText);
    return newContent;
}

function replaceContent(item) {
    const content = document.querySelector('.nav-content')

    if (content.firstElementChild) {
        content.replaceChild(item, content.firstElementChild);
    }
    else {
        content.appendChild(item);
    }
}

function toggleClassName(element){
    const activeElements = document.querySelector('li.active');

        if(activeElements){
            activeElements.className = '';
        }
        
    element.className = 'active';
}

menuItems.forEach(item => {

    const returnedContent = createMenuElement(item);
    menu.appendChild(returnedContent);

    returnedContent.addEventListener('click', () => {
        toggleClassName(returnedContent);

        const content = createContentElement(item);
        replaceContent(content);


    })
})
