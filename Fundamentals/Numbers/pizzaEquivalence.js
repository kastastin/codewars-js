// <-- 8 inch pizza equivalence -->

/*
  How much bigger is a 16-inch pizza compared to an 8-inch pizza? A more pragmatic question is: How many 8-inch pizzas "fit" in a 16-incher?

  The answer, as it turns out, is exactly four 8-inch pizzas. For sizes that don't correspond to a round number of 8-inchers, you must round the number of slices (one 8-inch pizza = 8 slices), e.g.:

  howManyPizzas(16) -> "pizzas: 4, slices: 0"
  howManyPizzas(12) -> "pizzas: 2, slices: 2"
  howManyPizzas(8) -> "pizzas: 1, slices: 0"
  howManyPizzas(6) -> "pizzas: 0, slices: 5"
  howManyPizzas(0) -> "pizzas: 0, slices: 0"
  Get coding quick, so you can choose the ideal size for your next meal!
*/

// <-- My Solution -->
function howManyPizzas(n) {
  const pizzas = (n / 8) ** 2;
  const slices = (pizzas % 1) * 8;

  return `pizzas: ${Math.floor(pizzas)}, slices: ${Math.round(slices)}`;
}

// <-- Best Solution -->
function howManyPizzasBest(n) {
  return `pizzas: ${(n = (n * n) / 64) | 0}, slices: ${Math.round(
    (n % 1) * 8,
  )}`;
}
