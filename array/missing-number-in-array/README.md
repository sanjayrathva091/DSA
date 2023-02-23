# Missing number in an array

## Description:

Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

### Example 1:

```
Input:
N = 5
A[] = {1,2,3,5}
Output: 4
```

### Example 2:

```
Input:
N = 10
A[] = {6,1,2,8,3,4,7,10,5}
Output: 9
```

### Your Task:

You don't need to read input or print anything. Complete the function MissingNumber() that takes array and N as input parameters and returns the value of the missing number.

```
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
```

```
Constraints:
1 ≤ N ≤ 106
1 ≤ A[i] ≤ 106
```

### Tags:

Data Structures, Algorithm, Array, Bit Magic, Searching,

# Solution

There are several different approaches to solve this problem, each with its own advantages and disadvantages. Here's a more detailed explanation of each approach along with their time and space complexities:

## Brute Force Approach

The brute force approach is to iterate through the array and check if each number is present or not. The missing number is the one that is not present in the array. This approach has a time complexity of O(n^2) because it requires two nested loops to compare each number in the array with every other number in the array. The space complexity is O(1) because it only requires a few variables to keep track of the missing number.

Here's Pseudo-code for above approache:

```
missingNumber = -1
for i = 1 to n+1:
    found = False
    for j = 0 to n-1:
        if arr[j] == i:
            found = True
            break
    if found == False:
        missingNumber = i
        break
return missingNumber
```

## Sum of natural numbers approach

Another approach is to find the sum of the first n natural numbers and subtract the sum of the array from it. The difference is the missing number. This approach has a time complexity of O(n) because it only requires a single pass through the array. The space complexity is O(1) because it only requires a few variables to keep track of the sum and the missing number.

Here's Pseudo-code for above approach:

```
sum = 0
for i = 1 to n+1:
    sum += i
for i = 0 to n-1:
    sum -= arr[i]
missingNumber = sum
return missingNumber
```

## XOR approach:

This approach uses the property that XOR of a number with itself is 0. If we XOR all the numbers in the array with the first n natural numbers, the result will be the missing number. This approach has a time complexity of O(n) because it only requires a single pass through the array. The space complexity is O(1) because it only requires a few variables to keep track of the XOR result and the missing number.

Here's Pseudo-code for above approach:

```
xor = 0
for i = 1 to n+1:
    xor ^= i
for i = 0 to n-1:
    xor ^= arr[i]
missingNumber = xor
return missingNumber
```

## Binary Search approach

This approach works only if the array is sorted. We can use binary search to find the missing number. The idea is to check if the difference between the middle element and its index is equal to the difference between the first element and its index. If it is not, then the missing number is in the first half of the array. Otherwise, it is in the second half. This approach has a time complexity of O(log n) because it uses binary search. The space complexity is O(1) because it only requires a few variables to keep track of the indices.

Here's Pseudo-code for above approach:

```
low = 0
high = n-1
while low <= high:
    mid = (low + high) // 2
    if arr[mid] - mid != arr[0]:
        high = mid - 1
    else:
        low = mid
```

## Time and Space Complexity Analysis

The time and space complexities of each approach are as follows:

| Approach | Time Complexity | Space Complexity |
|----------|-----------------|------------------|
| Brute Force (Naive) |	`O(n^2)` |	    `O(1)`      |
| Sum of natural numbers |	`O(n)` |	`O(1)` |
| XOR |	`O(n)` |	`O(1)` |
| Binary Search |	`O(log n)` |	`O(1)` |


## Conclusion

In conclusion, there are several different approaches to find a missing number in an array, each with its own advantages and disadvantages. You can choose the approach that better suites your need.
