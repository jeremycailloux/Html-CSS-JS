/*
//methode snas fonctions

alert('Hello! Veuillez saisir un numéro entre 0 et 10');
let result = Math.floor((Math.random() * 10) + 1);
console.log(result);
let number = prompt('Veuillez saisir un numéro');
while(number != result){
    if(number == result){
        alert('Bravo!');
    }
    if(number < result){
        alert('Vous avez saisi un méro trop petit!');
    }
    if(number > result){
        alert('Vous avez saisi un méro trop grand!');
    }
    number = prompt('Veuillez saisir un numéro');
}
*/

//methode avec fonctions, s'inspirer de la correction pour y intégrer mon code//

alert('Hello! Veuillez saisir un numéro entre 0 et 10');

function getRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

function generateMessage(number, result) {
    if (number < result) {
        alert('Vous avez saisi un méro trop petit!');
    }
    if (number > result) {
        alert('Vous avez saisi un méro trop grand!');
    }
}
function success() {
    alert('Bravo!');
}

function randomNumber() {
    let result = getRandomNumber();

    let number = prompt('Veuillez saisir un numéro entre 0 et 10');

    while (number != result) {
        generateMessage(number, result);
        number = prompt('Veuillez saisir un numéro entre 0 et 10');
    }
    success();
}

randomNumber();


