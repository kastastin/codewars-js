// <-- Fill in the gaps in my timesheet -->

/*
  At work I need to keep a timesheet, by noting which project I was working on every 15 minutes. I have an timer that beeps every 15 minutes to prompt me to note down what I was working on at that point, but sometimes when I'm away from my desk or working continuously on one project, I don't note anything down and these get recorded as null.

  Task:
  Help me populate my timesheet by replacing any null values in the array with the correct project name which is given by surrounding matching values.

  Examples:
  fill_gaps([1,null,1]) -> [1,1,1]   # Replace nulll values surrounded by matching values
  fill_gaps([1,null,null,null,1]) -> [1,1,1,1,1]  # There may be multiple nulls
  fill_gaps([1,null,1,2,null,2]) -> [1,1,1,2,2,2]  # There may be multiple replacements required
  fill_gaps([1,null,2,null,2,null,1]) -> [1,null,2,2,2,null,1]  # No nesting.
  fill_gaps([1,null,2]) -> [1,null,2] # No replacement if ends don't match
  fill_gaps([null,1,null]) -> [null,1,null] # No replacement if ends don't match off the ends of the array
*/

// <-- My Solution -->
const fillGaps = (timesheet) =>
  timesheet.map((v, i, a) => {
    if (v !== null) return v;

    let j = i - 1;
    let k = i + 1;

    while (a[j] === null) j--;
    while (a[k] === null) k++;
    
    return a[j] === a[k] ? a[j] : v;
  });

// <-- Best Solution -->
function fillGapsBest(timesheet) {
  if (timesheet.filter((item) => item !== null).length == 0) {
    return timesheet;
  }

  const copy = [...timesheet];

  for (let i = 0; i < copy.length; i++) {
    copy[i] =
      copy[i] === null &&
      copy.slice(i).find((item) => item !== null) === copy[i - 1]
        ? copy[i - 1]
        : copy[i];
  }

  return copy;
}
