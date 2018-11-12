/// Person ///

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name}, ${this.surname}`;
    }

}


/// Employee ///

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }

    getData() {
        return `${super.getFullName()} ${this.salary}`;
    }

    getSalary() {
        console.log(this.salary);
    }

    increaseSalary() {
        const salaryNum = parseFloat(this.salary);
        this.salary = (salaryNum + (salaryNum / 100 * 10)) + ' eur';
    }
}


/// Developer ///

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary)
        this.specialization = specialization;

    }
    getSpecialization() {
        console.log(this.specialization);
    }
}


/// Manager ///

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }

    getDepartment() {
        console.log(this.department);
    }

    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }

}








var dusica = new Person('Dusica', 'Savic');
var laza = new Employee('Laza', 'Lazic', 'Waiter', '400.50 eur');
var milos = new Developer('Milos', 'Savic', 'Programmer', '3000 eur', 'Web Development');
var visnja = new Manager('Visnja', 'Lazic', 'Restaurant manager', '800 eur', 'Restaurant');

laza.increaseSalary();
// console.log(laza.salary);
console.log(laza.getData());

// console.log(visnja.getData());