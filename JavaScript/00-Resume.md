# Vocabulaire
- Callback = définition de fonction (fonction en sommeil)

# Programmation Fonctionnelle
## Debugger
```javascript
debugger;  // voir les étapes du code
```

## Boucle : "VAR" ou "LET" ? 
```javascript
var fruits = ['pomme', 'poire', 'cerise', 'abricot']; 
// valeurs de 0 à 3

for (var index = 0; index < fruits.length ; index += 1) {
 console.log('Je mange : ' + fruits[index] + ' !')
 // Je mange : pomme ! Je mange : poire ! Je mange : cerise ! Je mange : abricot !
}

console.log(index);
// var : index = 4 et fruits[4] = undefined
// let : index = undefined
```
### VAR = variable globale
- Global = en dehors de ma boucle, dans window
### LET = variable locale
- Local = dans la boucle (le bloc)
### CONCLUSION : Tjs utiliser "let" dans une boucle

### Boucles : Plusieurs écritures = même résultat
```javascript
for (let index = 0; index < fruits.length ; index += 1)
for (let index in fruits)
```

## Fonctions
### Définition et Exécution
```javascript
// 1- Définition
function hello(paramètres) {
   // code 
}

// 2- Exécution
hello(arguments);
```
### Anonyme
```javascript
function() { 
  // code 
}

// Exemple
function(fruit) {
  console.log('J\'aime : ' + fruit);
}
```
### Nommée
```javascript
function hello() {
  // code
}

// Exemple
function aimeFruits(fruit) {
  console.log('J\'aime : ' + fruit);
}
```
### Affectée à une variable
```javascript
var salut = function() {
   // code 
};
salut();

// Exemple
var aimeFruits = function(fruit) {
  console.log('J\'aime : ' + fruit);
};
```
## forEach
```javascript
fruits.forEach(function(fruit, index) {
  console.log(fruit, index);
  // fruit = strings de mon tableau
  // index = nombre d'élements dans mon tableau
  console.log('J\'aime : ' + fruit);
});
```
Pareil en + propre
```javascript
function aimeFruits(fruit) {
  console.log('J\'aime : ' + fruit);
  console.log(`J'aime : ${fruit}`);
}
fruits.forEach(aimeFruits);
// forEach peut appeler une fonction nommée "X" ou une fonction affectée à une variable "X"
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

## Ternaire
```javascript
var isYoung = false;
if (character.age < 50) {
 isYoung = true;
}
```
même chose que :
```javascript
if (character.age < 50) {
 isYoung = true;
} else {
 isYoung = false;
}
```
même chose que :
```javascript
(character.age < 50) ? true : false;
```
même chose que (car booléen) :
```javascript
(character.age < 50);
// ou
character.age < 50
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
## Closures = function returned inside function
fonction interne (accès aux variables de la fonction externe) même si fonction externe exécutée

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
```

# Programmation Déclarative

