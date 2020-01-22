const email = document.querySelector('#email');
const confirmeremail = document.querySelector('#confirmeremail');

email.addEventListener('blur', (e) => {
    compare();
})

confirmeremail.addEventListener('blur', (e) => {
    compare();
})

email.addEventListener('focus', (e) =>{
    email.value='';
})
email.addEventListener('focus', (e) =>{
    confirmeremail.value='';
})
function compare() {
    if (email.value == confirmeremail.value) {
       email.disabled=true;
       confirmeremail.disabled=true;
       confirmeremail.className = '';
    }
    else {
           confirmeremail.className = 'invalid';
    }
}





// ajouter un évènement lors de la déselection
    // lire la valeur

// ajouter une évènement lors de la déselection du 2eme champs
    // lire la valeur
    // on compare les 2 valeurs
    //si les deux valeurs sont égales: 
    //si les deux valeurs sont différentes, alors réinitialiser le champs confirmer email