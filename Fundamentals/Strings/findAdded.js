// <-- Find Added -->

/*
  You are given two strings (st1, st2) as inputs. Your task is to return a string containing the numbers in st2 which are not in str1. Make sure the numbers are returned in ascending order. All inputs will be a string of numbers.

  Here are some examples:

  findAdded('4455446', '447555446666'); // '56667'
  findAdded('44554466', '447554466'); // '7'
  findAdded('9876521', '9876543211'); // '134'
  findAdded('678', '876'); // ''
  findAdded('678', '6'); // ''
*/

// <-- My Solution -->
function findAdded(st1, st2) {
  for (let i = 0; i < st1.length; i++) {
    st2 = st2.replace(st1[i], "");
  }

  return st2.split("").sort().join("");
}

// <-- Best Solution -->
function findAddedBest(st1, st2) {
  return [...st1]
    .reduce((s, c) => s.replace(c, ""), st2)
    .split("")
    .sort()
    .join("");
}
