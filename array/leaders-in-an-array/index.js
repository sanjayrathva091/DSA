
/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n) {
        // code here
        let ans = [];
        let max = -Infinity;
        for (let i = n - 1; i >= 0; i--) {
            if (arr[i] >= max) {
                max = arr[i];
                ans.push(max);
            }
        }
        return ans.reverse();
    }
}

// Sample case
const n = 6;
const arr = [16, 17, 4, 3, 5, 2];

const sol = new Solution();
const ans = sol.leaders(arr, n);
console.log(ans.join(" "));
// Expected output: 17 5 2
