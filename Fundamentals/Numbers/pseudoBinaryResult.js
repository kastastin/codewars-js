// <-- Pseudo-binary Result -->

/*
  For this task, we will use the term "pseudo-binary" number, defining it as a positive decimal number, which consists of only 1s and/or 0s. So, the number 
  10110011
  10110011 might look like a regular binary number but it is not.

  Examples
  pseudo_binary(2)  # can return 5;          2 * 5  = 10
  pseudo_binary(3)  # can return 37;         3 * 37 = 111
  pseudo_binary(10) # can return 1;          10 * 1 = 10
  pseudo_binary(9)  # can return 12 345 679; 9 * 12 345 679 = 111 111 111
*/

// <-- Solution -->
function pseudoBinary(n) {
  let product;
  let i = 1;

  while (true) {
    product = BigInt(i.toString(2));

    if (product % n === 0n) {
      return product / n;
    }

    i++;
  }
}
