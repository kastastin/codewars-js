// <-- Create a frame -->

/*
  Given an array of strings and a character to be used as border, output the frame with the content inside.

  Notes:

  Always keep a space between the input string and the left and right borders.
  The biggest string inside the array should always fit in the frame.
  The input array is never empty.
  Example
  frame(['Create', 'a', 'frame'], '+')

  Output:

  ++++++++++
  + Create +
  + a      +
  + frame  +
  ++++++++++
*/

// <-- My Solution -->
const frame = (text, char) => {
  const maxLength = Math.max(...text.map((str) => str.length));
  let frame = char.repeat(maxLength + 4);

  let content = ["\n"];

  for (let i = 0; i < text.length; i += 1) {
    const space = " ".repeat(maxLength - text[i].length);
    content.push(`${char} ${text[i]} ${space}${char}\n`);
  }

  return [frame, ...content.map((el) => el), frame].join("");
};

// <-- Best Solution -->
const frameBest = (text, char) => {
  const width = text.reduce(
    (maxWidth, v) => (v.length > maxWidth ? v.length : maxWidth),
    0,
  );

  const line = (content) => `${char} ${content.padEnd(width, " ")} ${char}`;
  const edge = char.repeat(width + 4);

  return [edge, ...text.map(line), edge].join("\n");
};
