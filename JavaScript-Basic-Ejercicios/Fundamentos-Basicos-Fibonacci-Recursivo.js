function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const input = 7;
const output = fib(input);
console.log(output);
