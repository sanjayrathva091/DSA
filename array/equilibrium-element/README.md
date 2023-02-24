# Equilibrium equilibrium

## Description :

Given an array A of n positive numbers. The task is to find the first Equilibrium Point in an array.
Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

Note: Retun the index of Equilibrium point. (1-based index)

### Example 1:

```
Input:
n = 5
A[] = {1,3,5,2,2}
Output: 3
Explanation:
equilibrium point is at position 3
as elements before it (1+3) =
elements after it (2+2).
```

### Example 2:

```
Input:
n = 1
A[] = {1}
Output: 1
Explanation:
Since its the only element hence
its the only equilibrium point.
```

### Your Task:

The task is to complete the function equilibriumPoint() which takes the array and n as input parameters and returns the point of equilibrium. Return -1 if no such point exists.

```
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

Constraints:
1 <= n <= 10^6
1 <= A[i] <= 10^8
```

# Solution :

An equilibrium element in an array is an element such that the sum of all elements to the left of it is equal to the sum of all elements to the right of it. In other words, if we divide the array into two parts at the equilibrium element, the sum of the elements in the left part will be equal to the sum of the elements in the right part.

To find the equilibrium element in an array, we can iterate through the array and at each index, we can calculate the sum of all elements to its left and right. If the left sum is equal to the right sum, then we have found the equilibrium element.

## Pseudo code:
```
function findEquilibriumElement(arr) {
    totalSum = sum(arr);
    leftSum = 0
    for i in range(length(arr)) {
        rightSum = totalSum - leftSum - arr[i];
        if (leftSum == rightSum) return i;
        leftSum += arr[i];
    }
    return -1
 }
```

In the pseudo code above, `arr` is the input array, `totalSum` is the sum of all elements in the array, `leftSum` is the sum of all elements to the left of the current index, and `rightSum` is the sum of all elements to the right of the current index.

The function iterates through each index of the array and calculates the `rightSum` by subtracting `leftSum` and the current element from `totalSum`. If `leftSum` is equal to `rightSum`, then the function returns the current index as the equilibrium element. If no equilibrium element is found, the function returns -1.
