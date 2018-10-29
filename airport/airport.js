(function () {
    console.log('Hi');

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return name + ' ' + surname;
        };
    }

    function Seat(number, category) {

        this.number = number;
        this.category = category;

        if (typeof number === 'undefined' || number === '') {

            this.number = Math.floor((Math.random() * 90) + 10);
        }
        if (typeof category === 'undefined') {

            this.category = 'e';
        }

        this.getData = function () {
            return this.number + ', ' + this.category.toUpperCase();
        };
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return seat.getData() + ', ' + person.getData();
        };
    }

    function Flight(relation, date) {

        this.relation = relation;
        this.date = date.toLocaleDateString();
        this.listOfPassengers = [];

        this.addPassenger = function (newPassenger) {
            this.listOfPassengers.push(newPassenger);
        };
        this.getData = function () {

            var final = '\t' + this.listOfPassengers[0].getData() + '\n';
            for (var i = 1; i < this.listOfPassengers.length; i++) {


                final += '\t' + this.listOfPassengers[i].getData() + '\n';
            }

            return this.date + ', ' + this.relation + '\n' + final;
        }
    }

    function Airport(name) {
        this.name = name;
        this.listOfFlights = [];

        this.addFlight = function (newFlight) {
            this.listOfFlights.push(newFlight);
        };
    }

    function createPassenger(name, surname, seatNumber, category) {

        var randomPerson = new Person(name, surname);
        var randomSeat = new Seat(seatNumber, category);
        var randomPassenger = new Passenger(randomPerson, randomSeat);

        return randomPassenger.getData();

    }

    var tri = createPassenger('visnja', 'Mrdelj', '', 'b');
    console.log(tri)



    var person1 = new Person('Dusica', 'Savic');
    console.log(person1.getData());

    var person2 = new Person('Visnja', 'Djukic');
    var seat2 = new Seat();

    var seat1 = new Seat('', 'b');
    console.log(seat1.getData());

    var passenger1 = new Passenger(person1, seat1);
    var passenger2 = new Passenger(person2, seat2);

    console.log(passenger1.getData());
    console.log(passenger2.getData());

    var flight1 = new Flight("Belgrade-Paris", new Date("2018-12-31"));
    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    // console.log(flight1.listOfPassengers);

    console.log(flight1.getData());


})();




