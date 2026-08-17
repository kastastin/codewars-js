// <-- Address Book by State -->

/*
  Given a string with friends to visit in different states:

  ad3="John Daggett, 341 King Road, Plymouth MA
  Alice Ford, 22 East Broadway, Richmond VA
  Sal Carpenter, 73 6th Street, Boston MA"
  we want to produce a result that sorts the names by state and lists the name of the state followed by the name of each person residing in that state (people's names sorted). When the result is printed we get:

  Massachusetts
  .....^John Daggett 341 King Road Plymouth Massachusetts
  .....^Sal Carpenter 73 6th Street Boston Massachusetts
  ^Virginia
  .....^Alice Ford 22 East Broadway Richmond Virginia
  Spaces not being always well seen, in the above result ^ means a white space.

  The resulting string (when not printed) will be:

  "Massachusetts\n..... John Daggett 341 King Road Plymouth Massachusetts\n..... Sal Carpenter 73 6th Street Boston Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway Richmond Virginia"

*/

// <-- Solution -->
function byState(str) {
  const states = {
    AZ: "Arizona",
    CA: "California",
    ID: "Idaho",
    IN: "Indiana",
    MA: "Massachusetts",
    OK: "Oklahoma",
    PA: "Pennsylvania",
    VA: "Virginia",
  };

  const getState = (friend) => states[friend.match(/[A-Z]{2}$/)[0]];

  return str
    .split("\n")
    .filter((fr) => fr)
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => getState(a).localeCompare(getState(b)))
    .map((fr) => ` ${getState(fr)}\r\n..... ${fr}`)
    .join("\r\n")
    .split("\r\n")
    .filter((line, idx, arr) => arr.indexOf(line) === idx || !/^ \w+$/.test(line))
    .join("\r\n")
    .replace(/,/g, "")
    .replace(/^ /, "")
    .replace(/[A-Z]{2}$/gm, getState);
}
