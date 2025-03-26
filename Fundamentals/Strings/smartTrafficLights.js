// <-- Smart Traffic Lights -->

/*
  Given 2 pairs of values each representing a road (the number of cars on it and its name), construct an object whose turngreen method returns the name of the road with the most traffic at the moment of the method call, and clears that road from cars.

  After both roads are clear of traffic, or if the number of cars on both roads is the same from the beginning, return an empty value instead.

  Example
  t = SmartTrafficLight([42, "27th ave"], [72, "3rd st"])
  t.turngreen()  ==  "3rd st"
  t.turngreen()  ==  "27th ave"
  t.turngreen()  ==  null

  t = SmartTrafficLight([10, "27th ave"], [10, "3rd st"])
  t.turngreen()  ==  null
*/

// <-- My Solution -->
class SmartTrafficLight {
  constructor(st1, st2) {
    this.st1 = st1;
    this.st2 = st2;
    this.i = 0;
  }

  turngreen() {
    let [a, b] = this.st1;
    let [c, d] = this.st2;

    this.i++;

    switch (this.i) {
      case 1:
        return c > a ? d : c == a ? null : b;
      case 2:
        return c > a ? b : c == a ? null : d;
      default:
        return null;
    }
  }
}

// <-- Best Solution -->
class SmartTrafficLight {
  constructor(a, b) {
    this.a = a[0] === b[0] ? [] : [a, b].sort((x, y) => x[0] - y[0]);
  }

  turngreen() {
    return this.a.length ? this.a.pop()[1] : null;
  }
}
