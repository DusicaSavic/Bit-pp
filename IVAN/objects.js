// type - string
// strength - umber
// sugar - number
// milk - boolean

// addSugar
// printInfo

function Coffee(type, strength, sugar, milk) {
    this.typeOfCoffee = type,
        this.coffeeStrength = strength,
        this.sugar = sugar,
        this.whitMilk = milk,
        this.addSugar = function () {
            this.sugar++;
        },
        this.printInfo = function () {
            console.log("Our coffee is: " + this.typeOfCoffee);
            // 1 or 2 --> weak
            // 3 or 4 --> regular
            // 5 or 6 --> strong

            switch (this.coffeeStrength) {
                case 1:
                case 2:
                    console.log("Weak coffee.");
                    break;
                case 3:
                case 4:
                    console.log("Regular coffee.");
                    break;
                case 5:
                case 6:
                    console.log("Strong coffee.");
                    break;
            }

            // 2 > sweet coffee

            if (this.sugar > 2) {
                console.log("Super sweet coffee.");
            } else {
                console.log("Not so sweet.");
            }

            var milkMessage;
            milkMessage = (this.whitMilk == true) ? "Whit milk." : "Without milk.";
            console.log(milkMessage);
        }
}

var ourCoffee = new Coffee("mocha", 6, 1, true);
ourCoffee.printInfo();
ourCoffee.addSugar();
ourCoffee.addSugar();
ourCoffee.printInfo();
// console.log(ourCoffee);