// <-- A String of Sorts -->

/*
  Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

  sortString("foos", "of")       => "oofs"
  sortString("string", "gnirts") => "gnirts"
  sortString("banana", "abn")    => "aaabnn"
  To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

  Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
*/

// <-- My Solution -->
function sortString(str, order) {
  const res = [];

  for (let i in order) {
    while (str.includes(order[i])) {
      res.push(order[i]);
      str = str.replace(order[i], "");
    }
  }

  return res.join("") + str;
}

// <-- Best Solution -->
function sortStringBest(q, q2) {
  let a,
    so = [],
    s = "";
  [...q].map((e) => (q2.indexOf(e) > -1 ? so.push(e) : (s += e)));
  a = so.sort((a, b) => q2.indexOf(a) - q2.indexOf(b)).join("") + s;
  return a;
}
