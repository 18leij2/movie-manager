let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, havewatched) {    
        this.title = title;
        this. rating = rating;
        this.havewatched = havewatched;
    }    
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    console.log("A new movie is added");
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    var count = 0;
    console.log("Printing all movies....");
    for (const element of allMovies) {
        console.log(element.title + ", rating of " + element.rating + ", havewatched: " + element.havewatched);
        count++;
    }
    console.log(" ");
    console.log("You have " + count + " movies in total");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    console.log("printing movie that has a rating higher than " + rating);
    var count = 0;
    for (const element of allMovies) {
        if (element.rating > rating) {
            console.log(element.title + " has a rating of " + element.rating);
            count++;
        }
    }
    console.log(" ");
    console.log("In total, there are " + count + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...")
    for(const element of allMovies) {
        if (element.title == title) {
            if (element.havewatched == true) {
                element.havewatched = false;
            } else {
                element.havewatched = true;
            }
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);