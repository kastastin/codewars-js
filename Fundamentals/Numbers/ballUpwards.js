// <-- Ball Upwards -->

/*
  You throw a ball vertically upwards with an initial speed v0 (in km per hour).

  A device is recording at every tenth of second the height of the ball.

  For example, with v0 = 15 km/h, the device gets something of the following form: (0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ... where the first number is the time in tenths of a second and the second number the height in meter.

  Task
  Write a function with a parameter v0 (in km per hour) that returns the time in tenth of second of the maximum height recorded by the device.

  Examples
  Given initial speed v0 = 15 --> should return 4

  Given initial speed v0 = 25 --> should return 7
*/

// <-- My Solution -->
function maxBall(v) {
  const speed = (v * 10 * 1000) / 3600;

  return Math.round(speed / 9.81);
}

// <-- Best Solution -->
function maxBall(v) {
  return Math.round(v / 0.36 / 9.81);
}
