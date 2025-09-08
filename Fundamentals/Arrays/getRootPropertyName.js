// <-- Get root property name -->

/*
  Given an object of likely nested objects, where the final element is an array containing positive integers, write a function that returns the name of the root property that a particular integer lives in.

  Heres what the object looks like:

  object = {
      "one": {
          "nest1": {
              "val1": [9, 34, 92, 100]
          }
      },
      "2f7": {
          "n1": [10, 92, 53, 71],
          "n2": [82, 34, 6, 19]
      }
  }

  getRootProperty(object, 9); //=> "one"
  getRootProperty(object, 9) returns "one" because "one" is the root property name where the value 9 is buried in (in an array), other root properties may also have 9 buried in it but you should always return the first
*/

// <-- My Solution -->
function getRootProperty(object, val) {
  for (let i in object) {
    if (typeof object[i] == "object") {
      if (getRootProperty(object[i], val)) {
        return i;
      }
    } else {
      if (object[i] == val) {
        return i;
      }
    }
  }

  return null;
}

// <-- Best Solution -->
function getRootPropertyBest(object, value) {
  if (Array.isArray(object)) {
    return object.includes(value);
  }

  for (let x in object) {
    if (getRootPropertyBest(object[x], value)) {
      return x;
    }
  }

  return null;
}
