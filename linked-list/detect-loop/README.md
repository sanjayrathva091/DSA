# Detect loop in the linked list

## Description

Given a linked list of N nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

### Example 1:

```
Input:
N = 3
value[] = {1,3,4}
x(position at which tail is connected) = 2
Output: True
Explanation: In above test case N = 3.
The linked list with nodes N = 3 is
given. Then value of x=2 is given which
means last node is connected with xth
node of linked list. Therefore, there
exists a loop.
```

### Example 2:

```
Input:
N = 4
value[] = {1,8,3,4}
x = 0
Output: False
Explanation: For N = 4 ,x = 0 means
then lastNode->next = NULL, then
the Linked list does not contains
any loop.
```

### Your Task:

The task is to complete the function detectloop() which contains reference to the head as only argument. This function should return true if linked list contains loop, else return false.

```
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

Constraints:
1 ≤ N ≤ 10^4
1 ≤ Data on Node ≤ 10^3
```

# Solution

There are several approaches to detecting a loop in a linked list. We will discuss some of the most commonly used approaches below.

## Approach 1: Hash Table

One of the simplest approaches to detecting a loop in a linked list is to use a hash table. In this approach, we iterate through the linked list, and at each node, we check whether the node has been visited before. If the node has not been visited before, we add it to the hash table. If the node has been visited before, it means that there is a loop in the linked list.

## Pseudo Code

```
function detect_loop_hash_table(head):
    visited = set()
    current = head
    while current:
        if current in visited:
            return True
        visited.add(current)
        current = current.next
    return False
```

The time complexity of this approach is `O(n)`, where n is the number of nodes in the linked list. The space complexity is also `O(n)`, because we need to store all the visited nodes in the hash table.

## Approach 2: Floyd's Tortoise and Hare Algorithm

Another approach to detecting a loop in a linked list is Floyd's Tortoise and Hare Algorithm. In this algorithm, we use two pointers, one moving at twice the speed of the other. If there is a loop in the linked list, the faster pointer will eventually catch up to the slower pointer, indicating the presence of a loop.

## Pseudo Code

```
function detect_loop_tortoise_hare(head):
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

The time complexity of this approach is `O(n)`, where n is the number of nodes in the linked list. The space complexity is `O(1)`, because we are only using two pointers.

## Approach 3: Reverse Pointers

In this approach, we modify the linked list by reversing the pointers of the nodes as we traverse the list. If there is a loop in the linked list, we will eventually encounter a node whose next pointer points to a node that we have already visited, indicating the presence of a loop.

## Pseudo Code

```
function detect_loop_reverse(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
        if current == head:
            return True
    return False
```

The time complexity of this approach is `O(n)`, where n is the number of nodes in the linked list. The space complexity is `O(1)`, because we are only using two pointers to reverse the list.

# Conclusion

In this document, we have discussed three approaches to detecting a loop in a linked list. Each approach has its own advantages and disadvantages, and the choice of approach will depend on the specific requirements of the problem
