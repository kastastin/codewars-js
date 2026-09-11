// <-- Moves in squared strings -->

/*
  You are given a string of n lines, each substring being n characters long: For example:

  s = "abcd\nefgh\nijkl\nmnop"

  We will study some transformations of this square of strings.

  rot(s):
  Clock rotation 180 degrees.
  rot(s) => "ponm\nlkji\nhgfe\ndcba"
  selfie_and_rot(s) (or selfieAndRot or selfie-and-rot):
  It is an initial string combined with its 180-degree clock-rotated version, interspersed with dots proportional to the length of the segments, to better illustrate the rotation when printed.
  s = "abcd\nefgh\nijkl\nmnop" --> 
  "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
  On printing, these functions work as follows:

  |rot             |selfie_and_rot
  |abcd --> ponm   |abcd --> abcd....
  |efgh     lkji   |efgh     efgh....
  |ijkl     hgfe   |ijkl     ijkl....   
  |mnop     dcba   |mnop     mnop....
                            ....ponm
                            ....lkji
                            ....hgfe
                            ....dcba
  Notice that the number of dots is the common length of "abcd", "efgh", "ijkl", "mnop".

  Task:
  Write these two functions rot and selfie_and_rot
  and

  high-order function oper(fct, s) where

  fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)

  Examples:
  s = "abcd\nefgh\nijkl\nmnop"
  oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
  oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
*/

// <-- Solution -->
function rot(s) {
  return s.split("").reverse().join("");
}

function selfieAndRot(s) {
  return (s = s.replace(/.+/g, (t) => t + t.replace(/./g, "."))) + "\n" + rot(s);
}

function oper(fn, s) {
  return fn(s);
}
