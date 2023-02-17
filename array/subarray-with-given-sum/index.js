
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
*/

class Solution {
    // Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s) {
        // your code here
        let currentSum = arr[0];
        let start = 0;

        for (let i = 1; i <= n; i++) {
            while (currentSum > s && start < i - 1) {
                currentSum = currentSum - arr[start];
                start++;
            }

            if (currentSum === s) return [start + 1, i];

            if (i < n) currentSum = currentSum + arr[i];
        }

        return [-1];

    }
}

// Sample 1:
const N = 5;
const S = 12;

const arr = [1, 2, 3, 7, 5];

const res = new Solution();
const ans = res.subarraySum(arr, N, S);
console.log(ans.join(' '));
// Expected output: 2 4
// Received output: 2 4