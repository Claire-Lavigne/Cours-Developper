# What's an array ?
* values <--> index

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
