## If / Else

### Booleans
```javascript
let userLoggedIn = true;

if (userLoggedIn) {
    console.log('User logged in!');
} else {
    console.log('Intruder alert!');
}
```

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

### Operators simples & logicals
*  <  >  <=  >=
*  ==   Equal to (in value) --> Loose equality
*  ===  Equal to (in value and type) --> Strict equality BETTER
*  !=   Not equal to (in value) --> Loose
*  !==  Not equal to (in value and type) --> Strict BETTER
*  &&  (and) To check if two conditions are both true
*  ||  (or) To check if at least one condition is true.
*  !   (NOT) To check if a condition is not true (if it's false)

### :warning: Declaring variables

#### Shows an error
```javascript
let userLoggedIn = true;

if (userLoggedIn) {
    let welcomeMessage = 'Welcome back!';
} else {
    let welcomeMessage = 'Welcome new user!';
}

console.log(welcomeMessage);
```

#### Prints 'Welcome back!'
```javascript
let userLoggedIn = true;
let welcomeMessage = ''; // declare the variable here

if (userLoggedIn) {
    welcomeMessage = 'Welcome back!'; // modify the outer variable
} else {
    welcomeMessage = 'Welcome new user!'; // modify the outer variable
}

console.log(welcomeMessage);
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
