// <-- The Flying Deuces -->

/*
  Given an initial lineup of soldiers, simulate how their marching cadence evolves over time based on their neighbors' influence.

  Input Parameters:

  initial: A list of non-negative integers representing the initial cadence of each soldier.
  steps: An integer representing the number of time steps to simulate.
  stan: An integer representing Stan's position in the line (0-based index).
  ollie: An integer representing Ollie's position in the line (0-based index).
  Output:

  Return a list of integers representing the cadence of each soldier after all simulation steps.
  Constraints:

  0 ≤ cadence ≤ 10
  2 ≤ number of soldiers ≤ 40
  0 ≤ steps ≤ 100
  Example:

  initial = [0,1,0,2,5,4,8,0,3,4,2]
  steps = 5
  stan = 1
  ollie = 5

  # Step 1: [1,1,1,3,4,4,7,1,2,3,4]
  # Step 2: [1,1,2,2,3,4,6,2,3,4,3]
  # Step 3: [1,1,1,3,4,4,5,3,4,3,4]
  # Step 4: [1,1,2,2,3,4,4,4,3,4,3]
  # Step 5: [1,1,1,3,4,4,4,3,4,3,4]

  return [1,1,1,3,4,4,4,3,4,3,4]
*/

// <-- My Solution -->
function simulate(initial, steps, stan, ollie) {
  let response = [...initial];

  for (let i = 0; i < steps; i++) {
    response = response.map((a, i) => {
      if ([stan, ollie].includes(i)) return a;
      else if (i == 0) return response[1];
      else if (i == response.length - 1) return response[i - 1];
      else {
        const half = Math.floor((response[i - 1] + response[i + 1]) / 2);
        const max = Math.max(response[i - 1], response[i + 1]);

        return response[i - 1] == response[i + 1]
          ? response[i + 1]
          : response[i] == half
          ? max > response[i]
            ? response[i] + 1
            : response[i]
          : response[i] < half
          ? response[i] + 1
          : response[i] - 1;
      }
    });
  }

  return response;
}

// <-- Best Solution -->
function simulate(a, k, s, o) {
  while (k--) {
    a = a.map((e, i) => {
      if (i === s || i === o) return e;

      let x = a.at(i - 1);
      let y = a.at(i + 1);
      let v = (x + y) >> 1;

      if (i === 0) return y;
      if (i === a.length - 1) return x;
      if (x === y) return x;
      if (v === e) return e + (e > Math.max(x, y) ? -1 : 1);

      return e + (e > v ? -1 : 1);
    });
  }
  
  return a;
}
