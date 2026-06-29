# TypeScript for React

TypeScript extends JavaScript with **static typing**, allowing you to catch errors before your code runs. It has become the standard choice for modern React applications thanks to its improved reliability, maintainability, and developer experience.

## Why Use TypeScript?

Using TypeScript with React offers several benefits:

- ✅ Catch errors at compile time
- ✅ Better IDE support (autocomplete, refactoring, navigation)
- ✅ Self-documenting code through type annotations
- ✅ Easier collaboration with clear component APIs
- ✅ Gradual adoption in existing JavaScript projects

---

## TypeScript in React

React supports TypeScript out of the box using **`.ts`** and **`.tsx`** files.

A typical React TypeScript project includes:

- `tsconfig.json`
- `.ts` and `.tsx` files
- `@types/react`
- `@types/react-dom`

Create a new React + TypeScript project with Vite:

```bash
npm create vite@latest my-app -- --template react-ts
```

---

## Core Concepts

Make sure you understand how to:

- Create custom types
- Type component props
- Type React Hooks
- Type event handlers
- Use common React types
- Understand type inference

---

# Creating Types

You can define custom types using either `type` or `interface`.

### Using `type`

```tsx
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
```

### Using `interface`

```tsx
interface User {
  id: number;
  name: string;
}
```

### `type` vs `interface`

| `type` | `interface` |
|---------|-------------|
| Can describe primitives, unions, tuples, and objects | Primarily used for object shapes |
| More flexible | Can be extended and merged |
| Common for aliases | Common for component props |

For React projects, both are widely used.

---

## Typing Component Props

```tsx
interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return <button>{label}</button>;
}
```

Props can include:

- Required properties
- Optional properties (`?`)
- Functions
- React children

```tsx
type TodoListProps = {
  title: string;
  onListChange: (todos: Todo[]) => void;
  children?: React.ReactNode;
};
```

---

## Typing Hooks

TypeScript often infers types automatically.

```tsx
const [text, setText] = useState("");
```

Specify a type when the initial value isn't enough:

```tsx
const [todos, setTodos] = useState<Todo[]>([]);
```

Nullable state:

```tsx
const [age, setAge] = useState<number | null>(null);
```

---

## Typing Functions

```tsx
function add(a: number, b: number): number {
  return a + b;
}
```

Function type:

```tsx
type AddFunction = (a: number, b: number) => number;
```

---

## Typing Events

React provides built-in event types.

```tsx
function handleInputChange(
  event: React.ChangeEvent<HTMLInputElement>
) {
  setInputText(event.currentTarget.value);
}
```

Common event types include:

- `ChangeEvent`
- `MouseEvent`
- `KeyboardEvent`
- `FormEvent`

---

## Type Inference

TypeScript automatically infers many types.

```tsx
const name = "John"; // string
const count = 0; // number
const isAdmin = true; // boolean
```

Only add explicit types when inference isn't sufficient or when it improves readability.

---

## Migrating a React Project

A typical migration involves:

1. Renaming files to `.ts` or `.tsx`
2. Defining data models
3. Typing component props
4. Typing function parameters and return values
5. Typing React Hooks
6. Fixing TypeScript compiler errors

Run the compiler to detect type issues:

```bash
npm run build
```

---

## Complete Example

```tsx
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  title: string;
  onListChange: (todos: Todo[]) => void;
  children?: React.ReactNode;
};

function TodoList({
  title,
  onListChange,
  children,
}: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setInputText(event.currentTarget.value);
  }

  function addTodo(): void {
    if (!inputText.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);
    onListChange(updatedTodos);
  }

  return (
    <div>
      <h2>{title}</h2>

      <input
        value={inputText}
        onChange={handleInputChange}
      />

      <button onClick={addTodo}>
        Add
      </button>

      {children}
    </div>
  );
}
```

---

## Study Checklist

Make sure you understand:

- [ ] `type` vs `interface`
- [ ] Typing objects and arrays
- [ ] Typing component props
- [ ] Optional properties (`?`)
- [ ] Function types
- [ ] Typing `useState`
- [ ] Nullable types (`number | null`)
- [ ] Typing React events
- [ ] Type inference
- [ ] Running the TypeScript compiler (`npm run build`)

---

## Additional Resources

- React Documentation – Using TypeScript
- TypeScript Handbook
- Vite React TypeScript Template
