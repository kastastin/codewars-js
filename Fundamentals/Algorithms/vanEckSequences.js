// <-- van Eck sequences -->

/*
  Consider a sequence that is generated as follows:

  the starting term(s) is or are given
  if a term did not appear previously in the sequence, the next term in the sequence is 0
  if a term did appear previously in the sequence, the next term in the sequence is the number of steps back in the sequence that it appeared
  Given 0, the sequence starts: 0, 0, 1, 0, 2, 0, 2, 2, 1, 6, ..

  first term is 0; sequence is now [0]
  0 did not appear previously: add 0; sequence is now [0,0]
  0 last appeared previously 1 place before current term: add 1; sequence is now [0,0,1]
  1 did not appear previously: add 0; sequence is now [0,0,1,0]
  0 last appeared previously 2 places before current term: add 2; sequence is now [0,0,1,0,2]
  2 did not appear previously: add 0; sequence is now [0,0,1,0,2,0]
  0 last appeared previously 2 places before current term: add 2; sequence is now [0,0,1,0,2,0,2]
  2 last appeared previously 2 places before current term: add 2; sequence is now [0,0,1,0,2,0,2,2]
  2 last appeared previously 1 place before current term: add 2; sequence is now [0,0,1,0,2,0,2,2,1]
  1 last appeared previously 6 places before current term: add 6; sequence is now  [0,0,1,0,2,0,2,2,1,6]
  6 did not appear previously .. and so on, and so on
  Task
  Implement

  class VanEck {}
  initialised with the starting term(s) ( at least 1 )

  constructor(...a) { return instance; }
  exposing the following methods

  term(i)     { return n; }        // term at index `i` ( `0`-based )
  sequence(i) { return [n,n,..]; } // the complete sequence of terms `0..i` ( exclusive )
  first(n)    { return i; }        // the index of the first occurrence of the number `n`
  every(n)    { return i; }        // the lowest index where all numbers `0..n` ( inclusive ) have occurred
  fast(i)     { return n; }        // the maximum of terms `0..i` ( inclusive )
*/

// <-- Solution -->
class VanEck {
  constructor(...start) {
    this.seq = [...start];
    this.lastPos = new Array(2000000);
    this.firstPos = new Array(2000000);
    this.maxCache = new Array(2000000);

    let runningMax = -Infinity;

    for (let i = 0; i < this.seq.length; i++) {
      const val = this.seq[i];

      if (val > runningMax) {
        runningMax = val;
      }

      this.maxCache[i] = runningMax;

      if (this.firstPos[val] === undefined) {
        this.firstPos[val] = i;
      }

      if (i < this.seq.length - 1) {
        this.lastPos[val] = i;
      }
    }

    this.len = this.seq.length;
  }

  #next() {
    const prev = this.seq[this.len - 1];
    const last = this.lastPos[prev];
    const nxt = last !== undefined ? this.len - 1 - last : 0;

    this.lastPos[prev] = this.len - 1;
    this.seq[this.len] = nxt;

    if (this.firstPos[nxt] === undefined) {
      this.firstPos[nxt] = this.len;
    }

    const prevMax = this.maxCache[this.len - 1];
    this.maxCache[this.len] = prevMax > nxt ? prevMax : nxt;

    return this.len++;
  }

  #growTo(i) {
    while (this.len <= i) {
      this.#next();
    }
  }

  term(i) {
    this.#growTo(i);
    return this.seq[i];
  }

  sequence(i) {
    this.#growTo(i - 1);
    return this.seq.slice(0, i);
  }

  first(n) {
    while (this.firstPos[n] === undefined) {
      this.#next();
    }
    return this.firstPos[n];
  }

  every(n) {
    return Math.max(...Array.from({ length: n + 1 }, (_, i) => this.first(i)));
  }

  fast(i) {
    this.#growTo(i);
    return this.maxCache[i];
  }
}
