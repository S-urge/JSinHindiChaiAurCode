// // let score = 33
// // console.log(typeof score)
// // console.log(typeof(score))

// // let score = "33abc"
// // console.log(typeof(score))
// // let valueInNumber = Number(score)
// // console.log(typeof(valueInNumber))

// // let score = "33abc" // NaN
// // let score = null // 0
// // let score = undefined // NaN
// // let score = "Ramesh" // NaN
// let score = true // 1
// console.log(typeof(score))
// let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

// // "33" => 33
// // "33abc" => NaN
// // "Ramesh" => NaN
// // null => 0
// // true => 1; false => 0
// // undefined => NaN
// // let isLoggedIn = 1
// // let isLoggedIn = ""
// let isLoggedIn = "Ramesh"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
// "" => false; "Ramesh" => true
let someNumber=33
let stringNumber=String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)

//  *************Operations********************** //
// let value = 3
// let negValue = -value
// console.log(negValue)

// let str1 = "Hello"
// let str2 = " Ramesh"
// let str3 =str1 + str2
// console.log(str3)

// console.log("1"+2) // => 12
// console.log(1+"2") // => 12
// console.log("1"+"2") // => 12
// console.log("1"+2+2) // => 122 
// console.log(1+2+"2") // => 32

// console.log(true) // => true
// console.log(+true) // => 1

// console.log(+"") // => 1

let gameCounter = 100
gameCounter++;
console.log(++gameCounter)
console.log(gameCounter++)

// Read about Prefix and Postfix for the inceremental and decremental operators

// https://262.ecma-international.org/14.0/index.html?_gl=1*1bzuktx*_ga*NDM4NzYxNTQ0LjE3NjgyOTg5NjA.*_ga_TDCK4DWEPP*czE3NjgyOTg5NTkkbzEkZzAkdDE3NjgyOTg5NTkkajYwJGwwJGgw#sec-prefix-increment-operator

/*
13.4.3 Postfix Decrement Operator
13.4.3.1 Runtime Semantics: Evaluation
UpdateExpression : LeftHandSideExpression --
1. 1. Let lhs be ? Evaluation of LeftHandSideExpression.
2. 2. Let oldValue be ? ToNumeric(? GetValue(lhs)).
3. 3. If oldValue is a Number, then
a. a. Let newValue be Number::subtract(oldValue, 1𝔽).
4. 4. Else,
a. a. Assert: oldValue is a BigInt.
b. b. Let newValue be BigInt::subtract(oldValue, 1ℤ).
5. 5. Perform ? PutValue(lhs, newValue).
6. 6. Return oldValue.
13.4.4 Prefix Increment Operator
13.4.4.1 Runtime Semantics: Evaluation
UpdateExpression : ++ UnaryExpression
1. 1. Let expr be ? Evaluation of UnaryExpression.
2. 2. Let oldValue be ? ToNumeric(? GetValue(expr)).
3. 3. If oldValue is a Number, then
a. a. Let newValue be Number::add(oldValue, 1𝔽).
4. 4. Else,
a. a. Assert: oldValue is a BigInt.
b. b. Let newValue be BigInt::add(oldValue, 1ℤ).
5. 5. Perform ? PutValue(expr, newValue).
6. 6. Return newValue.
13.4.5 Prefix Decrement Operator
13.4.5.1 Runtime Semantics: Evaluation
UpdateExpression : -- UnaryExpression
1. 1. Let expr be ? Evaluation of UnaryExpression.
2. 2. Let oldValue be ? ToNumeric(? GetValue(expr)).
3. 3. If oldValue is a Number, then
a. a. Let newValue be Number::subtract(oldValue, 1𝔽).
4. 4. Else,
a. a. Assert: oldValue is a BigInt.
b. b. Let newValue be BigInt::subtract(oldValue, 1ℤ).
5. 5. Perform ? PutValue(expr, newValue).
6. 6. Return newValue.
*/

