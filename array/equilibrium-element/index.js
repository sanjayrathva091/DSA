
/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n) {
        // your code here
        let sumTotal = 0;

        for (let i = 0; i < n; i++) {
            sumTotal += a[i];
        }

        let sumLeft = 0;

        for (let i = 0; i < n; i++) {
            if (sumLeft === sumTotal - sumLeft - a[i]) {
                return i + 1;
            }
            sumLeft += a[i];
        }

        return -1;
    }
}