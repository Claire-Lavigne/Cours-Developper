# Programmation Fonctionnelle
## Debugger
```javascript
debugger;  // voir les étapes du code
```

## Boucle : "VAR" ou "LET" ? 
```javascript
var fruits = ['pomme', 'poire', 'cerise', 'abricot']; 
// valeurs de 0 à 3

for (var index = 0; index < fruits.length ; index += 1) {
 console.log('Je mange : ' + fruits[index] + ' !')
 // Je mange : pomme ! Je mange : poire ! Je mange : cerise ! Je mange : abricot !
}

console.log(index);
// var : index = 4 et fruits[4] = undefined
// let : index = undefined
```
### VAR = variable globale
- Global = en dehors de ma boucle, dans window
### LET = variable locale
- Local = dans la boucle (le bloc)
### CONCLUSION : Tjs utiliser "let" dans une boucle

### Boucles : Plusieurs écritures = même résultat
```javascript
for (let index = 0; index < fruits.length ; index += 1)
for (let index in fruits)
```

## Fonctions
### Anonyme
```javascript function() { // code }```
### Nommée
```javascript function hello() { // code }```
### Affectée à une variable
```javascript
var salut = function() {
   // code 
};
salut();
```
### Définition et Exécution
```javascript
function hello(paramètres) {
   // code 
}
hello(arguments);
```

# Programmation Déclarative
