// Enum for user roles
enum Rol {
	Cordinador = "Cordinador",
	Profesor = "Profesor",
}

// User interface definition
interface IUser {
	firstName: string
	age: number
	admin: boolean
	role: Rol
}

// User class implementing IUser
class User implements IUser {
	// Constructor to initialize the properties
	constructor(
		public firstName: string,
		public age: number,
		public admin: boolean,
		public role: Rol
	) {
		this.firstName = firstName
		this.age = age
		this.admin = admin
		this.role = role
	}

	// Getter method for firstName
	getFirstName(): string {
		return `Hey my name is ${this.firstName}`
	}

	// Getter method for role
	getRole(): Rol {
		return this.role
	}

	// Method to execute sayHello function
	sayHello(): string {
		return "hi how are you ?"
	}
}

const userOne = new User("Bob", 32, true, Rol.Cordinador)

console.log(userOne.getFirstName())
