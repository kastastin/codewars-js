// <-- Calculate Hypotenuse of Right-angled Triangle -->

/*
  calculateHypotenuse(a,b), which will return the length of the hyptenuse for a right angled triangle with the other two sides having a length equal to the inputs. More details:

  The returned value should be a number rounded to three decimal places
  An error (ArgumentException in C#) should be thrown if an invalid input is provided (inputs should both be numbers that are above zero)
  calculateHypotenuse(1,1); // returns 1.414
  calculateHypotenuse(3,4); // returns 5
  calculateHypotenuse(-2,1); // throws error
  calculateHypotenuse("one", "two"); // throws error
*/

// <-- My Solution -->
function calculateHypotenuse(a, b) {
	if (!a || !b) throw "Inputs must have a value.";

	if (typeof a != "number" || typeof b != "number")
		throw "Inputs must be numbers.";

	if (a < 0 || b < 0) throw "Inputs must be nonnegative.";

	return parseFloat(Math.sqrt(a * a + b * b).toFixed(3));
}

// <-- Best Solution -->
function calculateHypotenuseBest(a, b) {
	if (
		typeof a !== "number" ||
		typeof b !== "number" ||
		[a, b].includes(NaN) ||
		a < 1 ||
		b < 1
	)
		throw new Error("Invalid input!");

	return +Math.sqrt(a ** 2 + b ** 2).toFixed(3);
}
