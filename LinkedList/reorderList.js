'use strict';
/*

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.

*/


function SLL(arr) {

	if (arguments.length === 0 || arr.length === 0) {
		this._head = null;
		this._length = 0;
	} else {
		this._length = arr.length;
		this._head = new this._Node(arr[0]);

		var current = this._head,
			i = 1;

		while(arr[i]) {
			current.next = new this._Node(arr[i]);
			current = current.next;
			i++;
		}
	}
}

SLL.prototype = {

	constructor: SLL,
	_Node: function(value) {
		this.value = value;
		this.next = null;
	},

	push: function(input) {
		var current;
		current = this._head;
		while (current.next) {
			current = current.next;
		}	
		current.next = new Node(input);
		this._length++;
	},

	reverse: function(node) {
		var current,
			prev = null,
			next;
		node === undefined? current = this._head : current = node;
		while (current !== null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}

		return node === undefined? this._head = prev : node = prev;
	},

	reorder: function() {
		var fast = this._head,
			slow = this._head;
		function findMiddle() {               // or you can use this._length to get middle
			while(fast.next !== null && fast.next.next !== null) {
				fast = fast.next.next;
				slow = slow.next;
			}
			return slow;
		}

		var list1 = this._head,
			middle = findMiddle(),
			list2 = this.reverse(middle.next),
			temp1, temp2;

		middle.next = null;

		while (list1 !== null && list2!== null) {
			temp1 = list1.next;
			temp2 = list2.next;
			list1.next = list2;
			list2.next = temp1;
			list1 = temp1;
			list2 = temp2;
		}
	},

	findCycle: function() {
		if (this._head === null || this._head.next ===null) return null;

		var fast = this._head,
			slow = this._head;

		while (fast !== null && fast.next !== null) {
			fast = fast.next.next;
			slow = slow.next;

			if (fast === slow) {
				fast = this._head;
				while (fast !== slow) {
					fast = fast.next;
					slow = slow.next;
				}
				return fast;
			} 
		}
		return null;
	}
}

var list = new SLL([1, 2, 3, 4, 5]);
console.log(list.findCycle());