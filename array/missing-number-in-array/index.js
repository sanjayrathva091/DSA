
/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
*/

class Solution {
    MissingNumber(array, n) {
        // code here
        let sum = 0;

        for (let i = 1; i <= n; i++) {
            sum += i;
            if (i < n) sum -= array[i - 1];
        }

        return sum;
    }
}

// Sample 1:
const N = 10;
const arr = [6, 1, 2, 8, 3, 4, 7, 10, 5];

const sol = new Solution();
const res = sol.MissingNumber(arr, N);
console.log(res);
// Expected output: 9
// Received output: 9