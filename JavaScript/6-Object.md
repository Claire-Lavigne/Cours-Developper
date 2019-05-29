# JSON (JavaScript Object Notation)
- array with multiple values
- value <--> key

**Objects**
```javascript
var fruits = {                              // declare object
  rouge : "cerise",                         // declare property (keyName: anyValue)
  sucre : "raisin",
  acide : "kiwi",
   love : true
};

var legumes = {
   bon : "patate",
   top : "artichaut"
};

console.log(food);                          // shows 2 objects
console.log(fruits.rouge)                   // shows the key of object

fruits["rouge"];                            // Read value of rouge
fruits.rouge;                               // Different syntax
fruits.rouge = "fraise";                    // Modify a value

let fruitsRouges = fruits.rouge;
let food = [fruits, legumes];
```

**CLASS** = Multiple objects
```javascript
class MaClasse {
  constructor(param1, param2 /* ... */) {
    this.propriete1 = param1;
    this.propriete2 = param2;
    // ...
  }
  methode1(/* ... */) {
    // ...
  }
  methode2(/* ... */) {
    // ...
  }
  // ...
}

const monObjet = new MaClasse(arg1, arg2, ...);

// Crée un objet ayant monObjetPrototype pour prototype
const monObjet = Object.create(monObjetPrototype);
```
