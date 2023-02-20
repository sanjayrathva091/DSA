
/**
 * @param {number[]} a
 * @param {number} size
 * @returns {number}
*/

class Solution {

    majorityElement(a, size) {
        // your code here
        let candidate = a[0];
        let count = 1;

        for (let i = 1; i < size; i++) {
            if (candidate === a[i]) {
                count++;
            } else {
                count--;
            }
            if (count === 0) {
                candidate = a[i];
                count = 1;
            }
        }
        // Second pass
        let cnt = 0;
        for (let i = 0; i < size; i++) {
            if (a[i] === candidate) {
                cnt++;
            }
            if (cnt === Math.floor(size / 2) + 1) {
                return candidate;
            }
        }
        return -1;
    }
}