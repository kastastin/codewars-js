// <-- Mumbling -->

/*
  This time no story, no theory. The examples below show you how to write function accum:
  The parameter of accum is a string which includes only letters from a..z and A..Z.

  Examples:
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

// <-- My Solution -->
function accum(s) {
  return [...s]
    .map((val, i) => {
      const sign = val.toLowerCase();
      return `${sign.toUpperCase()}${sign.repeat(i)}`;
    })
    .join("-");
}

// <-- Best Solution -->
function accumBest(s) {
  return s
    .split("")
    .map((v, i) => v.toUpperCase() + v.toLowerCase().repeat(i))
    .join("-");
}
