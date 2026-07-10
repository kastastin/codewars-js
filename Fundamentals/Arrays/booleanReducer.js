// <-- Boolean Reducer -->

/*
  Your function takes as input a boolean function (i.e. a function with boolean parameters that returns a boolean). It should return an array containing the indices of the parameters that are necessary for a reduced version of the function, that is, the parameters that actually influence the function's output. The parameters are numbered from left to right, starting at 0.

  some examples
  function func1(a) {
      return a||!a; //equivalent to return true;
  }
  booleanReducer(func1) //should return []

  function func2(a, b){
      return a;
  }
  booleanReducer(func2)//should return [0]

  function func3(a, b) {
      if (b) {
          a = false;
      }
      return (a || b) && b; //equivalent to return b
  }
  booleanReducer(func3)//should return [1]

  function func4(a, b) {
      return (a || b);
  }
  booleanReducer(func4)//should return [0, 1]
*/

// <-- Solution -->
function combine(values, n) {
  if (!n) {
    return [[]];
  }

  return combine(values, n - 1).flatMap((combo) => values.map((value) => [value, ...combo]));
}

function booleanReducer(func) {
  const rets = combine([false, true], func.length).map((args) => func(...args));

  return [...Array(func.length).keys()].filter((p) => rets.some((ret, i) => ret !== rets[i ^ (1 << p)]));
}
