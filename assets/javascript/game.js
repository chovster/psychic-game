		var wins = 0;
		var losses = 0;
		var pastGuesses = [];
		var numTurnsLeft = 9;  
		var validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		var compSelection = validLetters[Math.floor(Math.random() * validLetters.length)];
		
		//console.log (compSelection); is here because it's to display in console in google dev tool and it's also at "function getNewLetter in line 34"
		console.log(compSelection);
		var html = '<p>Wins ' + wins + '</p>' + 
		'<p>Losses ' + losses + '</p>' +
		'<p>Guesses: ' + pastGuesses +'</p>' +
		'<p>Turns Left ' + numTurnsLeft + '</p>';
		console.log("this is what it looks like" + html);
		console.log(document.querySelector('#game'))
		//document.querySelector('#game').innerHTML = html;

		//getting compSelection
		function getNewLetter(){ 
			compSelection = validLetters[Math.floor(Math.random() * validLetters.length)];
			console.log(compSelection);
		}


		//gameReset: 
		function gameReset(){
			pastGuesses = [];
			numTurnsLeft = 9;
			getNewLetter();
		}

		//only inside this function; waiting for something to happen
		document.onkeyup = function(event){
			var currentGuess = event.key;

			if (numTurnsLeft > 0) {
					//when you win
					if (compSelection === currentGuess) {
						wins++;
						console.log('wins equals '  + wins);

						//last function
						gameReset();
					}

					//when your guess is wrong
					else {
						numTurnsLeft--;
						pastGuesses.push(currentGuess);
						console.log('you have turns left ' + numTurnsLeft);
						console.log('you guessed ' + pastGuesses);

					}

				}

				//when you run out of guesses
				else {
					losses++;
					gameReset(); 
					console.log('lose equals ' + losses);
				}

				var html = '<p>Wins ' + wins + '</p>' + 
				'<p>Losses ' + losses + '</p>' +
				'<p>Guesses: ' + pastGuesses +'</p>' +
				'<p>Turns Left ' + numTurnsLeft + '</p>';
				console.log("this is what it looks like" + html);

				document.querySelector('#game').innerHTML=html;


			}