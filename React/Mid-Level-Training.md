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
Use const by default. Switch to let only when you know the variable needs to be reassigned.

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
console.log(finalProps); // { size: 'medium', color: 'red' };
```

## Rest Parameters

Allows functions to accept a variable number of arguments.

### Example

```js
function example(a, b, ...rest) {
  return rest;
}
console.log(example(1, 2, 3, 4, 5)); // [3, 4, 5]

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

const coordinates = [10, 20, 30];
const [x, , y] = coordinates;
// x = 10, y = 30
```

## Traditional Functions vs Arrow Functions

Both traditional functions and arrow functions define reusable blocks of code, but they differ in syntax and behavior.

### Key Differences

| Traditional Function                 | Arrow Function                                              |
| ------------------------------------ | ----------------------------------------------------------- |
| Has its own `this`                   | Inherits `this` from the surrounding scope (lexical `this`) |
| Can be used as a constructor (`new`) | Cannot be used as a constructor                             |
| Has its own `arguments` object       | Does not have its own `arguments` object                    |
| More verbose syntax                  | More concise syntax                                         |

### Traditional Function

```javascript
function add(a, b) {
  return a + b;
}
```

### Arrow Function

```javascript
const add = (a, b) => a + b;
```

### The `this` Keyword

The most important difference is how `this` behaves.

**Traditional function:**

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  }
};

person.greet(); // Alice
```

**Arrow function:**

```javascript
const person = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // undefined
```

Arrow functions inherit `this` from their surrounding scope instead of creating their own.

### Best Practices

* Use **arrow functions** for callbacks, array methods (`map`, `filter`, `reduce`), and React components.
* Use **traditional functions** for object methods, constructors, or when you need your own `this`.

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

# Additional Notes

Explore the following resources to reinforce your understanding of React fundamentals, including **components**, **props**, and **state**.

---

## Thinking in React

The **Thinking in React** guide introduces React's approach to building user interfaces.

### You'll learn how to:

* Break a UI into a component hierarchy
* Build a static version of the interface
* Identify the minimal representation of state
* Determine where state should live
* Implement inverse data flow

> **Why it matters:** This guide teaches the core React mindset and how to design scalable, maintainable applications.

---

## 🎮 Tutorial: Tic-Tac-Toe

Build a complete Tic-Tac-Toe game while applying React fundamentals.

### You'll practice:

* Creating and nesting components
* Passing data with props
* Managing state
* Handling user interactions
* Implementing time travel (undo/redo)

> **Why it matters:** This tutorial combines the core React concepts in a real-world project, helping you gain practical experience.

---

## ✅ Next Steps

* Component-based architecture
* Props and data flow
* State management
* React's declarative programming model
* Building interactive React applications
