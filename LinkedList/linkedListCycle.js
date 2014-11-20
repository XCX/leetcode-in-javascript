'use strict';
/*

Given a linked list, return the node where the cycle begins. 
If there is no cycle, return null.

*/

function findCycle(head) {
	if (head === null || head.next ===null) return null;

	var fast = head,
		slow = head;

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) {
			fast = head;
			while (fast !== slow) {
				fast = fast.next;
				slow = slow.next
			}
			return fast;
		}
	}

	return null;
}

// you can also find the solution in reorderList.js