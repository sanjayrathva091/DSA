
/**
 * @param {Node} head
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to remove a loop in the linked list.
    removeLoop(head) {
        // your code here
        if (head === null) return;

        let fast = head;
        let slow = head;

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) break;
        }

        if (slow !== fast) return;

        let ptr1 = head;
        let ptr2 = slow;
        while (ptr1 !== ptr2) {
            ptr1 = ptr1.next;
            ptr2 = ptr2.next;
        }

        while (ptr2.next !== ptr1) {
            ptr2 = ptr2.next;
        }

        ptr2.next = null;
    }

}

