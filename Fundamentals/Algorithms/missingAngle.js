// <-- Missing Angle -->

/*
  Below is a right-angled triangle:

    |\
    | \
    |  \
    |   \ 
  o |    \ h 
    |     \
    |    θ \
    |_______\ 
      a
  Your challange is to write a function that calculates the angle θ in degrees. You will be given three arguments representing each side: o, h and a. One of the arguments equals zero. Use the length of the two other sides to calculate θ.
*/

// <-- Solution -->
function missingAngle(h, a, o) {
  if (h === 0) return (Math.atan2(o, a) * 180) / Math.PI;
  if (a === 0) return (Math.asin(o / h) * 180) / Math.PI;
  if (o === 0) return (Math.acos(a / h) * 180) / Math.PI;
}
