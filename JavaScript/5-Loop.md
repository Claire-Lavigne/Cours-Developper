# While or For ?
* For : Safe (no infinite loop) but need to know how many times the turns will be executed
* While : Risqued (infinite lopp) but usefull if doesn't know how many times the turns will be executed

## For
**Old code (with variable) : for****
```javascript
const numberOfPassengers = 4;

for (let i = 0; i < numberOfPassengers; i++) {
    console.log('Passenger boarded!');
}

console.log(passengersBoarded);
```

**Old code (with array) : for + length**

```javascript
const passengers = [
    'Will Alexander',
    'Sarah Kate',
    'Audrey Simon',
    'Tau Perkington'
]

for (let i = 0; i < passengers.length; i++) {
    console.log('Boarding ' + passengers[i]);
}
```
**New code (with array) : forEach**
```javascript
passengers.forEach(passenger => {
  console.log(passenger);
});
```
**New code (with array) : for + in**
```javascript
for (let i in passengers) {
    console.log('Boarding ' + passengers[i]);
}
```
**New code (with array) : for + of**
```javascript 
for (let passenger of passengers) {
    console.log('Boarding passenger ' + passenger);
}
```

**New code (with object) : for + of**
```javascript
const passengers = [
    {
        name: 'Will Alexander',
        ticketNumber: 209542
    },
    {
        name: 'Sarah Kate',
        ticketNumber: 169336
    }
]

for (let passenger of passengers) {
    console.log('Boarding passenger ' + passenger.name + ' with ticket n° ' + passenger.ticketNumber);
}
```


## While
**While**
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
**Do...while**
```javascript
do {
  // ... instructions
} while(condition)
```
