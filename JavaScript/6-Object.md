# JSON - OOP
- OOP: Object-oriented programming
- JSON: JavaScript Object Notation
- object: array with multiple keys <--> values
- méthode: property with a function as a value

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
  }  
  
  ditBonjour() {
    return 'Hey toi!';
  }
  
};

// "Claire a 150 pts de vie et 25 de force"
console.log(claire.decrire());
// "Claire dit : Hey toi!
console.log(`{claire.nom} dit : ${claire.ditBonjour()}`);
```


**New code (array or object) : for + in**
```javascript
for (let i in names) {
    console.log(names[i]);
}
```

**New code (object) : for + of**
```javascript
const names = [
    {
        identity: 'Will Alexander',
        ticketNumber: 209542
    },
    {
        identity: 'Sarah Kate',
        ticketNumber: 169336
    }
]

for (let name of names) {
    console.log(name.identity + '' + name.ticketNumber);
}
```

Il est possible d'interrompre une boucle avec l'instruction ``` break; ```.

Il est possible d'interrompre l'itération courante et de passer à la suivante avec l'instruction ``` continue; ```.












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












_______
```javascript
var Pastry = {
    type: "",
    flavor: "",
    levels: 0,
    price: "",
    occasion: "",

    // Describe the pastry
    describe: function () {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
        return description;
    }
};

var muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavor = "blueberry";
muffin.levels = 1;
muffin.price = "$2";
muffin.occasion = "breakfast";

var cake = Object.create(Pastry);
cake.type = "cake";
cake.flavor = "vanilla";
cake.levels = 3;
cake.price = "$10";
cake.occasion = "birthday";

console.log(muffin.describe());
console.log(cake.describe());
```

- Faster way :
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
