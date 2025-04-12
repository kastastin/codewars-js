// <-- String reduction -->

/*
  In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

  Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

  For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.
*/

// <-- My Solution -->
function solve(a, b) {
  if (a.length <= b.length) {
    return 0;
  }

  const firstArr = a.split("");
  const secondArr = b.split("");

  for (let i = 0; i < secondArr.length; i++) {
    const index = firstArr.indexOf(secondArr[i]);

    if (index >= 0) {
      firstArr.splice(index, 1);
    } else {
      return 0;
    }
  }

  return a.length - b.length;
}

// <-- Best Solution -->
function solveBest(a, b) {
  return [...a].reduce((ac, v) => ac.replace(v, ""), b)
    ? 0
    : a.length - b.length;
}
