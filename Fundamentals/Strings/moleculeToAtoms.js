// <-- Molecule to atoms -->

/*
  For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

  For example:

  var water = 'H2O';
  parseMolecule(water); // return {H: 2, O: 1}

  var magnesiumHydroxide = 'Mg(OH)2';
  parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

  var fremySalt = 'K4[ON(SO3)2]2';
  parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
  As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.
*/

// <-- Solution -->
function parseMolecule(formula) {
  const pattern = new RegExp(/(\([^\(\)]*\)|\[[^\[\]]*\]|\{[^\{\}]*\})(\d+)/, "g");

  while (formula.match(pattern)) {
    formula = formula.replace(pattern, (_, group, multiplier) => {
      return group.slice(1, -1).repeat(multiplier);
    });
  }

  return formula.match(/[A-Z][a-z]?\d*/g).reduce((acc, m) => {
    let [_, e, q] = m.match(/([A-Z][a-z]?)(\d*)/);

    q = Number(q) || 1;

    if (e in acc) {
      acc[e] += q;
    } else {
      acc[e] = q;
    }

    return acc;
  }, {});
}
