var loginButton = document.querySelector('#loginButton');

loginButton.onclick = function () {

    var userUsername = document.querySelector('#username').value;
    var userPassword = document.querySelector('#password').value;


    var loginStatusParagraph = document.querySelector('#loginStatus');

    // console.log(userUsername, userPassword);
    var user = new User(userUsername, userPassword);

    // console.log(userDatabase.checkUser(user));

    if (userDatabase.checkUser(user) == true) {
        loginStatusParagraph.textContent = 'Welcome!';
    } else {
        loginStatusParagraph.textContent = 'Wrong username and/or password!'
    }

}