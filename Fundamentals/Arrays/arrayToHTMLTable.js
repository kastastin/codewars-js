// <-- Array to HTML table -->

/*
  The task is simple - given a 2D array (list), generate an HTML table representing the data from this array.

  You need to write a function called to_table/toTable, that takes three arguments:

  data - a 2D array (list),
  headers - an optional boolean value. If True, the first row of the array is considered a header (see below). Defaults to False,
  index - an optional boolean value. If True, the first column in the table should contain 1-based indices of the corresponding row. If headers arguments is True, this column should have an empty header. Defaults to False.
  and returns a string containing HTML tags representing the table.
  Details
  HTML table is structured like this:
  <table>
    <thead>                 <!-- an optional table header -->
      <tr>                  <!-- a header row -->
        <th>header1</th>    <!-- a single header cell -->
        <th>header2</th>
      </tr>
    </thead>
    <tbody>                 <!-- a table's body -->
      <tr>                  <!-- a table's row -->
        <td>row1, col1</td> <!-- a row's cell -->
        <td>row1, col2</td>
      </tr>
      <tr>
        <td>row2, col1</td>
        <td>row2, col2</td>
      </tr>
    </tbody>
  </table>
  The table header is optional. If header argument is False then the table starts with <tbody> tag, ommiting <thead>.

  So, for example:

  toTable([["lorem", "ipsum"], ["dolor", "sit amet"]], true, true)
  returns

  "<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>"
*/

// <-- Solution -->
function toTable(data, headers = false, index = false) {
  let [thead, tbody] = ["", ""];
  const makeHeadRow = (val) => `${val.reduce((acc, v) => acc + `<th>${v}</th>`, "")}`;
  const makeBodyRow = (val) => `${val.reduce((acc, v) => acc + `<td>${v === null ? "" : v}</td>`, "")}`;

  for (let i = 0, n = 1; i < data.length; i++) {
    if (headers && i === 0) {
      thead = `<tr>${index ? `<th></th>` : ""}${makeHeadRow(data[i])}</tr>`;
    } else {
      tbody += `<tr>${index ? `<td>${n++}</td>` : ""}${makeBodyRow(data[i])}</tr>`;
    }
  }

  return `<table>${thead && `<thead>${thead}</thead>`}<tbody>${tbody}</tbody></table>`;
}
