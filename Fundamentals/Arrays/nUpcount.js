// <-- n-upcount -->

/*
  Define the n-upcount of an array to be the number of times the partial sum goes from less than or equal to n to greater than n during the calculation of the sum of the elements of the array.Assume the initial value of the sum is 0.

  eg.1 if n=6, the 6 upcount of the array [6,3,1] is 1.

  index    array[index]    partial sum    upcount    comment
  0            6            6                1        0 to 6
  1            3            9
  2            1            10

  eg.2 the 20-upcount of the array [1,12,-1] is 0. Because the maximum value of the partial sum is 13 and it never gets bigger than 20.

  index    array[index]    partial sum    upcount    comment
  0            1            1
  1            12           13
  2            -1           12
*/

// <-- My Solution -->
function nUpCount(arr, n) {
  let res = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const temp = sum;

    sum += arr[i];

    if (temp <= n && sum > n) {
      res++;
    }
  }

  return res;
}

// <-- Best Solution -->
function nUpCountBest(arr, n) {
  return arr.reduce((acc, val) => acc + ((n -= val) < 0 && n + val >= 0), 0);
}
