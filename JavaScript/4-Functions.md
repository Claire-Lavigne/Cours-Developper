https://github.com/O-clock-Alumni/fiches-recap/blob/master/js/fonctions.md
https://github.com/O-clock-Alumni/fiches-recap/blob/master/js/fonctions-js.md
https://github.com/O-clock-Alumni/fiches-recap/blob/master/js/dom.md

## What are functions ?

- Used for repetitive tasks & to divide big tasks
- Contains series of instructions
- 1 function = 1 task/role (how, what, when, how many times...)
- What's inside a function, only exists in it
- Functions can receive messages through parameters // Function can have settings (datas to make it work)
- Functions can send messages through return values
- There are predefinied functions name already !!

### Option1
```javascript
// Déclaration d'une fonction nommée maFonction
function maFonction() {
// Instructions de la fonction
}
maFonction(); 
// Appel de la fonction maFonction
```

### Option2
```javascript
// Affectation d'une fonction anonyme à la variable maVariable
const maVariable = function(param1, param2, ...) {
// Instructions pouvant utiliser param1, param2, ...
}

// Appel de la fonction anonyme
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maVariable(arg1, arg2, ...);
```

### Option3
```javascript
// Affectation d'une fonction anonyme à la variable maVariable
const maVariable=(param1,param2,...)=>{
// Instructions pouvant utiliser param1, param2, ...
}
// Appel de la fonction anonyme
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maVariable(arg1,arg2,...);
```
Example :
```javascript
const add = (firstNumber, secondNumber) => {
  const result = firstNumber + secondNumber;
  return result;
}

console.log(add(4, 3));
```

```javascript
const sendWelcomeMessageToUser = (user) => {
    if (user.online) {
        if (user.accountType === 'normal') {
          console.log('Hello ' + user.name + '!');
        } else {
        console.log('Welcome back premium user ' + user.name + '!');
        }
    }
}

sendWelcomeMessageToUser(firstUser);
sendWelcomeMessageToUser(secondUser);
sendWelcomeMessageToUser(thirdUser);
```
