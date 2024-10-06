// <-- Even Gray Code -->

/*
  The Gray Code is a representation of binary integers in which successive integers differ in only 1 bit. The bit switched at each step is the one that yields the smallest value not yet represented. See Gray Code.

  The "Even Gray Code" requires successive binary integers to differ in an even number of bits. The bits changed at each step should yield the smallest value not yet represented in the standard binary encoding.

  Example - The 4-bit Even Gray Code: 
  0000   Start at 0
  0011   Switch bits 1,2
  0101   Switch bits 2,3
  0110   Switch bits 1,2
  1001   Switch all 4 bits
  1010   Switch bits 1,2
  1100   Switch bits 2,3
  1111   Switch bits 1,2

  Inputs:

  The size of the Even Gray Code, a integer between 2 and 20.

  The position where we want the Even Gray Code value, a non-negative integer guaranteed to be smaller than the number of elements in the Even Gray Code of length size.

  Output:

  A string representing the value at position position of the Even Gray Code of length size.

  Example:

  even_gray_code(4,5) should return '1010', because, as shown above, 1010 is the value of the Even Gray Code of length 4 at position 5. (The first position is position 0.)

  Source: International Collegiate Programming Contest, North Central North American Regional, 2023.
*/

// <-- My Solution -->
function evenGrayCode(size, position) {
  let grayCode = 0;

  for (let i = position; i > 0; i--) {
    let isEven = false;
    let newCode = grayCode;

    while (!isEven) {
      newCode += 1;
      let XOR = grayCode ^ newCode;
      let bitSum = XOR.toString(2)
        .split("")
        .reduce((sum, num) => Number(sum) + Number(num));
      isEven = !(bitSum % 2);
    }
    grayCode = newCode;
  }

  return grayCode.toString(2).padStart(size, "0");
}

// <-- Best Solution -->
function evenGrayCodeBest(size, position) {
  let i = 0,
    count = 0;

  for (i = 0; count <= position; i++) {
    if (
      i
        .toString(2)
        .split("")
        .filter((v) => v == "1").length %
        2 ==
      0
    )
      count++;
  }
  return (i - 1).toString(2).padStart(size, "0");
}
