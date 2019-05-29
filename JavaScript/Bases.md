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
let numberOfCats = 1;       // set a variable
numberOfCats = 5;           // modify a variable already called
console.log(numberOfCats);  // show result
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
let calcul = 25 * (4 + 10 - 2) / 3;
let totalAnimals = numberOfCats + numberOfDogs;
```
**Shortcuts (+ - * /)**
```javascript
let numberOfDogs = 6;
numberOfDogs += 3;      // add 3
numberofDogs++;         // add 1 
```
**Concatenate strings**
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

# Deal with Errors
**Possible errors**
- Syntax : typos, missing brackets, wrong number of quotes, etc.
- Logic : erroneous conditions, forgetting to increment the index in a loop (infinite loop)
- Runtime : external ressource (networks, databases, or users)

**Resolve errors**
- Being aware of where they may occur
- Using error handling techniques

**Testing data**
```javascript
if (dataExists && dataIsValid) {
    // use data here
} else {
    // handle error here
}
```
**Trying blocks to catch an error**
```javascript
try {
    // error-prone code here
} catch (error) {
    // react to error here
}
```
