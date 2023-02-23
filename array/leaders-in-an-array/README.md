# Leaders in an array

## Description:

Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader.

### Example 1:

```
Input:
n = 6
A[] = {16,17,4,3,5,2}
Output: 17 5 2
Explanation: The first leader is 17
as it is greater than all the elements
to its right.  Similarly, the next
leader is 5. The right most element
is always a leader so it is also
included.
```

### Example 2:

```
Input:
n = 5
A[] = {1,2,3,4,0}
Output: 4 0
```

### Your Task:

You don't need to read input or print anything. The task is to complete the function leader() which takes array A and n as input parameters and returns an array of leaders in order of their appearance.

```
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(n)



Constraints:
1 <= n <= 10^7
0 <= Ai <= 10^7
```

# Solution

The following are three different approaches to finding the leaders in an array, along with their time and space complexity analysis:

## Approach 1: Brute Force
One approach is to compare each element in the array to all the elements to its right, and if it is greater than or equal to all of them, add it to the list of leaders. 

Here's the Pseudo code for this approach:
```
function find_leaders(arr) {
    leaders = []
    n = len(arr)
    for i in range(n):
        is_leader = True
        for j in range(i+1, n):
            if arr[i] < arr[j]:
                is_leader = False
                break
        if is_leader:
            leaders.append(arr[i])
    return leaders
}
```
## Time and Space Complexity Analysis

### Time complexity: `O(n^2)`

The algorithm iterates through the input array twice, so the time complexity is `O(n^2)`, where n is the length of the array.

### Space complexity: `O(k)`

The algorithm uses a list to store the leaders it finds, which can take up to `O(k)` space in the worst case, where k is the number of leaders in the array.

## Approach 2: Reverse Iteration
Another approach is to iterate through the array backwards, keeping track of the maximum element seen so far, and adding any element greater than or equal to the maximum to the list of leaders. 

Here's the Pseudo code for this approach:
```
function find_leaders(arr) {
    leaders = []
    n = len(arr)
    max_so_far = float('-inf')
    for i in range(n-1, -1, -1):
        if arr[i] >= max_so_far:
            leaders.append(arr[i])
            max_so_far = arr[i]
    leaders.reverse()
    return leaders
}
```
## Time and Space Complexity Analysis

### Time complexity: `O(n)`

The algorithm iterates through the input array once, so the time complexity is `O(n)`, where n is the length of the array.

### Space complexity: `O(k)`

The algorithm uses a list to store the leaders it finds, which can take up to `O(k)` space in the worst case, where k is the number of leaders in the array.

## Approach 3: Using Stack

A more efficient approach is to use a stack to keep track of the leaders. We start by pushing the last element of the array onto the stack. Then, for each element from right to left, if it is greater than or equal to the top element of the stack, we pop the stack until we find an element greater than the current element or the stack becomes empty, and add all the popped elements to the list of leaders. 

Here's the Pseudo code for this approach:
```
function find_leaders(arr) {
    leaders = []
    n = len(arr)
    stack = []
    for i in range(n-1, -1, -1):
        while stack and arr[i] >= stack[-1]:
            stack.pop()
        if not stack:
            leaders.append(arr[i])
        stack.append(arr[i])
    leaders.reverse()
    return leaders
}
```
## Time and Space Complexity Analysis

### Time complexity: `O(n)`

The algorithm iterates through the input array once, and each element is pushed and popped from the stack at most once, so the time complexity is `O(n)`, where n is the length of the array.

### Space complexity: `O(k)`

The algorithm uses a stack and a list to store the leaders it finds, which can take up to `O(k)` space in the worst case, where k is the number of leaders in the array.

Overall, the most efficient approach to finding the leaders in an array is to use a stack, which has linear time complexity and linear space complexity proportional to the number of leaders in the array.
