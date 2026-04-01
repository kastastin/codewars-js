// <-- Easy Balance Checking -->

/*
  You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

  "1000.00
  125 Market 125.45
  126 Hardware 34.95
  127 Video 7.45
  128 Book 14.32
  129 Gasoline 16.10"
  The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount. (Input form may change depending on the language).

  First you have to clean the lines keeping only letters, digits, dots and spaces.

  Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

  "Original_Balance:_1000.00
  125_Market_125.45_Balance_874.55
  126_Hardware_34.95_Balance_839.60
  127_Video_7.45_Balance_832.15
  128_Book_14.32_Balance_817.83
  129_Gasoline_16.10_Balance_801.73
  Total_expense__198.27
  Average_expense__39.65"
*/

// <-- Solution -->
function balance(book) {
  const bookArr = book.replace(/[^\w\n\r\.\s]/g, "").split(/[\n\r]/);

  let total = 0;
  let bal = Number(bookArr[0]);

  for (let i = 1; i < bookArr.length; i++) {
    if (bookArr[i] === "") {
      bookArr.splice(i, 1);
      i--;
      continue;
    }

    let str = bookArr[i].split(" ");
    let purchase = Number(str.pop());
    bal -= purchase;
    total += purchase;

    let append = `${purchase.toFixed(2)} Balance ${bal.toFixed(2)}`;
    str.push(append);
    bookArr[i] = str.join(" ");
  }

  const purchases = bookArr.length - 1;
  bookArr[0] = `Original Balance: ${Number(bookArr[0]).toFixed(2)}`;
  bookArr.push(`Total expense  ${total.toFixed(2)}`);
  bookArr.push(`Average expense  ${(total / purchases).toFixed(2)}`);

  return bookArr.join("\r\n");
}
