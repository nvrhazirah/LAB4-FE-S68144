// 2. Write a JavaScript program to compute x raise to the power y using recursion
function power(x, y) {
  if (y === 0) {
    return 1;
  }
  return x * power(x, y - 1);
}
