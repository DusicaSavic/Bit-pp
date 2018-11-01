function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

App.prototype.getData = function () {
    return this.name + ", " + this.licence + ", " + this.stars;
}


App.prototype.check = function (arrOfStrings, word) {
    var belongsToArr = false;
    for (var i = 0; i < arrOfStrings.length; i++) {
        if (arrOfStrings[i] == word) {
            belongsToArr = true;
        }
    }
    return belongsToArr;
}

App.prototype.isCCLicence = function () {
    if (this.licence == 'CC' || this.licence == 'Creative Commons') {
        return true
    }
    return false;
}

App.prototype.like = function () {
    this.stars++;
}

App.prototype.showStars = function () {
    console.log(this.stars);
}

function WebApp(name, url, technologies, licence, stars) {

    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;

    // this.reactBased = function () {

    //     var isReactBased = false;

    //     for (var i = 0; i < this.technologies.length; i++) {
    //         var technology = this.technologies[i];
    //         if (technology == 'React') {
    //             isReactBased = true;
    //         }
    //     }

    //     return isReactBased;
    // }
}


// name, platforms, ..... forAndroid

function MobileApp(name, platforms, licence, stars) {

    App.call(this, name, licence, stars);
    this.platforms = platforms;

    this.forAndroid = function () {
        var isForAndroid = false;
        for (var i = 0; i < this.platforms.length; i++) {
            if (this.platforms[i] == 'Android') {
                isForAndroid = true;
            }
        }
        return isForAndroid;
    }
}




WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;



WebApp.prototype.reactBased = function () {
    var appPrototype = Object.getPrototypeOf(WebApp.prototype);
    var result = appPrototype.check.call(this, this.technologies, 'React');
    return result;
}





var coolinarika = new WebApp('Coolinarika', 'url', ['JS', 'Html', 'CSS', 'React', 'PHP'], 'Cl', 5);
coolinarika.like();
console.log(coolinarika.reactBased());
console.log(coolinarika.isCCLicence());
coolinarika.showStars();



