// <-- Relational expressions -->

/*
  You know how in Mathematics, you can write something like 1 < 2 < 3 and it would be completely fine? Let's re-create that functionality!

  You need to create a class called "Relational", which takes a single argument for its initial value. Then, by calling various methods, such as .equals(value) or .lessThan(value), we can build a similar expression you could do in Mathematics. Albeit with a load more characters.

  You need to implement the following methods:

  .equals(value), .notEquals(value)
  .lessThan(value), .lessThanOrEqualTo(value)
  .greaterThan(value), .greaterThanOrEqualTo(value)
  .passed() should also return the evaluated expression as a true or false value.
  And each much be able to compound with the previous statement.

  For example: new Relational(1).lessThan(2).lessThan(3).passed() should be equivalent to the Mathematical 1 < 2 < 3, or the code (1 < 2) && (2 < 3).

  You could, of course have longer expressions like 1 < 2 < 3 < 4 < 5, or even crazy, kinda useless stuff like 1 < 3 > 2 != 4.
*/

// <-- My Solution -->
class Relational {
  #currentValue;
  #result = true;

  constructor(value) {
    this.#currentValue = value;
  }

  _updateResult(condition, nextValue) {
    this.#result = this.#result && condition;
    this.#currentValue = nextValue;
    return this;
  }

  passed() {
    return this.#result;
  }

  equals(value) {
    return this._updateResult(this.#currentValue === value, value);
  }

  notEquals(value) {
    return this._updateResult(this.#currentValue !== value, value);
  }

  lessThan(value) {
    return this._updateResult(this.#currentValue < value, value);
  }

  lessThanOrEqualTo(value) {
    return this._updateResult(this.#currentValue <= value, value);
  }

  greaterThan(value) {
    return this._updateResult(this.#currentValue > value, value);
  }

  greaterThanOrEqualTo(value) {
    return this._updateResult(this.#currentValue >= value, value);
  }
}

// <-- Best Solution -->
function RelationalBest(a, p) {
  this.passed = function () {
    return (!this.f || this.f(a)) && (!p || p.passed());
  };
}

[
  ["equals", (b) => (a) => a == b],
  ["equals", (b) => (a) => a == b],
  ["notEquals", (b) => (a) => a != b],
  ["lessThan", (b) => (a) => a < b],
  ["lessThanOrEqualTo", (b) => (a) => a <= b],
  ["greaterThan", (b) => (a) => a > b],
  ["greaterThanOrEqualTo", (b) => (a) => a >= b],
].map(
  ([k, f, R = RelationalBest]) =>
    (R.prototype[k] = function (b) {
      return (this.f = f(b)), new R(b, this);
    }),
);
