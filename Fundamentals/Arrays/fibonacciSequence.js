// <-- Fibonacci Sequence -->

/*
  Your task is to write brainfuck program, which can calculate Fibonacci sequence.

  Calculate first 11 Fibonacci numbers and output them separated by comma followed by space.

  You can use predefined brainfuck interpreter.

  Just use bf function:

  let output = bf(program);
*/

// <-- Solution -->
let s = "1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89";
let prog = s.replace(/./g, (c) => "+".repeat(c.charCodeAt(0)) + ".>");
