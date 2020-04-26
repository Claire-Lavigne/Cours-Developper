# JSON - OOP
- OOP: Object-oriented programming
- JSON: JavaScript Object Notation
- object: array with multiple keys(properties) <--> values
- méthode: property with a function as a value
- propriété = clé

```js
var monObjet = {
    nom: 'claire',
    age: 30,
    direUnMot: function(){
        alert('bonjour');
    }
}

monObjet.nom;
monObjet.age;
monObjet.direUnMot();
```


**Object with properties (keyName : anyValue) and function outside**
```js
// création du personnage de jeu 'Claire'
const claire = {
    nom: 'Claire',
    sante: 150,
    force: 25
};

// description du personnage avec fonction
function decrire(personnage) {
    return `${personnage.nom} a ${personnage.sante} pts de vie et ${personnage.force} de force`;
}

claire.nom;              // read value
claire.force += 5;       // modify value
claire.argent = 50;      // add a property

// "Claire a 150 pts de vie et 30 de force"
console.log(decrire(claire));
```

**Object with properties (keyName : anyValue) and method inside**
```js
// création du personnage de jeu 'Claire'
const claire = {
    nom: 'Claire',
    sante: 150,
    force: 25,

    // description du personnage avec méthode (autre syntaxe)
    describe: function () {
        return `${this.nom} a ${this.sante} pts de vie et ${this.force} de force`;
    },

    direBonjour() {
        return 'Hey toi!';
    },

    soustraire(maladie) {
        this.sante -= maladie;
    }
};

// "Claire a 150 pts de vie et 25 de force"
console.log(claire.decrire());
// "Claire dit : Hey toi!
console.log(`{claire.nom} dit : ${claire.direBonjour()}`);
// sante : 100
claire.soustraire(claire.sante-50);

// create object
var son = Object.create(claire);
son.nom = "Abraham";
son.sante = 50;
son.force = 5;
```

**Object with methods inside and init**
```javascript
var Pastry = {
    // initialize the pastry
    init: function (type, flavor, levels, price, occasion) {
        this.type = type;
        this.flavor = flavor;
        this.levels = levels;
        this.price = price;
        this.occasion = occasion;
    },

    // Describe the pastry
    describe: function () {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
        return description;
    },
    
    bake: function() {
        var baked = "The " + this.flavor + this.type + " was placed in the oven. It's done!"
    return baked
    }
};

var muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "$2", "breakfast");

var cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "$10", "birthday");

console.log(muffin.bake());
console.log(cake.bake());
console.log(muffin.describe());
console.log(cake.describe());
```


- méthode: property with a function as a value

**CLASS** = Multiple objects

```javascript
class MaClasse {
  constructor(param1, param2 /* ... */) {
    this.propriete1 = param1;
    this.propriete2 = param2;
    // ...
  }
  methode1(/* ... */) {
    // ...
  }
  methode2(/* ... */) {
    // ...
  }
  // ...
}

const monObjet = new MaClasse(arg1, arg2, ...);

// Crée un objet ayant monObjetPrototype pour prototype
const monObjet = Object.create(monObjetPrototype);
```


# Modules d'un programme

- Un module = une thématique (ex : gérer un compte utilisateur, afficher des notifications à l'écran, calculer le score d'un jeu...) = un objet (clés <-> valeurs)
  - quand les valeurs sont des fonctions, ce sont des "méthodes" de l'objet
  - quand les valeurs sont des variables, ce sont des "propriétés" de l'objet

## Exemple de module
``` js
var module = {
  propriete: 'valeur',
  methode: function() {}
};
```
## Module souvent rencontré
```js
// Exemple d'application :
var app = {
  // init = entrée dans le module
  init: function() {
    console.info('Initialisation');
    app.name = 'Big Brother';
    app.ecouterEvenements();
  },
  
  ecouterEvenements: function() {
    window.addEventListener('click', app.reagir);
  },
  
  reagir: function() {
    console.log(app.name + ' > ' + 'un clic est survenu');
  }
};

// On lance l'application :
app.init(); 
// dans l'objet app, on exécute la fonction (méthode) stockée dans la clé init

// init est souvent associée à l'écouteur d'évènement sur le chargement du DOM
// Une fois le DOM chargé, la méthode init de l'objet app est exécutée :
document.addEventListener('DOMContentLoaded', app.init);
// pas nécessaire si on charge le <script> en bas du <body>
```
