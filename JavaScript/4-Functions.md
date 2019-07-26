- https://github.com/O-clock-Alumni/fiches-recap/blob/master/js/fonctions.md
- https://github.com/O-clock-Alumni/fiches-recap/blob/master/js/fonctions-js.md

## What are functions ?

- A block with instructions
- 1 function = 1 task/role/objective (how, what, when, how many times...)

## When use functions ?
- For repetitive tasks
- To divide a program into little tasks

## Specificities
- What's inside a function, only exists in it
- Function can have settings (datas to make it work)
- A function stops running immediately after a 'return'
- There are functions with predefinied names already !!

### Option1
```javascript
// Déclaration d'une fonction
// Paramètre = variable créée automatiquement à l'intérieur de ma fonction
function nomFonction(param1, param2, ...) {
  // Instructions de la fonction pouvant utiliser param1, param2, ...
  // Return : afficher les infos des instructions
  return nomDuneFonction;
}

// Execute function
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
nomFonction(arg1, arg2, ...); 
```
**Exemple sans paramètres = variable created outside **
```javascript
var prenom = Timia;

function direBonjour() {
  alert("Salut c'est " + prenom);
}

direBonjour();     // Salut c'est Timia
```
**Exemple avec paramètre = variable created inside**
```javascript
function direBonjour(prenom) {
  alert("Salut c'est " + prenom);
}

direBonjour("Timia");     // Salut c'est Timia
``

### Option2
```javascript
// Affectation d'une fonction anonyme (car non nommée) à la variable
const maVariable = function(param1, param2, ...) {
// ou (autre syntaxe)
const maVariable = (param1,param2,...) => {
    // Instructions
}

// Appel de la fonction anonyme
maVariable(arg1, arg2, ...);
```
Example :
```javascript
const add = (firstNumber, secondNumber) => {
  const result = firstNumber + secondNumber;
  return result;
}

console.log(add(4, 3));
```
Example :
```javascript
const sendWelcomeMessageToUser = (user) => {
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
