# Nth node from end of linked list

## Description

Given a linked list consisting of L nodes and given a number N. The task is to find the Nth node from the end of the linked list.

### Example 1:

```
Input:
N = 2
LinkedList: 1->2->3->4->5->6->7->8->9
Output: 8
Explanation: In the first example, there
are 9 nodes in linked list and we need
to find 2nd node from end. 2nd node
from end is 8.
```

### Example 2:

```
Input:
N = 5
LinkedList: 10->5->100->5
Output: -1
Explanation: In the second example, there
are 4 nodes in the linked list and we
need to find 5th from the end. Since 'n'
is more than the number of nodes in the
linked list, the output is -1.
```

### Your Task:

The task is to complete the function `getNthFromLast()` which takes two arguments: reference to `head` and `N` and you need to return Nth from the end or `-1` in case node doesn't exist.

### Note:

Try to solve in a single traversal.

```
Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).

Constraints:
1 <= L <= 10^6
1 <= N <= 10^6
```

# Solution

The following is a comparison of these methods based on time and space complexity:

| Method                  | Time Complexity | Space Complexity |
| ----------------------- | --------------- | ---------------- |
| Traverse the list twice | O(n)            | O(1)             |
| Two pointers            | O(n)            | O(1)             |
| Recursive approach      | O(n)            | O(n)             |

Overall, the two pointer method is the most efficient in terms of both time and space complexity. However, the recursive approach may be more intuitive for some people, especially those with a background in recursive algorithms. The traverse the list twice method is the least efficient and should be avoided if possible.
