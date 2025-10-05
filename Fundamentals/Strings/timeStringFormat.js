// <-- Time-like string format -->

/*
  Build up a method that takes a positive integer and formats it to a 'time - like' format.

  The method must raise an exception if its hour length is less than 3 digits and greater than 4.

  Examples:
  800   --> '8:00'
  1000  --> '10:00'
  1451  --> '14:51'
  3351  --> '33:51'
  10000 --> raise an exception
*/

// <-- My Solution -->
function solution(hour) {
  if (hour > 9999 || hour < 100) {
    throw new Error();
  }

  return parseInt(hour / 100) + ":" + ("00" + (hour % 100)).slice(-2);
}

// <-- Best Solution -->
function solution(hour) {
  if (hour < 100 || hour > 9999) {
    throw new Exception();
  }

  return `${hour}`.replace(/(?=\d\d$)/, ":");
}
