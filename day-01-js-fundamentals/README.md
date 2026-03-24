# Day 01 — JavaScript Fundamentals

## Topics Covered

| File | Topic | Concepts |
|------|-------|----------|
| `01-variables.js` | Variables & Scope | `const`, `let`, `var`, block scope, hoisting |
| `02-arrow-functions.js` | Arrow Functions | Syntax, callbacks, `this`, chaining |
| `03-destructuring.js` | Destructuring | Objects, arrays, nesting, defaults, rest |
| `04-spread-rest.js` | Spread & Rest | Arrays, objects, function params |
| `05-array-methods.js` | Array Methods | `map`, `filter`, `reduce`, chaining, bonus methods |
| `06-problems.js` | Problem Solving | 3 core + 3 bonus problems |

## Key Takeaways

- Use `const` by default, `let` when reassignment is needed, never `var`
- Arrow functions are shorter and inherit `this` from parent scope
- Destructuring makes code cleaner — very common in React props
- Spread (`...`) unpacks; Rest (`...`) collects — same syntax, opposite direction
- `map` transforms, `filter` selects, `reduce` accumulates — chain them for clean data pipelines

## How to Run

```bash
node 01-variables.js
node 02-arrow-functions.js
node 03-destructuring.js
node 04-spread-rest.js
node 05-array-methods.js
node 06-problems.js
```

## Problems Solved

1. **Filter Even Numbers** — using `filter(n => n % 2 === 0)`
2. **Sum an Array** — using `reduce((acc, n) => acc + n, 0)`
3. **Capitalise Names** — using `map` + destructuring
4. *(Bonus)* Longest Word — `split` + `reduce`
5. *(Bonus)* Group by Category — `reduce` into an object
6. *(Bonus)* FizzBuzz — `Array.from` + `map`

## Status: ✅ Complete