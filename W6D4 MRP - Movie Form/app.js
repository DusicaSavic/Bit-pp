var dataModule = (function () {

    var storage = {
        movies: []
    };


    function Movie(title, length, genre) {
        this.title = title,
            this.length = length,
            this.genre = genre
    }

    Movie.prototype.getData = function () {
        return this.title.concat(', ', this.length, ', ', this.genre);
    }

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);
    }

    function addMovieToList(movie) {
        storage.movies.push(movie);
    }

    function allMoviesLength() {

        var lengthOfAllMovies = 0;

        for (var i = 0; i < storage.movies.length; i++) {
            var movie = storage.movies[i];
            var movieLength = parseInt(movie.length);
            lengthOfAllMovies += movieLength;
        }

        return lengthOfAllMovies;
    }

    return {
        createMovie: createMovie,
        addMovieToList: addMovieToList,
        allMoviesLength: allMoviesLength
    }


})();

var uiModule = (function () {

    var $titleInput = document.querySelector('.title-content');
    var $lengthInput = document.querySelector('.length-content');
    var $genreInput = document.querySelector('.genre-select');
    var $movieList = document.querySelector('.movie-list');
    var $movieForm = document.querySelector('.movie-form');


    var $ul = document.createElement('ul');
    $movieList.appendChild($ul);

    function collectFormInput() {
        var title = $titleInput.value
        var length = $lengthInput.value
        var genre = $genreInput.value

        return {
            title: title,
            length: length,
            genre: genre
        }
    }

    function displayMovie(movie) {

        var $li = document.createElement('li');
        var movieData = movie.getData()
        $li.textContent = movieData;
        $ul.appendChild($li);

    }

    function displayLengthOfAllMovies(totalLength) {
        var $totalLength = document.querySelector('.total-length');
        var $p = document.createElement('p');
        $p.textContent = 'All movies length: ' + totalLength + 'min';
        $totalLength.appendChild($p);
    }

    function resetForm() {
        $movieForm.reset();

    }

    return {
        collectFormInput: collectFormInput,
        displayMovie: displayMovie,
        displayLengthOfAllMovies: displayLengthOfAllMovies,
        resetForm: resetForm
    }


})();

var controller = (function (data, ui) {

    function init() {
        setupEventListeners();
    }

    function setupEventListeners() {

        var $createMovieBtn = document.querySelector('.movie-button');
        $createMovieBtn.addEventListener('click', onCreateMovieHandler);



    }

    function onCreateMovieHandler(event) {

        //collect form data
        var movieObj = ui.collectFormInput()

        //create movie
        var title = movieObj.title;
        var length = movieObj.length;
        var genre = movieObj.genre;
        var movieInstance = data.createMovie(title, length, genre);

        //add movie to list
        data.addMovieToList(movieInstance);

        // display movie
        ui.displayMovie(movieInstance);

        // display total length of all movies
        var totalLength = data.allMoviesLength();
        ui.displayLengthOfAllMovies(totalLength);

        //reset movie form
        ui.resetForm();

    }

    return {
        init: init
    }

})(dataModule, uiModule);
