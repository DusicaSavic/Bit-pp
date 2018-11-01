
// ako je poziv za Point(): new Point();
function Point(x, y) {
    // var this = {};
    this.x = x;
    this.y = y;
    // return this;
}


// ako je poziv za Point(): Point();
function Point(x, y) {

    // this je window
    this.x = x;  // window.x = x;
    this.y = y;  // window.y = y;

    // return undefined
}



function Point(x, y) {
    this.x = x;
    this.y = y;
}
var p = new Point(3, 1);
p.distance = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};
var q = new Point(4, 5);
console.log(q.distance); // undefined
q.distance(); // Type Error
console.log(x); // Reference Error




function Point(x, y) {
    this.x = x;
    this.y = y;
}
var r = new Point(4, 5);
Point.prototype.distance = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
}
var q = new Point(4, 5);
q.distance();
console.log(r.distance());



function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getAuthor = function () {
    console.log(author);
}
var jsBook = new Book('The Definitive Guide to JS',
    'David Flanagan');
console.log(jsBook.getAuthor()); //Reference Error



function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getAuthor = function () {
    console.log(this.author);
}
var jsBook = new Book('The Definitive Guide to JS',
    'David Flanagan');
console.log(jsBook.getAuthor()); // David Flanagan \n undefined



function Book(title, author) {
    this.title = title;
    this.author = author;
    this.isbn = (function () {
        return Math.floor(Math.random() * 1000);
    })();
    this.description = (function () {
        return "Book " + this.title + " by " + this.author;
    })();
    this.describe = function () {
        console.log("Book " + this.title + " by " + this.author);
    }
}

var jsBook = new Book('The Definitive Guide to JS', 'David Flanagan');
console.log(jsBook.description);
console.log(window.title); // undefined (u browseru) (objekat postoji, ali nema svojstvo 'title')
// (title // Reference Error)
// zbog: 


(function () {
    return "Book " + this.title + " by " + this.author;
})();  //"Book undefined by undefined"
// (ovo kreira 'this' varijablu i setuje na undefined)

(function () {
    return "Book " + title + " by " + author;
})();
// (ovo ne kreira 'this', samo ga trazi, ne nalazi i zato --> Reference Error)