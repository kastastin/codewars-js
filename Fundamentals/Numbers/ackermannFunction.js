// <-- Ackermann Function -->

/*
  The Ackermann function is a famous function that played a big role in computability theory as the first example of a total computable function that is not primitive recursive.

  Since then the function has been a bit simplified but is still of good use. Due to its definition in terms of extremely deep recursion it can be used as a benchmark of a compiler's ability to optimize recursion.

  The goal of this kata is to code a function which will be given two inputs, m and n, and will return the Ackermann number A(m,n) defined by:

  A(m,n) = n+1                          if m=0  
  A(m,n) = A(m-1,1)                     if m>0 , n=0
  A(m,n) = A(m-1,A(m,n-1))              if m,n > 0
  m,n should be non-negative integers, the function should return null (Javascript, Dart), None (Python), or nil (Ruby) for other type, non-integer and negative numbers. In C, input is restricted to integer type.
*/

// <-- My Solution -->
function Ackermann(m, n) {
  function isInt(n) {
    return typeof n == "number" && n % 1 === 0 && n > -1;
  }

  if (!isInt(m) || !isInt(n)) return null;
  if (m === 0) return n + 1;
  if (n === 0) return Ackermann(m - 1, 1);
  else return Ackermann(m - 1, Ackermann(m, n - 1));
}

// <-- Best Solution -->
AckermannBest = function A(m, n) {
  if (+m !== m || +n !== n || m < 0 || n < 0) return null;
  return m ? (n ? A(m - 1, A(m, n - 1)) : A(m - 1, 1)) : n + 1;
};
