const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
})

const secretNumber = 5
console.log("Guess the number!")
readline.question("What is your guess? ", (guess) => {
	if (Number(guess) === secretNumber) {
		console.log("Congrats!  🎉🎉🎉🎉🎉🎉")
	} else {
		console.log("WRONG GUESS !")
	}
	process.exit()
})
