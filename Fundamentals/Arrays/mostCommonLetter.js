// <-- The most common letter -->

/*
  Find the most common letter (not a space) in the given string (comprised of at least 3 lowercase words) and replace it with the given letter.

  If such letters are two or more, choose the one that appears earliest in the string.

  For example:
  ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
  ('real talk bro', 'n') => 'neal talk bno'
  ('great job go ahead', 'k') => 'grekt job go khekd'
*/

// <-- Solution -->
function replaceCommon(string, letter) {
  const arr = [...string];
  let [commonLetter, count] = ["", 0];

  const letters = [...new Set(arr.filter((i) => i !== " "))];

  for (const item of letters) {
    const itemsNumber = arr.filter((x) => x === item).length;

    if (itemsNumber > count) {
      [commonLetter, count] = [item, itemsNumber];
    }
  }

  return string.replaceAll(commonLetter, letter);
}
