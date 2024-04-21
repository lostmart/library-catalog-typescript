function greet(name) {
    return "Hello, ".concat(name, "!");
}
function greetPerson(person) {
    return "Hello, soy ".concat(person.firstName, " y tengo ").concat(person.age, "!");
}
var person = {
    firstName: "Bob",
    age: 32,
};
//console.log(greetPerson(person))
function greetWithDestructure(_a) {
    var firstName = _a.firstName, age = _a.age;
    return "Hello, soy ".concat(firstName, " y tengo ").concat(age, "!");
}
// console.log(greetWithDestructure(person)) // Output: Hello, Bob Smith!
function printUserInfo(user) {
    // console.log(`ID: ${user.id}, Name: ${user.name}`)
    if (user.email) {
        console.log("Email: ".concat(user.email));
    }
    else {
        console.log("No email provided.");
    }
}
printUserInfo(person);
