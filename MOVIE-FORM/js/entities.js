function Genre(name) {

    this.name = name;
};

Genre.prototype.getData = function () {
    return this.name[0].concat(this.name[this.name.length - 1]).toUpperCase();  //action -> AN
}

// Create genres

// var action = new Genre('action');
// var drama = new Genre('drama');
// var comedy = new Genre('comedy');
// console.log(action.getData());

function Movie(title, genre, length) {

    this.title = title;
    this.genre = genre;
    this.length = length;
};


Movie.prototype.getData = function () {
    return this.title.concat(', ', this.length, ', ', this.genre.getData());
};

