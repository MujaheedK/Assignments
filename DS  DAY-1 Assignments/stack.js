class Node {
    constructor(value) {
      this.value = value,
       this.next = null
    }
  }
  class LinkedList {
    //Creates a linkedlist with passed value.
    constructor(value) {
      //Creates a head node
      this.head = {
        value: value,
        next: null,
      };
      //As there is only one element in the list, head is also a tail
      this.tail = this.head;
      //Length would be 1
      this.length = 1;
    }
    //Insertes a node at specified index, say we want to insert 30 at index 2
    //Current list: 10 -> 20 -> 40 -> 50
    insert(index, value) {
      //Create a new Node by creating a instance of a Node class
      const newNode = new Node(value);
  
      //Counter to loop
      let count = 1;
  
      //Create a temp node to traverse through list, which will start from the head node
      //Pointing to 10
      let previousNode = this.head;
  
      //Traverse the list one node before the specified index, which is previous node
      while (count < index) {
        //Point previous node to next for iterating
        previousNode = previousNode.next;
  
        //Increase the count to compare it with index;
        count++;
      }
      //When the loop ends you will be able to have a previous node. Which is 20 in this example.
  
      //First, points new node's next to the previous node's next, so it can hold the list ahead of its index
      //New node = 30, So new node will be 30 -> 40 -> 50
      newNode.next = previousNode.next;
  
      //Now just point previous node's next to new node.
      //Merge left side of the list, 10 -> 20 -> 30 -> 40 -> 50
      previousNode.next = newNode;
    }
    deleteNodeByValue(value) {
      //Current node to loop through the list
      let currentNode = this.head;
  
      //Previous node to update its pointer to next.next node
      let previousNode = null;
  
      while (currentNode != null) {
        //Check if we find the value we are looking for
        if (currentNode.value === value) {
          //Check if it is a head or not by comparing previous node with null
          if (previousNode === null) {
            //If it is head, then update head to nextnode
            this.head = currentNode.next;
          } else {
            //If it is not head then simply update previous node
            previousNode.next = currentNode.next;
          }
          //Reduce length by 1
          this.length--;
        }
  
        //Previous node will point to this node with every iteration
        previousNode = currentNode;
        //Current node will point to next node for iteration
        currentNode = currentNode.next;
      }
    }
    printList() {
      //Creates an empty array.
      let printArrayList = [];
  
      //Pointer which points to the head node
      let currentNode = this.head;
  
      //Start iterating from the first node till you reach the last node
      while (currentNode !== null) {
        //Add every node's value to the array
        printArrayList.push(currentNode.value);
  
        //Point pointer to the next node
        currentNode = currentNode.next;
      }
      //Return the array
      return printArrayList.join(" -> ");
    }
  }
  console.log("Creating a LinkList at constant time O(1): 20:");
  const myLinkedList = new LinkedList();
  console.log(myLinkedList.printList());
  console.log("");
  document.getElementById("insertclick").addEventListener("click", function () {
    console.log("Inserting Node at index 2 with time complexty of O(n): 30");
    let index = document.getElementById("insertindex").value;
    let value = document.getElementById("insertval").value;
    console.log(index);
    myLinkedList.insert(index, value);
    console.log(myLinkedList.printList());
  });
  document.getElementById("deleteclick").addEventListener("click", function () {
    let del = document.getElementById("deleteval").value;
    console.log(`Deleting Node with value ${del} with time complexty of O(n):`);
    myLinkedList.deleteNodeByValue(del);
    console.log(myLinkedList.printList());
    console.log("");
  });