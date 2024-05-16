// <-- Evaluate the Group of Parentheses -->

/*
  The function is given a non-empty balanced parentheses string. Each opening '(' has a corresponding closing ')'.
  Compute the total score based on the following rules:

  Substring s == () has score 1, so "()" should return 1
  Substring s1s2 has total score as score of s1 plus score of s2, so "()()" should return 1 + 1 = 2
  Substring (s) has total score as two times score of s, so "(())" should return 2 * 1 = 2
  Return the total score as an integer.

  Examples
  eval_parentheses("()") ➞ 1
  # 1

  eval_parentheses("(())") ➞ 2
  # 2 * 1

  eval_parentheses("()()") ➞ 2
  # 1 + 1

  eval_parentheses("((())())") ➞ 6
  # 2 * (2 * 1 + 1)

  eval_parentheses("(()(()))") ➞ 6
  # 2 * (1 + 2 * 1)

  eval_parentheses("()(())") ➞ 3
  # 1 + 2 * 1

  eval_parentheses("()((()))") ➞ 5
  # 1 + 2 * 2 * 1
*/

// <-- My Solution -->

function evalParentheses(str) {
	const stack = [0];

	for (const char of str)
		stack.push(char === "(" ? 0 : Math.max(stack.pop() * 2, 1) + stack.pop());

	return stack.pop();
}

// <-- Best Solution -->
function evalParenthesesBest(str) {
	str = str.replace(/\(\)/g, "(1)");
	str = str.replace(/\)\(/g, ")+(");
	str = str.replace(/\(/g, "2*(");

	return eval(str) / 2;
}
