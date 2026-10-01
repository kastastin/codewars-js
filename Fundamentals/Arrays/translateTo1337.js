// <-- Translate to 1337 -->

/*
  An angry wizard cast a spell on your friend. Your buddeh can now only speak in gibberish. However, after tracking down the wizard, you've found his translation scroll below.

  There are four conditions:
  You must not repeat the same key consecutively if there are more than one(the order of keys in the scroll is important!).
  Ex: to_leet('aaaa') # => '4@4@'
  The input will consist only of lowercase alphabetical characters(a-z) and single spaces.
  Ex: to_leet('a a a a a a a') # => '4 @ 4 @ 4 @ 4'
  If a key does not exist for a character, keep the character as is('m' is one such character without a key)
  Ex: to_leet('mama') # => 'm4m@'
  The strings must represent the key(s) on the scroll, meaning that certain characters might have to be escaped.
  The Scroll
    a = ['4', '@']
    b = ['|3', '8']
    d = ['|)', 'o|']
    e = ['3']
    f = ['|=']
    g = ['9', '6']
    h = ['|-|', ']-[', '}-{', '(-)', ')-(', '#']
    i = ['1', '!', '][']
    j = ['_|']
    k = ['|<', '|{']
    l = ['|_']
    n = ['|\|']
    o = ['0']
    p = ['|2', '|D']
    q = ['(,)']
    r = ['|Z', '|?']
    s = ['5', '$']
    t = ['+', '7']
    v = ['|/', '\/']
    w = ['\^/', '//']
    x = ['><', '}{']
    y = ['`/']
    z = ['(\)']
*/

// <-- Solution -->
function toLeet(str) {
  const scroll = {
    a: [["4", "@"], 0],
    b: [["|3", "8"], 0],
    d: [["|)", "o|"], 0],
    e: [["3"], 0],
    f: [["|="], 0],
    g: [["9", "6"], 0],
    h: [["|-|", "]-[", "}-{", "(-)", ")-(", "#"], 0],
    i: [["1", "!", "]["], 0],
    j: [["_|"], 0],
    k: [["|<", "|{"], 0],
    l: [["|_"], 0],
    n: [["|\\|"], 0],
    o: [["0"], 0],
    p: [["|2", "|D"], 0],
    q: [["(,)"], 0],
    r: [["|Z", "|?"], 0],
    s: [["5", "$"], 0],
    t: [["+", "7"], 0],
    v: [["|/", "\\/"], 0],
    w: [["\\^/", "//"], 0],
    x: [["><", "}{"], 0],
    y: [["`/"], 0],
    z: [["(\\)"], 0],
  };

  return str
    .split("")
    .map((x) => (x in scroll ? scroll[x][0][scroll[x][1]++ % scroll[x][0].length] : x))
    .join("");
}
