// Determine how many lucky tickets there are in a series of tickets with numbers from 1 to 999999. The lucky ticket is the one whose sum of the first three digits is equal to the sum of the last.
// Example: 123510 is lucky (1+2+3 = 5+1+0)

const tickets = [];
let luckyTicketsCount = 0;

for (let i = 0; i <= 999999; i++) {
  i = i.toString();

  const currentTicket = i.length < 6 ? i.padStart(6, "0") : i;

  const getSum = (str) =>
    str.split("").reduce((acc, curr) => acc + Number(curr), 0);

  const firstThreeDigitsSum = getSum(currentTicket.slice(0, 3));
  const lastThreeDigitsSum = getSum(currentTicket.slice(3));

  if (firstThreeDigitsSum === lastThreeDigitsSum) {
    luckyTicketsCount += 1;
  }
}

// for (let i = 0; i <= 999999; i++) {
//   i = i.toString();
//   tickets.push(i.length < 6 ? i.padStart(6, "0") : i);

//   const [a, b, c, d, e, f] = [...tickets[i]];

//   if (+a + +b + +c === +d + +e + +f) {
//     luckyTicketsCount += 1;
//   }
// }

console.log(luckyTicketsCount); // 55252

// AI variant
function countLuckyTickets() {
  const MAX_SUM = 27; // The maximum possible sum of three digits (9 + 9 + 9)

  // Precompute how many ways each sum can be formed by three digits
  const sumCount = Array(MAX_SUM + 1).fill(0);

  for (let i = 0; i <= 999; i++) {
    const digitsSum =
      Math.floor(i / 100) + Math.floor((i / 10) % 10) + (i % 10);
    sumCount[digitsSum]++;
  }

  // Calculate the total number of lucky tickets
  let luckyTickets = 0;
  for (let sum = 0; sum <= MAX_SUM; sum++) {
    luckyTickets += sumCount[sum] ** 2;
  }

  return luckyTickets;
}

console.log(`Number of lucky tickets: ${countLuckyTickets()}`);
