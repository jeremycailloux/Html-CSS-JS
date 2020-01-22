
//Sans fonction//
/* 
// while (true) { //

alert('Hello');
let age = prompt('Veuillez saisir votre âge');

while (isNaN(age)) {
    console.log('L\'utilisateur n\'a pas saisi de valeur numérique');
    age = prompt('Veuillez saisir un nombre');
}
if (age < 18) {
    console.log('L\'utilisateur est trop jeune');
    alert('Vous êtes trop jeune');
}
if (age > 95) {
    console.log('L\'utilisateur est trop vieux');
    alert('Vous êtes trop vieux');
}

// } //
*/

//avec fonctions//
alert('Hello');
function getMessage(age) {
    if (age < 18) {
        console.log('L\'utilisateur est trop jeune');
        alert('Vous êtes trop jeune');
    }
    if (age > 95) {
        console.log('L\'utilisateur est trop vieux');
        alert('Vous êtes trop vieux');
    }
    return;
}

function askAge() {
    let age = prompt('Veuillez saisir votre âge');

    while (isNaN(age)) {
        console.log('L\'utilisateur n\'a pas saisi de valeur numérique');
        age = prompt('Veuillez saisir un nombre');
    }
    getMessage(age);
}

askAge();




/*
alert('Hello');
function saisirAge() {
    let age = prompt('Veuillez saisir votre âge');
    return age;
    console.log(age);
  }
  saisirAge();

while (isNaN(age)) {
    console.log('L\'utilisateur n\'a pas saisi de valeur numérique');
    age = prompt('Veuillez saisir un nombre');
}
if (age < 18) {
    console.log('L\'utilisateur est trop jeune');
    alert('Vous êtes trop jeune');
}
if (age > 95) {
    console.log('L\'utilisateur est trop vieux');
    alert('Vous êtes trop vieux');
}
*/