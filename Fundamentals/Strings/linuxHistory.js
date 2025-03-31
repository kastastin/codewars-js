// <-- Linux history -->

/*
  For this 4th kata we will explore the !string command, according to the man page this one refer to command the most recent command preceding the current position in the history list starting with string.

  In this kata you should complete a function that take in an string that correspond to s, and an history with the following format:

    1  cd /pub
    2  more beer
    3  lost
    4  ls 
    5  touch me 
    6  chmod 000 me 
    7  more me
    8  history
  and that should return the most recent command line that start with s, for example with s="more" and the above history it should return more me. If user ask for a s without any know entry for example n=mkdir here, the function should return !mkdir: event not found.
*/

// <-- My Solution -->
function bangStartString(s, history) {
  const events = history
    .split("\n")
    .map((h) => h.replace(/^\s+\d+\s+/g, ""))
    .reverse();

  for (var e of events) if (e.indexOf(s) === 0) return e;

  return `!${s}: event not found`;
}

// <-- Best Solution -->
const bangStartStringBest = (s, lst) =>
  (lst.match(RegExp(`(?<=^ +\\d+ +)${s}.*$`, "gm")) || []).pop() ||
  `!${s}: event not found`;
