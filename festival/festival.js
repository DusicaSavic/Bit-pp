(function () {
  function Genre(name) {
    this.name = name;
    this.getData = function () {
      return (
        `${this.name[0].toUpperCase()} ${this.name[name.length - 1].toUpperCase()}`
      );
    };
  }

  function Movie(title, genre, length) {
    this.title = title;
    this.genre = new Genre(genre);
    this.length = length; //ToDo: length

    this.getData = function () {
      return (
        `${this.title},
         ${this.length}, 
         ${this.genre.getData()} `
      );
    };
  }

  function Program(date) {
    this.listOfMovie = [];
    this.date = date;
    this.totalNumberOfMovies = 0;
    this.addMovie = function (movie) {
      this.listOfMovie.push(movie);
      this.totalNumberOfMovies++;
    };

    this.getData = function () {
      let sum = 0;
      for (i = 0; i < this.listOfMovie.length; i++) {
        sum += this.listOfMovie[i].length;
      }
      let movieInfo = "";
      for (i = 0; i < this.listOfMovie.length; i++) {
        movieInfo += this.listOfMovie[i].getData();
      }

      return `${this.date},
               Program Duration ${sum},
              ${ movieInfo}`;
    };
  }

  function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.addProgram = function (program) {
      this.listOfPrograms.push(program);
    };
    this.getData = function () {
      let sum1 = 0;
      let programInfo = "";
      for (let i = 0; i < this.listOfPrograms.length; i++) {
        sum1 += this.listOfPrograms[i].totalNumberOfMovies;
      }
      for (let i = 0; i < this.listOfPrograms.length; i++) {
        programInfo += this.listOfPrograms[i].getData();
      }

      return programInfo;
    };
  }

  //ToDo createMovie
  function CreateMovie(title, genre, length) {
    return new Movie(title, genre, length);
  }

  function CreateProgram(date) {
    return new Program(date);
  }

  // ToDo --> cableGuy
  const CableGuy = CreateMovie("CableGuy", "Comedy", 90);
  const Comedy = CreateProgram("10/10/2019");

  const Prisoners = new Movie("Prisoners", "thriller", 130);
  const GetOut = new Movie("Get Out", "Horror", 120);
  const GreenMile = new Movie("Green Mile", "Drama", 140);
  const Action = new Program("12/12/2018");
  const Horror = new Program("12/12/2019");
  const CanFest = new Festival("Can Fest");

  Comedy.addMovie(CableGuy);
  Action.addMovie(Prisoners);
  Action.addMovie(GreenMile);
  Horror.addMovie(GetOut);
  CanFest.addProgram(Action);
  CanFest.addProgram(Horror);
  CanFest.addProgram(Comedy);

  console.log(CanFest.getData());
})();
