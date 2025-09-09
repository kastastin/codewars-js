// <-- Key of door -->

/*
  You are in a maze. There are a lot of doors, you have to find the passcode to open them. There are some numbers next to each door, and you need to find the passcode from these numbers.

  You will receive an integer array nums containing some numbers like this:

  [153456,123406,124456,323456,123458,123756]
  How to find the passcode? Let's change the arrangement method:

  [
  153456,
  123406,
  124456,
  323456,
  123458,
  123756
  ]
  We can see that each column has one number different from the others, they are the passcode.

  Please find out the passcode and return it as a string value.

  Examples
  [153456,123406,124456,323456,123458,123756]
  should return "354708"

  [7347289,3647289,3357289,3344289,3347389,3347229,3347281]
  should return "7654321"

  [232326,232363,232523,235323,242323,432323]
  should return "445566"

  [13579,13579,13579,13579,24680]
  should return "24680"
*/

// <-- My Solution -->
function findKey(nums) {
  const length = nums[0].toString().length;

  return Array.from({ length }, (_, i) => {
    const degits = nums.map((n) => n.toString()[i]);
    
    return degits.find((n) => degits.indexOf(n) === degits.lastIndexOf(n));
  }).join("");
}

// <-- Best Solution -->
function findKeyBest(a) {
  return [...(a[0] + "")].map((e, i) => a.map((e) => (e + "")[i]).find((e, i, a) => a.indexOf(e) === a.lastIndexOf(e)))
    .join``;
}
