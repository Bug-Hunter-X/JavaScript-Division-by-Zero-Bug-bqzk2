function foo(a, b) {
  if (a === 0 && b === 0) {
    return 'Error';
  }
  return a / b;
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(0, 0)); // Output: Error
console.log(foo(10, 0)); // Output: Infinity