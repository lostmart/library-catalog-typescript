# TypeScript: Objects and Enmus

This repository contains the implementation of a simple user management system, demonstrated via a web application. The system utilizes TypeScript for type-safety and structured object management. The core of the application is built around a model of user entities where each user has distinct properties and behaviors. The application is composed of an HTML file (index.html) that links to a JavaScript file (index.js), which includes the TypeScript code transcompiled into JavaScript.

## Features

- **TypeScript Integration:** Utilizes TypeScript for defining types and interfaces, ensuring type safety and enhancing code readability and maintenance.
- **User Model:** Defines a IUser interface representing user entities with properties such as firstName, age, admin, and role.
- **Role Management:** Uses an enumeration (Rol) to manage user roles within the system, like Coordinator and Professor.
- **Interactive Greetings:** Each user object has a method sayHello to generate a greeting message, demonstrating method implementation in interfaces.

## Structure

- **index.html:** The main HTML document that serves as the entry point for the web application. It primarily links to the index.js script.
- **index.ts** The Typescript code that needs to be compilied using the command `tsc index.ts`

## Code Example

```typescript
interface IUser {
	firstName: string
	age: number
	admin: boolean
	role: Rol
	sayHello: () => string
}

enum Rol {
	Cordinador = "Cordinador",
	Profesor = "Profesor",
}

const userOne: IUser = {
	firstName: "Bob",
	age: 45,
	admin: true,
	role: Rol.Cordinador,
	sayHello: function () {
		return `Hello I am ${this.firstName} and I am a ${this.role}`
	},
}

console.log(userOne.sayHello())
```
