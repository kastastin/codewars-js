// <-- Array Exchange -->

/*
  It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed. The arrays may be of unequal lengths, in which case you will have to expand the shorter one in-place.

  # before
  my_array = ['a', 'b', 'c']
  other_array = [1, 2, 3]

  exchange_arrays(my_array, other_array)

  # after
  my_array == [3, 2, 1]
  other_array == ['c', 'b', 'a']
*/

// <-- My Solution -->
function exchangeWith(a, b) {
  const c = [...b.reverse()];

  b.splice(0, b.length);
  b.push(...a.reverse());

  a.splice(0, a.length);
  a.push(...c);
}

// <-- Best Solution -->
function exchangeWith(a, b, c = a.slice()) {
  a.splice(0, a.length, ...b.reverse());
  b.splice(0, b.length, ...c.reverse());
}
