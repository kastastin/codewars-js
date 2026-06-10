// <-- Object extend -->

/*
  Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

  The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.

  Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

  extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
  extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
  extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
  extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}
*/

// <-- Solution -->
var extend = function () {
  const ret = {};

  for (var i = 0, n = arguments.length; i < n; i++) {
    if (!isObject(arguments[i])) {
      continue;
    }

    for (var j in arguments[i]) {
      if (!(j in ret)) {
        ret[j] = arguments[i][j];
      }
    }
  }

  return ret;
};
