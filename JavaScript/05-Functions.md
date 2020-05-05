# Functions

**What are functions ?**
- A block with instructions
- 1 function = 1 task/role/objective (how, what, when, how many times...)

**When use functions ?**
- For repetitive tasks
- To divide a program into little tasks

**Specificities**
- To name a function : use a verb
- What's inside a function, only exists in it
- Function can have settings (datas to make it work)
- A function stops running immediately after ```return```
- ```Return``` has to be used once !
- There are functions with predefinied names already !!

## Methods existing (= functions written with `.`)
## Over arrays
```javascript
.length()                 // loop an array
.push();                  // add element at the end of the array
.unshift();               // add element at the beginning of the array
.pop();                   // remove the last value of array
.splice(0, 1);            // remove 1 element starting from number 0
.indexOf("dr");           // 1 if true, -1 if false (position in array)
```
## Over variables
```javascript
.length()               // count letters
.toLowerCase()          // tout mettre en minuscule
.toUpperCase()          // tout mettre en maj
.trim()                 // enlever espaces inutiles
.indexOf("dr");         // 1 if true, -1 if false (position in string)
.startsWith("Pe");      // true
.endsWith("ez");        // false
'string'.slice(0, 3);   // Coupe de l'index 0 à 3 : stri
```
## Over numbers
```javascript
Math.random()           // génère un nombre aléatoire entre 0 et 1
Math.round()            // arrondi un nombre à l'entier le plus proche
Math.floor()            // arrondi un nombre à l'entier inférieur
Math.ceil()             // arrondi un nombre à l'entier supérieur
Math.min()              // renvoie le plus petit nombre
isNaN()                 // vérifie que la valeur est un nombre
```
## Convert values
```javascript
String()                // Transform smthg into string
Number(string)          
parseInt(string)        // Transform string into Integer
```


**Definitions**
- Return : afficher les infos des instructions
- Paramètre : variable locale créée automatiquement à l'intérieur de ma fonction, quand sa valeur est encore inconnue
- Argument : param1 receive the value of arg1, param2 the value of arg2, ...


# For / For.. in / ForEach
- ``` break; ``` : interrompre une boucle
- ``` continue; ``` : interrompre l'itération courante et passer à la suivante

```javascript
// ARRAY
const names = ['Will Alexander', 'Sarah Kate'];

// OBJECT
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

// TRADITIONNAL LOOP (ARRAY)
for (let i = 1; i <= 5; i++) {
    console.log(i);
    // 1 2 3 4 5
}

for (let index = 0; index < names.length; index += 1) {
for (let index in names) {
    console.log(names[index]);
    // array output : "Will Alexander" "Sarah Kate"
    // object output : Object{ identity: "Will Alexander", ticketNumber: 209542} Object{identity: "Sarah Kate", ticketNumber: 169336}
}


names.forEach(function(name) {
names.forEach(name => {
for (let name of names) {
    console.log(name);
    // array output : "Will Alexander" "Sarah Kate"
    // object output : Object{ identity: "Will Alexander", ticketNumber: 209542} Object{identity: "Sarah Kate", ticketNumber: 169336}
    console.log(name.identity + ' ' + name.ticketNumber);
    // object output : "Will Alexander 209542" "Sarah Kate 169336"
}
});
```


```js
var a = "one";  

function nameFonction() {
  // j'ai accès à a
  var b = "two";
  function imbriquee() {
    // j'ai accès à a et b
    var c = "three";
    // j'ai accès à a, b et c
  }
  // j'ai accès à a et b
}
// j'ai accès à a
nameFonction();
```

## Lesson : Declare a variable outside the function 
- variable globale --> no param, no arg
```js
var nameVariable = value;  

function nameFonction() {
  // Instructions (can use the variable made outside)
  return nameOfAFonction;
}

nameFonction();
```
## Example
```js
var prenom = Timia;

function direBonjour() {
  alert(prenom);
}

direBonjour();
```

## Lesson : Declare a variable inside the function
- variable locale --> param + arg
```js
function nomFonction(param1, param2, ...) {
  // Instructions (can use param1, param2, ...)
  return nameOfAFonction;
}

nomFonction(arg1, arg2, ...); 
```

## Example
```js
function direBonjour(prenom) {
  alert(prenom);
}

direBonjour('Timia');
// Timia
```

# Fonctions anonymes
- Identique aux fonctions nommées
- Plus difficile à gérer ds les messages d'erreur

# Affectation d'une fonction anonyme (non nommée) à une variable

## Lesson
```javascript
var maVariable = function(param1, param2, ...) {    // ou (autre syntaxe)
var maVariable = (param1,param2,...) => {           // ou (autre syntaxe si un seul paramètre)
var maVariable = param1 => returnValue;
    // Instructions
}

maVariable(arg1, arg2, ...);
```

## Example
```javascript
var add = (firstNumber, secondNumber) => {
  var result = firstNumber + secondNumber;
  return result;
}

console.log(add(4, 3));
```
## Example (objects)
```javascript
var sendWelcomeMessageToUser = (user) => {
    if (user.online) {
        if (user.accountType === 'normal') {
          console.log('Hello ' + user.name + '!');
        } else {
        console.log('Welcome back premium user ' + user.name + '!');
        }
    }
}

sendWelcomeMessageToUser(firstUser);
sendWelcomeMessageToUser(secondUser);
sendWelcomeMessageToUser(thirdUser);
```

## Example
```js
var user = prenom => 'Claire';
```



## Fonctions
- **Phase 1 : Définition**
- **Phase 2 : Exécution**
### Sans paramètres
```javascript
function nom() { 
  // code 
}
nom();
```
### Avec paramètres = variables locales
```javascript
function nom(paramètres) {
   // code 
}
nom(arguments);
```

```javascript
let fruits = ['pomme', 'poire', 'cerise', 'abricot']; 

// NOMMÉE
function aimeFruits(fruits) {
// ANONYME
function(fruits) {
// FONCTION ANONYME AFFECTÉE À UNE VARIABLE
let aimeFruits = function(fruits, fruit) {
  console.log(`J'aime : ${fruits}`);
  return 'fruit choisi: ' + fruit;
}

aimeFruits(fruits);
// J'aime : pomme,poire,cerise,abricot
aimeFruits(fruits, 'pomme');
// J'aime : pomme,poire,cerise,abricot
// "fruit choisi: pomme"

// Fonction anonyme impossible à appeler si non affectée à une variable. Exécutée immédiatement
// Ne pas oublier `;` à la fin d'une fonction anonyme affectée à une variable
```


# Vocabulaire
- Callback = définition de fonction (fonction en sommeil) / handler
- Programmation fonctionnelle ou impérative = écrire tout en fonctions, donner des ordres (instructions) une par une
- Programmation orientée objet (POO) ou déclarative

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
