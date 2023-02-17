
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number} 
*/

class Solution {
    // Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N) {
        // code here
        let sum = arr[0];
        let maxSum = arr[0];

        for (let i = 1; i < N; i++) {
            sum = Math.max(arr[i], arr[i] + sum);
            maxSum = Math.max(sum, maxSum);
        }

        return maxSum;
    }
}

// Sample test case
const N = 5;
const arr = [1, 2, 3, -2, 5];

const sol = new Solution();
const res = sol.maxSubarraySum(arr, N);
console.log(res);
// Expected result: 9
// Received result: 9