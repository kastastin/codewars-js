// <-- Calculating with objects -->

/*
  Bob made a class called Num.

  class Num {
    constructor(num){
      this.num=num;
    }
    toString() {
      return "The number is " + this.num;
    }
    valueOf() {
      return {num: this.num};
    }
  }
  He's trying to work with it like this:

  const x = new Num(100);
  const y = new Num(5);
  x + y == 105;
  x*y == 500;
  x-y == 95
  x/y == 20
  Math.floor(new Num(100.5)) == 100
  etc..
  But it doesn't work.. He keeps getting '[object Object][object Object]' as a result..

  He also wants to be able to use the existing valueOf and toString methods, so we shouldn't change those.

  const x = new Num(100);
  x.toString() == "The number is " + num
  x.valueOf() == {num: this.num}
  Can you help him make his class work?

  The class is preloaded.
*/

// <-- Solution -->
class Numex {
  constructor(num) {
    this.num = num;
  }

  toString() {
    return "The number is " + this.num;
  }

  valueOf() {
    return { num: this.num };
  }
  
  [Symbol.toPrimitive](hint) {
    return +this.num;
  }
}

Num = Numex;
