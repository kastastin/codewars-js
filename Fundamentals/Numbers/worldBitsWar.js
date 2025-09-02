// <-- World Bits War -->

/*
  A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

  The side with the largest cumulated strength wins.

  Again, three possible outcomes: odds win, evens win and tie.

  Examples:

  [1,5,12]    => "odds win"  //   1 + 101 vs 1100,         3 vs 2
  [7,-3,20]   => "evens win" // 111 - 11  vs 10100,    3 - 2 vs 2
  [7,-3,-2,6] => "tie"       // 111 - 11  vs -1 + 110,  3 - 2 vs -1 + 2
*/

// <-- My Solution -->
function bitsWar(numbers) {
  const hbc = (n) => [...n.toString(2)].filter((c) => c == "1").length;

  let m = 0;

  for (let n of numbers) {
    if (n == 0) continue;
    if ((n > 0) ^ (n % 2 != 0)) m -= hbc(n);
    else m += hbc(n);
  }

  return m == 0 ? "tie" : m > 0 ? "odds win" : "evens win";
}

// <-- Best Solution -->
function bitsWarBest(numbers) {
  const r = numbers.reduce((a, v) => {
    return (a += Math.sign(v) * (v.toString(2).split("1").length - 1) * (v % 2 ? 1 : -1)), a;
  }, 0);

  return r > 0 ? "odds win" : r < 0 ? "evens win" : "tie";
}
