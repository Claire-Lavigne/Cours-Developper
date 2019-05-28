### JSON (JavaScript Object Notation)
One object
```javascript
let myBook = {
    title: 'The Story of Tau',  // key : value
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};

// show one key of the object
console.log(myBook.title);      // 'The Story of Tau'
// also creating a variable
let bookTitle = myBook.title;
```

### CLASS
Multiple objects
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
