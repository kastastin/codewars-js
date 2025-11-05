// <-- CamelCase Method -->

/*
  Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

  Examples (input --> output):
  "hello case" --> "HelloCase"
  "camel case word" --> "CamelCaseWord"
*/

// <-- My Solution -->
String.prototype.camelCase = function () {
  const capitalize = (word) => word.slice(0, 1).toUpperCase() + word.slice(1);

  return this.split(" ").map(capitalize).join("");
};

// <-- Best Solution -->
String.prototype.camelCase = function () {
  return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase());
};
