// <-- Simplify Unique -->

/*
  Things like blog posts and CMS pages have titles. But they're accessed through urls. Titles can have old character in them. They can even be exactly the same as another one. So the back-end has to simplify those titles to be valid for a url at all, while still making sure they stay unique.

  Write the function simunq (catchy, right?) so that it converts the given original string and returns it with all the weird, disallowed characters replaced by a "wildcard."

  Here, the allowed characters are all english lowercase and uppercase characters, all digits, the space character, and the wildcard... the wildcard being a dash -.

  simunq("blah?") == "blah-";
  But at the same time, two urls must never overlap. So if it's the same as an already-used simunq string, tag a -n to the end of it, n being the number of identical strings that came before it, plus 1 for the current string.

  simunq("blah") == "blah";
  simunq("blah") == "blah-2";
  simunq("blah-2") == "blah-2-2";
  And, just so we can test a little easier, add a reset method to the simunq function. After this has been called, all the previously created simunq strings should be ignored.

  simunq("string") == "string";
  simunq("string") == "string-2";
  simunq.reset();
  simunq("string") == "string";
*/

// <-- Solution -->
const allowed = "0132456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -";
const slugs = new Set();

function simunq(original) {
  let key = original.replace(/[^0-9a-zA-Z ]/g, "-");

  if (slugs.has(key)) {
    let n = 2;

    while (slugs.has(`${key}-${n}`)) {
      n++;
    }

    key = `${key}-${n}`;
  }

  slugs.add(key);

  return key;
}

simunq.reset = function () {
  slugs.clear();
};
