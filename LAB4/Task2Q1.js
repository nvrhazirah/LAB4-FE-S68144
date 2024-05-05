// 1. Write a JavaScript function to find sum of digits of a number
function sumOfDigits(number) {
  if (number < 10) {
    return number;
  }
  return (number % 10) + sumOfDigits(Math.floor(number / 10));
} 