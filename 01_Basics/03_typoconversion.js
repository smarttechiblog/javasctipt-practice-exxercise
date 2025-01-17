//let score = 33;

//console.log(typeof score); // number

//let score = "33";

let score = "33abc";

console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33abc

// "33" == 33
// "33abc" == NaN
// true == 1; false == 0

let isLoggedIn = 1;

let booleanIsLoggeddedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggeddedIn); // true

// 1 => true; 0 => false;
//"" => false;
//"Vinay"=> true;

let sampleValue = 44;
let stringvalue = String(sampleValue);

console.log(stringvalue); // "44"
console.log(typeof stringvalue); // string
