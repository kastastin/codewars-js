// <-- Temperature converter -->

/*
  Write a function convert_temp(temp, from_scale, to_scale) converting temperature from one scale to another. Return converted temp value.

  Round converted temp value to an integer(!).

  Reading: http://en.wikipedia.org/wiki/Conversion_of_units_of_temperature

  possible scale inputs:
      "C"  for Celsius
      "F"  for Fahrenheit
      "K"  for Kelvin
      "R"  for Rankine
      "De" for Delisle
      "N"  for Newton
      "Re" for Réaumur
      "Ro" for Rømer
  temp is a number, from_scale and to_scale are strings.

  convert_temp(   100, "C",  "F") # => 212
  convert_temp(    40, "Re", "C") # => 50
  convert_temp(    60, "De", "F") # => 140
  convert_temp(373.15, "K",  "N") # => 33
  convert_temp(   666, "K",  "K") # => 666
*/

// <-- My Solution -->
const convertTemp = (temp, from, to) => Math.round(fromC[to](toC[from](temp)));

const toC = {
	C: (x) => x,
	F: (x) => ((x - 32) * 5) / 9,
	K: (x) => x - 273.15,
	R: (x) => ((x - 491.67) * 5) / 9,
	De: (x) => 100 - (x * 2) / 3,
	N: (x) => (x * 100) / 33,
	Re: (x) => (x * 5) / 4,
	Ro: (x) => ((x - 7.5) * 40) / 21,
};

const fromC = {
	C: (x) => x,
	F: (x) => (x * 9) / 5 + 32,
	K: (x) => x + 273.15,
	R: (x) => ((x + 273.15) * 9) / 5,
	De: (x) => ((100 - x) * 3) / 2,
	N: (x) => (x * 33) / 100,
	Re: (x) => (x * 4) / 5,
	Ro: (x) => (x * 21) / 40 + 7.5,
};
