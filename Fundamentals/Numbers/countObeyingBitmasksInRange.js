// <-- Count Obeying Bitmasks In The Range -->

/*
  We say that integer a obeys integer b if in all positions where b has bits set to 1, a has corresponding bits set to 1.

  For example:

  1111101 = 125 obeys
  1101101 = 109, but
  1111000 = 120 does not obey
  1101011 = 107.
  Task
  Write a function countObeyingBitmasks that takes integers x, y, z and returns the number of integers in the range (determined by the inputs, see below) that obey at least one of the inputs.

  ​
  (max(x,y,z)+1))
  (from zero up to, but not including, the smallest power of two greater than the inputs)

  Example
  For integers:

  x = 1001 = 9
  y = 0011 = 3 and
  z = 0110 = 6
  the function should return 8, since there are 8 integers obeying x, y, or z. Namely:

  0011 = 3,
  0110 = 6,
  0111 = 7,
  1001 = 9,
  1011 = 11
  1101 = 13,
  1110 = 14,
  1111 = 15
*/

// <-- Solution -->
function countObeyingBitmasks(x, y, z) {
  const k = 32 - Math.clz32(Math.max(x, y, z));
  const [xp, yp, zp, xyp, xzp, yzp, xyzp] = [x, y, z, x | y, x | z, y | z, x | y | z].map((v) => 2 ** (k - count1s(v)));

  return xp + yp + zp - xyp - xzp - yzp + xyzp;
}

function count1s(num) {
  return num ? 1 + count1s(num & (num - 1)) : 0;
}
