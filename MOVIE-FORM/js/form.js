var createMovieButton = document.querySelector('#button');

var lengthOfAllMovies = 0;

createMovieButton.onclick = function () {

    var movieGenre = document.querySelector('#genre').value;
    var genre = new Genre(movieGenre);

    var movieTitle = document.querySelector('#title').value;
    var movieLength = document.querySelector('#length').value;

    var movie = new Movie(movieTitle, genre, movieLength);
    //todo
    var movieParagraph = document.createElement('p');
    movieParagraph.textContent = movie.getData();
    var movieStatusDiv = document.querySelector('#movie-status');
    movieStatusDiv.appendChild(movieParagraph);

    lengthOfAllMovies += parseFloat(movieLength);

    var lengthParagraph = document.querySelector('#movies-length');
    lengthParagraph.textContent = 'All movies length: ' + lengthOfAllMovies;
}


