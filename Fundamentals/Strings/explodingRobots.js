// <-- Exploding Robots -->

/*
  Given the initial coordinates of both robots and the command sequence, determine if there is any possibility that the two robots collide at any point in time, due to the skipped commands.

  Examples:
  Example 1
  Inputs: x1 = 0, y1 = 0, x2 = 1, y2 = 0, commands = "UL"

  Output: true

  Explanation: If Robot 1 skips "L" the command and Robot 2 doesn't skip any, there will be a collision.

  Example 2
  Inputs: x1 = 0, y1 = 0, x2 = 0, y2 = 1, commands = "LRLR"

  Output: false

  Explanation: Their vertical positions differ (y1=0 and y2=1), and none of the commands affect the y-axis.

  Constraints
  0 <= x1, y1, x2, y2 <= 500
  0 <= len(commands) <= 500
*/

// <-- My Solution -->
function willRobotsCollide(x1, y1, x2, y2, commands) {
  const dx = Math.abs(x1 - x2);
  const dy = Math.abs(y1 - y2);

  let X = 0;
  let Y = 0;

  for (let c of commands) {
    if ("LR".includes(c)) {
      X += 1;
    } else {
      Y += 1;
    }
  }

  return dx <= X && dy <= Y;
}

// <-- Best Solution -->
const willRobotsCollideBest = (x1, y1, x2, y2, cmds) =>
  Math.abs(x1 - x2) <= cmds.replace(/[^LR]+/g, "").length &&
  Math.abs(y1 - y2) <= cmds.replace(/[^UD]+/g, "").length;
