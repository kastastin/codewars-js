// <-- Colorful Number -->

/*
  Determine whether a non-negative integer number is colorful or not.

  263 is a colorful number because [2, 6, 3, 2*6, 6*3, 2*6*3] are all different; whereas
  236 is not colorful, because [2, 3, 6, 2*3, 3*6, 2*3*6] has 6 twice.

  So take all consecutive subsets of digits, take their products, and ensure all the products are different.

  Examples
  263  -->  true
  236  -->  false
*/

// <-- My Solution -->
function colourful(number) {
  const digits = number.toString().split("").map(Number);
  const products = new Set();
  const length = digits.length;

  for (let i = 0; i < length; i++) {
    let product = 1;

    for (let j = i; j < length; j++) {
      product *= digits[j];

      if (products.has(product)) {
        return false;
      }

      products.add(product);
    }
  }

  return true;
}

// <-- Best Solution -->
const colourful = (num) => {
  for (let i = 0, seen = {}, _num = `${num}`, len = _num.length; i < len; i++) {
    for (let j = i, prod = +_num[i]; j < len; prod *= _num[++j]) {
      if (seen[prod]) {
        return false;
      }

      seen[prod] = true;
    }
  }

  return true;
};
