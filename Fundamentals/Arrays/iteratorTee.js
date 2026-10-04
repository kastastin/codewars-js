// <-- Iterator tee -->

/*
  Define a function that takes an iterator and optionally a number ( defaulting to 2 ), and returns an array of $NUMBER forked iterators.

  All returned iterators should iterate the original iterator independently. They should also be iterable.

  Values produced by generators as iterators and as iterables
  iterator.next returns an object of the form { value, done }. Note that generators may, once, produce a value other than undefined when done first is true if they return a value instead of yielding it. This behaviour should be replicated, and will be tested.
  An iterable does not produce this value, though it is generated and then cannot be produced by next later ( the generator is closed by then ).

  Passing an argument to next
  iterator.next accepts an argument. There is, however, no consistent way to handle arguments passed to forked iterators: the original iterator may already have been called, either without or with a different argument. Expected behaviour is unspecified, and there will be no testing with arguments passed to next.

  Errors thrown by iterators
  Iterators can throw an Error. Expected behaviour in this case is unspecified, and it will not be tested.
  Generators have a throw method ( for iterators, this is optional ). There will be no calling of throw.

  Test constraints
  input iterator may be infinite
  up to 10 000 output iterators
  up to 10 000 values per output iterator
  Example
  it = function*() { yield* [1,2,3,4] } ()

  [xs,ys] = tee(it)

  xs.next() -> { value: 1, done: false }
  xs.next() -> { value: 2, done: false }
  xs.next() -> { value: 3, done: false }
  ys.next() -> { value: 1, done: false }
  ys.next() -> { value: 2, done: false }
  xs.next() -> { value: 4, done: false }
  xs.next() -> { value: undefined, done: true }

  Array.from(ys) -> [3,4]
*/

// <-- Solution -->
function tee(iterator, length = 2) {
  const cache = [];

  return Array.from({ length }, () => {
    let step = 0;
    const obj = {};

    obj[Symbol.iterator] = () => obj;
    obj.next = () => {
      if (cache.length <= step) cache.push(iterator.next());
      return cache[step++];
    };

    return obj;
  });
}
