/// Person ///

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function () {
    return this.name + ' ' + this.surname;
}



/// Employee ///

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


Employee.prototype.getData = function () {
    var personPrototype = Object.getPrototypeOf()
    return this.name + ' ' + this.surname + ' ' + this.salary;
}




Employee.prototype.getSalary = function () {
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function () {
    var salaryNum = parseFloat(this.salary);
    this.salary = (salaryNum + (salaryNum / 100 * 10)) + ' eur';
}

// console.log(parseFloat('1123,2'));
// var num = 100;
// var increasedNum = num + (num / 100 * 10);
// console.log(increasedNum);




/// Developer ///

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary)
    this.specialization = specialization;
}

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

// Povezivanje Developer-a sa Employee
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;




/// Manager ///

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}

// Povezivanje Manager-a sa Employee
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;









var dusica = new Person('Dusica', 'Savic');
var laza = new Employee('Laza', 'Lazic', 'Waiter', '400.50 eur');
var milos = new Developer('Milos', 'Savic', 'Programmer', '3000 eur', 'Web Development');
var visnja = new Manager('Visnja', 'Lazic', 'Restaurant manager', '800 eur', 'Restaurant');

laza.increaseSalary();
// console.log(laza.salary);
// console.log(laza.getData());

console.log(visnja.getData());