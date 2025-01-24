/**
 * What are the datatypes in javascript?
 * A) There are eight datatypes in javascript and they are categorized into two types.
 * i) Primitive and ii) Non-Primitive
 * 
 * Here, Primitive data types are number, string, boolean, null, undefied, symbol,bigint
 * and Non- Primitive data type is object.
 */

let number = 2;
let string ="SmartTechi"
let boolean = true;
let undefinedValue;
let nullValue = null;
let symbol = Symbol('unique');
let bigInt = 123224343243243242432233333333n;
let object = {"username" : "SmartTechi", "emailaddress": "smarttechiblog@gmail.com"}

//console.table([typeof number, typeof string, typeof boolean, typeof undefinedValue, typeof nullValue, typeof symbol, typeof bigInt, typeof object])

/**
 * 2) Difference b/w equals to and double equals to.
 * 
 * A) The (==) equality and (===) strict equality operators are used for comparsion imn Javascript.
 * 
 * (==) Equality performs type coercion before comparision and then compares values after coverting them to common type.
 * (===) Strict Equality : Does not perform coercion and it compares both value and type.
 */

//   console.log(4 == "4")// coerse string to number output -- true
//   console.log(4 === "4"); // compare different value and type. output -- false

//   console.log(0 == false) // coerse boolean to number output -- true
//   console.log(0 === false); // compare different types. Output --false


  
  /**
   * 3) What is the difference b/w null and undefined.
   * A) Null and undefined both are used to represent absence of value.
   *    Null : Must be explicilty assigned. Typeof null retuns object(Known as a javascript bug).
   *    
   *    undefined : Represents a variable is declared, but not assigned a value. Type of undefined is undefined.
   */
    //  let nullVal = null;
    //  console.log(nullVal); // null
    //  console.log(typeof null) // object

    //  let undefiedVal;
    //  console.log(undefiedVal) // undefined
    //  console.log(typeof undefiedVal) //undefined


/**
 * 4) Explain the concept of hoisting in javascript?
 * A) 1.Hoisting is a behavior in javascript where variables and function declarations are moved to the top of the 
 *     scope during compilation phase, before the code is executed.
 *    2.This means that where the variables and functions are declared in the code, they are treated as if they are declared
 *      at the begining of the scope.
 */


/** Example when variable declaration */
// console.log(x); //output is undefined

// var x = 5; 

// console.log(x); // output is 5

/*** Explaining how the above code is interpreted by javascript****/

// var x;

// console.log(x); //output is undefined

// x=5;
// console.log(x); //output:5


/*****Example of function declaration*********** */

sayHello();

function sayHello(){
  console.log("Say Hello!!");
}


sayHai(); //TypeError: sayHai is not a function


var sayHai = function(){
  console.log("say hai!!");
}







     

     

