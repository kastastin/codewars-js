// <-- Find the unique string -->

/*
  There is an array of strings. All strings contains similar letters except one. Try to find it!

  findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
  findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

  Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

  It’s guaranteed that array contains more than 2 strings.
*/

// <-- My Solution -->
function findUniq(arr) {
  const newArr = arr.map((a) => {
    return [...new Set(a.toLowerCase())].sort().join("");
  });

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i])) {
      return arr[i];
    }
  }
}

// <-- Best Solution -->
function findUniqBest(arr) {
  return arr.sort().filter((e, i, a) => e.match(new RegExp(`[^${a[1]}]`, "gi")))[0];
}
