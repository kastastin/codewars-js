// <-- Reverse Odd Count -->

/*
  Reverse all elements in an array that occur an odd number of times.

  ['a', 'a', 'b', 'c', 'c', 'd'] will output:

  ['a', 'a', 'd', 'c', 'c', 'b']

  Since there are 2 a's and 2 c's, they will stay in place. There is 1 d and 1 b, so they will swap places.
*/

// <-- My Solution -->
function reverseOddCount(a) {
  let res = [],
    c = 1,
    arr = a.filter((v) => a.filter((val) => val === v).length % 2);

  for (let i = 0; i < a.length; i++) {
    res.push(arr.indexOf(a[i]) > -1 ? arr[arr.length - c++] : a[i]);
  }

  return res;
}

// <-- Best Solution -->
function reverseOddCountBest(array) {
  const obj = array.reduce((a, c) => {
    a[c] = a[c] + 1 || 1;
    return a;
  }, {});

  const odd = array.filter((e) => obj[e] % 2);

  return array.map((e) => (obj[e] % 2 ? odd.pop() : e));
}
