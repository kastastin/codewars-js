// <-- Linked Lists - Insert Nth Node -->

/*
  Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.
*/

// <-- My Solution -->
function Node(data, nxt) {
  this.data = data;
  this.next = nxt;
}

function insertNth(head, index, data) {
  if (index == 0) {
    return new Node(data, head);
  }

  if (head && index > 0) {
    head.next = insertNth(head.next, index - 1, data);
    return head;
  }

  throw "Error";
}
