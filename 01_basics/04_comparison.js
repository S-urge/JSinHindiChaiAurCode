// console.log("2" > 1); // => true
// console.log("02" > 1); // => true

// While comparing ensure that datatype is same
// And the Result must be predictable

// console.log(null > 0) // => false
// console.log(null == 0) // => false
// console.log(null >= 0) // => true

// The reason is that an equality operator == and comparison operator > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.

// console.log(undefined > 0) // => false
// console.log(undefined == 0) // => false
// console.log(undefined < 0) // => false

// console.log("2" == 2) // => true
// console.log("2" === 2) // => false

