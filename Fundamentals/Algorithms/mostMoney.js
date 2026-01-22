// <-- Who has the most money? -->

/*
  Find the most common letter (not a space) in the given string (comprised of at least 3 lowercase words) and replace it with the given letter.

  If such letters are two or more, choose the one that appears earliest in the string.

  For example:
  ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
  ('real talk bro', 'n') => 'neal talk bno'
  ('great job go ahead', 'k') => 'grekt job go khekd'
*/

// <-- Solution -->
function mostMoney(students) {
  const money = students.map((st) => st.fives * 5 + st.tens * 10 + st.twenties * 20);

  if (money.length > 1 && money.every((val) => val == money[0])) {
    return "all";
  }

  const index = money.indexOf(Math.max(...money));

  return students[index].name;
}
