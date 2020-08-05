let userscore = 0;
let computerscore = 0;
let select = document.querySelector("#select");
let whowins = document.querySelector("#whowins");
let score = document.querySelector("#score");
function compare(choice1, choice2) {
	if (choice1 === choice2) {
		return "Its a tie!";
	}
	else if (choice1 === "rock") {
		if (choice2 === "scissors") {
			userscore++;
			return "User";
		}
		else if (choice2 === "paper") {
			computerscore++;
			return "Computer";
		}
	}
	else if (choice1 === "paper") {
		if (choice2 === "scissors") {
			computerscore++;
			return "Computer"
		}
		else if (choice2 === "rock") {
			userscore++;
			return "User";
		}
	}
	else if (choice1 === "scissors") {
		if (choice2 === "paper") {
			userscore++;
			return "User"
		}
		else if (choice2 === "rock") {
			computerscore++;
			return "Computer";
		}
	}
}
function startGame(e) {
	let userChoice = e;
	let computerChoices = ["rock", "paper", "scissors"];
	let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
	select.innerHTML = `User: ${userChoice} && Computer: ${computerChoice}`;
	let winner = compare(userChoice, computerChoice);
	whowins.classList = "";

	if (winner == "User") {
		whowins.innerHTML = winner + " wins 👦";
		whowins.classList.add("win");
	} else if (winner == "Computer") {
		whowins.innerHTML = winner + " wins 💻";
		whowins.classList.add("lose");
	} else {
		whowins.innerHTML = winner;
		whowins.classList.add("tie");
	}
	score.innerHTML = `${userscore} : ${computerscore}`;
}