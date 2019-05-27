## Simple
```javascript
// Declaration d'un tableau (The content can be of any value)
let guests = ['Sarah Kate', 'Audrey Simon', 'Will Alexander'];

// Voir résultat
console.log(guests);
console.log(guests[0]); // 'Sarah Kate'
console.log(guests.lenght); // tell me how much elements are in the array : 3

// Ajouter / Enlever contenu
guests.push('Paul Handerson'); // add this element at the end of the array
guests.unshift('Tau Perkington'); // add this element at the beginning of the array
guests.pop(); // remove the last value of array
films.splice(0, 1); // Remove 1 element starting from number 0

// redéfinir avec variables :
let firstGuest = 'Sarah Kate';
// ou
let firstGuest = guests[0]; // 'Sarah Kate'
let thirdGuest = guests[2]; // 'Will Alexander'
let undefinedGuest = guests[12] // undefined
let guests = [firstGuest, secondGuest];
console.log(guests); // show 2 variables
```

## Complexe

```javascript
let firstGuest = {name: 'Sarah Kate', vip: true};
let secondGuest = {name: 'Audrey Simon', vip: false};

let guests = [firstGuest, secondGuest];
console.log(guests); // shows 2 objects
```
