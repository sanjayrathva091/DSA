
/**
 * @param {Node} head
 * @param {number} n
 * @returns {number}
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
    //Function to find the data of nth node from the end of a linked list
    getNthFromLast(head, n) {
        // your code here
        let next = null;
        let prev = null;
        let cur = head;

        while (cur !== null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        head = prev;

        let count = 1;
        let ptr = head;
        while (ptr !== null) {
            if (count === n) return ptr.data;
            ptr = ptr.next;
            count++;
        }

        return -1;
    }

}