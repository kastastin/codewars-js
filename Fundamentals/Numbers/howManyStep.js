// <-- How many steps are required to turn A into B? -->

/*
  Complete function howManyStep that accept two number a and b (0 < a <= b). You need turn a into b.

  The rules is only can double (a=a*2) or plus 1 (a=a+1). return the shortest step.

  Examples
  howManyStep(1,10) === 4
  // 1+1=2, 2*2=4, 4+1=5, 5*2=10
  howManyStep(1,17) === 5
  // 1*2=2, 2*2=4, 4*2=8, 8*2=16, 16+1=17
  howManyStep(1,64) === 6
  // 1*2=2, 2*2=4, 4*2=8, 8*2=16, 16*2=32, 32*2=64
  howManyStep(1,63) === 10
  howManyStep(50,100) === 1
  howManyStep(51,100) === 49
  howManyStep(100,100) === 0
*/

// <-- My Solution -->
function howManyStep(a, b) {
	let res = 0;

	while (a < b) {
		if (b % 2 === 0 && b / 2 >= a) {
			b /= 2;
		} else {
			b--;
		}

		res++;
	}

	return res;
}

// <-- Best Solution -->
function howManyStepBest(a, b) {
	if (b < 2 * a) {
		b - a;
	} else {
		1 + (b % 2) + howManyStepBest(a, b >> 1);
	}
}
