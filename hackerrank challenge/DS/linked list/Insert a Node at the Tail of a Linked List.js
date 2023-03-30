function insertNodeAtTail(head, data) {

    const newNode = SinglyLinkedListNode(data);

    if (!head) return newNode;

    let currentNode = head.next;

    while (currentNode.next) currentNode = currentNode.next;

    currentNode.next = newNode;

    return head;

}