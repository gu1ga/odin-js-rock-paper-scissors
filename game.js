function getComputerChoice(){
	let randomNumber = Math.random()

	if (randomNumber >= 0.66) {
		return "rock"
	}

	else if (randomNumber >= 0.33) {
		return "paper"
	}else{
		return "scissors"
	}
}

function getHumanChoice(){
	let choice = prompt("Choose one: rock | paper | scissors").toLowerCase()

	if (choice == "rock" || choice == "paper" || choice == "scissors"){
		return choice
	}else{
		return "invalid"	
	}
}
