
/**
 * @param {Node} head
 * @returns {boolean}
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
    //Function to check if the linked list has a loop.
    detectLoop(head) {
        // your code here
        let fast = head;
        let slow = head;

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
            if (slow === fast) return true;
        }

        if (fast === null) return false;
    }

}