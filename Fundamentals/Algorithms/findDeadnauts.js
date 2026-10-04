// <-- Find the Deadnauts -->

/*
  Your task is to create a Simulator class with the function findThem to help locate the Deadnauts!

  Input:
  We know they started at position [0,0,0] (meters)

  You will be given a ship object with the following properties:

  The mass > 0 of the ship (kilograms)
  The initial velocity of this ship [x,y,z] (meters per second)
  On their way, the Deadnauts got caught in some gravity wells, and their course was changed!

  You will be given a list of events representing the continuous force the gravity well applied to their ship over a period of time.

  Each event has the following properties:

  The time it will begin >= 0 (seconds)
  The duration > 0 of the event (seconds)
  The force it continuously applies to the ship [x,y,z] (kilogram meters per second squared)
  Additionally:

  The list of events may have 0 or more elements
  Events will be ascending order by begin time
  Events will not overlap, but can be directly back to back (one starts right as another ends)
  Output:
  You must implement the Simulator class, with the findThem function that returns the position [x,y,z] (meters) of their ship at a given time (seconds).

  findThem should be able to be called multiple times with any range of valid inputs in any order and still produce correct results.

  The Simulator must still work when initialized and called with floating point numbers.

  Example:
  const ship = { mass: 10, velocity: [0, 0, 0] };
  const events = [
    { begin: 5, duration: 2, force: [10, 0, 0] },
    { begin: 15, duration: 3.5, force: [-5, 0, 0] }
  ];

  const simulator = new Simulator(ship, events);

  simulator.findThem(0);  // [0,0,0]
  simulator.findThem(5);  // [0,0,0]
  simulator.findThem(10); // [8,0,0]
  simulator.findThem(15); // [18,0,0]
  simulator.findThem(20); // [22.3125,0,0]
*/

// <-- Solution -->
function Simulator(ship, events = []) {
  this.ship = ship;
  this.events = events;
}

Simulator.prototype.findThem = function (time) {
  let velocity = [...this.ship.velocity];
  let position = [0, 0, 0];
  let lastTime = 0;

  for (let event of this.events) {
    let { begin, duration, force } = event;

    if (begin >= time) {
      break;
    }

    if (begin + duration > time) {
      duration = time - begin;
    }

    position = position.map((e, i) => e + velocity[i] * (begin - lastTime));
    // Δx = vt

    let acceleration = force.map((e) => e / this.ship.mass);

    position = position.map((e, i) => e + velocity[i] * duration + 0.5 * acceleration[i] * duration ** 2);
    // Δx = vt + 1/2at^2

    velocity = velocity.map((e, i) => e + acceleration[i] * duration);
    // Δv = at

    lastTime = begin + duration;
    // update the last time to the end of the event
  }

  return position.map((e, i) => e + velocity[i] * (time - lastTime));
  // Δx = vt
};
