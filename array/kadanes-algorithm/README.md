# Kadane's algorithm

## Description:

Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

Example 1:

```
Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9
Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which
is a contiguous subarray.
```

Example 2:

```
Input:
N = 4
Arr[] = {-1,-2,-3,-4}
Output:
-1
Explanation:
Max subarray sum is -1
of element (-1)
```

### Your Task:

You don't need to read input or print anything. The task is to complete the function maxSubarraySum() which takes Arr[] and N as input parameters and returns the sum of subarray with maximum sum.

```
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
```

```
Constraints:
1 ≤ N ≤ 106
-107 ≤ A[i] ≤ 107
```

# Solution

Kadane's algorithm is a dynamic programming algorithm that finds the maximum subarray sum of a given array. It works by keeping track of the maximum subarray sum seen so far, and the maximum subarray sum ending at each position in the array.

Here's the Pseudo code for Kadane's algorithm:
```
function kadane(arr) {
    max_so_far = arr[0];
    max_ending_here = arr[0];
    for i in range(1, len(arr)) {
        max_ending_here = max(arr[i], max_ending_here + arr[i]);
        max_so_far = max(max_so_far, max_ending_here);
    }
    return max_so_far;
}
```

In this approach, we initialize two variables `max_so_far` and `max_ending_here` to the first element of the array. We then iterate through the rest of the array, updating `max_ending_here` to be the maximum of the current element and the sum of the current element and the maximum subarray sum ending at the previous position. We also update `max_so_far` to be the maximum of `max_so_far` and `max_ending_here` at each position. Finally, we return `max_so_far`, which is the maximum subarray sum of the entire array.

## Time and Space Complexity Analysis

### Time complexity: `O(n)`

Kadane's algorithm iterates through the input array once, so the time complexity is `O(n)`, where n is the length of the array.

### Space complexity: `O(1)`

Kadane's algorithm uses only constant space, so the space complexity is `O(1)`, regardless of the size of the input array.

Overall, Kadane's algorithm is an efficient and elegant way to find the maximum subarray sum of an array, with linear time complexity and constant space complexity.
