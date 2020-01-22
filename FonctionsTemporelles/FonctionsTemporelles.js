let compteur = 10;
let time = setInterval(function () {
    compteur--;
    if (compteur == 0) {
        clearInterval(time);
        alert('Temps écoulé');
    }
    console.log(compteur);
    const timer = document.querySelector('#timer');
    timer.textContent=compteur;
}, 1000);

const restart = document.querySelector('#restart');
const stop = document.querySelector('#stop');


restart.addEventListener('click', (e) => {
    compteur = 10;
    clearInterval(time);
    time = setInterval(function () {
        compteur--;
        if (compteur == 0) {
            clearInterval(time);
            alert('Temps écoulé');
        }
        console.log(compteur);
        const timer = document.querySelector('#timer');
    timer.textContent=compteur;
    }, 1000);
});

stop.addEventListener('click', (e) => {
    compteur = 0;
    clearInterval(time);
})


