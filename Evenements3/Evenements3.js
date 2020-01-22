const ListElements = document.querySelectorAll('li');
ListElements.forEach(item => {
    let test;
    item.addEventListener('mouseover', (e) => {
        console.log('test');
        test = item.textContent;

        let newText = 'Nouveau Texte';
        item.textContent = newText;
    })
    item.addEventListener('mouseout', (e) => {
        console.log('test');
        item.textContent = test;
    })
})