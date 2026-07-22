// <-- Zero or more hands -->

/*
  Touch typing is a typing technique where each hand is responsible for specific keys on the keyboard.

  In this kata, you will simulate this behaviour using a simplified keyboard layout based on a QWERTY keyboard.

  Keyboard layout
  Left hand letters
  qwert
  asdfg
  zxcvb
  Right hand letters
  yuiop
  hjkl
  nm
  Task
  Write a function that receives a single lowercase word ( without any spaces ), and returns:

  NONE if the word is empty
  LEFT if the word can be typed using only the left hand
  RIGHT if the word can be typed using only the right hand
  BOTH if the word requires both hands
  The word will be encoded as an iterable, yielding strings of single letters.

  Rules
  Input contains only lowercase letters a to z
  Use only the keyboard layout provided above
  The word can be infinite ( this will only be tested with words with a finite prefix typed on both sides of the keyboard )
  Preloaded
  Use Hand = [ NONE, LEFT, RIGHT, BOTH ] defined in Preloaded.
  Hand supplies a well-defined mapping to and from numbers. Its use is optional.
  The return value must be one of NONE, LEFT, RIGHT, BOTH.

  Examples
  ""       ->  NONE
  "gaffe"  ->  LEFT
  "cards"  ->  LEFT
  "milk"   ->  RIGHT
  "pill"   ->  RIGHT
  "type"   ->  BOTH
*/

// <-- Solution -->
function whichHand(word) {
  let res = NONE;

  for (const x of word) {
    if ("yuiophjklmn".includes(x)) {
      if (res === LEFT) {
        return BOTH;
      }

      res = RIGHT;
    } else {
      if (res === RIGHT) {
        return BOTH;
      }

      res = LEFT;
    }
  }

  return res;
}
