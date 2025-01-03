# Learning JavaScript from the Beginning

**Starting on the First Day of 2025**

I am committing to pushing my progress to GitHub daily for 365 days.

---

## Day 2: Variables and Data Types

Today, I focused on understanding variables and the different data types in JavaScript.

---

## Day 3: Understanding `let`, `var`, and `const`

### `const`
- Used for variables that **do not change**.  
- Once a value is assigned to a `const` variable, it **cannot be reassigned or changed**.

### `let`
- Used for variables that **can change** or be reassigned.  
- You can reassign a `let` variable as many times as needed.

### `var`
- Variables declared with `var` have **function-level scope**:  
  - If declared inside a function, they are accessible throughout the function.  
  - If declared inside a block (like an `if` statement or a `for` loop), they **ignore the block scope** and are still accessible outside the block.

#### Example of `var` ignoring block boundaries:
```javascript
function testVar() {
  if (true) {
    var x = 10; // Declared inside the block
  }
  console.log(x); // Outputs: 10
}

testVar();
