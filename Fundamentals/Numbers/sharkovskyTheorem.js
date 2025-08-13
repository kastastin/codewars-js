// <-- Sharkovsky's Theorem -->

/*
  Sharkovsky's Theorem involves the following ordering of the natural numbers:

  3≺5≺7≺9≺...
  2⋅3≺2⋅5≺2⋅7≺2⋅9≺...
  ≺8≺4≺2≺1

  Your task is to complete the function which returns true if 
  a ≺ b
  a≺b according to this ordering, and false otherwise.

  You may assume both a and b are strictly positive integers.
*/

// <-- My Solution -->
function sharkovsky(a, b) {
  let na = 0;
  let notEvenA = a;

  while (!(notEvenA % 2)) {
    notEvenA = notEvenA / 2 - (notEvenA % 2);
    na += 1;
  }

  let nb = 0;
  let notEvenB = b;

  while (!(notEvenB % 2)) {
    notEvenB = notEvenB / 2 - (notEvenB % 2);
    nb += 1;
  }

  if (notEvenA === 1) return na > nb && notEvenB === 1;
  if (notEvenB === 1) return notEvenA > notEvenB;
  if (na === nb) return a < b;

  return na < nb;
}

// <-- Best Solution -->
function sharkovskyBest(a, b) {
  let pa = a;
  let ea = 0;

  while (pa % 2 == 0) {
    ea += 1;
    pa /= 2;
  }

  let pb = b;
  let eb = 0;

  while (pb % 2 == 0) {
    eb += 1;
    pb /= 2;
  }

  if (pa == 1 && pb == 1) return ea > eb;
  if (pa == 1 || pb == 1) return pb == 1;
  if (ea == eb) return pa < pb;
  if (ea != eb) return ea < eb;
}
