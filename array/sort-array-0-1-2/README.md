# Sort an array of 0s, 1s, and 2s

## Description:

Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

Example 1:

```
Input:
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated
into ascending order.
```

Example 2:

```
Input:
N = 3
arr[] = {0 1 0}
Output:
0 0 1
Explanation:
0s 1s and 2s are segregated
into ascending order.
```

### Your Task:

You don't need to read input or print anything. Your task is to complete the function sort012() that takes an array arr and N as input parameters and sorts the array in-place.

```
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)


Constraints:
1 <= N <= 10^6
0 <= A[i] <= 2
```
# Solution

There are several different approaches to solve this problem, each with its own advantages and disadvantages. Here's a more detailed explanation of each approach along with their time and space complexities:

## Counting Sort Approach

One approach is to use Counting Sort. The idea is to count the number of 0s, 1s, and 2s in the array and then overwrite the array with the sorted values. This approach has a time complexity of `O(n)` because it only requires a single pass through the array to count the occurrences of each element, and another pass to overwrite the array. The space complexity is `O(1)` because it only requires three variables to keep track of the counts.

Here's Pseudo-code for above approach:

```
count0 = 0
count1 = 0
count2 = 0

for i = 0 to n-1:
    if arr[i] == 0:
        count0 += 1
    elif arr[i] == 1:
        count1 += 1
    else:
        count2 += 1

for i = 0 to count0-1:
    arr[i] = 0
for i = count0 to count0+count1-1:
    arr[i] = 1
for i = count0+count1 to n-1:
    arr[i] = 2
```

## Dutch National Flag Approach

Another approach is to use the Dutch National Flag algorithm, which is also known as 3-way partitioning. The idea is to maintain three pointers: low, mid, and high. The low pointer points to the first position in the array, the mid pointer points to the second position, and the high pointer points to the last position. We keep swapping the elements at the mid pointer with the elements at the low and high pointers until the mid pointer crosses the high pointer. This approach has a time complexity of `O(n)` because it only requires a single pass through the array to swap the elements, and another pass to overwrite the array. The space complexity is `O(1)` because it only requires three variables to keep track of the pointers.

Here's Pseudo-code for above approach:

```
low = 0
mid = 0
high = n-1

while mid <= high:
    if arr[mid] == 0:
        arr[low], arr[mid] = arr[mid], arr[low]
        low += 1
        mid += 1
    elif arr[mid] == 1:
        mid += 1
    else:
        arr[mid], arr[high] = arr[high], arr[mid]
        high -= 1
```

## Two-pass Approach

In this approach, we will use a two-pass algorithm to sort the array. In the first pass, we will count the number of 0s, 1s, and 2s in the array. In the second pass, we will overwrite the values in the array with the sorted values.

Here's Pseudo-code for above approach:

```
count0 = 0
count1 = 0
count2 = 0

for i in range(n):
    if arr[i] == 0:
        count0 += 1
    elif arr[i] == 1:
        count1 += 1
    else:
        count2 += 1

for i in range(count0):
    arr[i] = 0

for i in range(count0, count0 + count1):
    arr[i] = 1

for i in range(count0 + count1, n):
    arr[i] = 2
```

## Time Complexity

The algorithm requires two passes over the array, so the time complexity is `O(2n)` which is equivalent to `O(n)`.

## Space Complexity

The algorithm requires three variables to keep track of the counts, so the space complexity is `O(1)`.
