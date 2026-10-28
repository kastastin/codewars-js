// <-- Walk the Object Path -->

/*
    Implement the method find which takes in an two parameters object and path. The path will be a period-delimited string of properties that we will use to traverse through our object to find our target value.

  Edge Cases And Further Consideration
  Be sure to handle passing array indices. For example, if we have an object: { people: ['John', 'Dave', 'Lisa'] } and the path is 'people.1', the target value is 'Dave' which is the string at position 1 inside of the people array.

  Also this method should handle invalid paths. If we have an object { user: { name: 'Dan' } } and the path is 'user.wallet.money', we should return undefined. Valid paths are exclusive to properties on the object which are not inherited, in other words it is specific to this object and does not need to look up the prototype chain.
*/

// <-- My Solution -->
function find(object, path) {
  const arrPath = path.split(".");

  for (let item of arrPath) {
    if (object.hasOwnProperty(item)) {
      object = object[item];
    } else {
      object = undefined;
      break;
    }
  }

  return object;
}
