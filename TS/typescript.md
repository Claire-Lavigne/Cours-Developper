[typescript-enum-type-interface.md](https://github.com/user-attachments/files/26058196/typescript-enum-type-interface.md)
# TypeScript: `enum` vs `type` vs `interface`

## 1. `enum`

- Defines a set of **named constants**.
- Values exist at runtime.

### Example: Numeric enum
```ts
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}
```

### Example: String enum
```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}
```

- Useful for a finite, fixed set of options.
- Less flexible: can’t directly form unions of enums and extra values without more work.

## 2. `type`

- Alias for types: **primitives, unions, objects, tuples**.
- Doesn’t exist at runtime (compile time only).

### Examples
```ts
type Direction = "up" | "down" | "left" | "right";
type User = { id: number; name: string };
type Mixed = string | number | boolean;
```

- Flexible: combine with intersections (`&`), unions (`|`), etc.

## 3. `interface`

- Describes the **shape of objects**: properties & methods.
- Also compile-time only.
- Supports extension via `extends`.
- Supports **declaration merging** (you can declare the same interface name multiple times and their members are merged by the compiler).

### Example
```ts
interface User {
  id: number;
  name: string;
  login(): void;
}

interface Admin extends User {
  role: string;
}
```

## Key Differences & Comparisons

| Feature | `enum` | `type` | `interface` |
|---|---|---|---|
| Runtime presence | ✅ exists at runtime | ❌ no runtime counterpart | ❌ no runtime counterpart |
| Use for union types / literals | more awkward unless using string enums or mapping | ✅ good for unions of literal types | ❌ interfaces can’t represent unions directly |
| Extensibility / merging | ❌ enums can’t be merged | ❌ type aliases can’t be reopened or merged | ✅ interfaces support declaration merging and extends |
| Aliasing primitives or tuples | ❌ enums only constant sets | ✅ yes | ❌ only for object shapes |
| Performance / behavior during compilation | enums generate extra JS code; types/interfaces do not | types are compile-time only | interfaces compile away too |
