// <-- Single character palindromes -->

/*
  You will be given a string and you task is to check if it is possible to convert that string into a palindrome by removing a single character. If the string is already a palindrome, return "OK". If it is not, and we can convert it to a palindrome by removing one character, then return "remove one", otherwise return "not possible". The order of the characters should not be changed.

  For example:
  solve("abba") = "OK". -- This is a palindrome
  solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
  solve("abbaab") = "not possible". 
*/

// <-- My Solution -->
function solve(s) {
  if (s === s.split("").reverse().join("")) {
    return "OK";
  }

  for (let i = 0; i < s.length; i++) {
    let strArr = s.split("");
    strArr.splice(i, 1);

    if (strArr.join("") === strArr.reverse().join("")) {
      return "remove one";
    }
  }

  return "not possible";
}

// <-- Best Solution -->
const isPalindrome = (s) => s === [...s].reverse().join("");

function solveBest(s) {
  if (isPalindrome(s)) {
    return "OK";
  }

  for (let i = 0; i < s.length; i++) {
    if (isPalindrome(s.slice(0, i) + s.slice(i + 1))) {
      return "remove one";
    }
  }

  return "not possible";
}
