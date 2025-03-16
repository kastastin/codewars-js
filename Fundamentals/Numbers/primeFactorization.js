// <-- Prime factorization -->

/*
  The prime factorization of a positive integer is a list of the integer's prime factors, together with their multiplicities; the process of determining these factors is called integer factorization. The fundamental theorem of arithmetic says that every positive integer has a single unique prime factorization.

  The prime factorization of 24, for instance, is (2^3) * (3^1).

  Write a class called PrimeFactorizer whose constructor accepts exactly 1 number (a positive integer) and has a property factor containing an object where the keys are prime numbers as strings and the values are the multiplicities.

  new PrimeFactorizer(24).factor //should return { '2': 3, '3': 1 }
*/

// <-- My Solution -->
function PrimeFactorizer(n) {
  const primeF = (n) => {
    let freq = {};
    for (let i = 2; i <= n; i++) {
      if (n % i == 0) {
        let ct = 0;
        while (n % i == 0) {
          n = n / i;
          ct++;
        }
        if (ct > 0) freq[i] = ct;
      }
    }
    return freq;
  };

  this.factor = primeF(n);
}

// <-- Best Solution -->
function PrimeFactorizerBest(n) {
  const factors = {};

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors[i] = 1 + (factors[i] || 0);
      n /= i;
    }
  }

  return { factor: factors };
}
