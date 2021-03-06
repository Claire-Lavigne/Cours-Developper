# CLASS = Multiple objects (methods)

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

## Création d'un jeu
```javascript
class Personnage {
  constructor(nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = 0; // Toujours 0 au début
  }
  // Attaque une cibles
  attaquer(cible) {
    if (this.sante > 0) {
      const degats = this.force;
      console.log(`${this.nom} attaque ${cible.nom} et lui inflige ${degats} points de dégâts`);
      cible.sante -= degats;
      if (cible.sante > 0) {
        console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
      } else {
        cible.sante = 0;
        const bonusXP = 10;
        console.log(`${this.nom} a tué ${cible.nom} et gagne ${bonusXP} points d'expérience`);
        this.xp += bonusXP;
      }
    } else {
      console.log(
        `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
      );
    }
  }
  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience`;
  }
}
// Instanciation --> Créer... un perso
const aurora = new Personnage("Aurora", 150, 25);
const glacius = new Personnage("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
console.log(aurora.decrire());
// "Glacius a 130 points de vie, 30 en force et 0 points d'expérience"
console.log(glacius.decrire());
// Show object in console : [Personnage] {name: 'Aurora', sante: 150, force: 25, xp: 0}
console.log(aurora);

const monstre = new Personnage("ZogZog", 40, 20);
console.log(`Un affreux monstre arrive : il s'appelle ${monstre.nom}`);

monstre.attaquer(aurora);
monstre.attaquer(glacius);
aurora.attaquer(monstre);
glacius.attaquer(monstre);

console.log(aurora.decrire());
console.log(glacius.decrire());
```
