// <-- The PaperFold sequence -->

/*
  The regular paperfolding sequence, also known as the dragon curve sequence, is an infinite automatic sequence of 0s and 1s defined as the limit of inserting an alternating sequence of 1s and 0s around and between the terms of the previous sequence:

  1

  1 1 0

  1 1 0 1 1 0 0

  1 1 0 1 1 0 0 1 1 1 0 0 1 0 0

  ...

  Note how each intermediate sequence is a prefix of the next.

  Define a generator function paperFold that sequentially generates the values of this sequence:

  1 1 0 1 1 0 0 1 1 1 0 0 1 0 0 1 1 1 0 1 1 0 0 0 1 1 0 0 1 0 0 ...

  It will be tested for up to 1 000 000 values.
*/

// <-- My Solution -->
function* paperFold() {
  let i = 1;

  while (true) {
    let n = i;

    while (n % 2 == 0) n /= 2;

    if (n % 4 == 1) {
      yield 1;
    } else if (n % 4 == 3) {
      yield 0;
    }

    i++;
  }
}

// <-- Best Solution -->
function* paperFoldBest() {
  yield* [1, 1, 0, 1];

  const gen = paperFoldBest();

  gen.next();
  gen.next();

  while (true) yield* [1, gen.next().value, 0, gen.next().value];
}
