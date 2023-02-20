
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
*/

class Solution {

    sort012(arr, N) {
        //your code here
        let zero = 0;
        let one = 0;
        let two = 0;

        for (let i = 0; i < N; i++) {
            if (arr[i] === 0) zero++;
            if (arr[i] === 1) one++;
            if (arr[i] === 2) two++;
        }

        for (let i = 0; i < N; i++) {
            if (zero > 0) {
                arr[i] = 0;
                zero--;
            } else if (one > 0) {
                arr[i] = 1;
                one--;
            } else if (two > 0) {
                arr[i] = 2;
                two--;
            }
        }

        return arr;
    }
}

// Sample case
const n = 5;
const arr = [0, 2, 1, 2, 0];

const sol = new Solution();
const res = sol.sort012(arr, n);
console.log(res.join(" "));