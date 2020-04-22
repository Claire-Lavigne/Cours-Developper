# Function 

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

**Definitions**
- Return : afficher les infos des instructions
- Paramètre : variable locale créée automatiquement à l'intérieur de ma fonction, quand sa valeur est encore inconnue
- Argument : param1 receive the value of arg1, param2 the value of arg2, ...

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

