function foo(a, b) {
  if (a === 0 && b === 0) {
    return 'Error: Both inputs are zero';
  } else if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(0, 0)); // Output: Error: Both inputs are zero
console.log(foo(10, 0)); // Output: Error: Division by zero