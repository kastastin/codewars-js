// <-- IPv4 address -->

/*
  Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.

  It should only accept addresses in canonical representation, so no leading 0s, spaces etc.
*/

// <-- My Solution -->
String.prototype.ipv4Address = function () {
  let ss = this.split(".");

  return (
    ss.length == 4 &&
    ss.every((s) => {
      let n = +s;
      return s == "" + n && n >= 0 && n < 256;
    })
  );
};

// <-- Best Solution -->
String.prototype.ipv4Address = function () {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(this);
};
