# TypeScript Basics Example

This repository contains TypeScript code that showcases basic type annotations, inference, explicit declarations, and the use of union types. The examples provided in the code are simple yet fundamental to understanding how TypeScript enhances JavaScript by adding type safety.

## Overview

The code demonstrates the following TypeScript concepts:

- **Type Inference:** TypeScript automatically inferring the type of variables based on the assigned values.
- **Explicit Type Declaration:** Specifying types explicitly for better code predictability and robustness.
- **Union Types:** Allowing a variable to hold more than one type of value.

## Files

The branch repository includes the following file:

`index.ts:` Contains the TypeScript code demonstrating various type declarations and operations.
`index.html:` Contains an HTML 5 code linked to the index.js file
`index.js:` The compiled TypeScript file into Javascript

## Requirements

To run this TypeScript code, you will need:

- Node.js
- TypeScript

You can install TypeScript globally via npm with the following command:

```bash
npm install -g typescript
```

## Running the Code

To run the TypeScript file, first ensure you have TypeScript installed. Then, you can compile the TypeScript file to JavaScript using the TypeScript Compiler (tsc):

```bash
tsc index.ts -w
```

Thern open the index.html with Live Server on you VS code

### Example Code Description

Here is a breakdown of what each section in the index.ts file represents:

- **Type Inference:** Variables like firstName, age, admin, and laCosa have their types inferred by TypeScript:
  - `firstName` is inferred as `string`
  - `age` is inferred as `number`
  - `admin` is inferred as `boolean`
  - `laCosa` is inferred as `null`
- **Explicit Declaration:** Variables `bookName` and `date` are explicitly declared with types `string` and `number` respectively.

The example concludes with using `userName` and demonstrating a method (toUpperCase()) that is valid for strings, ensuring type safety.
