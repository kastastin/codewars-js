// <-- Search in multidimensional array -->

/*
  Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

  Example:

  locate(['a','b',['c','d',['e']]],'e'); // should return true
  locate(['a','b',['c','d',['e']]],'a'); // should return true
  locate(['a','b',['c','d',['e']]],'f'); // should return false
*/

// <-- My Solution -->
function locate(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }

    if (Array.isArray(arr[i]) && locate(arr[i], value)) {
      return true;
    }
  }

  return false;
}

// <-- Best Solution -->
function locateBest(arr, val) {
  return arr.some((el) => (Array.isArray(el) ? locate(el, val) : el === val));
}
