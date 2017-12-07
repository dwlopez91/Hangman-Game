

// make an on key event to record what letter has been pressed, print it to the screen under Your Guesses.

// make a computer random letter variable 

// for loop, 9 tries, with if/then statements

// if on key event === computer random variable, Wins goes up by 1 ++ and Guesses Left and Your Guesses resets

// else if on key event =/ computer random variable after 9 tries, losses goes up by 1 ++ and Guesses resets

 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

   var wins = 0; 

   var losses = 0;

   var guessesLeft = 9;

   var userGuess = [];


	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		 console.log(computerGuess);

	document.onkeyup = function(event) {
		

// set IDs to wins, losses, guesses left, and guesses so far 
		
		 userGuess = event.key; 
		 

		if (userGuess === computerGuess) {
		 	 wins ++;

		}

		if (userGuess !== computerGuess) {
			guessesLeft--;
		}

		if (guessesLeft === 0) {
			losses++;
			guessesLeft = 9;
		}


		function updateGuess() {
        document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        document.querySelector("#guessesSoFar").innerHTML = "Your Guesses: " + userGuess;
		
}	
		updateGuess()

}
		



	