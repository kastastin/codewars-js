// <-- Look and Write Sequence -->

/*
  You wrote all your unit test names in camelCase. But some of your colleagues have troubles reading these long test names. So you make a compromise to switch to underscore separation.

  To make these changes fast you wrote a class to translate a camelCase name into an underscore separated name.
  Implement the ToUnderscore() method.

  Example:
  "ThisIsAUnitTest" => "This_Is_A_Unit_Test"
*/

// <-- My Solution -->
function toUnderScore(name) {
  const result = [...name];

  for (let i = 1; i < name.length; i++) {
    const prev = name[i - 1];
    const curr = name[i];

    switch (true) {
      case /[a-z]/.test(prev) && /[A-Z0-9]/.test(curr):
      case /[A-Z][A-Z]/.test(prev + curr):
      case /[0-9][A-Z]/.test(prev + curr):
      case /[A-Z][0-9]/.test(prev + curr):
        result[i] = `_${result[i]}`;
    }
  }

  return result.join("");
}

// <-- Best Solution -->
function toUnderScoreBest(s) {
  return s.replace(/([A-Za-z](?=[A-Z\d])|\d(?=[A-Z]))/g, "$&_");
}
