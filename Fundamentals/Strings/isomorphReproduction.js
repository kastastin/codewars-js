// <-- Isomorph Reproduction -->

/*
  An isomorph is a string where the letters follow the exact same structural pattern. For example, look and meet are isomorphs because they both follow the pattern ABBC.

  Quick Summary
  Using the pool of characters from letters, recreate the exact structural fingerprint found in original.

  (original, letters) -> solution

  Step-by-Step Examples
  Example 1: ("ggd", "vcv") -> "vvc"

  Example 2: ("aba", "xtt") -> "txt"

  Example 3 (The Dilemma): ("zyxx", "acba") -> "cbaa" But wait, ("zyxx", "acba") -> "bcaa" is also a valid structural match!

  When different letters share the exact same frequency count, multiple solutions are possible because the letters are able to trade positions.

  The Tie-Breaker Rule: Solve this dilemma by sorting those competing letters alphabetically before assigning them. Therefore, the only correct solution is: ("zyxx", "acba") -> "bcaa"

  Rules of Engagement
  Frequency Matching: Letters must pair with target characters of identical frequency.
  Order of Appearance: Map remaining characters based on their original left-to-right appearance.
  Alphabetical Tie-Breaker: Sort same-frequency pool letters alphabetically.
  Invalid States: Return null if a match is mathematically impossible (e.g., length mismatch).
  Input Constraints
  Both inputs will contain only lowercase alphabetic letters (a-z).
  letters is the only input that might have the wrong length, missing characters, or a distribution that cannot mathematically map to original.
*/

// <-- Solution -->
function isomorphReproduced(original, letters) {
  if (original.length !== letters.length) {
    return null;
  }

  const freq1 = {};
  const freq2 = {};

  for (let i = 0; i < original.length; i++) {
    const a = original[i];
    const b = letters[i];

    freq1[a] = (freq1[a] || 0) + 1;
    freq2[b] = (freq2[b] || 0) + 1;
  }

  const refMap = {};

  for (const [k, v] of Object.entries(freq1)) {
    const keys = Object.keys(freq2)
      .filter((key) => freq2[key] === v && !Object.values(refMap).includes(key))
      .sort();

    if (!keys.length) {
      return null;
    }

    refMap[k] = keys[0];
  }

  return original.replace(/./g, (c) => refMap[c]);
}
