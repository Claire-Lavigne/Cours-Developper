# Programmation Fonctionnelle
## Debugger
debugger;  // voir les étapes du code

## Boucle : "VAR" ou "LET" ? 

var fruits = ['pomme', 'poire', 'cerise', 'abricot']; // valeurs de 0 à 3

for (var index = 0; index < fruits.length ; index += 1) {
 console.log('Je mange : ' + fruits[index] + ' !')
 // Je mange : pomme ! Je mange : poire ! Je mange : cerise ! Je mange : abricot !
}

console.log(index); 
// index vaut 4 avec "var" mais fruits[4] est undefined (il n'a aucune valeur)
// avec "var" il a été défini globalement (càd en dehors de ma boucle, dans window)
// index is undefined avec "let"
// avec "let" il est défini localement (càd dans le bloc)

Résultat : Utiliser tjs "let"

for (let index in fruits) = for (var index = 0; index < fruits.length ; index += 1)


# Programmation Déclarative
