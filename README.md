# TypeScript Arrays Demo

This repository showcases basic operations with arrays in TypeScript, illustrating how to declare and manipulate arrays of various data types including numbers, strings, tuples, and objects. The examples demonstrate the utility of TypeScript's type system in everyday coding scenarios to manage collections of data efficiently and with type safety.

## Features

- **Typed Arrays:** Demonstrates the creation and usage of arrays with specific types like numbers and strings to ensure data consistency.
- **Tuples and Mixed Type Arrays:** Introduces tuples for fixed-size arrays and arrays that can hold multiple data types, allowing for complex data structures.
- **Interface Implementation:** Uses interfaces to define the structure of objects within an array, enhancing the robustness of the code.
- **Dynamic Array Manipulations:** Covers basic array operations such as adding elements and logging the entire array to the console, showcasing real-time data management.

## Code Snippet

Below is a highlighted snippet from the codebase:

```typescript
// Declaring an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5]

// Declaring an array of strings
let fruits: string[] = ["Apple", "Orange", "Banana"]

// Array of mixed types
let book: (string | number | boolean)[] = ["Lord of The Rings", 2001, true]

// Array of objects using interface
interface Student {
	id: number
	name: string
	grade: number
}

let students: Student[] = [
	{ id: 1, name: "John", grade: 88 },
	{ id: 2, name: "Jane", grade: 92 },
	{ id: 3, name: "Bob", grade: 75 },
	{ id: 4, name: "Alice", grade: 85 },
	{ id: 6, name: "Bob", grade: 23 },
]

console.log(students)
```
