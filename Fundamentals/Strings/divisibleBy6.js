// <-- Is Divisible By 6 -->

/*
  For example, "*2" should return ["12", "42", "72"].

  Similarly, "*2*" should return ["024", "120", "126", "222", "228", "324", "420", "426", "522", "528", "624", "720", "726", "822", "828", "924"]. Order matters and returning the right one is part of the challenge itself, yep!

  More examples in the test codes and, of course, if you cannot generate any number divisible by 6, just return [] (or [] of String in Crystal).
*/

// <-- My Solution -->
function isDivisibleBy6(str) {
  const resultArr = [];
  const DIVISOR = BigInt(6);

  function looper(str) {
    for (let i = 0; i <= 9; i++) {
      let newStr = str.replace("*", i.toString());

      if (newStr.includes("*")) {
        looper(newStr);
      } else {
        if (BigInt(newStr) % DIVISOR === BigInt(0)) resultArr.push(newStr);
      }
    }
  }

  looper(str);

  return resultArr;
}

// <-- Best Solution -->
const isDivisibleBy6Best = (s, b = "0123456789") =>
  [
    ...new Set(
      s
        .match(/\*/g)
        .reduce(
          (a) => a.flatMap((p) => [...b].map((d) => p.replace("*", d))),
          [...b].fill(s),
        ),
    ),
  ].filter((n) => !(BigInt(n) % 6n));
