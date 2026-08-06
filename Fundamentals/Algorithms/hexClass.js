// <-- Hex class -->

/*
  Create a class Hex which takes a number as an argument.

  Adding a hex object to a number (by using valueOf) generates a number, but calling toString or toJSON will show its hexadecimal value starting with "0x". To make hex objects comparable you have to provide a method equals.

  Example:

  let FF = new Hex(255);
  FF.toString() == "0xFF";
  FF.valueOf() + 1 == 256;
  Also create two methods, plus and minus which will add or subtract a number or Hex object and return a new Hex object.

  let a = new Hex(10);
  let b = new Hex(5);
  a.plus(b).toJSON() == "0xF";
  Also, create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers:

  Hex.parse("0xFF") == 255;
  Hex.parse("FF") == 255;
  Note: If you define both valueOf and toString, "Hex value:" + new Hex(255) may not behave as expected!
*/

// <-- Solution -->
class Hex {
  constructor(value) {
    Object.defineProperty(this, "__value", { value });
  }

  static parse(string) {
    return parseInt(string, 16);
  }

  valueOf() {
    return this.__value;
  }

  toString() {
    return `0x${this.__value.toString(16).toUpperCase()}`;
  }

  toJSON() {
    return this.toString();
  }

  plus(n) {
    return new this.constructor(this.__value + n);
  }

  minus(n) {
    return new this.constructor(this.__value - n);
  }
}
