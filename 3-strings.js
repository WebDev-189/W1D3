/**
 * We want to be able to "write text"
 * (And a bit of coercion, casting/conversion, search)
 */

/**
 * single quotes: ''
 * double quotes: ""
 * backticks: ``
 */

let className = "WebDev-189"
let classSize = 10
// className is composed of classSize people
const sentence = className + " is composed of " + classSize + " people"
const sentenceWithBackticks = `${className} is composed of ${classSize} people`

//  Concatenation

// Advantages of backticks

const haikku = `
Programming is What I do,
It is fun,
And the sun is shining.
`
// `
// <div>
//   <h2>${articleTitle}</h2>
//   <p>${articleText}</p>
// </div>
// `

//  Template literal

// Multi-line

// index in Strings

const myName = "floroano"
console.log(myName[0])
console.log(myName.length)

/**
 * Some available methods
 * length, upper / lower case, includes, replace, replaceAll ...
 */

console.log(myName.toUpperCase())
console.log(haikku.includes(" is "))
console.log(haikku.includes("z"))
console.log(myName.replaceAll("o", "*"))

// Immutability

myName[0] = "H"
console.log(myName)
const capitalized = myName[0].toUpperCase() + myName.slice(1)
console.log(capitalized)
// Comparing strings

console.log("Abc" < "abc")

const firstWord = "RÉSERVÉ"
const secondWord = "reserve"

console.log(firstWord.localeCompare(secondWord, "en", { sensitivity: "base" }))
