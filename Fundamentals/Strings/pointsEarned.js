// <-- Alex & snooker: points earned -->

/*
  Given his short hand notation as string, calculate the points a player scored in a set.

  He codes the ball colors with letters:

  - R  = red     -->  1 point
  - Y  = yellow  -->  2 points
  - G  = green   -->  3 points
  - Bn = brown   -->  4 points
  - Be = blue    -->  5 points
  - P  = pink    -->  6 points
  - Bk = black   -->  7 points
  - W  = white   -->  no points because it's a foul
  The color may be followed by a number, e.g. R12 would stand for 12 red balls pocketed. If there is no number given, the ball was pocketed once.

  Notes:

  If the string includes the white ball, return 'Foul'
  If the total score is more than 147, return 'invalid data'
  For your convenience the points for each color are provided as hash / dictionary with the name blz

  Examples
  'R15P3G1Bk4Y1Bn1Be3'          -->  85
  'R13Bk14YRGBnBkRBePBk1'       -->  147
  'G9G11P9Bn2Bn1Be10G7WBn10G3'  -->  'Foul'
  'Bn14Bn14Bn8P9'               -->  'invalid data'
*/

// <-- My Solution -->
function frame(balls) {
  if (!balls) {
    return 0;
  }

  if (balls.includes("W")) {
    return "Foul";
  }

  balls = balls.match(/(R|Y|G|Bn|Be|P|Bk|W)\d*/g);

  let score = 0;

  balls.forEach((ball) => {
    const color = ball.match(/[a-z]+/i);
    const num = Number(ball.match(/[0-9]+/)) || 1;

    score += blz[color] * num;
  });

  return score <= 147 ? score : "invalid data";
}

// <-- Best Solution -->
function frameBest(balls) {
  let score = 0;
  let match = null;
  let regex = /([RYGPW]|B[nek])(\d*)/g;

  while ((match = regex.exec(balls)))
    if (match[1] === "W") {
      return "Foul";
    } else {
      score += blz[match[1]] * (match[2] || 1);
    }

  return score > 147 ? "invalid data" : score;
}
