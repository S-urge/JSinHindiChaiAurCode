// The not so ideal way
const name = "Ramesh"
const repoCount = 10;

// console.log("hello" + ' '+ name + ' ' + "Your RepoCount is: "+ repoCount);
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// Another Way of using String which is now widely used when you want some operations on it
const newName = new String("Ramesh-Choudhary-com");

// console.log(newName[0])

// console.log(newName.__proto__)

// console.log(newName.length()); // Will give error as length is not a function but property

// console.log(newName.length);

// console.log(newName.toUpperCase());

// console.log(newName.charAt(4));

// console.log(newName.indexOf('C'));

const newString = newName.substring(0,4);

// console.log(newString);

// const anotherString = newName.slice(-16,-10); // Useful When you want to do slicing from the rear end you can use negative indexes as well

// console.log(anotherString);

const newStringOne = "   Ramesh   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://ramesh.com/Ramesh%20Choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes("Ramesh"))



