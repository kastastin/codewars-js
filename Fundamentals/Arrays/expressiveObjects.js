// <-- Expressive Objects -->

/*
  Write function evaluate(left, op, right)
  that given two operands (left and right) and an operator (op), will evaluate and return the result.

  For example:
  const left = {
      'multiply': {
          'add': [1, 2, 3, 4, 5],
          'subtract': [5, 6, 7, 8, 9],
          'multiply': [1, 2, 3, 4, 5],
          'divide': [1, 2, 3, 4, 5]
      }
  };
  You will reduce each array based on its key. So you will start of with add(ing) [1,2,3,4,5] => 15
  then subtract(ing) [5, 6, 7, 8, 9] => -25 etc. Once all arrays have been reduced, you will perform the
  root key operation on all the reduced arrays. So in this case, you will multiply each reduced array with
  each other. The order is ALWAYS value of 'add' key first, then 'subtract', then 'multiply' and finally 
  'divide'.

  const right = {
      'subtract': {
          'add': [1, 2, 3, 4, 5],
          'subtract': [1, 2, 3, 4, 5],
          'multiply': [1, 2, 3, 4, 5],
          'divide': [1, 2, 3, 4, 5]
      }
  };

  evaluate(left, 'add', right) === -467.0083333333333
*/

// <-- My Solution -->
function evaluate(left, op, right) {
  const ops = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  const reduceOperand = (operand) => {
    const rootOp = Object.keys(operand)[0];
    const arr = operand[rootOp];
    const values = [
      arr.add?.reduce(ops.add, 0),
      arr.subtract?.reduce(ops.subtract),
      arr.multiply?.reduce(ops.multiply, 1),
      arr.divide?.reduce(ops.divide),
    ].filter((val) => val !== undefined);

    return values.reduce((result, val, i) => (i ? ops[rootOp](result, val) : val));
  };

  return ops[op](reduceOperand(left), reduceOperand(right));
}

// <-- Best Solution -->
function evaluateBest(
  left,
  op,
  right,
  sign = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  },
) {
  return [structuredClone(left), structuredClone(right)]
    .flatMap(Object.entries)
    .map((el) =>
      Object.keys(sign)
        .map((key) => el[1][key].reduce(sign[key]))
        .reduce(sign[el[0]]),
    )
    .reduce(sign[op]);
}
