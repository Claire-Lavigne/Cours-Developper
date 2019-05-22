## For

```javascript
const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++) {
    console.log('Passenger boarded!');
}

console.log('All passengers boarded!');
```

### For with arrays

```javascript
const passengers = [
    'Will Alexander',
    'Sarah Kate',
    'Audrey Simon',
    'Tau Perkington'
]

// old code : for + length
for (let i = 0; i < passengers.length; i++) {
    console.log('Boarding ' + passengers[i]);
}

// simple code : for + in
for (let i in passengers) {
    console.log('Boarding ' + passengers[i]);
}

// more simple code : for + of
for (let passenger of passengers) {
    console.log('Boarding passenger ' + passenger);
}
```

### Example with complex array
```javascript
const passengers = [
    {
        name: 'Will Alexander',
        ticketNumber: 209542
    },
    {
        name: 'Sarah Kate',
        ticketNumber: 169336
    },
    {
        name: 'Audrey Simon',
        ticketNumber: 779042
    },
    {
        name: 'Tau Perkington',
        ticketNumber: 703911
    }
]

for (let passenger of passengers) {
    console.log('Boarding passenger ' + passenger.name + ' with ticket number ' + passenger.ticketNumber);
}
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
