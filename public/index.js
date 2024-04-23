import { Genre } from "./models/models.js";
const bookOne = {
    id: 123,
    title: "hello world",
    author: "Author one",
    genre: Genre.Fiction,
};
const bookTwo = {
    id: getRandomNumber(100, 10000),
    title: "hello world 2",
    author: "Author two",
    genre: Genre.Literature,
};
const userOne = {
    id: getRandomNumber(100, 10000),
    name: "Non",
    borrowedBooks: [bookOne, bookTwo],
};
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Usage
// const randomNumber = getRandomNumber(100, 10000)
// console.log(randomNumber)
console.log(userOne);
