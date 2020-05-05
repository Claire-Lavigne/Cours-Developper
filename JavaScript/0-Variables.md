# VAR, LET ou CONST ?
- **VAR = Variable Globale** => en dehors de la boucle (dans window)
- **LET = Variable Locale** => dans la boucle (dans le bloc)
- **CONST** = same as `let` but its value never changes

- **LET (surtout dans une boucle)**
- :warning: Use constants as more as possible

```javascript
let age = 6;    // set variable
age = 25;       // modify a variable already called
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
let firstName = 'Pedro\'s Sanchez';     // préféré si pas d'apostrophes et pour concaténation
let lastName = "Pedro's \n Sanchez";    // préféré si apostrophes
```
**Undefined**
```javascript
let message = '';     // valeur (possible mais) non définie
```
**Null**
```javascript
let vide = null;     // absence totale de valeur
```
**Symbol**
**Object**

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
console.log(firstName + ' ' + lastName);    // before ES6
console.log(`Voici ${firstName}`);          // ES6 Littéraux de gabarits
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


# Functions over variables
```javascript
.length()               // count letters or loop an array
.toLowerCase()          // tout mettre en minuscule
.toUpperCase()          // tout mettre en maj
.trim()                 // enlever espaces inutiles
.indexOf("dr");         // 1 if true, -1 if false (position in string or array)
.startsWith("Pe");      // true
.endsWith("ez");        // false
'string'.slice(0, 3);   // Coupe de l'index 0 à 3 : stri

// Convert values
String()                // Transform smthg into string
Number(string)          
parseInt(string)        // Transform string into Integer

// Maths
Math.random()           // génère un nombre aléatoire entre 0 et 1
Math.round()            // arrondi un nombre à l'entier le plus proche
Math.floor()            // arrondi un nombre à l'entier inférieur
Math.ceil()             // arrondi un nombre à l'entier supérieur
Math.min()              // renvoie le plus petit nombre

// Tests
isNaN()                  // vérifie que la valeur est un nombre
```




# Array : values <--> index

**Array**
```javascript
var fruits = ["cerise", "pomme", "raisin", [14.5]];   // declare array of any value

fruits;                                 // access all index
fruits[0];                              // access to first index (for new variable or console.log)
fruits[3][0];                           // access the last index here which is an array and access its first element (14.5)
fruits[4];                              // undefined
fruits[4] = "ananas";                   // add element
fruits.lenght;                          // know how many elements are in the array
```
**Ajouter / Enlever du contenu**
```javascript
fruits.push('banane');                  // add this element at the end of the array
fruits.unshift('orange');               // add this element at the beginning of the array
fruits.pop();                           // remove the last value of array
fruits.splice(0, 1);                    // Remove 1 element starting from number 0
```
**Push another object in Array with objects**
```javascript
arrObj = [
  {
    name: 'Krunal',
    age: 26
  },
  {
    name: 'Ankit',
    age: 24
  }
];
arrObj.push({
  name: 'Rushabh',
  age: 27
});
console.log(arrObj);
```
