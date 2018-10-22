// 10.Write objects representing a book, an animal, a person
var book1 = {
    title: "Harry Potter",
    author: "J.K. Rolling",
    published: 2005
};

var animal1 = {
    breed: "Dog",
    name: "Rusty",
    color: "brown",
    isHungry: function () {
        console.log("Yes");
    },
    likeToPlay: function () {
        return true;
    }
};

var person1 = {
    firstName: "Ivan",
    lastName: "Balic",
    age: 27,
    gender: "male",
    fullName: function () {
        console.log(this.firstName, " ", this.lastName);
    },
    mood: function (mood) {
        this.mood = mood;
    }
};
// console.log(person);

// person.mood("happy");
// console.log(person.mood);
// console.log(person);

function Book(title, author, published) {
    this.title = title;
    this.author = author;
    this.published = published;
}

function Animal(breed, name, color) {
    this.breed = breed;
    this.name = name;
    this.color = color;
    this.isHungry = function () {
        console.log("Yes");
    };
    this.likeToPlay = function () {
        return true;
    };
}

function Person(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.fullName = function () {
        console.log(this.firstName, " ", this.lastName);
    };
    this.mood = function (mood) {
        this.mood = mood;
    };
}

book2 = new Book("Object Oriented Programing", "S.Stoymenov", 2010);
animal2 = new Animal("Cat", "Lav", "gray");
person2 = new Person("Dragan", "Matejevic", 23, "male");

console.log(book2);
console.log(animal2);
console.log(person2);
