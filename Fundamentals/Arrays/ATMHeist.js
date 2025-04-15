// <-- ATM Heist -->

/*
  Beyonce (no relation to Beyoncé) is planning a heist at a local casino. She wants steal the money from two ATMs.

  While she mostly cares about getting away with money, she's also interested in a unique fact about the ATMs at this particular casino; once a day, each ATM transfers one dollar to each other machine for each unit of distance away it is (e.g. in [0,1] both indices are 1 unit apart).

  (Additionally, when emptied, each ATM will automatically refill with the exact same dollar amount as before, so it's possible to steal from the same ATM twice.)

  Because she gets a thrill out of the fact that so much money has been transferred between ATMs, what she's ultimately interested in is stealing from the two ATMs which have the highest combined total money inside, plus number of dollars each transferred to the other.

  Your function should return this maximum possible thrill value.

  For example, if we have four ATMs: [2, 3, 4, 5], the ATM at index 0 will transfer a dollar to index 1, $2 to index 2, and $3 to index 3. Similarly, the ATM at index 2 will transfer $1 to indexes 1 and 3, and $2 to index 0.

  Note that in the case above, Beyonce will either steal from the last ATM (index 3) twice, or steal from index 0 and index 3, because it nets her the maximum value of 10 ($5 + $5 + $0 transfer vs. $2 + $5 + $3 transfer). Either way, the answer is 10, returned as an integer.

  Examples:

  const atms = [3,1,3]
  maximumThrill(atms) => 8 // $3 + $3 + $2 transferred between each (atms[0] and atms[2])

  const atms = [2,3,4,5]
  maximumThrill(atms) => 10 // $5 + $5 + $0 transferred (atms[3] and atms[3] again)

  const atms = [10, 10, 11, 13, 7, 8, 9]
  maximumThrill(atms) => 26 // $10 + $13 + $3 transfer between each (atms[0] and atms[3])

  const atms = [2, 3, 4, 5, 10, 6, 7, 8, 9, 10, 11, 12, 4, 4, 2, 2, 12, 8]
  maximumThrill(atms) => 34  // $10 + $12 + $12 transfer between each (atms[4] and atms[16])
*/

// <-- My Solution -->
const maximumThrill = (arr) => {
  let best1 = arr[0];
  let besttot = 0;

  for (let i = 0; i < arr.length; i++) {
    best1 = Math.max(best1, arr[i] - i);
    besttot = Math.max(besttot, best1 + arr[i] + i);
  }

  return besttot;
};

// <-- Best Solution -->
function maximumThrillBest(arr) {
  return arr.reduce(
    ([t, m], n) => [Math.max(t, m + n, n + n), Math.max(m, n) + 1],
    [0, 0],
  )[0];
}
