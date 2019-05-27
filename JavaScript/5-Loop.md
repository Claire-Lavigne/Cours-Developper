# While or For ?
* For : Safe (no infinite loop) but need to know how many times the turns will be executed
* While : Risqued (infinite lopp) but usefull if doesn't know how many times the turns will be executed

## For

```javascript
const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++) {
    console.log('Passenger boarded!');
}

console.log(passengersBoarded);
```

## While

```javascript
let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // one passenger boards
    passengersStillToBoard--; // so there is one fewer still to board
    seatsLeft--; // and one fewer seat
}

console.log(passengersBoarded); // prints 8, as there are 8 passengers for 10 seats
```
