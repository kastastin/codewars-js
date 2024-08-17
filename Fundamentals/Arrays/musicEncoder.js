// <-- A Simple Music Encoder -->

/*
  The input signal is represented as an array of integers. Several cases of regularities can be shortened.

  A sequence of 2 or more identical numbers is shortened as number*count
  A sequence of 3 or more consecutive numbers is shortened as first-last. This is true for both ascending and descending order
  A sequence of 3 or more numbers with the same interval is shortened as first-last/interval. Note that the interval does NOT need a sign
  Compression happens left to right
  Examples
  [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] is compressed to "1,3-5,7-11,14,15,17-20"
  [0, 2, 4, 5, 7, 8, 9] is compressed to "0-4/2,5,7-9"
  [0, 2, 4, 5, 7, 6, 5] is compressed to "0-4/2,5,7-5"
  [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5] is compressed to "0-4/2,5,7-5,5*4"
*/

// <-- My Solution -->
function compress(music) {
  const result = [];

  for (
    let i = 0, rangeStart = null, step = 1, repeat = 1;
    i < music.length;
    i++
  ) {
    if (rangeStart === null && repeat === 1) {
      if (music[i] === music[i + 1]) {
        repeat++;
      } else if (music[i + 1] - music[i] === music[i + 2] - music[i + 1]) {
        step = Math.abs(music[i + 1] - music[i]);
        if (rangeStart === null) {
          rangeStart = music[i];
        }
      } else {
        result.push(music[i]);
      }
    } else {
      if (repeat !== 1) {
        if (music[i] !== music[i + 1]) {
          result.push(`${music[i]}*${repeat}`);
          repeat = 1;
        } else {
          repeat++;
        }
      } else if (
        rangeStart !== null &&
        music[i + 1] - music[i] !== music[i + 2] - music[i + 1]
      ) {
        result.push(
          `${rangeStart}-${music[i + 1]}${step === 1 ? "" : "/" + step}`
        );
        i++;
        rangeStart = null;
      }
    }
  }

  return result.join(",");
}

// <-- Best Solution -->
function compressBest(music) {
  const result = [];

  for (let i = 0; i < music.length; ++i) {
    let j = i;
    let diff = music[j + 1] - music[j];

    while (music[j + 1] == music[j] + diff) ++j;

    if (diff == 0) {
      result.push(music[i] + "*" + (j - i + 1));
      i = j;
    } else {
      if (j - i <= 1) {
        result.push(music[i]);
      } else {
        result.push(
          music[i] +
            "-" +
            music[j] +
            (Math.abs(diff) == 1 ? "" : "/" + Math.abs(diff))
        );

        i = j;
      }
    }
  }

  return result.join();
}
