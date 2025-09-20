// <-- Lowest product of 4 consecutive numbers -->

/*
  Create a function that receives a string consists of only digit characters ('0' to '9'), and returns the lowest product of 4 consecutive digits within that string.

  This should only work if the number has 4 digits or more. If not, return "Number is too small" instead.

  Example
  "123456789" --> 24    // 1*2*3*4
  "35" --> "Number is too small"
*/

// <-- My Solution -->
function lowestProduct(input) {
  if (input.length < 4) return "Number is too small";

  const products = [];
  const digits = input.split("");

  for (let i = 0; i < digits.length - 3; i++) {
    products.push(digits.slice(i, i + 4).reduce((acc, dig) => acc * dig));
  }

  return Math.min(...products);
}

// <-- Best Solution -->
function lowestProductBest(input) {
  if (input.length < 4) return "Number is too small";

  const arr = [];

  for (let i = 0; i < input.length - 3; i++) {
    const s = input
      .split("")
      .splice(i, 4)
      .reduce((acc, num) => acc * Number(num), 1);

    arr.push(s);
  }

  return Math.min.apply(null, arr);
}
