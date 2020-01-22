function getMessage(age){
    if (age <= 18) {
        return 'Vous êtes jeune';
    } else if (age > 18 && age <= 60) {
        return 'Vous êtes adulte';
    } else if (age > 60) {
        return 'Vous êtes senior';
    }
}
function askAge(){
    let age = prompt('Age ?');

    while (isNaN(age) || age <= 0) {
        age = prompt('Age ?');
    }

    alert(getMessage(age));
}

askAge()

/*
function getRandomNumber(){
    return Math.round( Math.random()* 10)
}

function generateMessage(guess, value){
    if(value < guess){
        alert('trop grand');
    } else if( value > guess){
        alert('trop petit');
    }
}

function success(){
    alert('bravo!');
}

function magicNumber(){
    let rand = getRandomNumber();

    let guess = prompt('entrer un nombre');
    
    while( guess != rand){
        generateMessage(guess, rand);
        guess = prompt('entrer un nombre');
    }
    success();
}

magicNumber();
*/


