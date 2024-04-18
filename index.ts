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
}

let userOne: IUser

userOne = {
	firstName: "Bob",
	age: 45,
	admin: true,
}

// arrays
