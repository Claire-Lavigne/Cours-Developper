## If / Else

### Booleans & variables
```javascript
let userLoggedIn = true;
let welcomeMessage = ''; // declare the variable here

if (userLoggedIn) {
    console.log('User logged in!');
    welcomeMessage = 'Welcome back!'; // modify the outer variable
} else {
    console.log('Intruder alert!');
    welcomeMessage = 'Welcome new user!'; // modify the outer variable
}

console.log(welcomeMessage);
```
:warning: A variable created inside of the block can't be called outside !


### Comparative expressions
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

## Switch
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
