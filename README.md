# TypeScript Classes Demo

This Typescript modeule includes definitions for user roles, a user interface, and a user class that implements this interface, focusing on basic attributes such as name, age, administrative status, and role.

## Features

- **User Role Enumeration:** Defines specific roles within the system, which currently include "Cordinador" and "Profesor".
- **User Interface (IUser):** Ensures consistency for user objects by specifying required properties and methods.
- **User Class Implementation:** Implements the IUser interface, providing methods to retrieve user details and greet the user.

## Usage

### Creating a User Instance

To create a user instance, you need to provide the user's first name, age, admin status (boolean), and their role (as defined by the Rol enum).

Example:

```typescript
const userOne = new User("Bob", 32, true, Rol.Cordinador)
```

### Accessing User Information

You can retrieve the user's first name and their role using the methods `getFirstName()` and `getRole()` respectively.

```javascript
console.log(userOne.getFirstName()) // Output: "Hey my name is Bob"
console.log(userOne.getRole()) // Output: Rol.Cordinador
```

### Interacting with the User

You can greet the user using the sayHello() method.

```javascript
console.log(userOne.sayHello()) // Output: "hi how are you ?"
```
