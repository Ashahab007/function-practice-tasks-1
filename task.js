//! Task-1
/* 
Take four parameters. Multiply the four numbers and then return the result
*/
function multiplyNum(num1, num2, num3, num4) {
  let result = num1 * num2 * num3 * num4;
  return result;
}
let result = multiplyNum(4, 5, 10, 8);
console.log("Multiply result of four number is: ", result); //1600

//! Task-2
/* 
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function oddEvenCal(num) {
  if (num % 2 === 1) {
    let result = num * 2;
    return `Odd number multiply by 2, the result is ${result}`;
  } else {
    let result = num / 2;
    return `Even number divide by 2, the result is ${result}`;
  }
}

let oddEvenResult = oddEvenCal(5);
console.log(oddEvenResult);

//! Task-3
/* 
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

let myArr = [5, 10, 20, 10];
let size = myArr.length;

function make_avg(arr, arrSize) {
  // Using for of loop
  /* let sum = 0;
  for (const element of arr) {
    sum = sum + element;
  }
  let average = sum / arrSize;
  return average; */

  //using arr.reduce() method
  let total = arr.reduce((acc, val) => {
    return acc + val;
  });
  let avg = total / arrSize;
  return avg;
}

let avgResult = make_avg(myArr, size);
console.log(`The average result is ${avgResult}`);

//! Task-4
/* 
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

let binaryString = "010100";

function count_zero(params) {
  let count = 0;
  for (const num of params) {
    if (num === "0") {
      count++;
    }
    // console.log(num);
  }
  console.log("The number of '0' is", count, "times.");
}

count_zero(binaryString);

//! Task-5
/* 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/

function odd_even(val) {
  if (val % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

let findOddEven = odd_even(10);
console.log("The input number is: ", findOddEven);
