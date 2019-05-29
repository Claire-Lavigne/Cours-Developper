```javascript
let numberOfDogs = 5;
let numberOfTurtles; // undefined

// modify a variable already called
numberOfDogs = 4;

// shortcuts (with + - * / %) 
numberOfDogs += 3; // numberOfDogs = numberOfDogs + 3
numberofDogs++;    // j'ajoute 1

// calculs (with + / * - %)
let totalAnimals = numberOfCats + numberOfDogs;

// show result
console.log(numberOfCats);
```
  
### String
```javascript
// concatenate
console.log(firstName + ' ' + lastName);
console.log(`Voici ${firstName}`);
 
const longueurMot = firstName.length; // 5 lettres
console.log(firstName.toLowerCase());  // "pedro"
console.log(firstName.toUpperCase());  // "PEDRO"
console.log(firstName.indexOf("dr")); // 1 if true, -1 if false
console.log(firstName.startsWith("Pe")); // true
console.log(firstName.endsWith("ez")); // false
```
