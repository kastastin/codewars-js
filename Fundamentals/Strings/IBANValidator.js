// <-- IBAN Validator -->

/*
  Write a function validate_iban which checks if a given string is a valid IBAN.

  Have a look at the wikipedia-entry for a easy-description of the algorithm: https://en.wikipedia.org/wiki/International_Bank_Account_Number#Validating_the_IBAN

  IBAN-Length and Countries are taken from https://www.iban.com/structure.html and refere to the state from "03/05/2017". You will have access to a (preloaded) dictionary (called @COUNTRIES) containing id's and their corresponding length.

  You should also ignore every character which is not part of the IBAN.
*/

// <-- Solution -->
const COUNTRIES = {
  DE: 22,
  GB: 22,
  FR: 27,
  IT: 27,
};

function validateIban(iban, COUNTRIES) {
  iban = iban.replace(/[^A-Z0-9]/gi, "");

  const countryCode = iban.slice(0, 2);

  if (!COUNTRIES[countryCode]) {
    return false;
  }

  const expectedLength = COUNTRIES[countryCode];

  if (iban.length !== expectedLength) {
    return false;
  }

  iban = iban.slice(4) + iban.slice(0, 4);

  let ibanNumeric = "";
  for (let i = 0; i < iban.length; i++) {
    let char = iban[i];

    if (/[0-9]/.test(char)) {
      ibanNumeric += char;
    } else if (/[A-Z]/i.test(char)) {
      ibanNumeric += (char.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 10).toString();
    }
  }

  let remainder = 0;
  for (let i = 0; i < ibanNumeric.length; i++) {
    remainder = (remainder * 10 + parseInt(ibanNumeric[i])) % 97;
  }

  return remainder === 1;
}
