// <-- Extract the IDs from the data set -->

/*
  Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

  const data = {
    id: 1,
    items: [
      {id: 2},
      {id: 3, items: [
        {id: 4},
        {id: 5}
      ]}
    ]
  }

  extractIds(data) // should return [1,2,3,4,5]
  The method should be able to handle the case of empty data being passed in.

  Note: The only arrays that need to be traversed are those assigned to the "items" property.
*/

// <-- My Solution -->
function extractIds(data, ids = []) {
  const search = (item) => {
    for (const key in item) {
      if (key == "id") {
        ids.push(item[key]);
      }

      if (typeof item[key] === "object") {
        search(item[key]);
      }
    }
  };

  return search(data), ids;
}

// <-- Best Solution -->
function extractIdsBest(data) {
  return (JSON.stringify(data).match(/\d+/g) || []).map((x) => +x);
}
