# TypeScript Functions Tutorial

This branch contains examples of TypeScript functions designed to teach various aspects of function creation and usage in TypeScript, including string manipulation, object handling, and advanced function techniques.

## Tutorial Content

This repository includes several TypeScript functions:

### Simple Greeting Function:

```typescript
function greet(name: string): string {
	return `Hello, ${name}!`
}
```

### Function Using Interface:

```typescript
interface IUser {
	firstName: string
	age: number
	email?: string // Optional property
}

function greetPerson(person: IUser): string {
	return `Hello, soy ${person.firstName} y tengo ${person.age}!`
}
```

### Function With Destructuring:

```typescript
function greetWithDestructure({ firstName, age }: IUser): string {
	return `Hello, soy ${firstName} y tengo ${age}!`
}
```

### Advanced User Information Printing Function:

```typescript
function printUserInfo(user: IUser): void {
	if (user.email) {
		console.log(`Email: ${user.email}`)
	} else {
		console.log("No email provided.")
	}
}
```

## Examples

You can find examples of how to call these functions in the code comments. To test a specific function, uncomment the relevant lines in the TypeScript files, compile and run them as described in the Getting Started section.
