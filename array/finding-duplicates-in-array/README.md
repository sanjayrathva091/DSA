# Finding duplicates in an array

## Description :

Given an array a[] of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array.

Note: The extra space is only for the array to be returned.
Try and perform all operations within the provided array.

### Example 1:

```
Input:
N = 4
a[] = {0,3,1,2}
Output: -1
Explanation: N=4 and all elements from 0
to (N-1 = 3) are present in the given
array. Therefore output is -1.
```

### Example 2:

```
Input:
N = 5
a[] = {2,3,1,2,3}
Output: 2 3
Explanation: 2 and 3 occur more than once
in the given array.
```

## Your Task:

Complete the function duplicates() which takes array a[] and n as input as parameters and returns a list of elements that occur more than once in the given array in a sorted manner. If no such element is found, return list containing [-1].

```
Expected Time Complexity: O(n).
Expected Auxiliary Space: O(n).

Constraints:
1 <= N <= 105
0 <= A[i] <= N-1, for each valid i
```

# Solution :

To find duplicates in a given array, we can use various approaches, such as using a hash set, sorting the array, or using nested loops. Here are two common approaches:

## Using Nested loops

In this approach, we use nested loops to compare each element in the array with all the other elements to its right. If we find two elements that are equal, then we know that one of them is a duplicate.

Here's the Pseudo code for this approach:
```
function find_duplicates(array) {
    duplicates = set();
    for i in range(len(array)) {
        for j in range(i+1, len(array)) {
            if (array[i] == array[j]) duplicates.add(array[i]);
        }
    }            
    return duplicates;
}
```

In this approach, we first initialize an empty set called `duplicates` to keep track of the duplicate elements we find. We then use nested loops to compare each element in the array with all the other elements to its right. If we find two elements that are equal, we add one of them to the `duplicates` set. Finally, we return the `duplicates` set.

## Time and Space Complexity Analysis

Time complexity: `O(n^2)`

In this approach, we use nested loops to compare each element with all the other elements to its right. This takes `O(n^2)` time in the worst case, where n is the length of the array.

Space complexity: `O(k)`

In this approach, we use a set to store the duplicates we find, which can take up to `O(k)` space in the worst case, where k is the number of duplicates in the array.

## Using Sorting an array

In this approach, we sort the array first and then iterate through it to find duplicates. When we encounter two adjacent elements that are equal, we add one of them to a set of duplicates.

Here's the Pseudo code for this approach:
```
function find_duplicates(array) {
    array.sort() // sort the array in-place
    duplicates = set();
    for i in range(1, len(array)) {
        if (array[i] == array[i-1]) duplicates.add(array[i]);
    }
    return duplicates;
}
```

In this approach, we first sort the input `array` using the built-in `sort()` method, which takes `O(n log n)` time in the worst case, where n is the length of the array. We then iterate through the sorted `array`, comparing each element with the one before it. If we find two adjacent elements that are equal, we add one of them to a set of duplicates. Finally, we return the set of `duplicates`.

## Time and Space Complexity Analysis

Time complexity: `O(n log n)`

Sorting the array takes `O(n log n)` time in the worst case, where n is the length of the array. The subsequent loop to find duplicates takes `O(n)` time in the worst case, where n is the length of the sorted array. Therefore, the overall time complexity is `O(n log n)`.

Space complexity: `O(k)`

In this approach, we use a set to store the duplicates we find, which can take up to `O(k)` space in the worst case, where k is the number of duplicates in the array.

Overall, this approach has a higher time complexity than the hash set approach, but it can be more memory-efficient if the input array is very large and we can't afford to use a hash set that takes `O(n)` space. However, we should note that sorting the array can modify the original array, which may not be desirable in some cases.

## Using Hash Set

In this approach, we use a hash set to keep track of the unique elements we encounter while iterating through the array. Whenever we encounter an element that is already in the hash set, we know that it is a duplicate.

Here's the Pseudo code for this approach:
```
function find_duplicates(array) {
    seen = set();
    duplicates = set();
    for num in array {
        if (num in seen)
            duplicates.add(num)
        else
            seen.add(num);
    }
    return duplicates;
}
```

In this approach, we first initialize two sets: `seen` to keep track of the unique elements we've seen so far, and `duplicates` to keep track of the duplicate elements we've encountered. We then iterate through the `array` and for each element, we check if it is in the `seen` set. If it is, we add it to the `duplicates` set. Otherwise, we add it to the `seen` set. Finally, we return the `duplicates` set.

## Time and Space Complexity Analysis

Time complexity: `O(n)`

In this approach, we iterate through the array once, which takes `O(n)` time. For each element, we perform a constant-time lookup in the hash set, which also takes `O(n)` time in the worst case (if all elements are unique and we add them all to the hash set). Therefore, the overall time complexity is `O(n)`.

Space complexity: `O(n)`

In this approach, we use a hash set to store the unique elements we encounter, which can take up to `O(n)` space in the worst case if all elements are unique.
