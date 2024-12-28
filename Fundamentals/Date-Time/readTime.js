// <-- Read the time -->

/*
  Given time in 24-hour format, convert it to words.

  For example:
  13:00 = one o'clock 
  13:09 = nine minutes past one 
  13:15 = quarter past one 
  13:29 = twenty nine minutes past one
  13:30 = half past one 
  13:31 = twenty nine minutes to two
  13:45 = quarter to two 
  00:48 = twelve minutes to one
  00:08 = eight minutes past midnight
  12:00 = twelve o'clock
  00:00 = midnight

  Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'. 
*/

// <-- Best Solution -->
function solveBest(t) {
  let [h, m] = t.split`:`.map((e) => +e);
  let sh = "midnight one two three four five six seven eight nine ten eleven twelve one two three four five six seven eight nine ten eleven"
    .split` `;
  let sm = "o'clock,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,quarter,sixteen,seventeen,eighteen,nineteen,twenty,twenty one,twenty two,twenty three,twenty four,twenty five,twenty six,twenty seven,twenty eight,twenty nine,half"
    .split`,`;

  if (h === 0 && m === 0) return "midnight";

  if (m === 0) return `${sh[h]} ${sm[m]}`;

  if (m <= 30) {
    return `${sm[m]}${
      m === 15 || m === 30 ? "" : " minute" + (m === 1 ? "" : "s")
    } past ${sh[h]}`;
  }

  return `${sm[30 - (m % 30)]}${
    m === 45 ? "" : " minute" + (m === 59 ? "" : "s")
  } to ${sh[(h + 1) % 24]}`;
}
