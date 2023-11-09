// <-- Validate PIN code -->

/*
  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
  If the function is passed a valid PIN string, return true, else return false.

  Examples (Input --> Output)
  "1234"   -->  true
  "12345"  -->  false
  "a234"   -->  false
*/

// <-- My Solution -->
function validatePIN(pin) {
  const regex = new RegExp("^([0-9]{4}|[0-9]{6})$");
  return regex.test(pin);
}

// <-- Best Solution -->
function validatePIN(pin) {
  return /^\d{4}(\d{2})?$/.test(pin);
}
