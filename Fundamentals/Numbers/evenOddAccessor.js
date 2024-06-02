// <-- Even or Odd Accessor -->

/*
  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.

  For example:

  evenOrOdd(2); //'Even'
  evenOrOdd[2]; //'Even'
  evenOrOdd(7); //'Odd'
  evenOrOdd[7]; //'Odd'
*/

// <-- My Solution -->
const evenOrOdd = createEvenOrOddFunction();

function createEvenOrOddFunction() {
	const evenOrOdd = (n) => (n % 2 === 0 ? "Even" : "Odd");

	return new Proxy(evenOrOdd, {
		get: (target, prop) => {
			const n = Number(prop);

			if (!isNaN(n)) return n % 2 === 0 ? "Even" : "Odd";

			return target[prop];
		},
	});
}

// <-- Best Solution -->
const evenOrOddBest = new Proxy((n) => (n % 2 ? "Odd" : "Even"), {
	get: (f, k) => f(k),
});
