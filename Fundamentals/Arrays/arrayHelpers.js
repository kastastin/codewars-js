// <-- Array Helpers -->

/*
  Extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd()

  - square() must return a copy of the array, containing all values squared
  - cube() must return a copy of the array, containing all values cubed
  - average() must return the average of all array values; on an empty array must return NaN
  - sum() must return the sum of all array values
  - even() must return an array of all even numbers
  - odd() must return an array of all odd numbers

  Note: the original array must not be changed in any case!
*/

console.log(1)

// <-- My Solution -->
Array.prototype.square = function () {
	return this.map(function (n) {
		return n * n;
	});
};
Array.prototype.cube = function () {
	return this.map(function (n) {
		return n * n * n;
	});
};
Array.prototype.average = function () {
	return this.sum() / this.length;
};
Array.prototype.sum = function () {
	return this.reduce(function (a, b) {
		return a + b;
	}, 0);
};
Array.prototype.even = function () {
	return this.filter(function (item) {
		return 0 == item % 2;
	});
};
Array.prototype.odd = function () {
	return this.filter(function (item) {
		return 0 != item % 2;
	});
};

// <-- Best Solution -->
Object.assign(Array.prototype, {
	square() {
		return this.map((n) => n * n);
	},
	cube() {
		return this.map((n) => Math.pow(n, 3));
	},
	sum() {
		return this.reduce((p, n) => p + n, 0);
	},
	average() {
		return this.reduce((p, n) => p + n, 0) / this.length;
	},
	even() {
		return this.filter((n) => !(n % 2));
	},
	odd() {
		return this.filter((n) => n % 2);
	},
});
