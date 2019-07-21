:warning: A variable created inside of the block can't be called outside !

# If / Else if / Else

```javascript
let a = true;

if (condition) {
    // instructions
} else if {
    // instructions
} else {
    // instructions
}
```

**Comparative expressions**
- ```if (a)``` means ```if (a === true)```
- ```if (!(a))``` means ```if (a === false)```
- ```if (numberOfGuests === numberOfSeats)```

| Operator |    Meaning   |
| -------- |:------------:|
| ===      | equal to     |
| !==      | not equal to |
| <        | less than    |
| <=       | - or = to    |
| >        | greater than |
| >=       | + or = to    |

| Operator | Meaning |
| -------- |:-------:|
| &&       | and     |      true && true = true, true && false = false, false && false = false
| ||       | or      |      true || true = true, true || false = true,  false || false = false
| !        | is not  |      !true = false, !false = true




# Switch
- When I have too much ```else if``` conditions (when a === b), I can write my code this way :
```javascript
let a = value1

switch (expression) {                   // expression = name of variable
case 'value1':
    // instructions (if)
    break;
case 'value2':
    // instructions (else if)
    break;
...
default:
    // instructions (else)
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
