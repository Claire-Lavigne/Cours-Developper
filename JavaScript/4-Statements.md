# If / Else if / Else

**Booleans & Variables**

:warning: A variable created inside of the block can't be called outside !
```javascript
let userLoggedIn = true;
let welcomeMessage = '';

if (userLoggedIn) {                       // means (userLoggedIn === true)
    welcomeMessage = 'Welcome back!';     // modify the variable
} else {
    console.log('Intruder alert!');
    welcomeMessage = 'Welcome new user!'; // modify the variable
}
```
**Comparative expressions**
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
var drink = 'coffee';

switch (drink) {
  case 'coffee':
    console.log('Expresso or Latte ?');
    break;
  case 'tea':
    console.log('Earl Grey or Green Tea ?');
    break;
  case 'soda':
  case 'water':
    console.log('Glass or bottle ?');
    break;
  default:
    console.log('Sorry, we don\'t have this here.');
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
