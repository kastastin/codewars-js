// <-- Hat Game 2 -->

/*
  The game is played in three steps.

  First, your team is gathered in a room, where you are shown the set of unique hats which will be used for the game. The number of different hats can change from game to game, so you need to be ready for anything.

  Next, while the hats are cleared out of the room, your team has a chance to talk, make a strategy, and decide who will compete in the game. The only condition is that you may not have more people competing than there are unique hats. (So, if there are 10 unique kinds of hats, then you may have at most 10 competing team members).

  Finally, all the competing members of your team are organised into a circle facing each other. Then a random assortment of the available hats (which your team saw earlier) will be brought out and placed on the heads of each contestant. No form of communication or information sharing is possible between contestants at this point. All contestants can merely see the hats of all other contestants, but they cannot see their own. Each contestant must then write down a guess of what kind of hat their own is. This guess is not seen by any other team members.

  Your team wins the round if any of your team members manages to guess their own hat correctly. However, the game will be played over multiple rounds, so you need to come up with a strategy with your team which is guaranteed to win every single round.

  Note: the hats your team saw earlier represented merely the different kinds of hat available. There is no guarantee that exactly one of each kind will be brought out. It could be that everyone receives the same kind of hat, or all different kinds, or any other combination.

  Task
  Write a function which will accept a list of the available kinds of hats, and will return a list of strategies. A strategy is a function that accepts a list of hats (strings), and returns a single hat (their guess). This is representative of one single player in your team, and how they will guess once they can see all the hats that their teammates are wearing (which will be used as the input).

  Your team's list of strategies will be tested to ensure that it will always win the round (ie. that at least one team member will guess correctly).
*/

// <-- Solution -->
function makeStrategies(hats) {
  const N = hats.length;
  const idx = new Map(hats.map((h, i) => [h, i]));

  return hats.map((_, i) => (seen) => hats[seen.reduce((s, h) => s - idx.get(h), i + N * N) % N]);
}
