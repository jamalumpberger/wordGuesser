var wordLetters = ["n", "y", "c", "d", "a"];
var guessedLetters = ["_ ", "_ ", "_ ", "_ ", "_ "];
var remainingGuesses = 10;

function guessLetter(userLetter) 
{
    while (guessedLetters.indexOf("_ ") !== -1 && remainingGuesses > 0)
    {
        userLetter = prompt("Please enter a letter in the alphabet", "A");
        var letterFound = false;
        
        for (var i = 0; i < wordLetters.length; i++) 
        {
            
            var letterToCheck = wordLetters[i];
    
            if (letterToCheck.toLowerCase() === userLetter.toLowerCase()) 
            {
                // alert("You correctly guessed a letter!");
                guessedLetters[i] = letterToCheck.toLowerCase();
                // $('#letters').html(guessedLetters);
                letterFound = true;
            }
            
        }

        if (letterFound) {
            alert("You correctly guessed a letter!");
            $('#letters').html(guessedLetters);
        }       

        else {
            remainingGuesses--;
            alert("Try again. You have " + remainingGuesses + " guesses left.");
            $('#guesses').html("You have " + remainingGuesses + " guesses left.");
        } 
    }
    
    if (guessedLetters.indexOf("_ ") === -1)
    {
        alert("You win!");
    }

    else if(remainingGuesses <= 0) {
        alert("You lose.");
    }    
}    

guessLetter();