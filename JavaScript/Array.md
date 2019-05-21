## Simple
```javascript

let guests = ['Sarah Kate', 'Audrey Simon', 'Will Alexander'];

console.log(guests);
console.log(guests[2]); // 'Will Alexander'

console.log(guests.lenght); // tell me how much elements are in the array
guests.push('Paul Handerson'); // add this element at the end of the array
guests.unshift('Tau Perkington'); // add this element at the beginning of the array
guests.pop(); // remove the last value of array


let firstGuest = guests[0]; // 'Sarah Kate'
let thirdGuest = guests[2]; // 'Will Alexander'
let undefinedGuest = guests[12] // undefined
```

```javascript
let firstGuest = 'Sarah Kate';
let secondGuest = 'Audrey Simon';

let guests = [firstGuest, secondGuest];

console.log(guests); // show 2 variables
```

```javascript
let firstGuest = {name: 'Sarah Kate', vip: true};
let secondGuest = {name: 'Audrey Simon', vip: false};

let guests = [firstGuest, secondGuest];

console.log(guests); // shows 2 objects
```
