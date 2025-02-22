"use strict";

// <-- Closure -->
function makeAdder(x) {
  function add(y) {
    return x + y;
  }
  return add;
}

const plusOne = makeAdder(1);
const plusTen = makeAdder(10);

console.log(plusOne(4)); // 5
console.log(plusTen(5)); // 15

// <-- Modules -->
function User() {
  let username, password;

  function doLogin(name, pw) {
    username = name;
    password = pw;
  }

  const publicAPI = {
    login: doLogin,
  };

  return publicAPI;
}

const bob = User("Bob", "root");

// <-- this Identifier -->
function foo() {
  console.log(this.bar);
}

const bar = "global";
const obj1 = { bar: "obj1", foo: foo };
const obj2 = { bar: "obj2" };

// foo(); // error
obj1.foo(); // obj1
foo.call(obj2); // obj2
new foo(); // undefined

// <-- Prototypes -->
const fn = { a: 10 };
const obj3 = Object.create(fn);
// const obj3 = { __proto__: fn }; // alternative way

obj3.b = "text";

console.log(obj3.a); // 10
console.log(obj3.b); // text
console.log(obj3); // { b: 'text' }
