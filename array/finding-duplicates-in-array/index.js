
/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    
    duplicates(a, n)
    {
        // your code here
        let map = {};
        
        for (let i=0; i<n; i++) {
            map[a[i]] ? map[a[i]]++:map[a[i]]=1;
        }
        
        let ans = [];
        
        for (let key in map) {
            if (map[key] > 1) {
                ans.push(key);
            }
        }
        
        return ans;
    }
}

// Sample case