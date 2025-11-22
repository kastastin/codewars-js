// <-- Swap Node Pairs In Linked List -->

/*
  You are given the head node of a singly-linked list. Write a method that swaps each pair of nodes in the list, then returns the head node of the list. You have to swap the nodes themselves, not their values.

  Example:
  (A --> B --> C --> D) => (B --> A --> D --> C)

  The swapping should be done left to right, so if the list has an odd length, the last node stays in place:
  (A --> B --> C) => (B --> A --> C)
*/

// <-- Solution -->
function swapPairs(head) {
  if (!head || !head.next) {
    return head;
  }

  const next = head.next;

  head.next = swapPairs(next.next);
  next.next = head;

  return next;
}
