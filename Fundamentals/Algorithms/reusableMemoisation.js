// <-- Reusable memoisation -->

/*
  Recursive algorithms can sometimes be optimised with memoisation. Often however, the memoisation is tightly coupled with the algorithm, making reuse difficult.

  Task
  Implement a reusable memoisation function
  that, given a function of one argument, returns a memoised function of one argument.

  Functions of more than one argument can be memoised by currying the function and memoising it for every argument, one at a time. This has easier reusability than having a different memoisation component for every number of arguments.
  ( This scenario will be tested. )

  Performance vs. reusability
  Maximum performance is not the goal of this kata; maximum simplicity and reusability is.
  If, for any specific application, you need maximum performance, you would probably customise your reusable memo function for the job, and possibly couple it more tightly, thus shifting the balance away from simplicity and reusability more towards performance. There's always a balance to be struck, just as there is in resource allocation ( time vs. space, CPU vs. memory ).
*/

// <-- Solution -->
function memo(fn) {
  const cache = new Map();

  return (x) => {
    if (!cache.has(x)) {
      cache.set(x, fn(x));
    }

    return cache.get(x);
  };
}
