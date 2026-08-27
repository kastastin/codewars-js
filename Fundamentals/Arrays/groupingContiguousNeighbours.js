// <-- Grouping Contiguous Neighbours -->

/*
  Imagine you have a sorted array of unique integers. You might have [1, 3, 4, 5, 7, 19]. It might be nice to convert that little group of 3,4,5 into one object, a little "range" instead of individual values. If it was a huge array with a lot more consecutive integers, it would save a lot of space, grouping them up like that.

  A function could handle the algorithmic part of that--scanning through, figuring out if values should be merged, merging them...

  But what would be better is if it could handle any value, not just integers.

  You're going to write a function. It won't see or handle any of the data itself; it will only think about indices, and use handler functions to tell it what to do with them.

  The function will be called grouper(). It should have parameters for these arguments:

  A "first index" integer to start grouping from, which will be 0 or more, but not Infinity.
  A "last index" integer to end grouping at, which will be the same or more than "first index", but not Infinity.
  A "should it merge?" function. (More about the handler functions later.)
  A "group these values" function.
  A "this is a single value" function.
  The "should it merge?" function expects 1 argument:

  An "index" integer in the array, up to "last index" - 1.
  This should be called with the index of all items with a next item. In practise, this function would compare the value in an array at index and the next index on.

  If this function returns a truthy value, the "index" and its next index should be merged into a group. But not yet--you need to gather as many consecutive mergeable items as you can, and then send it off as one big group.

  The "group these values" function expects 2 arguments:

  The "first index in the group".
  The "last index in the group".
  REMEMBER! The merge function will check the index given it and the next index should be part of a group. So if the only time "should it merge?" returned a truthy value was for index 5, then "group these values" should be called with the arguments (5, 6).

  You don't need to worry about what this function does internally; it handles groups and does its own thing. It might build some other array with { range:true, first_value:1, last_value:5 } for all you know. Just call it and let it do its thing.

  The "this is a single value" function expects 1 argument:

  The "index" of the single, ungroupable item.
*/

// <-- Solution -->
function grouper(firstindex, lastindex, merge, group, single) {
  for (let i = firstindex; i <= lastindex; i++) {
    let start = i;

    while (i < lastindex && merge(i)) {
      i++;
    }

    i === start ? single(i) : group(start, i);
  }
}
