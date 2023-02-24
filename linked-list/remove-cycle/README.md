# Remove Cycle from Linked List

## Description

A linked list is a data structure consisting of a sequence of nodes, where each node contains a value and a reference to the next node in the sequence. A cycle in a linked list occurs when a node's reference points back to a previous node in the sequence, creating a loop. Removing a cycle in a linked list involves identifying the node where the cycle starts and breaking the loop by setting the `next` property of the last node in the cycle to `null`.

## Floyd's cycle-finding algorithm

Floyd's cycle-finding algorithm (also known as the "tortoise and hare" algorithm) uses two pointers: a "slow" pointer that moves one step at a time, and a "fast" pointer that moves two steps at a time. If there is a cycle in the linked list, the fast pointer will eventually catch up to the slow pointer, indicating the presence of a cycle. To find the node where the cycle starts, we use two additional pointers: one pointing to the head of the linked list, and another pointing to the node where the slow and fast pointers meet. We move these two pointers one step at a time until they meet at the node where the cycle starts. Finally, we break the cycle by setting the `next` property of the last node in the cycle to `null`.

## Algorithm

The algorithm works as follows:

- Initialize two pointers, `slow` and `fast`, to the head of the linked list.
- Move `slow` one step at a time and `fast` two steps at a time through the linked list.
- If `fast` reaches the end of the list (i.e., `fast.next` is `null`), there is no cycle in the list. Otherwise, if `fast` catches up to `slow`, there is a cycle in the list.
- To find the node where the cycle starts, reset `slow` to the head of the list and leave `fast` at its current position. Then, move both pointers one step at a time until they meet at the node where the cycle starts.
- To remove the cycle, set the next property of the last node in the cycle to `null`.

## Pseudo code

```
function detectAndRemoveCycle(head):
    if head is null:
        return

    // Step 1
    let slow = head
    let fast = head

    // Step 2
    while fast is not null and fast.next is not null:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            break

    // Step 3
    if slow is not fast:
        return

    // Step 4
    let ptr1 = head
    let ptr2 = slow
    while ptr1 is not ptr2:
        ptr1 = ptr1.next
        ptr2 = ptr2.next

    // Step 5
    while ptr2.next is not ptr1:
        ptr2 = ptr2.next
    ptr2.next = null
```

## Time and Space Complexity

The time complexity of Floyd's cycle-finding algorithm is `O(n)`, where n is the number of nodes in the linked list.

The space complexity is `O(1)`, because the algorithm uses only two pointers and a few additional variables.
