const dataModule = (function () {

    const storage = {
        movies: []
    };


    class Movie {
        constructor(title, length, genre) {
            this.title = title,
                this.length = length,
                this.genre = genre
        }

        getData() {
            // return this.title.concat(', ', this.length, ', ', this.genre);

            return `${this.title}, ${this.length}, ${this.genre}`;
        }
    }

    const createMovie = ({ title, length, genre }) => new Movie(title, length, genre)

    const addMovieToList = movie => {
        storage.movies.push(movie);
    }

    const allMoviesLength = () => {

        let lengthOfAllMovies = 0;

        for (let i = 0; i < storage.movies.length; i++) {
            const movie = storage.movies[i];
            const { length } = movie
            const movieLength = Number.parseInt(length);
            lengthOfAllMovies += movieLength;
        }

        return lengthOfAllMovies;
    }

    return {
        createMovie,
        addMovieToList,
        allMoviesLength
    }


})();

const uiModule = (function () {

    const $titleInput = document.querySelector('.title-content');
    const $lengthInput = document.querySelector('.length-content');
    const $genreInput = document.querySelector('.genre-select');
    const $movieList = document.querySelector('.movie-list');
    const $movieForm = document.querySelector('.movie-form');


    const collectFormInput = () => ({
        title: $titleInput.value,
        length: $lengthInput.value,
        genre: $genreInput.value

    });

    // const collectFormInput = () => {
    //     return {
    //         title : $titleInput.value,
    //         length : $lengthInput.value,
    //         genre : $genreInput.value
    //     }
    // };

    const displayMovie = movie => {

        const $li = document.createElement('li');
        const movieData = movie.getData()
        $li.textContent = movieData;
        $movieList.appendChild($li);

    };

    const displayLengthOfAllMovies = totalLength => {

        const $totalLength = document.querySelector('.total-length');
        $totalLength.innerHTML = `All movies length: ${totalLength} min`;

    }

    const resetForm = () => {

        $movieForm.reset();

    }


    return {
        collectFormInput,
        displayMovie,
        displayLengthOfAllMovies,
        resetForm
    }


})();

var controller = (function (data, ui) {


    const init = () => {
        setupEventListeners();
    };

    const setupEventListeners = () => {

        const $createMovieBtn = document.querySelector('.movie-button');
        $createMovieBtn.addEventListener('click', onCreateMovieHandler);
    }


    const onCreateMovieHandler = event => {

        //collect form data
        const movieObj = ui.collectFormInput();

        //create movie
        // let { title, length, genre } = movieObj;
        const movieInstance = data.createMovie(movieObj);

        //add movie to list
        data.addMovieToList(movieInstance);

        // display movie
        ui.displayMovie(movieInstance);

        // display total length of all movies
        const totalLength = data.allMoviesLength();
        ui.displayLengthOfAllMovies(totalLength);

        //reset movie form
        ui.resetForm();

    }

    return {
        init
    }

})(dataModule, uiModule);
