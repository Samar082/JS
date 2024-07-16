const accountId = 12267
let accountEmail = "fghcxj124@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2 <== You cannot change ==>

accountEmail = "hc@hc.com"
accountPassword = "21212122"
accountCity = "Durgapur"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

console.log("hello");