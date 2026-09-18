// <-- Framed Reflection -->

/*
  You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

  'Hello World'

  would give:
  Words in your solution should be left-aligned.
*/

// <-- Solution -->
function mirror(text) {
  const words = text.split(" ");
  const width = Math.max.apply(
    null,
    words.map((w) => w.length),
  );

  const tb = "*".repeat(width + 4);
  const revs = words.map((w) => `* ${Array.from(w).reverse().join("")}${" ".repeat(width - w.length)} *`).join("\n");

  return `${tb}\n${revs}\n${tb}`;
}
