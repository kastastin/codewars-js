// <-- String Combat -->

/*
  You're given two strings, s1 and s2. Both represent a team consisting of the characters a..z (repsenting life points 1..26) and A..Z (representing life points 27..52). In each round, the first two participants of both teams (aka their first characters) will duel.

  The character with less life points will die and get removed, whereas the life points of the survivor get reduced by 2/3 (it has only 1/3 of its original value rounded to the closest integer). The winner will still participate in the duels. If both combatants have the same life points, they get both removed.

  The duels stop whenever one of both strings is empty or null value. Unless both are empty or null value, you have to return the winning string and its remaining content, e.g. "Winner: s1(abc)". If both are empty string or null value, return "Draw".

  Some easy example:
    combat("a","c")      == "Winner: s2(a)"    combat("a","a")     == "Draw"
    combat("abc","ab")   == "Winner: s1(c)"    combat("ab","ab")   == "Draw"
    combat("boy","girl") == "Winner: s2(fl)"   combat("dog","cat") == "Draw"
*/

// <-- My Solution -->
function combat(s1, s2) {
  const alpha = "_abcdefghijklmnopqrstuvwxyz";
  alpha += alpha.slice(1).toUpperCase();

  [s1, s2] = [s1, s2].map((s) => s.split(""));

  while (s1.length && s2.length) {
    let a = alpha.indexOf(s1[0]);
    let b = alpha.indexOf(s2[0]);
    s1.shift();
    s2.shift();

    if (a > b) {
      s1.unshift(alpha[Math.round(a / 3)]);
    } else if (b > a) {
      s2.unshift(alpha[Math.round(b / 3)]);
    }
  }

  [s1, s2] = [s1, s2].map((s) => s.join(""));

  if (!s1.length && !s2.length) return "Draw";

  if (!s1.length) return "Winner: s2(" + s2 + ")";

  if (!s2.length) return "Winner: s1(" + s1 + ")";
}

// <-- Best Solution -->
function combatBest(s1, s2) {
  let first = s1;
  let second = s2;
  const points = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  while (first.length && second.length) {
    const ps1 = points.indexOf(first[0]);
    const ps2 = points.indexOf(second[0]);
    first = first.slice(1);
    second = second.slice(1);

    if (ps1 > ps2 && Math.round(ps1 / 3) > 0)
      first = points[Math.round(ps1 / 3)] + first;

    if (ps2 > ps1 && Math.round(ps2 / 3) > 0)
      second = points[Math.round(ps2 / 3)] + second;
  }

  return first.length == second.length
    ? "Draw"
    : `Winner: s${first.length > second.length ? 1 : 2}(${first}${second})`;
}
