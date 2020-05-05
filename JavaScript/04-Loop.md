# For or While ?
- **For** : Safer (no infinite loop) : execute the turn X times
- **While** : Risqued (infinite loop) : execute the turn until the condition is verified

## For
```javascript
let fruits = ['pomme', 'poire', 'cerise', 'abricot']; 
// valeurs de 0 à 3

for (let index = 0; index < fruits.length ; index += 1) {
for (let index in fruits)
 console.log('Je mange : ' + fruits[index] + ' !')
 // Je mange : pomme ! Je mange : poire ! Je mange : cerise ! Je mange : abricot !
}

console.log(index);
// Je mange : pomme ! Je mange : poire ! Je mange : cerise ! Je mange : abricot !
```

## While
- first the condition is checked
 - if false : loop not executed
 - if true : loop executed
```javascript
let i = 1;
while (i <= 5) {
    // Si la variable n'est pas modifiée ici, la condition sera toujours vraie => infinite loop
    console.log(i);         // counts 1 ... 5
    i++;                    // counts 5
}
console.log(i);             // counts 6
```

## Do... While
- first the loop is executed, then condition is checked
```javascript
do {
    // instructions
} while(condition)
```
