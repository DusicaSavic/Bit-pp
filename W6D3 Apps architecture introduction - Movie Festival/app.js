var dataModule = (function () {

    var data = {
        movies: []
    };

    function Movie(title, genre, length) {
        this.genre = genre;
        this.title = title;
        this.length = length;
    }

    Movie.prototype.getData = function () {
        return (
            this.title +
            ", duration: " +
            this.length +
            " min, genre: " +
            this.genre
        );
    };


    function createMovie(title, genre, length) {
        return new Movie(title, genre, length);
    }

    function addMovieToList(movie) {
        data.movies.push(movie);
    }

    return {
        createMovie: createMovie,
        addMovieToList: addMovieToList,
    }

})();

var uiModule = (function () {
    var $createMovieButton = document.querySelector("#createMovie");
    var $genre = document.querySelector("#genre");
    var $title = document.querySelector("#title");
    var $movieLength = document.querySelector("#movieLength");
    var $movieList = document.querySelector("#movieList");

    var $addMovieButton = document.querySelector("#add-movie");


    function collectFormInput() {

        return {
            title: $title.value,
            genre: $genre.value,
            length: $movieLength.value
        }
    };

    function displayMovie(movie) {

        var $li = document.createElement("li");

        $li.className = "list-group-item";
        $li.textContent = movie.getData();

        $movieList.appendChild($li);
    }

    function resetForm() {
        document.querySelector("#movieForm").reset();
    }



    return {
        collectFormInput: collectFormInput,
        displayMovie: displayMovie,
        resetForm: resetForm
    }

})();

var controller = (function (ui, data) {

    var $createMovie = document.querySelector('#createMovie');

    $createMovie.addEventListener('click', function (event) {

        // collect form data
        var movieObj = ui.collectFormInput();
        // validate input

        // create movie
        var movieInstance = data.createMovie(movieObj.title, movieObj.genre, movieObj.length);

        // add movie to list
        data.addMovieToList();

        // display movie
        ui.displayMovie(movieInstance);

        // reset movie
        ui.resetForm();
    })


})(uiModule, dataModule);