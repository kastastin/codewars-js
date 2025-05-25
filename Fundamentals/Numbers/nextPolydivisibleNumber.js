// <-- Next polydivisible number -->

/*
  Given a non-negative number, return the next bigger polydivisible number, or an empty value like null or Nothing.

  A number is polydivisible if its first digit is cleanly divisible by 1, its first two digits by 2, its first three by 3, and so on. There are finitely many polydivisible numbers.
*/

// <-- My Solution -->
function next(n) {
  n = BigInt(n);

  if (n < 1n) return 1n;

  const s = n.toString();
  const maxLen = s.length + 1;
  let prefixes = [""];
  const allPolys = [];

  for (let len = 1; len <= maxLen; len++) {
    const nextPrefixes = [];

    for (const pref of prefixes) {
      const start = pref === "" ? 1 : 0;

      for (let d = start; d <= 9; d++) {
        const str = pref + d;
        const x = BigInt(str);

        if (x % BigInt(len) === 0n) {
          nextPrefixes.push(str);
        }
      }
    }

    prefixes = nextPrefixes;
    allPolys.push(...prefixes);
  }

  for (const str of allPolys) {
    const x = BigInt(str);

    if (x > n) return x;
  }

  return null;
}

// <-- Best Solution -->
function next(n) {
  if (n < 9n) return n + 1n;

  if (n >= BigInt("3608528850368400786036725")) return null;

  let target = n + 1n;
  let targetStr = target.toString();
  let digits = 2;

  while (true) {
    let n1 = BigInt(targetStr.substring(0, digits));
    const r = n1 % BigInt(digits);
    
    if (r === 0n && digits === targetStr.length) {
      return target;
    } else if (r === 0n) {
      digits++;
    } else {
      n1 += BigInt(digits) - r;
      targetStr = n1.toString() + "0".repeat(targetStr.length - digits);
      target = BigInt(targetStr);
      digits = 2;
    }
  }
}
