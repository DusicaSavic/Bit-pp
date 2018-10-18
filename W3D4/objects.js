// svojstva:
// korisnicko ime, sifra, godina, pol, email,
// da li radi sa JSom ili ne
// metode:
// proslaviti rodjendan, nauciti JS, promeniti sifru

// var user = {};    //prazan objekat


var user = {
    username: 'misa',
    password: 'misa123',
    age: 25,
    gender: 'm',
    email: 'misa@gmail.com',
    isJSprogrammer: false,
    birthday: function () {
        user.age++;
    },
    learnJS: function () {
        user.isJSprogrammer = true;
    },
    changePassword: function (newPassword) {
        user.password = newPassword;
    }
};

console.log(user.username);     // preferirana sintaksa
console.log(user['username']);    // ako koristimo uglaste zagrade, trebaju nam navodnici!

console.log(user.image);
console.log(user.isJSprogrammer);
user.learnJS();
console.log(user.isJSprogrammer);
user.changePassword('MisaJS');
console.log(user.password);
// user.changeImage();   // error
user.age = 30;

user.phone = '9039094';
console.log(user.phone);
console.log(delete user.phone);  //true
delete user.phone; // brisemo celo svojstvo (property)

user.age = undefined;  // na ovaj nacin brisemo vrednost svojstva