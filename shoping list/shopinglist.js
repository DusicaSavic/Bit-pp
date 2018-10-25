(function() {
  function Product(name, price, expirationDate) {
    this.id = Math.floor(Math.random() * 99000 + 10000);
    this.name = name;
    this.price = price.toFixed(2);
    this.expirationDate = expirationDate;

    this.GetInfo = function() {
      var letter;
      letter = this.name[0] + this.name[name.length - 1].toUpperCase();

      return letter + this.id + ", " + this.name + ", " + this.price;
    };
  }

  function ShoppingBag() {
    this.listOfProducts = [];

    var date = new Date();
    var date1;
    for (i = 0; i < this.listOfProducts.length; i++) {
      date1 = this.listOfProducts[i].expirationDate;
    }

    this.addProduct = function(product) {
      this.listOfProducts.push(product);
    };

    this.averagePrice = function() {
      var sum = 0;
      for (i = 0; i < this.listOfProducts.length; i++) {
        sum += this.listOfProducts[i].price / this.listOfProducts.length;
      }

      return sum;
    };

    this.getMostExpensive = function() {
      var res = [];

      for (i = 0; i < this.listOfProducts.length; i++) {
        res[i] = this.listOfProducts[i].price;
      }
      res = res.sort(function(a, b) {
        return a - b;
      });

      return res[res.length - 1];
    };

    this.totalPrice = function() {
      var totalPrice = 0;

      for (i = 0; i < this.listOfProducts.length; i++) {
        totalPrice += parseInt(this.listOfProducts[i].price);
      }
      return totalPrice;
    };
  }

  function Paymentcard(accountBalance, date) {
    this.accountBalance = accountBalance;
    this.date = new Date(date);

    this.isActive = function() {
      var dateNow = new Date();

      if (dateNow <= this.date) {
        return "valid date";
      } else {
        return "Invalid date";
      }
    };
  }

  function CheckOutAndBuy(paymentcard, shoppingBag) {
    if (paymentcard.accountBalance > shoppingBag.totalPrice()) {
      return "successful purchase";
    } else {
      return (
        shoppingBag.totalPrice() -
        paymentcard.accountBalance +
        " amount of money missing"
      );
    }
  }

  var card = new Paymentcard(100, "9/25/2016");

  var Banana = new Product("Banana", 200, "10/10/2017");
  var Ananas = new Product("Ananas", 300, "03/03/2019");
  var Limun = new Product("Limun", 200, "02/03/2019");
  var Jabuka = new Product("Jabuka", 50, "04/05/2018");

  var MaxiBag = new ShoppingBag();

  MaxiBag.addProduct(Banana);
  MaxiBag.addProduct(Ananas);
  MaxiBag.addProduct(Limun);
  MaxiBag.addProduct(Jabuka);

  console.log(MaxiBag.totalPrice());
  console.log(CheckOutAndBuy(card, MaxiBag));
})();
