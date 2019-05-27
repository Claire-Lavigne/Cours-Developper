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
