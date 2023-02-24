# Majority element

## Description :

Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.

### Example 1 :

```
Input:
N = 3
A[] = {1,2,3}
Output:
-1
Explanation:
Since, each element in
{1,2,3} appears only once so there
is no majority element.
```

### Example 2 :

```
Input:
N = 5
A[] = {3,1,3,3,2}
Output:
3
Explanation:
Since, 3 is present more
than N/2 times, so it is
the majority element.
```

### Your Task:

The task is to complete the function majorityElement() which returns the majority element in the array. If no majority exists, return -1.

```
Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).


Constraints:
1 ≤ N ≤ 10^7
0 ≤ Ai ≤ 10^6
```

# Solution :

The following are three different approaches to find the majority element in an array, along with their time and space complexity analysis:

## Approach 1: Brute Force

The brute force approach is to iterate through all the elements of the array and check the frequency of each element. The element that appears more than half the time in the array is the majority element. 

Here's the Pseudo code for this approach:
```
function majority_element(arr) {
    n = len(arr)
    for i in range(n) {
        count = 0
        for j in range(n):
            if arr[j] == arr[i]:
                count += 1
        if count > n/2:
            return arr[i]
    }
    return -1
}
```
## Time and Space Complexity Analysis

### Time complexity: `O(n^2)`

The algorithm iterates through the input array twice, so the time complexity is `O(n^2)`, where n is the length of the array.

### Space complexity: `O(1)`

The algorithm uses constant extra space to store the count of the current element, so the space complexity is `O(1)`.

## Approach 2: Hashing

Another approach is to use a hash table to keep track of the frequency of each element in the array. The element that appears more than half the time in the array is the majority element. 

Here's the Pseudo code for this approach:

```
function majority_element(arr) {
    n = len(arr)
    freq = {}
    for i in range(n) {
        if arr[i] not in freq:
            freq[arr[i]] = 0
        freq[arr[i]] += 1
        if freq[arr[i]] > n/2:
            return arr[i]
    }
    return -1
}
```
## Time and Space Complexity Analysis

### Time complexity: `O(n)`

The algorithm iterates through the input array once, and performs constant time operations on each element to update the frequency count in the hash table, so the time complexity is `O(n)`, where n is the length of the array.

### Space complexity: `O(n)`

The algorithm uses a hash table to store the frequency count of each element in the array, which can take up to `O(n)` space in the worst case, where all the elements are distinct.

## Approach 3: Boyer-Moore Voting Algorithm

The Boyer-Moore Voting Algorithm is an efficient algorithm that finds the majority element in linear time and constant space. The algorithm works by maintaining a candidate majority element and a count of its occurrences. For each element in the array, if it is the same as the candidate element, the count is incremented, otherwise the count is decremented. If the count reaches zero, the current element is chosen as the new candidate. The final candidate is the majority element.

Here's the Pseudo code for the Boyer-Moore Voting Algorithm:
```
function majority_element(arr) {
    n = len(arr)
    count = 0
    candidate = -1
    for i in range(n) {
        if count == 0:
            candidate = arr[i]
        if arr[i] == candidate:
            count += 1
        else:
            count -= 1
    }
    if count > 0 {
        // check if candidate is the majority element
        count = 0
        for i in range(n) {
            if arr[i] == candidate:
                count += 1
        }
        if count > n/2:
            return candidate
    }
    return -1
}
```

## Time and Space Complexity Analysis

### Time complexity: `O(n)`

The algorithm iterates through the input array once, and performs constant time operations on each element to update the count and candidate variables, so the time complexity is `O(n)`, where n is the length of the array.

### Space complexity: `O(1)`

The algorithm uses only constant extra space to store the count and candidate variables, so the space complexity is `O(1)`
