console.log('Hello');


function User(username, password) {
    this.username = username;
    this.password = password;
}


User.prototype.getData = function () {
    console.log(this.username + ' ' + this.password);
}

var pera = new User('pera', 'pera123');
var peraFake = new User('pera', 'pera1234');
var zika = new User('zika', 'zika123');
var mara = new User('mara', 'mara123');

// console.log(pera);
// pera.getData();


function UserDatabase(name) {
    this.name = name;
    this.users = [];
}

UserDatabase.prototype.addUser = function (user) {
    this.users.push(user);
};

UserDatabase.prototype.checkUser = function (user) {
    for (var i = 0; i < this.users.length; i++) {
        var currentUser = this.users[i];
        if (currentUser.username == user.username && currentUser.password == user.password) {
            return true;
        }
    }
    return false;
}

var userDatabase = new UserDatabase('test database');
userDatabase.addUser(pera);
userDatabase.addUser(zika);

// console.log(userDatabase.checkUser(peraFake));

