// <-- Enigma Machine: The Plugboard -->

/*
  The Plugboard class you will implement, will:

  Take a list of wire pairs at construction in the form of a string, with a default behaviour of no wires configured. E.g. "ABCD" would wire A <-> B and C <-> D.
  Validate that the wire pairings are legitimate. Raise an exception if not.
  Implement the process method to translate a single character input into an output.

  Examples
  var plugboard = Plugboard("ABCDEFGHIJKLMNOPQRST")
  plugboard.process("A") ==> "B"
  plugboard.process("B") ==> "A"
  plugboard.process("X") ==> "X"
  plugboard.process(".") ==> "."
*/

// <-- My Solution -->
const Plugboard = function (wires) {
  if (wires) {
    const len = wires.length;

    if (len % 2 || len / 2 > 10) throw "Invalid wires";

    const lookup = {};

    for (let i = 0; i < len; i = i + 2) {
      const wire1 = wires.substr(i, 1);
      const wire2 = wires.substr(i + 1, 1);

      if (lookup[wire1] || lookup[wire2]) throw "Invalid assignments";

      lookup[wire1] = wire2;
      lookup[wire2] = wire1;
    }
  }

  this.process = function (wire) {
    return lookup[wire] ? lookup[wire] : wire;
  };
};

// <-- Best Solution -->
const PlugboardBest = function (wires) {
  wires = wires || "";

  if (!wires.match(/^([A-Z][A-Z]){0,10}$/)) throw Error();

  if (wires.match(/(.).*\1/)) throw Error();

  this.process = function (wire) {
    const i = wires.indexOf(wire);
    
    return i == -1 ? wire : wires[i + 1 - 2 * (i % 2)];
  };
};
