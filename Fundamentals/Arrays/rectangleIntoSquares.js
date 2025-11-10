// <-- Rectangle into Squares -->

/*
  You will be given two dimensions

  a positive integer length
  a positive integer width
  You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

  Examples in general form:

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
    
  Notes:
  lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth
*/

// <-- My Solution -->
function sqInRect(length, width) {
  if (length === width) {
    return null;
  }

  const result = [];

  while (length > 0 && width > 0) {
    result.push(Math.min(length, width));

    if (length > width) {
      length -= width;
    } else {
      width -= length;
    }
  }

  return result;
}

// <-- Best Solution -->
function sqInRectBest(a, b, initial = true) {
  if (a === b) {
    return initial ? null : [a];
  }
  
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return [min, ...sqInRectBest(max - min, min, false)];
}
