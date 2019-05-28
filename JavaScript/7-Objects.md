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
```

Exemple :
```javascript
class Personnage {
  constructor(nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = 0; // Toujours 0 au début
  }
  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.sante} points de vie, ${
      this.force
    } en force et ${this.xp} points d'expérience`;
  }
}
// Instanciation --> Créer... un perso
const aurora = new Personnage("Aurora", 150, 25);
const glacius = new Personnage("Glacius", 130, 30);

// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
console.log(aurora.decrire());
// "Glacius a 130 points de vie, 30 en force et 0 points d'expérience"
console.log(glacius.decrire());

console.log(aurora);
// Result in console :
[Personnage] {
    name: 'Aurora',
    sante: 150,
    force: 25,
    xp: 0
}
```
