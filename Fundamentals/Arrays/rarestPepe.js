// <-- The rarest pepe -->

/*
  The pepe market is on the verge of collapse. In a last-ditch attempt to make some quick cash, you decide to sift through the thousands of pepes on the internet to identify the rarest ones, which are worth more. Since doing this by hand would be tedious, you decide to use your programming skills to streamline the process.

  Your task in this kata is to implement a function that, given a non-empty list of pepes (pepes), returns the rarest pepe in the list.

  If two or more pepes are equally rare, return a sorted list of these pepes.
  If the rarest pepe (or pepes) has a frequency of 5 or more, then there are no truly rare pepes, so your function should return "No rare pepes!".
*/

// <-- My Solution -->
function findRarestPepe(pepes) {
  const count = {};

  for (const pepe of pepes) {
    count[pepe] = (count[pepe] || 0) + 1;
  }

  const minHz = Math.min(...Object.values(count));

  if (minHz >= 5) {
    return "No rare pepes!";
  }

  const rares = Object.keys(count).filter((pepe) => count[pepe] === minHz);

  if (rares.length === 1) {
    return rares[0];
  }

  return rares.sort();
}

// <-- Best Solution -->
function findRarestPepe(pepes) {
  const counts = pepes.reduce((m, p) => ((m[p] = (m[p] || 0) + 1), m), {});
  const minFreq = Math.min(...Object.values(counts));

  if (minFreq >= 5) {
    return "No rare pepes!";
  }

  const rare = Object.keys(counts).filter((p) => counts[p] === minFreq);

  return rare.length === 1 ? rare[0] : rare.sort();
}
