// arrays

// Declaring an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5]
// console.log(numbers);

// Declaring an array of strings
let fruits: string[] = ["Apple", "Orange", "Banana"]
// console.log(fruits);

// tuple
//let book: [string, number] = ["Alice", 30]

// explicit type
let book: (string | number | boolean)[] = ["Lord of The Rings", 2001]
// book.push(true)

book.push("hi")

book.push(true)

book.push(23)

// console.log(book)

// array of objects
interface Student {
	id: number
	name: string
	grade: number
}

// Array of students
let students: Student[] = [
	{ id: 1, name: "John", grade: 88 },
	{ id: 2, name: "Jane", grade: 92 },
	{ id: 3, name: "Bob", grade: 75 },
]

// console.log(students)

// Adding a new student to the array
students.push({ id: 4, name: "Alice", grade: 85 })

const userOther = {
	id: 6,
	name: "Bob",
	grade: 23,
}

students.push(userOther)

console.log(students)
