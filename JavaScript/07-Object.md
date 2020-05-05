# JSON (JavaScript Object Notation) - OOP (Object-oriented programming)

## Modules ou Objets d'un programme
- Un "module" ou "objet" = une thématique (ex : gérer un compte utilisateur, afficher des notifications à l'écran, calculer le score d'un jeu...)
- un "module" possède des clés <-> valeurs
  - quand les valeurs sont des fonctions, les clés sont des "méthodes" de l'objet
  - quand les valeurs sont des variables, les clés sont des "propriétés" de l'objet

## Exemple de module
``` js
var module = {
  propriete: 'valeur',
  methode: function() {}
};
```

## Autres exemple
```js
var monObjet = {
    // property = variable
    nom: 'claire',
    age: 30,
    // method = function
    direUnMot: function(){
        alert('bonjour');
    }
}

monObjet.nom;
monObjet.age;
monObjet.direUnMot();
```


**Object with function outside**
```js
// création du personnage de jeu 'Claire'
const claire = {
    nom: 'Claire',
    sante: 150,
    force: 25
};

// description du perso
function decrire(personnage) {
    return `${personnage.nom} a ${personnage.sante} pts de vie et ${personnage.force} de force`;
}

claire.nom;              // read value
claire.force += 5;       // modify value
claire.argent = 50;      // add a property

// "Claire a 150 pts de vie et 30 de force"
console.log(decrire(claire));
```

**Object with method (function) inside**
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

// Si script chargé dans body, on lance l'application :
app.init();

// Si script chargé dans le head, on lance l'application :
document.addEventListener('DOMContentLoaded', app.init);
```

# app.js
- [ToDoList](https://codepen.io/claire-lavigne/pen/MWajjmQ)

# Programmation Déclarative ou POO
- Utiliser JSON plutôt que le dom
- [ToDoList](https://codepen.io/claire-lavigne/pen/zYvKBYo)
