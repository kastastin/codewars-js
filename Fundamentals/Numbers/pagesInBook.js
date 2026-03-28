// <-- How many pages in a book? -->

/*
  Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

  Task: Given the summary, find the number of pages n the book has.

  Example
  If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

  Be aware that you'll get enormous books having up to 100.000 pages.
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
