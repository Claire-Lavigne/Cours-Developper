# Object-oriented programming (OOP)
# JSON (JavaScript Object Notation)
- array with multiple values
- value <--> key

**Objects**
```javascript
let fruits = {                              // declare object
    rouge : "cerise",                         // declare property (keyName: anyValue)
    sucre : "raisin",
    acide : "kiwi",
    love  : true
};

let legumes = {
    bon : "patate",
    top : "artichaut"
};

fruits["rouge"];                            // Read value of rouge, syntax to use variables inside []
fruits.rouge;                               // Different syntax, prefered one
fruits.rouge = "fraise";                    // Modify a value

let fruitsRouges = fruits.rouge;
let food = [fruits, legumes];

console.log(food);                          // shows 2 objects
console.log(fruits.rouge)                   // shows the key of object
```

```js
var period = "month";
date[period];
```






Example :
```javascript

let userOne = {
    name: 'Will Alexander',
    age: 33,
    accountLevel: 'normal'
};

function describe(userOne) {
    var description = 'The user ${userOne.name} has ${userOne.age} years-old and a ${userOne.accountLevel} account';
    return description;
}
console.log(describe(userOne));
```


**With Objects**
```javascript
let firstUser = {
    name: 'Will Alexander',
    age: 33,
    accountLevel: 'normal'
};

let secondUser = {
    name: 'Sarah Kate',
    age: 21,
    accountLevel: 'premium'
};

let thirdUser = {
    name: 'Audrey Simon',
    age: 27,
    accountLevel: 'mega-premium',
    // Describe the user 
    // METHOD = property with a function value
    describe: function () {
        var description = 'The user ${this.name} has ${this.age} years-old and a ${this.accountLevel} account';
        return description;
    }
};

console.log(cake.describe());

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}
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
