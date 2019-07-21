- JS = ECMAScript (ES2015 = ES6)

# JavaScript, pour quoi ?
- Gestion des interactions (utilisateur <--> navigateur)
- Dynamiser le contenu
- Pas de refresh (différent de PHP)

# Syntaxe
On affiche les messages soit dans :
- le **fichier html** avant le tag ```</body>``` : 
    - ```<script src=".../js/script.js"></script>```
- la **console** pour obtenir des informations sans les afficher sur le site et les cacher à l'utilisateur : 
    - ```console.log()``` affiche le résultat
    - ```console.error()``` affiche une erreur
- en **popup** : 
    - ```alert()``` message d'alerte
    - ```prompt()``` idem avec saisie texte

**Commentaires**
```javascript
// Une ligne de commentaire
/* Un bloc de commentaires */
```
**Variable/Constant**
- Les variables ont une portée de type BLOC
- var : before ES6
- let : same as var but starting from ES6
- const : same as let but its value never changes
:warning: Use constants as more as possible

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

// Methods over strings
.length()              // count letters or loop an array
.toLowerCase()
.toUpperCase()
.indexOf("dr");        // 1 if true, -1 if false
.startsWith("Pe");     // true
.endsWith("ez");       // false
'string'.slice(0, 3);  // Coupe de l'index 0 à 3 : stri
// Convert values
String()
Number()
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
console.log('Voici ${firstName}');          // ES6
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
