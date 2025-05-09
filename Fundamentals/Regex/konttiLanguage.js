// <-- Kontti Language -->

/*
  Kontti language is a finnish word play game.

  You add -kontti to the end of each word and then swap their characters until and including the first vowel ("aeiouy");

  For example the word tame becomes kome-tantti; fruity becomes koity-fruntti and so on.

  If no vowel is present, the word stays the same.

  Write a string method that turns a sentence into kontti language!
*/

// <-- My Solution -->
String.prototype.kontti = function () {
  return this.replace(/([^ aeiouy]*[aeiouy])(\w*)/g, `ko$2-$1ntti`);
};

// <-- Best Solution -->
String.prototype.kontti = function () {
  return this.replace(/(\S*?[aeiouyäö])(\S*)/g, "ko$2-$1ntti");
};
