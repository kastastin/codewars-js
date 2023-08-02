// <-- Age in days -->

/*
  Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

  For example if today is 30 November 2015 then
  ageInDays(2015, 11, 1) returns "You are 29 days old"
  The birthday is expected to be in the past.
*/

// <-- My Solution -->
function ageInDays(year, month, day) {
  const currDate = new Date();
  const birthDate = new Date(year, month - 1, day);
  const days = (currDate.getTime() - birthDate.getTime()) / (24 * 3600 * 1000);

  return `You are ${~~days} days old`;
}

// <-- Best Solution -->
function ageInDaysBest(year, month, day) {
  const days = ((new Date() - new Date(year, --month, day)) / 8.64e7) ^ 0;
  return `You are ${days} days old`;
}
