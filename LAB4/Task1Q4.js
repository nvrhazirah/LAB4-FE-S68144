// 4. Write a function to print all numbers between 1 and 100 which is divisible by given number z
function printDivisibleNumbers(z) {
    for (let i = 1; i <= 100; i++) {
      if (i % z === 0) {
        console.log(i);
      }
    }
  }
  printDivisibleNumbers(2);
 
  