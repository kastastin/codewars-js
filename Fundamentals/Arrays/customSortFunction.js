// <-- Custom sort function -->

/*
  Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

  Example:

  [1,3,2]  =>  [1,2,3]
*/

// <-- My Solution -->
function sort(items) {
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length - i - 1; j++) {
      if (items[j] > items[j + 1]) {
        swap(items, j, j + 1);
      }
    }
  }

  return items;
}
