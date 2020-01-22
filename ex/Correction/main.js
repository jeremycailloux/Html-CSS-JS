function MenuElement(name, content) {
    this.name = name;
    this.content = content;
}

const menuItems = [
    new MenuElement('Item 1', 'contenu 1'),
    new MenuElement('Item 2', 'contenu 2'),
    new MenuElement('Item 3', 'contenu 3')
];

const menu = document.querySelector('.nav-items');

menuItems.forEach(item => {
    const newElement = createMenuElement(item);
    menu.appendChild(newElement);

    newElement.addEventListener('click', () => {
        toggleClassName(newElement);
        
        const content = createContentElement(item);
        replaceContent(content);
    })
})

function createMenuElement(item) {
    const newElement = document.createElement('li');
    const text = document.createTextNode(item.name);
    newElement.appendChild(text);

    return newElement;
}

function toggleClassName(newElement) {
    const current = document.querySelector('li.active');
    if(current) {
        current.className = ''
    }

    newElement.className = 'active';
}

function createContentElement(item) {
    const content = document.createElement('p');
    const text = document.createTextNode(item.content)
    content.appendChild(text);

    return content;
}

function replaceContent(content){
    const menucontent = document.querySelector('.nav-content p');

    if (menucontent) {
        menucontent.parentNode.replaceChild(content, menucontent);
    } else {
        document.querySelector('.nav-content').appendChild(content);
    }
}