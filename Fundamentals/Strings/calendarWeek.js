// <-- Calendar Week -->

/*
  According to ISO 8601, the first calendar week (1) starts with the week containing the first thursday in january. Every year consists of 52 calendar weeks (53 in case of a year starting on a Thursday or a leap year starting on a Wednesday).

  Your task is to calculate the calendar week (1-53) from a given date. For example, the calendar week for the date 2019-01-01 (string) should be 1 (int).

  See also ISO week date and Week Number on Wikipedia for further information about calendar weeks.

  On whatweekisit.org you may click through the calender and study calendar weeks in more depth.


*/

// <-- My Solution -->
function getCalendarWeek(date) {
  const inputDate = new Date(date);
  const millisecondsInDay = 86400000;

  inputDate.setHours(0, 0, 0, 0);
  inputDate.setDate(inputDate.getDate() + 3 - ((inputDate.getDay() + 6) % 7));

  const week1 = new Date(inputDate.getFullYear(), 0, 4);

  return (
    1 + Math.round(((inputDate.getTime() - week1.getTime()) / millisecondsInDay - 3 + ((week1.getDay() + 6) % 7)) / 7)
  );
}

// <-- Best Solution -->
function getCalendarWeekBest(date) {
  const today = new Date(date);

  today.setDate(today.getDate() + 4 - (today.getDay() || 7));

  const yearStart = new Date(Date.UTC(today.getFullYear(), 0, 1));

  return Math.ceil(((today - yearStart) / 864e5 + 1) / 7);
}
