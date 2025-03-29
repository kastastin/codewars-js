// <-- Scooby Doo Puzzle -->

/*
  Your task is to initially solve the clues and then use those clues to unmask the villain. You will be given a string of letters that you must manipulate in a way that the clues guide you. You must then output the villain.
  You will be given an Array of potential villains and you must only return the correct masked villain.

  Potential Villains for the example test cases
  `Black Knights, Puppet Master, Ghost Clowner, Witch Doctors, Waxed Phantom, Manor Phantom, Ghost Bigfoot, Haunted Horse, Davy Crockett, Captain Injun, Greens Gloobs, Ghostly Manor, Netty Crabbes, King Katazuma, Gators Ghouls, Headless Jack, Mambas Wambas, Medicines Man, Demon Sharker, Kelpy Monster, Gramps Vamper, Phantom Racer, Skeletons Men, Moon Monsters`
  There will be different villains for the main test cases!

  Clue 1: The first clue is in a 'house' on 'String Class' Avenue.
*/

// <-- My Solution -->
function scoobydoo(villian, villians) {
  const va = villian.split("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let x = 0; x < 5; x++) {
    va.unshift(va.pop());
  }

  return va
    .reverse()
    .map((e, i) => {
      const n = alphabet.indexOf(e) + 5;
      return i % 2 !== 0 ? alphabet[n] || alphabet[n - alphabet.length] : e;
    })
    .join("");
}

// <-- Best Solution -->
function scoobydooBest(villian, villians) {
  const name = (villian.slice(-5) + villian.slice(0, -5))
    .split("")
    .reverse()
    .map((v, i) =>
      i % 2
        ? String.fromCharCode(((((v.charCodeAt(0) + 5) % 123) + 97) % 97) + 97)
        : v,
    )
    .join("");

  return villians.find((v) => v.replace(/ /g, "").toLowerCase() === name);
}
