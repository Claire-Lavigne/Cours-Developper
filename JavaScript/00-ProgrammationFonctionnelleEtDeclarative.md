# Vocabulaire
- Callback = définition de fonction (fonction en sommeil)


## This
- When `this` is called inside a method :
 - **`this` = that object**
 - **`this` = invisible argument for every method**
```javascript
var object = {
    property: 1000,
    method: function () {
        return (this.property++).toString(16);
    }
};
console.log(object.method());
```

- Function called with `new` :
 - **`this` = new empty object**
```javascript
function object() {
    this.property1 = 1000;
    this.property2 = object.property2;
}
object.property2 = function() {
    return (this.property1++).toString(16);
};
var userId = new object();
```
- Method (property) of an object defined on prototype called :
 - **`this` = that object**
```javascript
function object() {
    this.property1 = 1000;
}
object.prototype.property2 = function() {
    return (this.property1++).toString(16);
};
var userId = new object();
```

# Programmation Fonctionnelle
## Méthodes (functions written with `.`)
### .forEach()
**Boucle Sur chaque élément du tableau**
```javascript
let fruits = ['pomme', 'poire', 'cerise', 'abricot'];

fruits.forEach(function(fruit, index) {
  console.log(fruit, index);
  // fruit = strings de mon tableau
  // index = nombre d'élements dans mon tableau
  console.log(`J'aime : ${fruit} - `);
  // J'aime : pomme - J'aime : poire - J'aime : cerise - J'aime : abricot
});
```
Idem : Fonction nommée / Fonction anonyme affectée à une variable
```javascript
function aimeFruits(fruit) {
var aimeFruits = function(fruit) {
  console.log(`J'aime : ${fruit}`);
}
fruits.forEach(aimeFruits);
```

### .map()
### .filter()
### .reduce()
**Additionne les éléments de l'index pour les réduire à un seul**
### .slipt()
### .push()
### .find()
## Prototype
## Closures
**function returned inside function**
=> fonction interne (accès aux variables de la fonction externe) même si fonction externe exécutée
```javascript
function createSum(number1) {
 return function(number2) {
  return number1 + number2;
 };
}

// ES6
var createSum = number1 => number2 => number1 + number2;

createSum(2);
// je configure un argument
var addTwo = createSum(2);
addTwo(20);
// je configure l'autre argument

createSum(10)(20);
// 30 : (number1)(number2)
createSum(createSum(10)(20))(20)
// 50
```

# Modules
- **Module = object**
- **Method (of object) / clé = function**
- **Property (of object) = variable**

```javascript
var object = {
    property: 1000,
    method: function () {}
};
```
Application JS
```javascript
var app = {
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

## Transposer des données : map
= Définir un tableau qui récupère les infos (nombre de valeurs) d'un autre tableau
```javascript
var phrases = [];
fruits.forEach(function(fruit) {
  phrases.push(`J'aime : ${fruit}`);
});
```

Pareil en + simple == Méthode MAP
```javascript
var phrases = fruits.map(function(fruit) {
  return `J'aime : ${fruit}`;
});
```

Pareil en + simple == Méthode MAP
```javascript
var datas = [
 {
  firstname: 'Claire',
  lastname: 'Lavigne',
  gender: 'Femme',
  age: 26,
 },
 {
  firstname: 'Helio',
  lastname: 'Cruz',
  gender: 'Homme',
  age: 30
 }
];

var characters = datas.map(function(character) { 
  return {
   name: `${character.firstname} ${character.lastname}`,
   young: character.age < 50,
  };
 });

// simplification : voir ternaire et fonction fléchée
var characters = datas.map((character) => ({ 
  name: `${character.firstname} ${character.lastname}`,
  young: character.age < 50,
 })
);
// pareil en enlevant les parenthèses sur mon paramètre
var characters = datas.map(character => ({ 
  name: `${character.firstname} ${character.lastname}`,
  young: character.age < 50,
 })
);
```

## Fonctions fléchées
```javascript
function hello() {
 return 'Salut';
}

var hello = function() {
 return 'Salut';
}

// ES6+
var hello = () => {
 return 'Salut';
}

// Si je n'ai qu'un return je peux simplifier encore + en enlevant "return" et les accolades
var hello = () => 'Salut';

// je peux aussi mettre la valeurr de retour entre parenthèses
var addition = (a, b) => (a + b);
// les parenthèses sont nécessaires pour retourner un objet
var message = (message) => ({ newMessage: message.toUpperCase() });

// si j'ai qu'un paramètre, je peux enlever les parenthèses de ce paramètre 
var message = message => ({ newMessage: message.toUpperCase() });
```

## Transformer une sélection qui ressemble à un tableau (mais n'en est pas un) en un tableau effectif
```javascript
var divs = document.querySelectorAll('div');
// renvoie toutes mes div sous forme de HTMLCollection (getElementsByTag) ou NodeList (querySelector)
// = je peux utiliser "for" mais pas "forEach"
// conversion en array (renvoi un prototype) = je peux utiliser "forEach"
var divsArray = Array.from(divs);
divsArray.forEach((div, index) => {
 setTimeout(() => {
  box.style.display = 'block';
 }, 1000 * index);
});
// résultat : j'affiche mes div (display:none à l'origine) à intervale d'1 seconde
```

## filtrer = filtrer des données
```javascript
var users = [
 {
  firstname: 'Claire',
  lastname: 'Lavigne',
  gender: 'Femme',
  age: 26,
 },
 {
  firstname: 'Helio',
  lastname: 'Cruz',
  gender: 'Homme',
  age: 30
 }
];

