// <-- NegaBinary multiple of 3 -->

/*
  Create a regular expression capable of evaluating nega-binary strings, determining whether the given string represents a number divisible by 3.

  NegaBinary
  The kata will use nega-binary numbers as used in CW Lambda Calculus except for the encoding:
  String-encoded, Little-Endian, sentinel-terminated, base negative 2, arbitrary precision binary numbers,
  with an invariant that the most significant bit, if present, is set.

  Numbers will be String-encoded, using bits '0' and '1' and terminator '$'.

  Input validation
  None.
  All tested numbers will be valid, correct, finite numbers in the encoding.
  There will be no bits other than 0 or 1, the terminator will not be missing, and the most significant bit, if present, will be 1.

  Examples
  multipleOf3.test( "$" )     ->  true   //   0 is divisible by 3
  multipleOf3.test( "1$" )    ->  false  //   1 is not divisible by 3
  multipleOf3.test( "01$" )   ->  false  //  -2 is not divisible by 3
  multipleOf3.test( "11$" )   ->  false  //  -1 is not divisible by 3
  multipleOf3.test( "001$" )  ->  false  //   4 is not divisible by 3
  multipleOf3.test( "101$" )  ->  false  //   5 is not divisible by 3
  multipleOf3.test( "011$" )  ->  false  //   2 is not divisible by 3
  multipleOf3.test( "111$" )  ->  true   //   3 is divisible by 3
*/

// <-- Solution -->
const multipleOf3 = RegExp("^0*(10*10*10*)*\\$");
