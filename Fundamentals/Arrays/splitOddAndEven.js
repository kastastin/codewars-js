// <-- Split odd and even -->

/*
  Write a function that accepts a number n(n>0), return an array that contains the continuous parts of odd or even digits.

  Please don't worry about digit 0, it won't appear ;-)

  Examples
  123  ===>  [1,2,3]

  223  ===>  [22,3]

  111  ===>  [111]

  13579  ===>  [13579]

  135246  ===>  [135,246]

  123456  ===>  [1,2,3,4,5,6]
*/

// <-- Solution -->
const splitOddAndEven = (n) => {
  return `${n}`.match(RegExp(`[13579]+|[02468]+`, `g`)).map((i) => eval(i));
};
