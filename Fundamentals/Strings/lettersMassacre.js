// <-- letters massacre -->

/*
  Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.

  The left side letters and their power:

  w - 4
  p - 3 
  b - 2
  s - 1
  The right side letters and their power:

  m - 4
  q - 3 
  d - 2
  z - 1
  The other letters don't have power and are only victims.
  The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

  Example (Input --> Output)
  "s*zz"           --> "Right side wins!"
  "*zd*qm*wp*bs*"  --> "Let's fight again!"
  "zzzz*s*"        --> "Right side wins!"
  "www*www****z"   -- > "Left side wins!"
*/

// <-- My Solution -->
function alphabetWar(str) {
  const arr = str.replace(/(?:.)?\*+.?/g, "").split("");
  const [left, right] = arr.reduce(
    (acc, curr) => {
      acc[0] += { w: 4, p: 3, b: 2, s: 1 }[curr] || 0;
      acc[1] += { m: 4, q: 3, d: 2, z: 1 }[curr] || 0;
      return acc;
    },
    [0, 0],
  );

  return left > right
    ? "Left side wins!"
    : right > left
    ? "Right side wins!"
    : "Let's fight again!";
}

// <-- Best Solution -->
const map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };

function alphabetWarBest(fight) {
  const res = fight
    .replace(/[^*]?\*[^*]?/g, "")
    .split("")
    .reduce((a, b) => a + (map[b] || 0), 0);

  return res
    ? (res < 0 ? "Left" : "Right") + " side wins!"
    : "Let's fight again!";
}
