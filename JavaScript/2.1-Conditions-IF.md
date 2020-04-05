# If / Else if / Else

- :warning: A variable created inside of the block can't be called outside !
- ```if (a)``` means ```if (a === true)```
- ```if (!(a))``` means ```if (a === false)```
- ```if (numberOfGuests === numberOfSeats)```

## Comparative expressions
- true && true = true
- true && false = false
- false && false = false
- true || true = true
- true || false = true
- false || false = false
- !true = false
- !false = true

## Lesson
```javascript
let a = true;

if (condition) {
    // instructions
} else if {
    // instructions
} else {
    // instructions
}
```

## Example with Ternaires (only with booleans)
```js
var heure = 19, salut = "";

if (heure <= 18){
    salut = "Bonjour";
} else {
    salut = "Bonsoir";
}
// shorter code
var salut = (heure <= 18) ? "Bonjour" : "Bonsoir";
```

## Examples OpenClassrooms
- [joursSemaine](https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre3_exercice1.js)
- [resultatsBAC](https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre3_exercice2.js)
- [heureActuelle](https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre3_exercice3.js)

# Switch

- When ? 
    - Too much ```else if``` conditions
    - ```a === b```
- Expression = name of variable; boolean...

## Lesson
```javascript
let a = value1

switch (expression) {
case value1:
    // instructions (if)
    break;
case value2:
    // instructions (else if)
    break;
...
default:
    // instructions (else)
}
```

## Example
```javascript
// Définir jourSuivant en fonction de jourActuel
const jourActuel = "lundi";
let jourSuivant = "";

switch (jourActuel) {
  case "lundi":
      jourSuivant = "mardi";
      break;
  case "mardi":
      jourSuivant = "mercredi";
      break;
  case "mercredi":
      jourSuivant = "jeudi";
      break;
  case "jeudi":
      jourSuivant = "vendredi";
      break;
  case "vendredi":
      jourSuivant = "samedi";
      break;
  case "samedi":
      jourSuivant = "dimanche";
      break;
  case "dimanche":
      jourSuivant = "lundi";
      break;
  default: 
    jourSuivant = "un jour inconnu";
}

console.log(`Demain, nous serons ${jourSuivant}`);  
```
