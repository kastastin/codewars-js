// <-- Liquid Mixing -->

/*
  You are mixing different liquids of equal volume in a barrel. All the liquids have different density, and after some time they rearrange themselves in such a way that denser liquids are located lower in the barrel than those with lower density.

  You add liquids one by one, and wait a bit after each addition until all the liquids in the barrel rearrange correctly.

  After each addition, you are interested in the density of the liquid that is floating right in the middle. If there are two middle liquids (i.e. the number of liquids is even), then you want to know their mean density. Let's call the value you are interested in the median density. Return an array of median densities after each addition.

  Input/Output
  [input] integer array densities

  An array of positive integers - the densities (in some measure units) of the liquids in the order of their mixing.

  1 ≤ densities.length ≤ 100

  1 ≤ densities[i] ≤ 100

  [output] a float array

  Example
  For densities = [10, 20, 8, 12, 6],

  the output should be [10, 15, 10, 11, 10].

  A table that shows how the liquids are added is given below:
*/

// <-- My Solution -->
function liquidMixing(densities) {
  const barrel = [];
  const medians = [];

  for (const density of densities) {
    barrel.push(density);
    barrel.sort((a, b) => a - b);
    const n = barrel.length;
    
    if (n % 2 === 1) {
      medians.push(barrel[Math.floor(n / 2)]);
    } else {
      const mid1 = barrel[n / 2 - 1];
      const mid2 = barrel[n / 2];
      medians.push((mid1 + mid2) / 2);
    }
  }

  return medians;
}

// <-- Best Solution -->
function liquidMixingBest(
  d,
  f = (x) => x.sort((a, b) => a - b),
  q = [],
  r = [],
) {
  while (d.length) {
    q.unshift(d.shift()), f(q);
    if (q.length & 1) r.push(q[Math.floor(q.length / 2)]);
    else r.push((q[q.length / 2 - 1] + q[q.length / 2]) / 2);
  }

  return r;
}
