const accountId = 144553
let accountEmail = "Ramesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // const Can't be changed

accountEmail = "rc@rc.com"
accountPassword = "212121"
accountCity = "Delhi"
console.log(accountId)

/*
Prefer not to use Var.
Because of issue in Block Scope and Functional Scope.
*/
let accountState;

console.table([accountId,accountEmail,accountPassword, accountCity,accountState])