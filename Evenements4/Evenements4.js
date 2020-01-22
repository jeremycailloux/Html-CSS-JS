const input = document.querySelector('input');
input.addEventListener('focus', (e) => {
    console.log("Le champs a été sélectionné");
    console.log(e.target.value);
    
});
input.addEventListener('blur', (e) => {
    console.log("Le champs n'est plus sélectionné");
    console.log(e.target.value);
    alert(e.target.value);
});