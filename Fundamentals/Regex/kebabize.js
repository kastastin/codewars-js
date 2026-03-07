// <-- Kebabize -->

/*
  Modify the kebabize function so that it converts a camel case string into a kebab case.

  "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
  "camelsHave3Humps"  -->  "camels-have-humps"
  "CAMEL"  -->  "c-a-m-e-l"

  Notes:
  the returned string should only contain lowercase letters
*/

// <-- Solution -->
function kebabize(str) {
  const nonumber = str.replace(/\d/g, "").split(/(?=[A-Z])/g);
  
  return nonumber.join("-").toLowerCase();
}
