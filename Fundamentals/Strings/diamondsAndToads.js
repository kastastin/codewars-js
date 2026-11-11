// <-- Diamonds and Toads -->

/*
  Base on the fairy tale Diamonds and Toads by Charles Perrault. In this kata you will have to write a function that takes 2 arguments:

  A string that corresponds to what the daugther says.
  A string that tells you wich fairy the girl has met, it can be either 'good' or 'evil'.
  The function should return the following counts as a hash / object / dictionary:

  If the girl has met the good fairy:
  count 1 ruby every time you see a r and 2 every time you see a R
  count 1 crystal every time you see a c and 2 every time you see a C
  If the girl has met the evil fairy:
  count 1 python every time you see a p and 2 every time you see a P
  count 1 squirrel every time you see a s and 2 every time you see a S
  Note: For this kata I decided to replace the normal Diamonds and Toads with some programming languages. And just discovered that Squirrel is a programming language.
*/

// <-- My Solution -->
function diamondsAndToads(s, good) {
  const ct = (c) => s.split(c).length - 1 + (s.split(c.toUpperCase()).length - 1) * 2;

  return good == "good" ? { ruby: ct("r"), crystal: ct("c") } : { python: ct("p"), squirrel: ct("s") };
}
