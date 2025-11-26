// <-- Minimum Bonus -->

/*
  International hackers group organized a programming competition, in which n teams participated.
  They were assigned to separate rooms for competitions, and the rooms were lined up in a straight line.
  The game was over and each team scored points. It's time to pay bonuses. The rule is:

  - The bonus unit is 1K($1000), and each team gets at least 1k.
  - The bonus payment process is not public. 
  - A team can know the bonus amount of its adjacent team, if the 
    score of the adjacent team is lower than itself.
  - If a team finds that its bonus is no higher than the adjacent team whose
    score is lower than itself, the team will not be satisfied
  Given an integer array scores represents the score of all teams. Your task is to calculate how much bonuses international hackers group need to pay to keep all teams satisfied.

  Example:
  For scores = [10,20,30], the output should be 6.
  team1's score = 10
  team2's score = 20
  team3's score = 30
  team1 can get 1K, The team was satisfied 
  because it knew nothing about the other teams.
  team2 can know team1's bonus amount, 
  So team2 at least get 2K to be satisfied
  team3 can know team2's bonus amount, 
  So team3 at least get 3K to be satisfied
  1 + 2 + 3 = 6
*/

// <-- My Solution -->
function minimumBonus(scores) {
  const bonuses = Array(scores.length).fill(1);

  scores.forEach((score, i) => {
    if (i > 0 && score > scores[i - 1]) {
      bonuses[i] = bonuses[i - 1] + 1;
    }
  });

  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      bonuses[i] = Math.max(bonuses[i], bonuses[i + 1] + 1);
    }
  }

  const totalBonuses = bonuses.reduce((sum, bonus) => sum + bonus, 0);

  return totalBonuses;
}

// <-- Best Solution -->
function minimumBonusBest(scores) {
  const a = scores.map(() => 1);

  for (let i = 1; i in a; i++) {
    if (scores[i] > scores[i - 1]) {
      a[i] = a[i - 1] + 1;
    }
  }

  for (let i = a.length - 2; i in a; i--) {
    if (scores[i] > scores[i + 1]) {
      a[i] = Math.max(a[i], a[i + 1] + 1);
    }
  }

  return a.reduce((v, w) => v + w, 0);
}
