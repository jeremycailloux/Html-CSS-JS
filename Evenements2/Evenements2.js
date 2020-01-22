const ListElements = document.querySelectorAll('li');
ListElements.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('test');
        let textPrompt = prompt('Veuillez saisir du texte');
        item.textContent = textPrompt;
    })
})





