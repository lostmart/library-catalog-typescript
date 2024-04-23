import { Genre } from "../models/models.js"

export interface IBook {
	id: number
	title: string
	author: string
	genre: Genre
}

export interface IUser {
	id: number
	name: string
	borrowedBooks: IBook[]
}
