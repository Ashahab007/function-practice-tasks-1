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
