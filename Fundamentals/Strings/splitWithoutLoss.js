// <-- Split Without Loss -->

/*
  Most languages have a split function that lets you turn a string like “hello world” into an array like[“hello”, “world”]. But what if we don't want to lose the separator? Something like [“hello”, “ world”].

  Task:
  Your job is to implement a function, (split_without_loss in Ruby/Crystal, and splitWithoutLoss in JavaScript/CoffeeScript), that takes two arguments, str (s in Python), and split_p, and returns the string, split by split_p, but with the separator intact. There will be one '|' marker in split_p. str or s will never have a '|' in it. All the text before the marker is moved to the first string of the split, while all the text that is after it is moved to the second one. Empty strings must be removed from the output, and the input should NOT be modified.

  When tests such as (str = "aaaa", split_p = "|aa") are entered, do not split the string on overlapping regions. For this example, return ["aa", "aa"], not ["aa", "aa", "aa"].

  Examples (see example test cases for more):
  splitWithoutLoss("hello world!", " |") #=> ["hello ", "world!"]
  splitWithoutLoss("hello world!", "o|rl") #=> ["hello wo", "rld!"]
  splitWithoutLoss("hello world!", "h|ello world!") #=> ["h", "ello world!"]
  splitWithoutLoss("hello world! hello world!", " |")
                    #=> ["hello ", "world! ", "hello ", "world!"]
  splitWithoutLoss("hello world! hello world!", "o|rl")
                    #=> ["hello wo", "rld! hello wo", "rld!"]
  splitWithoutLoss("hello  hello  hello", " | ")
                    #=> ["hello ", " hello ", " hello"]
  splitWithoutLoss(" hello world", " |")
                    #=> [" ", "hello ", "world"]
  splitWithoutLoss("  hello hello hello", " |")
                    #=> [" ", " ", "hello ", "hello ", "hello"]
  splitWithoutLoss("  hello hello hello  ", " |")
                    #=> [" ", " ", "hello ", "hello ", "hello ", " "]
  splitWithoutLoss("  hello hello hello", "| ")
                    #=> [" ", " hello", " hello", " hello"]
*/

// <-- My Solution -->
const splitWithoutLoss = (str, split_p) => {
  const result = [""];
  
  for (let i = 0, [left, right] = split_p.split`|`; i < str.length; i++) {
    if (result.at(-1).endsWith(left) && str.slice(i).startsWith(right)) {
      !result.at(-1) && result.pop();
      result.push(right);
      i += right.length - 1;
      continue;
    }

    result[result.length - 1] += str[i];
  }

  return result;
};

// <-- Best Solution -->
function splitWithoutLoss(str, split_p) {
  return str
    .replace(new RegExp(split_p.replace(/\|/g, ""), "g"), split_p)
    .split("|")
    .filter((i) => i != "");
}
