// <-- Moves in squared strings -->

/*
  You are given a string of n lines, each substring being n characters long: For example:

  s = "abcd\nefgh\nijkl\nmnop"

  We will study some transformations of this square of strings.

  Let's now transform this string!

  Symmetry with respect to the main diagonal: diag_1_sym (or diag1Sym or diag-1-sym)
  diag_1_sym(s) => "aeim\nbfjn\ncgko\ndhlp"
  Clockwise rotation 90 degrees: rot_90_clock (or rot90Clock or rot-90-clock)
  rot_90_clock(s) => "miea\nnjfb\nokgc\nplhd"
  selfie_and_diag1(s) (or selfieAndDiag1 or selfie-and-diag1) It is initial string + string obtained by symmetry with respect to the main diagonal.
  s = "abcd\nefgh\nijkl\nmnop" --> 
  "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
  or printed for the last:
  selfie_and_diag1
  abcd|aeim
  efgh|bfjn
  ijkl|cgko 
  mnop|dhlp
  Task:
  Write these functions diag_1_sym, rot_90_clock, selfie_and_diag1
  and

  high-order function oper(fct, s) where

  fct is the function of one variable f to apply to the string s (fct will be one of diag_1_sym, rot_90_clock, selfie_and_diag1)

  Examples:
  s = "abcd\nefgh\nijkl\nmnop"
  oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
  oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
  oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
*/

// <-- Solution -->
const getFirstCharOfEach = (_, i, arr) => arr.map((y) => y.slice(i, i + 1)).join("");

const oper = (fct, s) => fct(s.split("\n")).join("\n");

const rot90Clock = (arr) => arr.reverse().map(getFirstCharOfEach);

const diag1Sym = (arr) => arr.map(getFirstCharOfEach);

const selfieAndDiag1 = (arr) => diag1Sym(arr).map((x, i) => `${[...arr][i]}|${x}`);
