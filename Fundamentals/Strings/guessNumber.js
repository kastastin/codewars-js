// <-- Guess the number -->

/*
  The Guesser class is set up to generate a random number from 1-1000, and allows 10 guesses to get the number. Your task is to write a method get_number() (Guesser.prototype.getNumber() in Javascript) inside the Guesser class (or its derived class in Java) to identify a random number from the interval [1, 1000].

  You should use the pre-written method:

  this.guess(number)
  Which will return either:

  "Too high!" If the guess is too high.
  "Too low!" If the guess is too low.
  or "Correct!" If the guess is correct.
  You can only call this method 10 times before an exception is raised.

  Your function must return the correct number (it is not sufficient to call guess() with the solution).
*/

// <-- Solution -->
Guesser.prototype.getNumber = function (min, max) {
  min = min || 1;
  max = max || 1000;

  const guess = Math.floor(min + (max - min) / 2);
  const response = this.guess(guess);

  if (response === "Too high!") return this.getNumber(min, guess - 1);
  if (response === "Too low!") return this.getNumber(guess + 1, max);

  return guess;
};
