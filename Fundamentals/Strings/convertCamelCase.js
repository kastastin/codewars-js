// <-- Convert string to camel case -->

/*
  Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

  Examples
  "the-stealth-warrior" gets converted to "theStealthWarrior"
  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
  "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

// <-- My Solution -->
function toCamelCase(str) {
  let [firstLetter, ...others] = str.trim().split(/[-_.]/);

  firstLetter.slice(1).toLowerCase();
  for (let str of others) {
    firstLetter += string
      .toLowerCase()
      .replace(string[0].toLowerCase(), string[0].toUpperCase());
  }

  return firstLetter;
}

// <-- Best Solution -->
function toCamelCaseBest(str) {
  return str.replace(/[-_](.)/g, (_, a) => a.toUpperCase());
}
