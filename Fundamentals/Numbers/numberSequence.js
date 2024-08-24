// <-- Number sequence -->

/*
  In this Kata, you will be given a string of numbers in sequence and your task will be to return the missing number. If there is no number missing or there is an error in the sequence, return -1.

  For example:

  missing("123567") = 4 
  missing("899091939495") = 92
  missing("9899101102") = 100
  missing("599600601602") = -1 -- no number missing
  missing("8990919395") = -1 -- error in sequence. Both 92 and 94 missing.
  The sequence will always be in ascending order.
*/

// <-- My Solution -->
function missing(src) {
  let res;
  const len = src.length;

  for (let n = 1; len - n >= n; n++) {
    for (let cur = Number(src.substring(0, n)), start = n; start < len; ) {
      cur += 1;
      const exist = src.indexOf(cur, start) === start;

      if (exist) {
        start += String(cur).length;
        continue;
      }

      res = res ? null : cur;

      if (!res) break;
    }

    if (res) break;
  }

  return res || -1;
}

// <-- Best Solution -->
function missingBest(s) {
  for (let i = 1; i <= s.length / 2; i++) {
    let n = +s.slice(0, i),
      t = s,
      m;

    for (; t.length; n++) {
      if (t.startsWith(n)) t = t.slice(n.toString().length);
      else if (!m) m = n;
      else {
        m = undefined;
        break;
      }
    }

    if (m) return m;
  }

  return -1;
}
