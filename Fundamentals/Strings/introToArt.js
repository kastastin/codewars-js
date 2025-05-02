// <-- IntroToArt -->

/*
  Help prepare for the entrance exams to art school.

  It is known in advance that this year, the school chose the symmetric letter “W” as the object for the image, and the only condition for its image is only the size that is not known in advance, so as training, you need to come up with a way that accurately depicts the object.

  Write a function that takes an integer as height and returns a list of strings with a line-by-line image of the object.

  Below is an example function:

  # height = 3 should return:
  [
    "*   *   *",
    " * * * * ",
    "  *   *  "
  ]

  # height = 5 should return:
  [
    "*       *       *",
    " *     * *     * ",
    "  *   *   *   *  ",
    "   * *     * *   ",
    "    *       *    "
  ]
  Return an empty list for height < 2.
*/

// <-- My Solution -->
function getW(height) {
  if (height < 2) {
    return [];
  }

  const w = [];

  w.push(
    "*" + " ".repeat(height * 2 - 3) + "*" + " ".repeat(height * 2 - 3) + "*",
  );

  for (let i = 1; i < height - 1; i++) {
    w.push(
      " ".repeat(i) +
        "*" +
        " ".repeat((height - i) * 2 - 3) +
        "*" +
        " ".repeat(i * 2 - 1) +
        "*" +
        " ".repeat((height - i) * 2 - 3) +
        "*" +
        " ".repeat(i),
    );
  }

  w.push(
    " ".repeat(height - 1) +
      "*" +
      " ".repeat(height * 2 - 3) +
      "*" +
      " ".repeat(height - 1),
  );

  return w;
}

// <-- Best Solution -->
function getWBest(height) {
  if (height < 2) {
    return [];
  }

  const lines = [];

  for (let i = 0; i < height; i++) {
    let firstHalf = " ".repeat(i) + "*" + " ".repeat(height - i - 1);
    let secondHalf = [...firstHalf].reverse().join("").substr(1);

    lines.push(firstHalf + secondHalf + firstHalf.substr(1) + secondHalf);
  }

  return lines;
}
