/*

Algorithm
---------
Measuring Performance
Time & Space complexity
Big O notation
Math algorithm
Sort

Pre-requisites
--------------
Javascript fundamentals.
Advance Javascript.
ES2015 topics

What is algorithm
- An algorithm is a set of well-defined instructions to solve a particular problem.

characteristics 

- Well defined input and output
- Each step should be clear.
- Language independent.
*/

//console.log("Hello!!!!");

/**
 * we can measure time complexity and space complexity using Azimtotic notations.
 * B O, omega and theta.
 */

//Count the number of times a statement executed based on the input.
function sumOfNumbers(n){
    let sum=0;
    for(let i=1; i <= n ; i++){
        sum +=i;
    }
    console.log(sum);
    return sum;

}

sumOfNumbers(3);

//find the smallest number

/**
 * Get the smallest number of an array of numbers 
 * param {Array} n array of numbers
 */

function getMin(n){
    const array = Array.from(n);
   // console.log(array);
    
    let min;

    array.forEach(element => {
        if(min === undefined || element < min){
            min = element;
        }
    });
    console.table([array,min]);    
    return min;

}

let newArray =[1,2,3,4,5,6,7];
getMin(newArray);


