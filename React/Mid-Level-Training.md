# React Prerequisites

Before learning React, you should be comfortable with modern JavaScript (ES6+) and have a basic development environment ready.

---

# Table of Contents

- Developer Tools
- JavaScript Fundamentals
  - Modules (Export / Import)
  - let vs const
  - Spread Syntax
  - Rest Parameters
  - Destructuring
  - Arrow Functions
  - Array Methods
  - Promises & Async/Await
- Additional Learning Resources
- Next Steps

---

# Developer Tools

| Tool | Purpose |
|------|---------|
| **Node.js (v16+)** | JavaScript runtime required for React development |
| **npm** | Package manager included with Node.js |
| **Visual Studio Code** | Recommended code editor |
| **StackBlitz** | Browser-based IDE used during the certification |
| **React Developer Tools** | Inspect React components and state |
| **ESLint** | Detects code issues |
| **Prettier** | Automatically formats your code |

---

# JavaScript Fundamentals

React is built on modern JavaScript (ES6+). These concepts are used constantly when building React applications.

## Topics Covered

- Modules (Export / Import)
- `let` and `const`
- Spread Syntax (`...`)
- Rest Parameters
- Destructuring
- Arrow Functions
- Array Methods
- Promises
- Async/Await

---

# Modules (Export / Import)

Modules allow you to split your application into reusable files.

## Example

```js
// Export
export const PI = 3.14;

export function square(x) {
  return x * x;
}

export default class Calculator {}
```

```js
// Import
import Calculator from "./calculator.js";
import { PI, square } from "./math.js";
import * as MathUtils from "./mathUtils.js";
```

### Key Takeaways

- `export default` → one default export per file.
- `export` → multiple named exports.
- `import * as` → import everything into an object.

---

# let vs const

Modern JavaScript replaces `var` with `let` and `const`.

| Keyword | Can be Reassigned? | Scope |
|----------|--------------------|-------|
| `const` | ❌ No | Block |
| `let` | ✅ Yes | Block |

Use **const by default**.

Use **let** only when reassignment is required.

```js
const API_URL = "https://api.example.com";

let counter = 0;
counter++;
```

---

# Spread Syntax (`...`)

Expands arrays and objects.

```js
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];
```

```js
const defaults = {
  color: "blue",
  size: "medium",
};

const props = {
  color: "red",
};

const finalProps = {
  ...defaults,
  ...props,
};
```

React commonly uses spread syntax when updating state or passing props.

---

# Rest Parameters

Collect multiple arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1,2,3,4);
```

---

# Destructuring

Extract values from arrays or objects.

```js
const { name, age } = user;

const [first, second] = array;
```

Skip values when needed.

```js
const [x, , z] = [10,20,30];
```

Destructuring is heavily used in React components.

---

# Arrow Functions

Arrow functions provide a shorter syntax and inherit `this` from the surrounding scope.

## Traditional Function

```js
function add(a, b) {
  return a + b;
}
```

## Arrow Function

```js
const add = (a, b) => a + b;
```

## Comparison

| Traditional Function | Arrow Function |
|----------------------|----------------|
| Own `this` | Lexical `this` |
| Own `arguments` | No `arguments` |
| Can be used with `new` | Cannot |
| Longer syntax | Shorter syntax |

### React Best Practices

✅ Use arrow functions for:

- Components
- Event handlers
- Callbacks
- `map()`
- `filter()`
- `reduce()`

Use traditional functions when you need your own `this`.

---

# Common Array Methods

React frequently renders lists by transforming arrays.

## map()

Transforms every element.

```js
const doubled = numbers.map(n => n * 2);
```

---

## filter()

Returns matching elements.

```js
const even = numbers.filter(n => n % 2 === 0);
```

---

## reduce()

Produces a single value.

```js
const total = numbers.reduce(
  (sum, n) => sum + n,
  0
);
```

---

# Promises & Async/Await

Asynchronous code is essential when working with APIs.

## Promise

```js
fetch("/api/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(console.error);
```

## Async / Await

```js
async function getData() {
  try {
    const response = await fetch("/api/data");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
```

Async/await provides cleaner and more readable asynchronous code.

---

# Additional Learning Resources

## Thinking in React

Learn how to:

- Break a UI into components
- Build a static interface
- Identify application state
- Decide where state belongs
- Implement inverse data flow

**Why it matters**

This guide teaches the React mindset and component architecture.

---

## Tic-Tac-Toe Tutorial

Build a complete React application while practicing:

- Components
- Props
- State
- Event handling
- Time travel (undo/redo)

**Why it matters**

It combines all React fundamentals into a practical project.

---

# Next Steps

After mastering these JavaScript concepts, continue with:

- Components
- JSX
- Props
- State
- Event Handling
- Conditional Rendering
- Lists & Keys
- Forms
- Hooks (`useState`, `useEffect`)
- Component Composition

---

# Quick Revision

Before starting React, make sure you understand:

- ✅ ES6 Modules
- ✅ let vs const
- ✅ Spread & Rest
- ✅ Destructuring
- ✅ Arrow Functions
- ✅ Array Methods
- ✅ Promises
- ✅ Async/Await

These concepts form the foundation of modern React development.
