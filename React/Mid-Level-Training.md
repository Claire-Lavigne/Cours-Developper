# Developer Tools

* **Node.js (v16+)** – JavaScript runtime required for the certification.
* **npm** – Package manager included with Node.js.
* **Visual Studio Code (VS Code)** – Recommended code editor.
* **StackBlitz** – Browser-based IDE used during the certification exam.
* **React Developer Tools** – Browser extension for inspecting and debugging React applications.
* **ESLint & Prettier** *(recommended)* – Improve code quality and formatting.

# JavaScript Fundamentals

JavaScript is the foundation of React development. React heavily relies on modern ES6+ features.

## Recommended Reading

* JavaScript.info → *An Introduction to JavaScript*

## Core Concepts

* Exports and imports
* Variable scope with `let` and `const`
* Spread syntax
* Rest parameters
* Object and array destructuring
* Arrow functions
* Common array methods
* Promises and async/await

## Exports and Imports

The module system helps organize React applications by splitting code into reusable files.

### Resources

* MDN Web Docs → `export`
* JavaScript.info → *Export and Import*

### Example

```js
// Exporting
export const PI = 3.14;
export function square(x) { return x * x; }
export default class Calculator { /* ... */ }

// Importing
import Calculator from './calculator.js'; // Default import
import { PI, square } from './math.js'; // Named imports
import * as MathUtils from './mathUtils.js'; // Namespace import
```

## Variable Scope with `let` and `const`

Modern JavaScript favors `let` and `const` over `var`.

### Example

```js
const API_URL = 'https://api.example.com';

let count = 0;
count += 1;
```

## Spread Syntax (`...`)

Used to expand arrays and objects.

### Example

```js
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];

const defaultProps = { size: 'medium', color: 'blue' };
const userProps = { color: 'red' };
const finalProps = { ...defaultProps, ...userProps };
```

## Rest Parameters

Allows functions to accept a variable number of arguments.

### Example

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

## Destructuring

Simplifies extracting values from objects and arrays.

### Example

```js
const { name, age } = user;

const [first, second] = [10, 20];
```

## Arrow Functions

Shorter syntax for writing functions.

### Example

```js
// Traditional
function add(a, b) {
  return a + b;
}

// Arrow
const add = (a, b) => a + b;
```

## Array Methods

Common methods used in React for data manipulation.

### Example

```js
const numbers = [1, 2, 3];

// map
const doubled = numbers.map(num => num * 2);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);

// reduce
const sum = numbers.reduce((total, num) => total + num, 0);
```

## Promises & Async/Await

Handle asynchronous operations like API calls.

### Example

```js
// Promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Async/Await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```
