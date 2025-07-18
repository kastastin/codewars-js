// <-- Zip With -->

/*
  zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
  The function value is one new array.

  If the arrays are of unequal length, the output will only be as long as the shorter one.
  (Values of the longer array are simply not used.)

  Inputs should not be modified.

  Examples
  zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
  zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

  zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
  zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
*/

// <-- My Solution -->
function zipWith(fn, a0, a1) {
  const result = [];

  let min = Math.min(a0.length, a1.length);

  for (let i = 0; i < min; i++) {
    result.push(fn(a0[i], a1[i]));
  }

  return result;
}

// <-- Best Solution -->
function zipWithBest(fn, a0, a1) {
  return a0.slice(0, a1.length).map((val, idx) => fn(val, a1[idx]));
}
