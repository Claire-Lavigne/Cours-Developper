- JS = ECMAScript (ES2015 = ES6)

# JavaScript, pour quoi ?
- Gestion des interactions (utilisateur <--> navigateur)
- Dynamiser le contenu
- Pas de refresh (différent de PHP)

# Emplacement
- **fichier html** avant ```</body>``` : ```<script src=".../js/script.js"></script>```
    
# PopUp : 
- ```alert()``` message d'alerte
- ```confirm()``` message d'alerte
- ```prompt()``` idem avec saisie texte
    
## Debugger
```javascript
debugger;       // voir les étapes du code

console.log()   // affiche un message normal
console.info()  // alias
console.warn()  // affiche un avertissement
console.error() // affiche une erreur
```

**Commentaires**
```javascript
// Une ligne de commentaire
/* Un bloc de commentaires */
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
