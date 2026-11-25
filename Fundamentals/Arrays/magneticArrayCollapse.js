// <-- Magnetic Array Collapse -->

/*
  You are given an array of non-zero integers representing magnetic particles moving along a 1D track.

  The sign (+ or -) represents the particle's polarity.
  The absolute value (|x|) represents the particle's mass.
  You process the particles from left to right, placing them into a chamber one by one. Whenever a newly added particle has the same polarity as the particle currently at the right end of the chamber, they repel and remain separate.

  However, whenever the newly added particle has the opposite polarity (+ vs -) to the particle at the right end of the chamber, they attract and collide according to these exact rules:

  Different Masses (|a| !== |b|):
  The heavier particle absorbs the lighter one.
  Its polarity remains the polarity of the heavier particle, and its mass becomes the difference of their masses (|a| - |b|).
  Equal Masses (|a| === |b|):
  Instead of annihilating each other, their opposing fields fuse and invert!
  They merge into a single particle whose mass is the sum of their masses (|a| + |b|), and whose polarity is the polarity of the incoming (right) particle.
  Chain Reactions: Because a collision creates a new resulting particle (potentially with a flipped polarity!), it may now have the opposite polarity to the particle immediately to its left in the chamber. Collisions must continue cascading leftward until the chamber is stable before you move on to the next particle in the input array.

  Return the final stable array of particles in the chamber.

  Examples
  collapseMagnets([5, -3, -2]) ➞ [-4]
  5 enters: [5]
  -3 enters (opposite polarity to 5, unequal mass): 5 absorbs -3 and becomes +2. Chamber: [2]
  -2 enters (opposite polarity to 2, equal mass!): 2 and -2 fuse into mass 2 + 2 = 4 with the incoming (-) polarity! Chamber: [-4]
  collapseMagnets([4, 2, -2, -8]) ➞ [-8, -8]
  4 enters ➞ [4]
  2 enters (same polarity as 4) ➞ [4, 2]
  -2 enters: collides with 2 (equal mass!) ➞ fuses into -4 (incoming polarity).
  Now chamber has [4, -4].
  Chain reaction! 4 and -4 have opposite polarities and equal mass! They fuse into -8 (incoming polarity is -). Chamber: [-8].
  -8 enters (same polarity as -8) ➞ [-8, -8].
  Constraints
  0 <= arr.length <= 100,000
  -10^4 <= arr[i] <= 10^4, and arr[i] !== 0
*/

// <-- My Solution -->
function collapseMagnets(arr) {
  const chamber = [];

  for (let curr of arr) {
    while (chamber.length && Math.sign(chamber.at(-1)) !== Math.sign(curr)) {
      curr = chamber.pop() + curr || 2 * curr;
    }
    
    chamber.push(curr);
  }

  return chamber;
}
