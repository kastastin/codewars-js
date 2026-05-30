// <-- Vector class -->

/*
  Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

  var a = new Vector([1, 2, 3]);
  var b = new Vector([3, 4, 5]);
  var c = new Vector([5, 6, 7, 8]);

  a.add(b);      // should return a new Vector([4, 6, 8])
  a.subtract(b); // should return a new Vector([-2, -2, -2])
  a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
  a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
  a.add(c);      // throws an error
  If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

  Also provide:
  a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)'. In PHP, this is __toString magic method)
  an equals method, to check that two vectors that have the same components are equal
  Note: the test cases will utilize the user-provided equals method.
*/

// <-- Solution -->
const Vector = function (components) {
  this.items = components;
  this.length = components.length;
};

Vector.prototype = {
  do: function (action, vector) {
    if (vector.length !== this.length) {
      throw "Different Length!";
    }
    
    return new Vector(
      this.items.map(function (v, k) {
        return eval(v + action + vector.items[k]);
      }),
    );
  },
  add: function (v) {
    return this.do("+", v);
  },
  subtract: function (v) {
    return this.do("-", v);
  },
  sum: function (v) {
    return eval(v.items.join("+"));
  },
  dot: function (v) {
    return this.sum(this.do("*", v));
  },
  norm: function () {
    return Math.sqrt(this.dot(this));
  },
  toString: function () {
    return "(" + this.items + ")";
  },
  equals: function (v) {
    return this.toString() == v.toString();
  },
};
