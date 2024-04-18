// Enum for user roles
var Rol;
(function (Rol) {
    Rol["Cordinador"] = "Cordinador";
    Rol["Profesor"] = "Profesor";
})(Rol || (Rol = {}));
// User class implementing IUser
var User = /** @class */ (function () {
    // Constructor to initialize the properties
    function User(firstName, age, admin, role) {
        this.firstName = firstName;
        this.age = age;
        this.admin = admin;
        this.role = role;
        this.firstName = firstName;
        this.age = age;
        this.admin = admin;
        this.role = role;
    }
    // Getter method for firstName
    User.prototype.getFirstName = function () {
        return "Hey my name is ".concat(this.firstName);
    };
    // Getter method for role
    User.prototype.getRole = function () {
        return this.role;
    };
    // Method to execute sayHello function
    User.prototype.sayHello = function () {
        return "hi how are you ?";
    };
    return User;
}());
var userOne = new User("Bob", 32, true, Rol.Cordinador);
console.log(userOne.getFirstName());
