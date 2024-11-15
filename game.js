const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const INVALID = "invalid"

function getComputerChoice() {
	let randomNumber = Math.random()

	if (randomNumber >= 0.66) {
		return ROCK
	}

	else if (randomNumber >= 0.33) {
		return PAPER
	} else {
		return SCISSORS
	}
}

function getHumanChoice() {
	let choice = prompt("Choose one: rock | paper | scissors").toLowerCase()

	if (choice == ROCK || choice == PAPER || choice == SCISSORS) {
		return choice
	} else {
		return INVALID
	}
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		console.log("Draw!")
		return
	}

	if (humanChoice === ROCK && computerChoice === SCISSORS) {
		humanScore++
		console.log(`You win! ${humanChoice} beats ${computerChoice}`)
	}
	else if (humanChoice === PAPER && computerChoice === ROCK) {
		humanScore++
		console.log(`You win! ${humanChoice} beats ${computerChoice}`)
	}
	else if (humanChoice === SCISSORS && computerChoice === PAPER) {
		humanScore++
		console.log(`You win! ${humanChoice} beats ${computerChoice}`)
	} else {
		computerScore++
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
	}
}

function playGame() {
	for (let i = 1; i <= 5; i++) {
		let humanSelection = getHumanChoice()
		let computerSelection = getComputerChoice()

		while (humanSelection === INVALID) {
			humanSelection = getHumanChoice()
		}

		console.log(`\nGame No. ${i}`)
		console.log(`You choose: ${humanSelection}`)
		console.log(`Computer choose: ${computerSelection}`)

		playRound(humanSelection, computerSelection)

	}
	if (humanScore == computerScore) {
		console.log("\n\nThe Game Ended in a Draw!")
	}
	else if (humanScore > computerScore) {
		console.log("\n>> RESULT <<\nYou've WON the Game!")
	}else{
		console.log("\n>> RESULT <<\nYou've LOST the Game!")
	}

}

let humanScore = 0
let computerScore = 0

playGame()