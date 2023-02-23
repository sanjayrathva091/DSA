# Subarray with given sum

## Description:

Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S and return the left and right index(1-based indexing) of that subarray.

In case of multiple subarrays, return the subarray indexes which comes first on moving from left to right.

Note:- Both the indexes in the array should be according to 1-based indexing. You have to return an arraylist consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

Example 1:

```
Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements
from 2nd position to 4th position
is 12.
```

Example 2:

```
Input:
N = 10, S = 15
A[] = {1,2,3,4,5,6,7,8,9,10}
Output: 1 5
Explanation: The sum of elements
from 1st position to 5th position
is 15.
```

## Your Task:

You don't need to read input or print anything. The task is to complete the function subarraySum() which takes arr, N, and S as input parameters and returns an arraylist containing the starting and ending positions of the first such occurring subarray from the left where sum equals to S. The two indexes in the array should be according to 1-based indexing. If no such subarray is found, return an array consisting of only one element that is -1.

```
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
```

```
Constraints:
1 <= N <= 105
1 <= Ai <= 109
```

### Tags:

algorithm, data structures, arrays, pre-fix sum, searching, sliding window

# Solution:
## Approach 1: Brute Force

In this approach, we will iterate through all possible subarrays of the given array and check if the sum of elements in the subarray is equal to the given sum. This approach has a time complexity of `O(n^2)`.

### Algorithm

- Traverse the array using two nested loops.
- In the outer loop, select the starting point of the subarray.
- In the inner loop, select the ending point of the subarray.
- Calculate the sum of elements in the subarray.
- If the sum is equal to the given sum, return the subarray.

Here's Pseudo-code for above approach:
```
for i in range(n):
    sum = 0
    for j in range(i, n):
        sum += arr[j]
        if sum == given_sum:
            return (i, j)
```
## Time Complexity

The time complexity of this approach is `O(n^2)`.

## Space Complexity

The space complexity of this approach is `O(1)`.

## Approach 2: Prefix Sum

In this approach, we will calculate the prefix sum of the given array and use it to find the subarray with the given sum. This approach has a time complexity of O(n).

### Algorithm

- Calculate the prefix sum of the given array.
- Traverse the prefix sum array and store the sum along with its index in a dictionary.
- Traverse the prefix sum array again and check if (prefix_sum[i] - given_sum) exists in the dictionary.
- If it exists, return the subarray between the two indices.

Here's Pseudo-code for above approach:
```
prefix_sum = [0] * (n+1)
for i in range(1, n+1):
    prefix_sum[i] = prefix_sum[i-1] + arr[i-1]

sum_dict = {}
for i in range(n+1):
    if prefix_sum[i] in sum_dict:
        sum_dict[prefix_sum[i]].append(i)
    else:
        sum_dict[prefix_sum[i]] = [i]

for i in range(1, n+1):
    if (prefix_sum[i] - given_sum) in sum_dict:
        indices = sum_dict[prefix_sum[i] - given_sum]
        for index in indices:
            if index < i:
                return (index, i-1)
```

## Time Complexity

The time complexity of this approach is `O(n)`.

## Space Complexity

The space complexity of this approach is `O(n)`.

## Approach 3: Sliding Window

In this approach, we will use a sliding window to find the subarray with the given sum.

### Algorithm

- Initialize two pointers, start and end, to the beginning of the array.
- Calculate the sum of the subarray between the start and end pointers.
- If the sum is equal to the given sum, return the subarray.
- If the sum is less than the given sum, move the end pointer to the right.
- If the sum is greater than the given sum, move the start pointer to the right.
- Repeat steps 2-5 until the subarray with the given sum is found or until the end pointer reaches the end of the array.

Here's Pseudo-code for above approach:
```
start = 0
end = 0
subarray_sum = 0

while end < n:
    subarray_sum += arr[end]

    while subarray_sum > given_sum:
        subarray_sum -= arr[start]
        start += 1

    if subarray_sum == given_sum:
        return arr[start:end+1]

    end += 1
```

## Time Complexity

The algorithm requires a single pass over the array, so the time complexity is `O(n)`.

## Space Complexity

The algorithm does not require any additional space, so the space complexity is `O(1)`.
