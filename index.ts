function greet(name: string): string {
	return `Hello, ${name}!`
}

// console.log(greet("Alice")) // Output: Hello, Alice!

// User interface definition
interface IUser {
	firstName: string
	age: number
	email?: string // Optional property
}

function greetPerson(person: IUser): string {
	return `Hello, soy ${person.firstName} y tengo ${person.age}!`
}

const person = {
	firstName: "Bob",
    age: 32,
}

//console.log(greetPerson(person))

function greetWithDestructure({ firstName, age }: IUser): string {
	return `Hello, soy ${firstName} y tengo ${age}!`
}

// console.log(greetWithDestructure(person)) // Output: Hello, Bob Smith!

function printUserInfo(user: IUser): void {
	// console.log(`ID: ${user.id}, Name: ${user.name}`)
	if (user.email) {
		console.log(`Email: ${user.email}`)
	} else {
		console.log("No email provided.")
	}
}

printUserInfo(person)