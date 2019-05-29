# JavaScript, pour quoi ?
- Gestion des interactions (utilisateur <--> navigateur)
- Dynamiser le contenu

# Syntaxe

**Commentaires**
```javascript
// Une ligne de commentaire
/* Un bloc de commentaires */
```
**Variable**
```javascript
// set a variable
let numberOfCats = 1;
```
**Constant** = Variable with a value that never change

:warning: Use constants as more as possible
```javascript
const hoursPerDay = 24;
```

# Types

**Numbers**

:warning: Float à éviter !! For e-commerce, always use integer !
```javascript
let price = 2599;   // Integer (2599 or -2599)
let price = 25.99;  // Float (25.99 or -25.99)
```
**Booleans**
```javascript
let userSignedIn = true;
let checkboxIsChecked = false;
```
**String**
```javascript
let firstName = 'Pedro\'s Sanchez';
let lastName = "Pedro's \n Sanchez";
```

# Operators

**Arythmetics**
```javascript
25 * (4 + 10 - 2) / 3
```
**Shortcuts (+ - * /)**
```javascript
let numberOfDogs = 6;
numberOfDogs += 3;      // add 3
numberofDogs++;         // add 1 
```
**Concatenate** strings
```javascript
var firstName = 'Claire';
var lastName = 'Lavigne';
console.log(firstName + ' ' + lastName);
console.log(`Voici ${firstName}`);
```
**Simples (Comparaisons)**
```javascript
var age = 20;
age < 10;
age <= 10;
age > 10;
age >= 10
age === 10    // Equal to (in value and type)
age !== 10    // Not equal to (in value and type)
```
**Logicals**
```javascript
&&  // (and) To check if two conditions are both true
||  // (or) To check if at least one condition is true.
!   // (NOT) To check if a condition is not true (if it's false)
```
