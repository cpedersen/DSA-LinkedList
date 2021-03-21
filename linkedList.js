class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    prevNode.next = currNode.next;
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  insertBefore(newItem, beforeItem) {
    if (this.head === null) {
      this.insertFirst(newItem);
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.next !== null && currNode.value !== beforeItem) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      return `${beforeItem} not in list.`;
    }
    const newNode = new _Node(newItem, currNode);
    prevNode.next = newNode;
  }

  insertAfter(newItem, afterItem) {
    if (this.head === null) {
      this.insertFirst(newItem);
      return;
    }
    let currNode = this.find(afterItem);
    if (currNode === null) {
      return `${afterItem} not in list.`;
    }
    const newNode = new _Node(newItem, currNode.next);
    currNode.next = newNode;
  }

  insertAt(newItem, position) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let prevNode = this.head;
    for (let i = 0; i < position - 1; i++) {
      if (currNode.next === null) {
        this.insertLast(newItem);
        return `That position position doens't exist. Item added to end of list.`;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    const newNode = new _Node(newItem, currNode);
    prevNode.next = newNode;
  }
}

function display(list) {
  let values = [];
  let currNode = list.head;
  while (currNode !== null) {
    values.push(currNode.value);
    currNode = currNode.next;
  }
  return { ...values };
}

function size(list) {
  let counter = 0;
  let currNode = list.head;
  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

function isEmpty(list) {
  if (!list.head || list.head === null) {
    return true;
  } else {
    return false;
  }
}

function findPrevious(item, list) {
  if (!list.head || list.head === null) {
    return "Not a list.";
  }
  let currNode = list.head;
  let prevNode = list.head;
  while (currNode !== null && currNode.value !== item) {
    prevNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === list.head) {
    return `${item} is the first node`;
  }
  if (currNode === null) {
    return `${item} is not in list.`;
  }
  return prevNode.value;
}

function findLast(list) {
  if (!list.head || list.head === null) {
    return "Not a list.";
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode.value;
}

function thirdFromEnd(list) {
  if (!list.head || list.head === null) {
    return "Not a list.";
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    nextNode = currNode.next;
    nextNextNode = nextNode.next;
    if (nextNextNode.next === null) {
      return `${currNode.value}`;
    } else {
      currNode = nextNode;
    }
  }
}

function middle(list) {
  if (!list || list.head === null) {
    return `No List.`;
  }
  let currNode = list.head;
  let endNode = currNode.next.next;

  while (endNode.next !== null) {
    currNode = currNode.next;
    endNode = endNode.next.next;
    if (!endNode) {
      return `${currNode.value}`;
    }
  }
  return `${currNode.next.value}`;
}

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  SLL.remove("Husker");
  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAfter("Hotdog", "Helo");
  SLL.insertAt("Kat", 3);
  SLL.remove("Tauhida");

  return SLL;
}

console.log(display(main()));
console.log(size(main()));
console.log(isEmpty(main()));
console.log(findPrevious("Boomer", main()));
console.log(findLast(main()));
console.log(thirdFromEnd(main()));
console.log(middle(main()));

module.exports = LinkedList;
