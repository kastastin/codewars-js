// <-- Quantum Bogosort -->

/*
  The new Quantum Suicide Computer (QSC) is almost complete, and we're currently developing its standard library.

  The QSC works very similarly to an ordinary computer, but it has one very special difference: it contains a flux capacitor with a dialectric made of plastic explosives. When QSC.destroyUniverse is called, the flux capacitor charges to 1.21 GW and the plastic explosive detonates, creating a quantum flux pulse that wipes out the universe.

  Why do that? Well, if the Many Worlds Interpretation of Quantum Mechanics is correct (our shareholders are crossing their fingers), then we can use this to solve difficult problems simply by trying randomly and destroying the universe if we're wrong. Only the universes in which we got the right answer will survive, so the net effect is that we can solve any problem efficiently!

  Quantum Bogosort Algorithm
  The sort algorithm we're going to use is simple:

  Shuffle the array

  Check if it's sorted.

  If it's sorted, return it.

  If it's not sorted, destroy the universe.

  Unfortunately the QSC is not quite ready for action (the Brownian ratchet keeps getting stuck), so we're going to use mock functions to test our code in the meantime.

  You'll need to implement the Array.prototype.qbsort() method. This should implement the quantum bogosort algorithm, sorting values in ascending numerical order.

  We've mocked Array.prototype.qshuffle which will quantum shuffle the array, and QSC.destroyUniverse, which will destroy the universe. qshuffle shuffles its argument in place and does not return a value; it is called as array.qshuffle().

  Our test cases will check that the universe is destroyed when it should be, and not destroyed when it shouldn't be.
*/

// <-- My Solution -->
Array.prototype.qbsort = function () {
  this.qshuffle();

  return this.some((x, i, xs) => i && x < xs[i - 1]) ? QSC.destroyUniverse() : this;
};
