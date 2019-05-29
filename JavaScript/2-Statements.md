# If / Else if / Else

**With Booleans & Variables**

:warning: A variable created inside of the block can't be called outside !
```javascript
let userLoggedIn = true;
let welcomeMessage = '';

if (userLoggedIn) {                       // means (userLoggedIn === true)
    welcomeMessage = 'Welcome back!';     // modify the variable
} else {
    console.log('Intruder alert!');       // instruction
}
```
**With Comparative expressions**
```javascript
const numberOfSeats = 30;
let numberOfGuests = 25;

if (numberOfGuests == numberOfSeats) {
    // all seats are taken
} else if (numberOfGuests < numberOfSeats) {
    // allow more guests
} else {
    // do not allow any more guests
}
```

# Switch
**With Variable**
```javascript
var drink = 'milk';

switch (drink) {
  case 'milk:
    console.log('Entier ou demi-écrémé ?');
    break;
  case 'tea':
    console.log('Thé au citron ou Ice Tea ?');
    break;
  case 'coffee':
  case 'soda':
    console.log('Coca ou non ?');
    break;
  default:
    console.log('Nous n\'avons rien d\'autre.');
}
```
**With Objects**
```javascript
let firstUser = {
    name: 'Will Alexander',
    age: 33,
    accountLevel: 'normal'
};

let secondUser = {
    name: 'Sarah Kate',
    age: 21,
    accountLevel: 'premium'
};

let thirdUser = {
    name: 'Audrey Simon',
    age: 27,
    accountLevel: 'mega-premium'
};

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}
```
