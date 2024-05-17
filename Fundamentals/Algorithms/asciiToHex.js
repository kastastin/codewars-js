// <-- ASCII hex converter -->

/*
  Write a module Converter that can take ASCII text and convert it to hexadecimal. The class should also be able to take hexadecimal and convert it to ASCII text. To make the conversion well defined, each ASCII character is represented by exactly two hex digits, left-padding with a 0 if needed. The conversion from ascii to hex should produce lowercase strings (i.e. f6 instead of F6).

  Example
  Converter.toHex("Look mom, no hands")
  => "4c6f6f6b206d6f6d2c206e6f2068616e6473"

  Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473")
  => "Look mom, no hands"
*/

// <-- My Solution -->
const Converter = {
	toAscii: function (hex) {
		return hex
			.match(/[\S]{2}/g)
			.map((el) => String.fromCharCode(parseInt("0x" + el, 16)))
			.join("");
	},
	toHex: function (ascii) {
		return ascii
			.split("")
			.map((el) => el.charCodeAt(0).toString(16))
			.join("");
	},
};

// <-- Best Solution -->
function ConverterBest() {}

ConverterBest.toAscii = function (hex) {
	return hex.replace(/../g, (h) => String.fromCharCode(parseInt(h, 16)));
};

ConverterBest.toHex = function (ascii) {
	return ascii.replace(/./g, (a) => a.charCodeAt().toString(16));
};
