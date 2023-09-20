// Simple if condition

const todayIsWednesday = true
const itIsRaining = false
const isItTimeToEat = false
const randomInteger = Math.floor(Math.random() * 10)

/**
 * if (condition) {
 * The logic that we want to apply
 * }
 */

if (todayIsWednesday) {
	console.log("It is wednesday!")
}

// if-else block

if (!todayIsWednesday) {
	console.log("It Is not wednesday")
} else {
	console.log("It is wednesday!")
}

if (todayIsWednesday) {
	console.log("It is wednesday!")
}
if (itIsRaining) {
	console.log("It is raining")
}
if (randomInteger > 5) {
	console.log(`Random integer ${randomInteger} is greater than 5`)
} else {
	console.log("Less than 5")
}

/**
 * Revering conditions with a bang !
 */

// if, else if ..., else block

if (todayIsWednesday) {
	console.log("It is wednesday!")
} else if (itIsRaining) {
	console.log("It is raining")
} else if (randomInteger > 5) {
	console.log(`Random integer ${randomInteger} is greater than 5`)
} else {
	console.log("Less than 5")
}

// multiple if statements

// switch

let number = 3

switch (number) {
	case 5:
		console.log(5)
	case 4:
		console.log(4)
	case 3:
		console.log(3)
	case 2:
		console.log(2)
	case 1:
		console.log(1)
	case 0:
		console.log("Liftoff !")
		break
	default:
		console.log("wrong input")
		break
}

// Ternary operator

// typeof 'string'
// 5 < 3

let result

if (randomInteger > 5) {
	result = "Big number"
} else {
	result = "Small number"
}

console.log(result)

let ternaryResult = randomInteger > 5 ? "Big Number" : "Small number"
