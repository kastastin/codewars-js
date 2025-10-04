// <-- Floating powers of two -->

/*
  Write a function that tests if a given floating point number is a power of two, and then calculates the exponent.

  For the purposes of this kata, the powers of two are 1, 2, 4, ..., 0.5, 0.25, ..., but also the negative values -1, -2, -4, ..., -0.5, -0.25, ...

  If the number is a power of two in this sense, the function should return the exponent: 0 for input 1, 1 for input 2, -1 for 0.5, -2 for 0.25, and so on.

  The sign of the number does not matter – the function should return 0 for input -1, 1 for -2, -1 for -0.5, ...

  If the number is not a power of two, the function should return the error value NaN (not a number).

  The function must only return an exponent if the floating point number exactly represents a power of two.
*/

// <-- My Solution -->
function powerOfTwo(v) {
  if (v === 0 || !isFinite(v)) {
    return NaN;
  }

  const absV = Math.abs(v);
  const exponent = Math.log2(absV);

  return Math.pow(2, Math.round(exponent)) === absV ? Math.round(exponent) : NaN;
}

// <-- Best Solution -->
function powerOfTwoBest(v) {
  const absV = Math.abs(v);
  const p = parseInt(Math.log(absV) / Math.log(2));

  return !Number.isNaN(p) && 2 ** p === absV ? p : NaN;
}
