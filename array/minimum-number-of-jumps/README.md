# Minimum number of jumps

## Description:

Given an array of N integers arr[] where each element represents the maximum length of the jump that can be made forward from that element. This means if arr[i] = x, then we can jump any distance y such that y ≤ x.
Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.

Note: Return -1 if you can't reach the end of the array.

### Example 1:

```
Input:
N = 11
arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
Output: 3
Explanation:
First jump from 1st element to 2nd
element with value 3. Now, from here
we jump to 5th element with value 9,
and from here we will jump to the last.
```

### Example 2:

```
Input :
N = 6
arr = {1, 4, 3, 2, 6, 7}
Output: 2
Explanation:
First we jump from the 1st to 2nd element
and then jump to the last element.
```

### Your Task:

You don't need to read input or print anything. Your task is to complete function minJumps() which takes the array arr and it's size N as input parameters and returns the minimum number of jumps. If not possible return -1.

```
Expected Time Complexity: O(N)
Expected Space Complexity: O(1)
```

```
Constraints:
1 ≤ N ≤ 10^7
0 ≤ arri ≤ 10^7
```

# Solution

The following are three different approaches discussed:

## Brute Force: 

The brute force approach is to generate all possible combinations of jumps and find the one that reaches the end of the array with the minimum number of jumps. This can be done using recursion or a backtracking algorithm. This approach has a time complexity of O(2^n), where n is the length of the input array, as it generates all possible combinations of jumps.

Here's Pseudo code for above approach:

```
function minJumps(arr, start):
    if start == length(arr)-1:
        return 0

    if arr[start] == 0:
        return float('inf')

    min_jumps = float('inf')
    for i = start+1 to min(start+arr[start], length(arr)-1):
        jumps = minJumps(arr, i)
        if jumps != float('inf'):
            min_jumps = min(min_jumps, 1+jumps)

    return min_jumps
```    
## Time and Space Complexity Analysis

### Time Complexity: `O(2^n)`, 
where n is the length of the input array

### Space Complexity: `O(n)`, 
where n is the length of the input array (for recursion stack)

## Dynamic Programming: 

Another approach is to use dynamic programming to store the minimum number of jumps required to reach each index of the array. We start by setting the number of jumps required to reach the first element to 0. Then, for each element of the array, we iterate through all the elements that can be reached from that element and update their minimum number of jumps required. This approach has a time complexity of O(n^2), where n is the length of the input array, as it iterates through the input array twice.

Here's Pseudo code for above approach

```
function minJumps(arr) {
    n = length(arr)
    jumps = [float('inf')]*n
    jumps[0] = 0

    for i = 1 to n-1:
        for j = 0 to i-1:
            if i <= j+arr[j] and jumps[j] != float('inf'):
                jumps[i] = min(jumps[i], jumps[j]+1)
                break

    return jumps[n-1]
}
```    

## Time and Space Complexity

### Time Complexity: `O(n^2)`, 
where n is the length of the input array

### Space Complexity: `O(n)`, 
where n is the length of the input array (for the dynamic programming array)

## Greedy Algorithm: 

The best approach is to use a greedy algorithm that always selects the jump that takes us the farthest. We start by setting the current jump index to 0 and the current maximum index to 0. Then, we iterate through the array from index 1 to the end. For each index, we update the current maximum index as the maximum of the current maximum index and the index we can reach with the current jump. If the current index is equal to the current maximum index, then we increment the number of jumps required and update the current maximum index to the maximum index we can reach with the next jump. This approach has a time complexity of O(n), where n is the length of the input array, as it iterates through the input array once.

Here's Pseudo code for above approaches

```
function minJumps(arr) {
    n = length(arr)
    if n <= 1:
        return 0

    jumps = 1
    current_max_index = arr[0]
    next_max_index = arr[0]
    
    for i = 1 to n-1:
        if i == n-1:
            return jumps
            
        next_max_index = max(next_max_index, i+arr[i])
        if i == current_max_index:
            jumps += 1
            current_max_index = next_max_index
}
```

Note: length(arr) is the function that returns the length of the input array.

## Time and Space Complexity Analysis

### Time Complexity: `O(n)`, 
where n is the length of the input array
### Space Complexity: `O(1)`

