// The WordGuesser w/out using the prompt function.

var word = ["N", "Y", "C", "D", "A"]
var guess = ["_", "_", "_", "_", "_"]

function guessLetter(letter) {
    var correctGuess = false;
    var nextGuess = false;

    for (var i = 0; i < word.length; i++) {

        if (letter === word[i]) {
            guess[i] = letter;
            correctGuess = true;
            alert("You correctly guessed a letter.");
            alert(guess.join());
        }    

        if (guess[i] === "_") {
            nextGuess = true;
        }
    }    

    if (nextGuess = false) {
        alert("You have guessed all the letters!!");
    }   

    if (letter !== word[i]) {
        alert("Try again.");
    }         
}

guessLetter("N");
guessLetter("Y");
guessLetter("C");
guessLetter("D");
guessLetter("X");
guessLetter("Y");
guessLetter("A");

// The WordGuesser using the prompt function. Currently facing some issues with re-starting the loop. 

function guessLetter(letter) {
    var correctGuess = false;
    var nextGuess = false;

    for (var i = 0; i < word.length; i++) {

        letter = prompt("Please enter a capitalized letter in the alphabet", "A")

        if (letter === word[i]) {
            guess[i] = letter;
            correctGuess = true;
            alert("You correctly guessed a letter!");
            alert(guess.join());
        }    

        if (guess[i] === "_") {
            nextGuess = true;
        }

        if (letter !== word[i]) {
            alert("Try again.");
        }

    }            

    if (nextGuess = false) {
        alert("You have guessed all the letters!");
    }   
}

guessLetter()
