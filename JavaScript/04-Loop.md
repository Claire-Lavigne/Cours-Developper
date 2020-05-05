# For or While ?
- **For** : Safer (no infinite loop) : execute the turn X times
- **While** : Risqued (infinite loop) : execute the turn until the condition is verified

# For
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

# For / For.. in / For .. of
- ``` break; ``` : interrompre une boucle
- ``` continue; ``` : interrompre l'itération courante et passer à la suivante

```javascript
// ARRAY
const names = ['Will Alexander', 'Sarah Kate'];

// OBJECT
const names = [
    {
        identity: 'Will Alexander',
        ticketNumber: 209542
    },
    {
        identity: 'Sarah Kate',
        ticketNumber: 169336
    }
]

// TRADITIONNAL LOOP (ARRAY)
for (let i = 1; i <= 5; i++) {
    console.log(i);
    // 1 2 3 4 5
}

for (let index = 0; index < names.length; index += 1) {
for (let index in names) {
    console.log(names[index]);
    // array output : "Will Alexander" "Sarah Kate"
    // object output : Object{ identity: "Will Alexander", ticketNumber: 209542} Object{identity: "Sarah Kate", ticketNumber: 169336}
}

for (let name of names) {
    console.log(name);
    // array output : "Will Alexander" "Sarah Kate"
    // object output : Object{ identity: "Will Alexander", ticketNumber: 209542} Object{identity: "Sarah Kate", ticketNumber: 169336}
    console.log(name.identity + ' ' + name.ticketNumber);
    // object output : "Will Alexander 209542" "Sarah Kate 169336"
}
});
```

# While
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

# Do... While
- first the loop is executed, then condition is checked
```javascript
do {
    // instructions
} while(condition)
```
