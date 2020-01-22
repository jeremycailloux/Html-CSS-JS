//Methode avec constructeur
function Plat(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.ajouterPlat = function () { console.log('Nom du plat: ' + this.name, this.price, this.type); }
};

let plat1 = new Plat('Plat 1', '15£', 'Entrée');
let plat2 = new Plat('Plat 2', '10£', 'Plat');
let plat3 = new Plat('Plat 3', '5£', 'Dessert');

plat1.ajouterPlat();
plat2.ajouterPlat();
plat3.ajouterPlat();

//Methode avec 

//Methode avec 

/*
//correction Amine
function Plat(name,price,type) {
    this.name= name;
    this.price=price;
    this.type=type

    this.AjouetPlat = function (){ return('Nom du plat:' +this.name+', prix:' +this.price +'€, type de plat:'+this.type)}
   
  };
  let plat1 = new Plat('n1',11,'t1');
  let plat2 = new Plat('n2',12,'t2');
  let plat3 = new Plat('n3',13,'t3');

  console.log(plat1.AjouetPlat())
  console.log(plat2.AjouetPlat())
  console.log(plat3.AjouetPlat())

  let plat4 = new Object();
// 2 eme methode
plat4.name = 'n4';
plat4.price = 14;
plat4.type = 't4';

plat4.AjouetPlat2 = function() { return ('Nom du plat:' +this.name+', prix:' +this.price +'€, type de plat:'+this.type)}

console.log(plat4.AjouetPlat2())  

// 3eme methode 
let plat5 = {
    name : 'n5',
    price : 15,
    type : 't5',
    AjouetPlat3 : function (){ return('Nom du plat:' +this.name+', prix:' +this.price +'€, type de plat:'+this.type)}
  };
  console.log(plat5.AjouetPlat3());
  */
