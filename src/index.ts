import { Genre } from "./models/models.js"

import { IBook, IUser } from "./interfaces/interfaces.js"

const bookOne: IBook = {
	id: 123,
	title: "hello world",
	author: "Author one",
	genre: Genre.Fiction,
}

const bookTwo: IBook = {
	id: getRandomNumber(100, 10000),
	title: "hello world 2",
	author: "Author two",
	genre: Genre.Literature,
}

const userOne: IUser = {
	id: getRandomNumber(100, 10000),
	name: "Non",
	borrowedBooks: [bookOne, bookTwo],
}

function getRandomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

// Usage
// const randomNumber = getRandomNumber(100, 10000)
// console.log(randomNumber)

console.log(userOne)
