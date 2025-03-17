// <-- Dreidel dreidel -->

/*
  Let's play a fun gambling game. A dreidel has four sides. Below are the descriptions for each of them:

  Nun - nothing happens
  Gimel - you take the pot!
  Hei - you take half the pot
  Shin - you put a piece into the pot
  So here's how we play. You, being a raging gambling addict, start with all of your hard earned coins - oy vei! The pot will also have some non-negative amount of coins when the game begins. Create a function that given an array of dreidel rolls ordered from first to last (so rolls[0] is the first roll and rolls[rolls.length - 1] is the last roll), the number of coins in your account, and the number of coins in the pot, returns the number of coins left in your account after the last roll.

  For instance:

  gamble(['Hei', 'Shin'], 10, 20) -> 19
  gamble(['Hei', 'Hei'], 10, 20) -> 25
  gamble(['Nun', 'Nun', 'Shin', 'Gimel', 'Shin'], 10, 20) -> 29
  gamble(['Shin', 'Shin', 'Hei'], 10, 20) -> 19
*/

// <-- My Solution -->
const gamble = (rolls, myCoins, pot) => {
  let obj = {
    Nun: function () {},
    Gimel: function () {
      myCoins += pot;
      pot = 0;
    },
    Hei: function () {
      myCoins += (pot / 2) | 0;
      pot -= (pot / 2) | 0;
    },
    Shin: function () {
      myCoins--;
      pot++;
    },
  };

  rolls.forEach((el) => obj[el]());

  return myCoins;
};

// <-- Best Solution -->
function gamble(rolls, myCoins, pot) {
  return rolls.reduce(
    function (p, v) {
      switch (v) {
        case "Nun":
          return p;
        case "Gimel":
          return { m: p.m + p.p, p: 0 };
        case "Hei":
          return { m: p.m + Math.floor(p.p / 2), p: Math.ceil(p.p / 2) };
        case "Shin":
          return { m: p.m - 1, p: p.p + 1 };
      }
    },
    { m: myCoins, p: pot },
  ).m;
}
