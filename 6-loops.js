// The good old for-loop

// Anatomy of a for-loop
// for (variable initialisation ; condition ; increment / decrement) {}

for (let i = 0; i < 100; i++) {
	if (i % 2 === 0) {
		continue
	}
	console.log(i)
}

// while (true) {
// 	console.log("Woooooooo!")
// }
/**
 * Infinite loop:
 * To cancel a process : Ctrl + C
 */

// while loop

// break and continue

// Starification
let catName = "Loop"
// "*L*o*o*p*"
let result = "*"

for (let i = 0; i < catName.length; i++) {
	const letter = catName[i] + "*"
	result += letter
}
console.log(result)
