/* Author: Aniket*/
// Defining Variables
const coin = ['heads', 'tails'];
const playerSelection = document.querySelector('.player-selection');
const computerSelection = document.querySelector('.computer-selection');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const coinImg = document.querySelector('.coin img');
const coinFig = document.querySelector('.coin figure');
const btns = Array.from(document.querySelectorAll('.toss-call li'));

function init(btns,playerScore,computerScore,playerSelection,computerSelection) {
btns.forEach((btn) => btn.addEventListener('click',flip));
playerScore.innerText = "0";
computerScore.innerText = "0";
playerSelection.innerText = "nothing";
computerSelection.innerText = "nothing";
}

init(btns,playerScore,computerScore,playerSelection,computerSelection);

function flip(){
	playerSelection.innerText = this.innerText;
	if(playerSelection.innerText === coin[0]) {
			computerSelection.innerText = coin[1];
	} else {
			computerSelection.innerText = coin[0];
	}
	let coinFlip = coin[Math.floor(Math.random()*coin.length)];
	coinImgFlip(coinFlip);
}

function coinImgFlip(flipAnswer) {
	coinFig.classList.add('flipping');
	if(flipAnswer === coin[0]) {
		coinImg.src = "./assets/Images/"+coin[0]+".jpg";
	} else {
		coinImg.src = "./assets/Images/"+coin[1]+".jpg";
	}
	setTimeout(() => {
		coinFig.classList.remove('flipping');
		updatescore(flipAnswer);
	},1300)
}

function updatescore(coinFlipAns) {
	if(coinFlipAns === playerSelection.innerText) {
		playerScore.innerText++;
	} else if(coinFlipAns === computerSelection.innerText){
		computerScore.innerText++;
	}
	if(playerScore.innerText == 5 ) {
		win(playerScore);
	}	else if(computerScore.innerText == 5) {
		win(computerScore);
	}
}

function win(winner) {
	let theWinner;
	if(winner.classList.contains('player-score')) {
		theWinner = "player";
	} else {
		theWinner = "computer";
	}
	setTimeout(() => {
		alert("winner of the game is: "+theWinner);
		playAgain();
	},100)
}

function playAgain(){
	alert("Play again?");
	window['location'].reload();
}