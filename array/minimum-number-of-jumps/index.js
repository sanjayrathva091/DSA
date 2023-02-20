
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    minJumps(arr, n) {
        // code here
        if (n <= 1) return 0;

        if (arr[0] === 0) return -1;

        let maxReach = arr[0];
        let step = arr[0];
        let jump = 1;

        let i = 1;

        while (i < n) {
            if (i === n - 1) return jump;

            maxReach = Math.max(maxReach, i + arr[i]);

            step--;

            if (step === 0) {
                jump++;
                if (i >= maxReach) return -1;
                step = maxReach - i;
            }
            i++;
        }

        return -1;
    }
}

const n = 11;
const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

const sol = new Solution();
const res = sol.minJumps(arr, n);
console.log(res);
// Expected output: 3
// Received output: 3