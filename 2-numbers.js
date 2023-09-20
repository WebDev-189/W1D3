/**
 * Let's talk about Math
 */

/**
 * Operators:
 * addition: +
 * substraction: -
 * multiply: *
 * division: /
 * powerof: **
 * modulo: %
 */

const isEven = 5 % 2 === 0
console.log(isEven)
const aLotOfSeconds = 4326741
// 135
console.log(aLotOfSeconds / 60)
console.log(aLotOfSeconds % 60)

let total = 10
let pikachuPlush = 50
let lettuce = 5
total = total + pikachuPlush + lettuce

console.log("Total:", total)

// Order of operations
let orderOfOperationsWithMath = 2 * (1 + 3 * 5) + 10
console.log("The Answer:", orderOfOperationsWithMath)
/**
 * Shorthand math
 */
let someShortHandCalculus = 0

// someShortHandCalculus = someShortHandCalculus + 2
// someShortHandCalculus = someShortHandCalculus + 2
// someShortHandCalculus = someShortHandCalculus + 2
// someShortHandCalculus = someShortHandCalculus + 2

someShortHandCalculus += 2
someShortHandCalculus *= 6
someShortHandCalculus /= 2
someShortHandCalculus **= 5
console.log("Final result after shorthand calculus", someShortHandCalculus)

// Math constructor

// console.log(Math.PI)
/**
 * Math.floor  3.75 => 3
 * Math.ceil  3.25  => 4
 * Math.round  3.6  => 4
 * Math.random  > 0 < 1
 */

// Getting a random number

console.log("Getting a random number:")
const aRandomFloat = Math.random()
console.log(aRandomFloat)
const multiplied = aRandomFloat * 10
console.log(multiplied)
const randomNumber = Math.floor(multiplied)
console.log(randomNumber)

const quickerRandom = Math.floor(Math.random() * 12)

const myPets = [
	"Izmir",
	"Illiu",
	"Nero",
	"Maddison",
	"Zouzou",
	"Felix",
	"Bosco",
	"Lara",
	"Pacco",
	"Alaska",
	"Mordicchio",
	"Boudha",
]
console.log(myPets[Math.floor(Math.random() * myPets.length)])

// Operations between numbers and Strings

console.log(1 + "1")
console.log("Hello" + " " + "World.")
console.log(1 - "1")

// NaN

console.log("Hello" - "me")
console.log("Hello" * 5)
console.log(isNaN("Hello" * 5))

// Incrementing / Decrementing numbers

let numberToIncrement = 0
console.log(numberToIncrement++)
console.log(++numberToIncrement)
