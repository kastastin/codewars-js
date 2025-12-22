// <-- Who will win the race? -->

/*
  A race has started! You need to determine who will win (if anyone).

  Each racer has a set speed, given in the form of a string. They accelerate to this speed instantly and stay at it consistently for the entire race.

  Pay attention that this race is not very fair, as there is not a set distance for everyone to run. The distance each racer needs to run to get to the finish line will be given as a string, which will need to be parsed to obtain the speed.

  Your Task:
  Create the function whoWillWin that will predict what will happen in the race and return it as a string.

  Input:
  You are given the array arr of racers.

  Each racer is an object formatted like this: {name:"Racer", speed:"1 meter(s) per second", distanceToRun:"1000 meters"}
  Note that the values of speed and distanceToRun will be strings, so you will need to parse out the numbers to get useful values.

  All racers will be valid and there will be no copies of names, but the array might be empty, in which case you should return the string "No one raced!"

  Output:
  If no racers are present (arr is empty), return the string "No one raced!"

  If a racer starts at or beyond the finish line (distanceToRun <= 0), or is not running forwards (speed <= 0), they are disqualified.

  If all racers are disqualified, return the string "Everyone was disqualified!"

  If someone finished the race, return the name of the winner and the time they finished rounded to the nearest second: "Racer won the race in 1000 second(s)!"

  If the race was a tie, return the string "N people tied in S second(s)!", N being the number of people who tied and S being the time they finished in.
*/

// <-- Solution -->
function whoWillWin(rs) {
  if (rs.length == 0) {
    return "No one raced!";
  }

  rs = rs.filter((r) => r.distanceToRun >= "0." && r.speed >= "0.");

  if (rs.length == 0) {
    return "Everyone was disqualified!";
  }

  const ts = rs.map((r) => parseInt(r.distanceToRun) / parseFloat(r.speed));
  const t = Math.min(...ts);
  const ws = rs.filter((_, i) => ts[i] == t);

  return ws.length == 1
    ? `${ws[0].name} won the race in ${Math.round(t)} second(s)!`
    : `${ws.length} people tied in ${Math.round(t)} second(s)!`;
}
