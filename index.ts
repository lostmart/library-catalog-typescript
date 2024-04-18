// objects
// inference
// let user = {
// 	firstName: "",
// }

// user.firstName = "bob"

// explicit type / interface

interface IUser {
	firstName: string
	age: number
	admin: boolean
	role: Rol
	sayHello: () => string
}

// type TFirstName = string | null

// type TUser = {
// 	firstName: string
// 	age: number
// 	admin: boolean
// 	role: Rol
// 	sayHello: Function
// }

// let userOne: IUser

// enum

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

const userTwo: IUser = {
	firstName: "Charlie",
	age: 34,
	admin: false,
	role: Rol.Profesor,
	sayHello: function () {
		return `Hello I am ${this.firstName} and I am a ${this.role}`
	},
}

console.log(userTwo.sayHello())
