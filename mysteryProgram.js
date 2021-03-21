function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// ANSWER:
// This program iterates through a linked list, determining
// if a node's value is equal to the next nodes's value.
// If it does, then it deletes the next node.

// Time complexity is 0(n^2) due to 2 nested while loops.
