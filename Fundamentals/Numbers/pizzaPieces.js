// <-- Pizza pieces -->

/*
  In her trip to Italy, Elizabeth Gilbert made it her duty to eat perfect pizza. One day she ordered one for dinner, and then some Italian friends appeared at her room. The problem is that there were many people who ask for a piece of pizza at that moment, and she had a knife that only cuts straight.

  Given the number of pizza cuts, find the maximum amount of pieces of pizza that you can get (not necessarily of equal size). If the number of cuts is negative, return -1 instead (or Nothing in Haskell).
*/

// <-- My Solution -->
function maxPizza(cuts) {
  if (cuts < 0) return -1;
  if (cuts === 0) return 1;

  let total = 1;

  for (let i = 1; i <= cuts; i++) {
    total += i;
  }

  return total;
}

// <-- Best Solution -->
function maxPizzaBest(cut) {
  return cut < 0 ? -1 : 1 + (cut * (cut + 1)) / 2;
}
