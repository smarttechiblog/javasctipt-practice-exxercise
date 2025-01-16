const accountId = 1441;
let accountEmail = "vinay.bammidi@gmail.com";
var accountPassword = "VbTest123";
accountName = "Vinay Bammidi";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountName]);
console.table({ accountId, accountEmail, accountPassword });

/*

Prefer not to use var keyword, as it is not block scope and not a function scope.
 */
