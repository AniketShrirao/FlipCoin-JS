/* Author: Aniket*/
// Getting Required DOM elements
const coin = ['heads', 'tails'];
const playerSelection = document.querySelector('.player-selection');
const computerSelection = document.querySelector('.computer-selection');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const coinImg = document.querySelector('.coin img');
const coinFigure = document.querySelector('.coin figure');
const buttons = Array.from(document.querySelectorAll('.toss-call li'));

// Initial function which sets the stage for game to initial state
function init(buttons, playerScore, computerScore, playerSelection, computerSelection) {
	buttons.forEach((button) => button.addEventListener('click', flip));
	playerScore.innerText = "0";
	computerScore.innerText = "0";
}

init(buttons, playerScore, computerScore, playerSelection, computerSelection);

// Flip function to calculate random behaviour of a coin toss 
function flip() {
	playerSelection.innerText = this.innerText;
	if (playerSelection.innerText === coin[0]) {
		computerSelection.innerText = coin[1];
	} else {
		computerSelection.innerText = coin[0];
	}
	/* Math.random provides values from 0 to 1 if we didn't provide any values
		to paranthesis, we multiplied it with the length of an array we created above,
		to get multiples of random value as length is 2 then we floor it to make it 
		either zero or one to get either heads or tails.*/
	let coinFlip = coin[Math.floor(Math.random() * coin.length)];
	coinImgFlip(coinFlip);
}

// Function to flip the Coin Image by changing it source
function coinImgFlip(flipAnswer) {
	coinFigure.classList.add('flipping');
	if (flipAnswer === coin[0]) {
		coinImg.src = "./assets/Images/" + coin[0] + ".jpg";
	} else {
		coinImg.src = "./assets/Images/" + coin[1] + ".jpg";
	}
	setTimeout(() => {
		coinFigure.classList.remove('flipping');
		updateScore(flipAnswer);
	}, 1300)
}

// function to update scores till it reaches to max 5(winning Condition)
function updateScore(coinFlipAns) {
	if (coinFlipAns === playerSelection.innerText) {
		playerScore.innerText++;
	} else if (coinFlipAns === computerSelection.innerText) {
		computerScore.innerText++;
	}
	if (playerScore.innerText == 5) {
		win(playerScore);
	} else if (computerScore.innerText == 5) {
		win(computerScore);
	}
}

// Win function if anyone wins it's name gets Alerted
function win(winner) {
	let theWinner;
	if (winner.classList.contains('player-score')) {
		theWinner = "player";
	} else {
		theWinner = "computer";
	}
	setTimeout(() => {
		alert("winner of the game is: " + theWinner);
		playAgain();
	}, 100)
}

// play Again function if Player wants to play again 
function playAgain() {
	alert("Play again?");
	window['location'].reload();
}