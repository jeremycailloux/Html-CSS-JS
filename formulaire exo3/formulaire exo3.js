let name = document.querySelector('#name');
let firstname = document.querySelector('#firstname');
let phonenumber = document.querySelector('#phonenumber');
let sex1 = document.querySelector('#sex1');
let sex2 = document.querySelector('#sex2');
let birthdate = document.querySelector('#birthdate');
let email = document.querySelector('#email');
let confirmemail = document.querySelector('#confirmemail');
let confirmpassword = document.querySelector('#confirmpassword');
let form = document.querySelector('#form');

name.addEventListener('focus', (e) => {
    name.value = '';
})
name.addEventListener('blur', (e) => {
    checknull(name);
})

firstname.addEventListener('focus', (e) => {
    firstname.value = '';
})
firstname.addEventListener('blur', (e) => {
    checknull(firstname);
})

phonenumber.addEventListener('focus', (e) => {
    phonenumber.value = '';
})
phonenumber.addEventListener('blur', (e) => {
    checknull(phonenumber);
})

email.addEventListener('blur', (e) => {
    checknull(email);
    compare(email);
})
email.addEventListener('focus', (e) => {
    email.value = '';
})

confirmemail.addEventListener('blur', (e) => {
    checknull(confirmemail);
    compare(email, confirmemail);
})
confirmemail.addEventListener('focus', (e) => {
    confirmemail.value = '';
})

password.addEventListener('blur', (e) => {
    checknull(password);
    compare(password);
})
password.addEventListener('focus', (e) => {
    password.value = '';
})

confirmpassword.addEventListener('blur', (e) => {
    checknull(confirmpassword);
    compare(password, confirmpassword);
})
confirmpassword.addEventListener('focus', (e) => {
    confirmpassword.value = '';
})

birthdate.addEventListener('blur', (e) => {
    checknulldate(birthdate);
})

function checknull(totest) {
    if (totest.value == null || totest.value == undefined || totest.value.length == 0) {
        totest.className = 'nullinput';
    }
    else {
        totest.disabled = true;
    }
}

function compare(arg1, arg2) {
    if (arg1.value == arg2.value) {
        arg1.disabled = true;
        arg2.disabled = true;
        arg2.className = '';
    }
    else {
        arg2.className = 'invalid';
        alert('Veuillez confirmer')
    }
}

function checknulldate(totest) {
    if (totest.value) {
        totest.className = '';
    }
    else {
        totest.className = 'nullinput';
    }
}

function verifychecked() {
    return sex1.checked || sex2.checked;
}



form.addEventListener('submit', (e) => {
   
    if (verifychecked() && checknulldate(birthdate) && compare(password, confirmpassword) && compare(email, confirmemail) && checknull(name) && checknull(firstname) && checknull(phonenumber) && checknull(password) && checknull(confirmpassword)) {
        alert('Votre formulaire a bien été envoyé')
    } else {
        alert('Veuillez renseigner tous les champs');
        e.preventDefault();
    }
})

form.addEventListener('reset', () => {
    alert('Votre formulaire a bien été réinitialisé')
})


