// <-- InfiniTick -->

/*
  Make a custom esolang interpreter for the language InfiniTick. InfiniTick is a descendant of Tick but also very different. Unlike Tick, InfiniTick has 8 commands instead of 4. It also runs infinitely, stopping the program only when an error occurs. You may choose to do the Tick kata first.

  Syntax/Info
  InfiniTick runs in an infinite loop. This makes it both harder and easier to program in. It has an infinite memory of bytes and an infinite output amount. The program only stops when an error is reached. The program is also supposed to ignore non-commands.

  Commands
  >: Move data selector right.

  <: Move data selector left.

  +: Increment amount of memory cell. Truncate overflow: 255+1=0.

  -: Decrement amount of memory cell. Truncate overflow: 0-1=255.

  *: Add ascii value of memory cell to the output tape.

  &: Raise an error, ie stop the program.

  /: Skip next command if cell value is zero.

  \: Skip next command if cell value is nonzero.

  Examples
  Hello world!

  The following is a valid hello world program in InfiniTick.

  '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<*>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<<<*>>>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++*&'
*/

// <-- Solution -->
function interpreter(tape) {
  tape = tape.replace(/[^><+*&\/\\-]/g, "");
  let cur = 0;
  let out = "";
  const datas = {};

  for (let i = 0; i < tape.length; i = (i + 1) % tape.length) {
    const ch = tape[i];

    switch (ch) {
      case ">":
        cur++;
        break;
      case "<":
        cur--;
        break;
      case "+":
        datas[cur] = ((datas[cur] || 0) + 1) % 256;
        break;
      case "-":
        datas[cur] = (256 + (datas[cur] || 0) - 1) % 256;
        break;
      case "*":
        out += String.fromCharCode(datas[cur] || 0);
        break;
      case "&":
        return out;
        break;
      case "/":
        if (!datas[cur]) i++;
        break;
      case "\\":
        if (datas[cur]) i++;
        break;
    }
  }

  return out;
}
