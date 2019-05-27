## Types

### Numbers
* Integers : 1 ou -1
* Float : 1.5 ou -1.5
```javascript
let price = 2599;   // for e-commerce : price = 2599 not 25.99
```
:warning: Float à éviter

### Booleans
```javascript
let userSignedIn = true;
let checkboxIsChecked = false;
```
  
### String
```javascript
// I can use : ''  ""  \  \n 
let firstName = 'Pedro';
let lastName = "Sanchez";

// concatenate
console.log(firstName + ' ' + lastName);
 
const longueurMot = firstName.length; // 5 lettres
console.log(firstName.toLowerCase());  // "pedro"
console.log(firstName.toUpperCase());  // "PEDRO"
console.log(firstName.indexOf("dr")); // 1 if true, -1 if false
console.log(firstName.startsWith("Pe")); // true
console.log(firstName.endsWith("ez")); // false
```
