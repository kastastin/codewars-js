// <-- Red and bumpy -->

/*
  You're playing a game with a friend involving a bag of marbles. In the bag are ten marbles:

  1 smooth red marble
  4 bumpy red marbles
  2 bumpy yellow marbles
  1 smooth yellow marble
  1 bumpy green marble
  1 smooth green marble
  You can see that the probability of picking a smooth red marble from the bag is 1 / 10 or 0.10 and the probability of picking a bumpy yellow marble is 2 / 10 or 0.20.

  The game works like this: your friend puts her hand in the bag, chooses a marble (without looking at it) and tells you whether it's bumpy or smooth. Then you have to guess which color it is before she pulls it out and reveals whether you're correct or not.

  You know that the information about whether the marble is bumpy or smooth changes the probability of what color it is, and you want some help with your guesses.

  Write a function that takes two arguments: a color ('red', 'yellow', or 'green') and a texture ('bumpy' or 'smooth') and returns the probability as a decimal fraction accurate to two places.

  The probability should be a string and should discard any digits after the 100ths place. For example, 2 / 3 or 0.6666666666666666 would become the string '0.66'. Note this is different from rounding.

  As a complete example, 'red', 'bumpy' should return the string '0.57'.
*/

// <-- My Solution -->
function colorProbability(color, texture) {
  const obj = {
    smooth: { green: 1, yellow: 1, red: 1 },
    bumpy: { green: 1, yellow: 2, red: 4 },
  };

  const colorTexture = obj[texture][color];

  const totalTexture = Object.values(obj[texture]).reduce(
    (acc, curr) => acc + curr,
  );

  return String(colorTexture / totalTexture).slice(0, 4);
}

// <-- Best Solution -->
function colorProbabilityBest(color, texture) {
  const b = { red: "0.57", green: "0.14", yellow: "0.28" };

  return texture === "bumpy" ? b[color] : "0.33";
}
