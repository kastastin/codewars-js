// <-- Seventh JSON -->

/*
  Context:
  According to Wikipedia: "The seventh son of a seventh son is a concept from folklore regarding special powers given to, or held by, such a son. The seventh son must come from an unbroken line with no female siblings born between, and be, in turn, born to such a seventh son."

  Your task:
  You will be given a string of JSON, consisting of a family tree containing people's names, genders and children. Your task will be to find the seventh sons of seventh sons in the family tree, and return a set of their names. If there are none, return an empty set.
*/

// <-- My Solution -->
function findSeventhSonsOfSeventhSons(json) {
  const result = [];
  const parent = JSON.parse(json);

  const findSeventhSon = (parent) => {
    if (!parent) return;

    const children = parent.children.slice(0, 7);

    if (children.every((child) => child.gender == "male")) {
      return children[6];
    }
  };

  const proceed = (parent) => {
    const seventhSonOfSeventhSon = findSeventhSon(findSeventhSon(parent));
    if (seventhSonOfSeventhSon) {
      result.push(seventhSonOfSeventhSon.name);
    }

    parent.children.forEach((child) => proceed(child));
  };

  proceed(parent);

  return new Set(result);
}

// <-- Best Solution -->
function findSeventhSonsOfSeventhSonsBest(json) {
  const result = new Set();
  const tree = JSON.parse(json);

  function checkChildren(children, parentWasSeventhSon) {
    let onlySons = true;

    children.forEach((child, n) => {
      if (child.gender === "female") onlySons = false;

      if (n === 6 && onlySons) {
        if (parentWasSeventhSon) result.add(child.name);
        checkChildren(child.children, true);
      } else {
        checkChildren(child.children, false);
      }
    });
  }

  checkChildren([tree], false);

  return result;
}
