const dataModule = (function () {

    const storage = {
        tasks: []
    };

    class Task {
        constructor(name, date) {
            this.name = name;
            this.date = date;
        }

        getInfo() {
            return `${this.name}, 
            ${this.date}`
        }
    }



})()