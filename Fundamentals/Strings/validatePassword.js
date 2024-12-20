// <-- Validate my Passwords -->

/*
  I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

  Passwords must abide by the following requirements:
  More than 3 characters but less than 20.
  Must contain only alphanumeric characters.
  Must contain letters and numbers.
*/

// <-- My Solution -->
function validPass(password) {
  const t1 = /^\w{3,20}$/.test(password);
  const t2 = /\d/.test(password);
  const t3 = /[a-zA-Z]/.test(password);

  return t1 && t2 && t3 ? "VALID" : "INVALID";
}

// <-- Best Solution -->
function validPassBest(password) {
  return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password)
    ? "VALID"
    : "INVALID";
}
