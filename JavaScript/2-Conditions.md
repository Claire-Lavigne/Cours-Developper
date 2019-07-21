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
|  ===     | equal to     |
|  !==     | not equal to |
|  <       | less than    |
|  <=      | - or = to    |
|  >       | greater than |
|  >=      | + or = to    |
|  &&      | and          |
|  ||      | or           |
|  !       | is not       |

* true  &&|| true = true
* true  &&|| false = false BUT true or false = true
* false &&|| false = false
* !true = false
* !false = true

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
