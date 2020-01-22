//Créer un tableau qui contient Entrée, Plat, Dessert
let table = ['Entrée', 'Plat', 'Dessert'];
//Ajouter Boisson à la fin du tableau
table.push('Boisson');
//Ajouter Apéro au début du tableau
table.unshift('Apéro');
//Ajouter 
table.sort();
//Afficher toutes les entrées du tableau dans la console
for (let index in table) {
    console.log(table[index]);
}
//Créer une fonction qui retourne l’index du type de plat recherché dans le tableau
function getIndexOfPlat(platresearch) {
    for (let i = 0; i < table.length; i++) {
        let item = table[i];
        if (platresearch == item) {
            return console.log(i);
        }
    }
}
getIndexOfPlat('Entrée');