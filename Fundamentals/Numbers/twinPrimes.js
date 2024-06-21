// <-- The search for Primes! Twin Primes! -->

/*
  A twin prime is a prime number that is either 2 less or 2 more than another prime number—for example, either member of the twin prime pair (41, 43). In other words, a twin prime is a prime that has a prime gap of two. Sometimes the term twin prime is used for a pair of twin primes; an alternative name for this is prime twin or prime pair. (from wiki https://en.wikipedia.org/wiki/Twin_prime)

  Your mission, should you choose to accept it, is to write a function that counts the number of sets of twin primes from 1 to n.

  If n is wrapped by twin primes (n-1 == prime && n+1 == prime) then that should also count even though n+1 is outside the range.

  Ex n = 10

  Twin Primes are (3,5) (5,7) so your function should return 2!
*/

// <-- My Solution -->
function twinPrime(n) {
	if (n < 4) return 0;
	let r = 1;
	for (let i = 5; i < n; i += 6) if (f(i) && f(i + 2)) r++;
	return r;
}

function f(n) {
	for (let i = 3; i <= n ** 0.5; i += 2) if (n % i === 0) return false;
	return true;
}

// <-- Best Solution -->
function isprimeBest(n) {
	for (let i = 2; i < Math.sqrt(n) + 1; i++) {
		if (n % i === 0) return false;
	}
	return n > 1;
}

function twinPrimeBest(n) {
	return Array.from({ length: n / 2 }, (_, i) => i * 2 + 1).filter(
		(x) => isprime(x) && isprime(x + 2)
	).length;
}
