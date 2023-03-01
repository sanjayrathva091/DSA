# Sort an array in time constraint O(nlog(n))

## Description

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

### Example 1:

```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
```

### Example 2:

```
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
```

### Constraints:

```
1 <= nums.length <= 5 * 10^4
-5 * 10^4 <= nums[i] <= 5 * 10^4
```

# Solution

## Intuition

The Merge Sort algorithm is based on the Divide and Conquer paradigm. It breaks the input array into smaller sub-arrays, sorts them recursively, and then merges them to form a single sorted array. This process continues until the entire array is sorted.

## Approach

The Merge Sort algorithm works by dividing the input array into two halves repeatedly until the sub-arrays are of size 1 or 0. Then it merges the sub-arrays in a sorted manner to form larger sorted sub-arrays. This process is repeated until the entire array is merged.

Here's a step-by-step explanation of the Merge Sort algorithm:

1. Divide the input array into two halves recursively until each sub-array contains only one element.
2. Merge two sub-arrays in sorted order to create a larger sorted sub-array.
3. Repeat step 2 until there is only one sorted sub-array.

## Complexity

The Merge Sort algorithm has a time complexity of `O(nlog(n))` in the worst case, where n is the size of the input array. The reason for this is that the algorithm divides the input array into smaller sub-arrays until they are of size 1, and then it merges them in sorted order. The merging step takes `O(n)` time in the worst case, and the divide step takes `O(log(n))` time because the algorithm divides the input array into halves repeatedly.

The Merge Sort algorithm has a space complexity of `O(n)` because it creates temporary arrays for each recursive call. However, it is still considered to have a small space complexity because it uses the minimum amount of space required to perform the sorting operation.

- Time complexity: `O(nlog(n))`
- Space complexity: `O(n)`
