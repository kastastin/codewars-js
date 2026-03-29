// <-- Remove the parentheses -->

/*
  In this kata you are given a string for example:
  "example(unwanted thing)example"
  Your task is to remove everything inside the parentheses as well as the parentheses themselves.

  The example above would return:
  "exampleexample"

  Notes
  Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
  There can be multiple parentheses.
  The parentheses can be nested.
*/

// <-- Solution -->
function amountOfPages(summary) {
  let currentPage = 0;
  let totalDigits = 0;

  while (totalDigits < summary) {
    currentPage += 1;
    totalDigits += String(currentPage).length;
  }

  return currentPage;
}
