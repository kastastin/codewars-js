// <-- Attribute modifiers and spells -->

/*
  Taking into consideration the 3.5 edition rules, your goal is to build a function that takes an ability score (worry not about validation: it is always going to be a non negative integer), will return:

  attribute modifier, as indicated on the table of the above link;
  maximum spell level for the spells you can cast (-1 for no spells at all) with that score;
  the eventual extra spells you might get (as an array/list, with elements representing extra spells for 1st, 2nd,... spell level in order; empty array for no extra spells).
  The result needs to be an object (associative array in PHP), as shown in the examples:

  charAttribute(0) === {modifier: 0, maximumSpellLevel: -1, extraSpells: []}
  charAttribute(1) === {modifier: -5, maximumSpellLevel: -1, extraSpells: []}
  charAttribute(5) === {modifier: -3, maximumSpellLevel: -1, extraSpells: []}
  charAttribute(10) === {modifier: 0, maximumSpellLevel: 0, extraSpells: []}
  charAttribute(20) === {modifier: +5, maximumSpellLevel: 9, extraSpells: [2,1,1,1,1]}
*/

// <-- My Solution -->
function charAttribute(score) {
  const modifier = score && ((score / 2) | 0) - 5;
  const maximumSpellLevel = Math.max(-1, Math.min(9, score - 10));

  for (
    const extraSpells = [], s = score - 12;
    s >= 0 && extraSpells.length < 9;
    s -= 2
  )
    extraSpells.push(1 + ((s / 8) | 0));

  return { modifier, maximumSpellLevel, extraSpells };
}

// <-- Best Solution -->
function charAttributeBest(score) {
  const modifier = score === 0 ? 0 : Math.ceil((score - 1) / 2) - 5;

  return {
    modifier: modifier,
    maximumSpellLevel: score > 19 ? 9 : score < 10 ? -1 : score - 10,
    extraSpells: Array(modifier > 9 ? 9 : modifier < 0 ? 0 : modifier)
      .fill(0)
      .map((_, i) => Math.ceil((modifier - i) / 4)),
  };
}
