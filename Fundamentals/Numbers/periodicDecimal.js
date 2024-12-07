// <-- Fraction to periodic decimal -->

/*
  Given a simple fraction compute its periodic decimal representation. Numerator n and denominator d are provided separately. Return string with exact decimal representation where repeating part (if any) is enclosed in braces ( and ). Fractional part (if any) must be separated with dot ..

  Examples
  8/4 -> "2"
  1/2 -> "0.5"
  1/3 -> "0.(3)"
  5/7 -> "0.(714285)"
  123/65 -> "1.8(923076)"
  10/3 -> "3.(3)"
  Constraints
  n, d - integers.
  1 <= d < 100000.
  1 <= n < 10 * d.
*/

// <-- My Solution -->
function fractionToPeriodic(n, d) {
  function go(n) {
    let r = "";

    for (
      let seen = new Map();
      n;
      seen.set(n, r.length), n *= 10, r += String((n / d) | 0), n %= d
    ) {
      if (seen.has(n)) {
        return r.slice(0, seen.get(n)) + "(" + r.slice(seen.get(n)) + ")";
      }
    }

    return r;
  }

  return n % d ? `${(n / d) | 0}.${go(n % d)}` : `${(n / d) | 0}`;
}

// <-- Best Solution -->
function fractionToPeriodicBest(n, d) {
  let r = n % d;

  const seen = { 0: 0 };
  const res = [(n - r) / d, "."];

  for (let i = 2; !(r in seen); i++) {
    seen[r] = i;
    n = 10 * r;
    r = n % d;
    res.push((n - r) / d);
  }

  if (seen[r]) {
    res.splice(seen[r], 0, "(");
    res.push(")");
  }
  
  return res.join("").replace(/\.$/, "");
}
