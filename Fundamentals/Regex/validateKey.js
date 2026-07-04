// <-- Validate a key: value string with RegExp -->

/*
  Write a regexp to validate a key-value string in the format:

  name:xxx,age:111,skill:xxx
  Rules
  name/age/skill may be in any order, example:

  'name:xxx,age:111,skill:xxx'
  'skill:xxx,name:xxx,age:111'
  'name:xxx,skill:xxx,age:111'
  name/skill have to be made up of letters ([A-Za-z]+)

  age has to be a number (0 is valid) ([0-9]+)

  there can be no leading or trailing commas ,

  name/age/skill must be present exactly once each
*/

// <-- Solution -->
const reg = new RegExp(
  ((v1, v2, v3) =>
    [
      [v1, v2, v3],
      [v1, v3, v2],
      [v2, v1, v3],
      [v2, v3, v1],
      [v3, v1, v2],
      [v3, v2, v1],
    ]
      .map(([a, b, c]) => `(^${a},${b},${c}$)`)
      .join("|"))("name:[A-Za-z]+", "age:[0-9]+", "skill:[A-Za-z]+"),
);
