// <-- Look and say sequence generator -->

/*
  The look and say sequence is a sequence in which each number is the result of a "look and say" operation on the previous element.

  Considering for example the classical version startin with "1": ["1", "11", "21, "1211", "111221", ...]. You can see that the second element describes the first as "1(times number)1", the third is "2(times number)1" describing the second, the fourth is "1(times number)2(and)1(times number)1" and so on.

  Your goal is to create a function which takes a starting string (not necessarily the classical "1", much less a single character start) and return the nth element of the series.

  Examples
  lookAndSaySequence("1", 1)   === "1"
  lookAndSaySequence("1", 3)   === "21"
  lookAndSaySequence("1", 5)   === "111221"
  lookAndSaySequence("22", 10) === "22"
  lookAndSaySequence("14", 2)  === "1114"
  Trivia: "22" is the only element that can keep the series constant.
*/

// <-- My Solution -->
function lookAndSaySequence(firstElement, n) {
  for (let i = 1; i < n; i++) {
    firstElement = firstElement.replace(/(.)\1*/g, (m, g) => m.length + g);
  }

  return firstElement;
}

// <-- Best Solution -->
function lookAndSaySequenceBest(s, n) {
  return n === 1
    ? s
    : lookAndSaySequence(
        s.replace(/(\d)\1*/g, (m, n) => m.length + n),
        n - 1
      );
}
