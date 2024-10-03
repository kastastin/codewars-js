// <-- Break all the rules -->

/*
  You live in this world, but you are not the master of the rules. They'll give you a lot of rules. They said, 1 must be on the left side of 2. So they give you an array [1,2] to represent their will. And they said, 3 must be on the left side of 4. They give you an array [3,4] to represent their will. So you have 4 numbers, 1,2,3,4. But you are not willing to be bound by the rules and you want to break all the rules. You need to find some sorted result that don't follow any of their rules.

  For rules [[1,2],[3,4]], maybe  [[2,1,4,3],[2,4,1,3],[2,4,3,1],[4,2,1,3],[4,2,3,1],[4,3,2,1]] is the result you want. Because they do not conform to the rule1, also do not conform to the rule2.

  Task
  Complete function breakRules that accepts a argument rules, return all possible combinations that don't follow any of their rules. If there is no such result, return [].

  You can assume that each rule is an array that contains two elements(digits 0-9). The result must contains all the numbers in the rules (including duplicate). The result should be sorted according to the ascending order, that is, first compare the first digit of each element, and then second digit, and so on..

  Examples
  breakRules([[1,2]]) should return:[[2,1]]

  breakRules([[1,2],[2,3]]) should return: [[3,2,2,1]]

  breakRules([[1,2],[3,4]]) should return:
  [[2,1,4,3],[2,4,1,3],[2,4,3,1],[4,2,1,3],[4,2,3,1],[4,3,2,1]]

  breakRules([[1,2],[2,3],[3,1]]) should return: []
*/

// <-- My Solution -->
function breakRules(rules) {
  const digits = [].concat(...rules).sort((x, y) => x - y);

  const res = [];
  const stk = [[[], digits]];

  while (stk.length) {
    const [selected, left] = stk.pop();

    if (!left.length) res.push(selected);

    for (let i = 0; i < left.length; ++i) {
      if (rules.every(([x, y]) => y != left[i] || !selected.includes(x))) {
        stk.push([
          [...selected, left[i]],
          [...left.slice(0, i), ...left.slice(i + 1)],
        ]);
      }
    }
  }

  const set = new Set(res.map(JSON.stringify));

  return [...set].sort().map(JSON.parse);
}

// <-- Best Solution -->
function breakRulesBest(rules) {
  var f,
    arr,
    result = [],
    arr = rules
      .join()
      .split(",")
      .map((a) => +a),
    p,
    k,
    l = arr.length,
    c = new Array(l).fill(0),
    i = 1,
    j = 1;
  while (i < l)
    if (c[i] < i) {
      k = i & 1 ? c[i] : 0;
      p = arr[i];
      arr[i] = arr[k];
      arr[k] = p;
      ++c[i];
      i = 1;
      f = 0;
      for (var j = rules.length - 1; j >= 0; j--)
        if (arr.indexOf(rules[j][0]) <= arr.lastIndexOf(rules[j][1])) {
          f = 1;
          break;
        }
      if (f == 0) result.push(arr.join(""));
    } else c[i++] = 0;

  return result
    .filter((a, i) => result.indexOf(a) == i)
    .sort()
    .map((a) => [...a].map((b) => +b));
}
