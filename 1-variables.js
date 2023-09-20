/**
 * Welcome to JavaScript!
 */

/**
 * ? Primitive types:
 * numbers
 * string
 * boolean
 * null
 * undefined
 * out of the course :
 *  - BigInt
 *  - Symbol
 *
 * Non primitive type:
 * object
 * array
 * function
 *  */

/**
 * Constructors
 * new Array()
 * new Object()
 * new Number()
 * new Boolean()
 * new String()
 */

/**
 * Binary in a nutshell
 */
//   8 4 2 1
//   0 1 0 1

/**
 * Hexadecimal in a nutshell
 */

// 0 1 2 3 4 5 6 7 8 9 A B C D E F

// What is a variable

let myName

// Assigning a value to a variable

myName = "Florian"

// const nop
const aConstantVariable = 3.14

let x = 5,
	y = "hi",
	something
// aConstantVariable = 42
// const vs let

// Assigning a new value to a variable / Reassigning

/**
 * Rules for naming variables:
 * - Should describe in a simple way what data is stored in it.
 * x y t
 * result
 * total
 * finalTotal
 */

// snake_case Python
let my_variable

// PascalCase  Java
let MyVariable

// camelCase (JS)
let myNewVariable

// let kebab-case (Not usable in JS but widely used in HTML / CSS)

let π = Math.PI
let πÚºÈ = "what?"

// typeof variables

const aWeirdString = new String("I am not a String.")

console.log(typeof myName)
console.log(typeof aWeirdString, "<=========")
console.log(typeof aConstantVariable)
console.log(typeof [])
console.log(typeof {})
console.log(typeof function () {})

// JS file is read from top to bottom

console.log(aVariableWhichDoesNotExist)
const aVariableWhichDoesNotExist = 5
