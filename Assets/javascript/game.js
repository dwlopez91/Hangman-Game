

// make an on key event to record what letter has been pressed, print it to the screen under Your Guesses.

// make a computer random letter variable 

// for loop, 9 tries, with if/then statements

// if on key event === computer random variable, Wins goes up by 1 ++ and Guesses Left and Your Guesses resets

// else if on key event =/ computer random variable after 9 tries, losses goes up by 1 ++ and Guesses resets

 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

   var wins = 0; 

   var losses = 0;

   var guessesLeft = 9;



	document.onkeyup = function(event) {
		

 
// set IDs to wins, losses, guesses left, and guesses so far 
		
		var userGuess = event.key; 
	
	// this should show the string of letters that have been guessed so far	
	//function guessesSoFar() {
        //document.querySelector("#guessesSoFar").innerHTML = "Guesses so Far: " + text;
		 

		 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		 console.log(computerGuess)


		if (userGuess === computerGuess) {
		 	 wins ++;

		}

		if (userGuess !== computerGuess) {
			guessesLeft--;
		}

		if (guessesLeft < 0) {
			losses++;
		}

// inner HTML is needed

		
// create a for loop to only allow 9 guesses

		function updateGuess() {
        document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
        
        for (var i = 0; i > 9; i++) {
        	losses++;
		
}	
		

}
		updateGuess()
}

	

//losses should increase after Guesses left reaches 0 
// wins should increase when user guess = comp guess
//should create a function to reset the game once player loses or wins	
// your guesses so far and guesses left need to clear after wins or losses goes up by 1

	