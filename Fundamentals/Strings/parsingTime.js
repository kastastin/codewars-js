// <-- Parsing time -->

/*
  Implement a class/function, which should parse time expressed as HH:MM:SS, or null/nil/None otherwise.

  Any extra characters, or minutes/seconds higher than 59 make the input invalid, and so should return null/nil/None
*/

// <-- My Solution -->
String.prototype.toSeconds = function () {
  const regexp = /^(\d{2}):([0-5]\d):([0-5]\d)$/;
  const match = this.match(regexp);

  if (match) {
    const hours = +match[1];
    const minutes = +match[2];
    const seconds = +match[3];
    return (hours * 60 + minutes) * 60 + seconds;
  }

  return null;
};

// <-- Best Solution -->
String.prototype.toSeconds = function () {
  const m = this.match(/^(\d\d):([0-5]\d):([0-5]\d)$/);
  return m ? 3600 * m[1] + 60 * m[2] + 1 * m[3] : null;
};