var admittedUsers = users.filter(function(user) {
 // avoir au moins 18 ans et être un homme, ou une femme qui a moins de 30 ans
 var isValid = user.age >= 18 && user.gender = 'Homme' || user.gender = 'Femme' && user.age >= 18 && user.age <= 30;
 return true;  // true = je garde ; false = je supprime
 // + simple
 return user.age >= 18 && user.gender = 'Homme' || user.gender = 'Femme' && user.age >= 18 && user.age <= 30;
});

//ES6
var admittedUsers = users.filter((data) => user.age >= 18 && user.gender = 'Homme' || user.gender = 'Femme' && user.age >= 18 && user.age <= 30;);
```
## reduce = réduire tous les éléments à 1 seule valeur
```javascript
[1, 2, 3].reduce(callback, initialValue);
// la valeur initiale doit être du meme type que les éléments du tableau

[1, 2, 3].reduce(function(cumul, itemCourant) {
 return cumul + itemCourant;
 // à chaque boucle, additionner valeur cumulée avec l'item courant de l'index
}, 0);
// 6

[1, 2, 3].reduce(function(cumul, itemCourant) {
 return cumul + itemCourant;
}, 10);
// 16 

["b", "c", "d"].reduce(function(cumul, itemCourant) {
 return cumul + itemCourant;
}, "a");
// "abcd"

var users = [
 {
  firstname: 'Claire',
  lastname: 'Lavigne',
  gender: 'Femme',
  age: 26,
 },
 {
  firstname: 'Helio',
  lastname: 'Cruz',
  gender: 'Homme',
  age: 30
 }
];

var totalAge = users.reduce(function(cumul, user) {
 return cumul + user.age;
}, 0);
// 0 + 26 + 30 = 56

//ES6
var totalAge = users.reduce((cumul, user) => cumul + user.age, 0);
```

## Méthode personnalisée
```javascript
var demo = [1,2,3]
Array.prototype.hello = function() {
 console.log('je suis un tableau : ' + this.length);
};
["a","b","c", "d"].hello()
// je suis un tableau : 4
demo.hello()
// je suis un tableau : 3

// tous les tableaux, créés avant ou après ma méthode personnalisée, obtiennent ma nouvelle méthode
```
ENRICHIR ARRAY AVEC DES METHODES EXISTANTES (reduce, reduce, map) 
```javascript
Array.prototype.sum = function() {
 // this = tableau sur lequel j'appelle la méthode
 return this.reduce(function(cumul, item) {
  return cumul + item;
 }, 0);
};

[10,20,30].sum()
// 60

Array.prototype.product = function() {
 // this = tableau sur lequel j'appelle la méthode
 return this.reduce(function(cumul, item) {
  return cumul * item;
 }, 1);
};

[10,20,30].product()
// 6000

Array.prototype.divide = function(divisor) {
 // this = tableau sur lequel j'appelle la méthode
 return this.map(function(item) {
  return item / divisor;
 }, 1);
};

[10,20,30].divide(2)
// [5,10,15]

// VERSION FLECHEE SUR LA FONCTION CLASSIQUE (= SANS "THIS") UNIQUEMENT
Array.prototype.divide = function(divisor) {
 return this.map((item) => item / divisor, 1);
};
```
```javascript
function createRobot(words) {
 var index = 0;

 return {
  say: function() {
   var word = words[index];
   index += 1;
   // je reviens à 0 si je dépasse le nombre de mots
   if (index >= words.length) {
    index = 0;
   }
   return word;
  },
  add: function(word) {
   words.push(word);
  },
  delete: function(word) {
   words = words.filter(function(currentWord){
    return currentWord !== word;
   });
  },
 };
}
```
## Paramètres du reste = Nombre infini de paramètres
```javascript
function average(...grades) {
 console.log(grades);
}
average(1,2,3,4)
// [1,2,3,4]

function average(param1, ...grades) {
 console.log(param1);
 console.log(grades);
}
average(1,2,3,4)
// 1
// [2,3,4]


// CALCULER UNE MOYENNE
Array.prototype.sum = function() {
 return this.reduce(function(cumul, item) {
  return cumul + item;
 }, 0);
};

function average(...grades) {
 // total des notes
 var total = grades.sum();
 // nbe de notes
 var nbGrades = grades.length;
 // calcule moyenne
 return total / nbGrades;
}
average(3,4,5,6,7,8,9)
// 6

// ES6
var average = (...grades) => grades.sum() / grades.length;
```

# app.js
- [ToDoList](https://codepen.io/claire-lavigne/pen/MWajjmQ)

# Programmation Déclarative
- Utiliser JSON plutôt que le dom
- [ToDoList](https://codepen.io/claire-lavigne/pen/zYvKBYo)
