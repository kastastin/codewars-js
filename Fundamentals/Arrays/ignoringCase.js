// <-- Sort Arrays(Ignoring Case) -->

/*
  Sort the given array of strings in alphabetical order, case insensitive. For example:

  ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
  ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

// <-- My Solution -->
sortme = function (names) {
  return names.sort(function (first, second) {
    return first.toLowerCase().localeCompare(second.toLowerCase());
  });
};

// <-- Best Solution -->
const sortmeBest = (names) =>
  names.sort((a, b) =>
    new Intl.Collator("en", { sensitivity: "base" }).compare(a, b),
  );
