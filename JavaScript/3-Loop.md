# While or For ?

* Same result
* **For** : Safer (no infinite loop) but need to know how many times the turns will be executed
* **While** : Risqued (infinite lopp) but usefull if doesn't know how many times the turns will be executed

## For

**Old code (variable) : for**
```javascript
for (let i = 1; i <= 5; ii++) {
    console.log(i);
}
```

**Old code (array) : for + length**

```javascript
const names = [
    'Will Alexander',
    'Sarah Kate',
]

for (let i = 0; i < names.length; i++) {
    console.log('Boarding ' + names[i]);
}
```
**New code (array) : forEach**
```javascript
names.forEach(name => {
  console.log(name);
});
```
**New code (array or object) : for + in**
```javascript
for (let i in names) {
    console.log(names[i]);
}
```
**New code (array) : for + of**
```javascript 
for (let name of names) {
    console.log(name);
}
```

**New code (object) : for + of**
```javascript
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

for (let name of names) {
    console.log(name.identity + '' + name.ticketNumber);
}
```

Il est possible d'interrompre une boucle avec l'instruction ``` break; ```.

Il est possible d'interrompre l'itération courante et de passer à la suivante avec l'instruction ``` continue; ```.


## While
**While**
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log(i);
```

**Do...while**
```javascript
do {
    // instructions
} while(condition)
```
