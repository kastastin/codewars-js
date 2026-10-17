// <-- Count Binary Substring -->

/*
  Given two strings s1 and s2, whose alphabet consist only 0 and 1. Your task is to count how many times s1 appear as a substring in s2.

  For example, if s2 is "1001110110" while the pattern string s1 is "11", your output should be 3, because the pattern s1 3 times appeared in s2.

  Still don't understand the problem? Look at the following examples:

  Examples
  For s1 = "11", s2 = "1001110110", the output should be 3.

  Fisrt s1 in s2 -----> "1001110110"

  Second s1 in s2--> "1001110110"

  Third s1 in s2 ----> "1001110110"

  For s1 = "101", s2 = "110010010010001", the output should be 0.

  There is no s1 in s2.

  For s1 = "1010", s2 = "110100010101011", the output should be 3.

  Fisrt s1 in s2 -----> "110100010101011"

  Second s1 in s2--> "110100010101011"

  Third s1 in s2 ----> "110100010101011"
*/

// <-- Solution -->
function count(s1, s2) {
  let res = 0;
  let pos = 0;

  while ((pos = s2.indexOf(s1, pos) + 1)) {
    res++;
  }

  return res;
}
