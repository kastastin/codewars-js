// <-- Lazy Repeater -->

/*
  The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

  For example:

  const abc = makeLooper('abc');
  abc(); // should return 'a' on this first call
  abc(); // should return 'b' on this second call
  abc(); // should return 'c' on this third call
  abc(); // should return 'a' again on this fourth call

  Different loopers should not affect each other, so be wary of unmanaged global state.
*/

// <-- Solution -->
function makeLooper(str) {
  let count = 0;

  return function () {
    const result = str[count];

    count++;
    if (count === str.length) {
      count = 0;
    }

    return result;
  };
}
