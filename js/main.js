var wordLetters = ["N", "Y", "C", "D", "A"];
var guessedLetters = ["_ ", "_ ", "_ ", "_ ", "_ "];

function guessLetter(userLetter) 
{
    while (guessedLetters.indexOf("_ ") !==-1) 
    {
        userLetter = prompt("Please enter a letter in the alphabet", "A");
        
        for (var i = 0; i < wordLetters.length; i++) 
        {
            
            var letterToCheck = wordLetters[i];
    
            if (letterToCheck === userLetter) 
            {
                alert("You correctly guessed a letter!");
                guessedLetters[i] = letterToCheck;
                $('#letters').html(guessedLetters);
            }
            
        }
        
    }
    
    if (guessedLetters.indexOf("_ ") === -1)
    {
        alert("You win!");
    }    
}    

guessLetter();