// <-- Slay Achilles! -->

/*
  A horde of Grecian warriors is storming towards you. Among them is Achilles. Pick him off and slay him. Your city depends on it.

  Your function will be passed an array of positive integers containing an Achilles number. An Achilles number is "powerful" but not a perfect power, meaning every term of its prime factorization is at least squared, but it cannot be represented as the power of a single number (i.e. it cannot be mk, but may be of the form mx · ny where x!=y, etc.).

  For example:

  99 = 3^2 · 11 (not powerful; not Achilles)
  100 = 10^2 (perfect power; not Achilles)
  108 = 2^2*3^3 (Achilles!)
  Remove Achilles from the array and return the array.

  Note: it's guaranteed that the army does not exceed 1000 numbers, and each number can't exceed 1010 as well.


*/

// <-- My Solution -->
function slayAchilles(army) {
  function isAchillesNumber(n) {
    if (n === 1) return false; 
    
    let num = n, factors = new Map();
    
    for (let i = 2; i * i <= num; i++) {
      while (num % i === 0) {
        factors.set(i, (factors.get(i) || 0) + 1);
        num /= i;
      }
    }

    if (num > 1) factors.set(num, 1);
    
    let exponents = [...factors.values()];
    if (exponents.length === 0 || exponents.some(exp => exp < 2)) return false;
    
    let gcd = exponents.reduce((a, b) => {
      while (b) [a, b] = [b, a % b];
      return a;
    }, exponents[0]);
    
    return gcd === 1;
  }
  
  return army.filter(n => !isAchillesNumber(n));
}

// <-- Best Solution -->
const slayAchillesBest = a => a.filter((n, i, e, g) => {
  for (g=0, i=2; i*i <= n; i++) {
    for (e=0; n%i < 1; e++) n /= i;
    if (e == 1) return 1;
    while (e) [e, g] = [g%e, e];
  }
  return n-g;
})
