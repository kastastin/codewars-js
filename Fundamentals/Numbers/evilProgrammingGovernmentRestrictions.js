// <-- Evil Programming Government Restrictions -->

/*
  The evil programming government has banned the use of numbers. Your task, if you choose to accept it is to return numbers, without using numbers.

  Problems:

  You can't use number literals in your source code.
  You can't use the length property directly in your code.
  Goal:

  You have to return 'I can write numbers like, 1, 2, 3.'
*/

// <-- Solution -->
function anarchy() {
  const one = Math.PI / Math.PI;
  const two = one + one;
  const three = two + one;

  return "I can write numbers like, " + one + ", " + two + ", " + three + ".";
}
