// <-- Metric Units -->

/*
  Scientists working internationally use metric units almost exclusively. Unless that is, they wish to crash multimillion dollars worth of equipment on Mars.

  Your task is to write a simple function that takes a number of meters, and outputs it using metric prefixes.

  In practice, meters are only measured in "mm" (thousandths of a meter), "cm" (hundredths of a meter), "m" (meters) and "km" (kilometers, or clicks for the US military).

  For this exercise we just want units bigger than a meter, from meters up to yottameters, excluding decameters and hectometers.

  All values passed in will be positive integers. e.g.

  999 --> "999m"
  123456 --> "123.456km"
  12300000 --> "12.3Mm"
*/

// <-- Solution -->
function meters(x) {
  const DW = ["m", "km", "Mm", "Gm", "Tm", "Pm", "Em", "Zm", "Ym"];
  let count = 0;

  while (x >= 1000) {
    x /= 1000;
    count++;
  }

  return x + DW[count];
}
