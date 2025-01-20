# JavaScript Division by Zero Bug

This repository demonstrates a common but subtle bug in JavaScript related to division by zero.  The function `foo` handles the case where `b` is zero, but fails to specifically handle the case where both `a` and `b` are zero, which leads to an unexpected behavior.

The `bug.js` file shows the buggy code, and `bugSolution.js` provides a corrected version.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Open `bug.js` and run it using a JavaScript runtime (e.g., Node.js).
4. Observe the output and note the incorrect result when calling `foo(0, 0)`.

## Solution

The solution explicitly checks if both inputs are zero before performing the division, returning a custom error message in that case.