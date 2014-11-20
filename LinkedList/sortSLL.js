'use strict';
/*

1) Sort a linked list in O(n log n) time using constant space complexity.
2) Sort a linked list using insertion sort.

*/

// node constructor
function Node(value) {
	this.value = value;
	this.next = null;
}

function SLL(arr) {

	if (arguments.length === 0 || arr.length === 0) {
		this._head = null;
		this._length = 0;
	} else {
		this._length = arr.length;
		this._head = new Node(arr[0]);

		var current = this._head,
			i = 1;

		while(arr[i]) {
			current.next = new Node(arr[i]);
			current = current.next;
			i++;
		}
	}
}

SLL.prototype = {

	constructor: SLL,

	push: function(input) {
		var current;
		current = this._head;
		while (current.next) {
			current = current.next;
		}	
		current.next = new Node(input);
		this._length++;
	},

	sort: function(type) {
		switch(type) {
			case 'merge':
				this._head = mergeSort(this._head);
				break;
			case 'insertion':
				insertionSort(this._head);
				break;
			default:
				break;
		}

		// merge sort
		function mergeSort(head) {
			if (head === null || head.next === null) {
				return head;
			}

			var middle,
				count = 0,
				halfCount = 0,
				lHead = head,
				rHead = null,
				current = head,
				h1, h2, merged;

			while (current.next) {
				current = current.next;
				count++;
			}
			current = head;
			middle = Math.floor(count/2);
			while (halfCount !== middle) {
				current = current.next;
				halfCount++;
			}
			rHead = current.next;
			current.next = null;
			h1 = mergeSort(lHead);
			h2 = mergeSort(rHead);
			merged = merge(h1, h2);
			return merged;
		}

		function merge(l, r) {
			var head = new Node();
			var fakeHead = head;

			while(l != null || r != null) {
				if (l === null) {
					head.next = new Node(r.value);
					r = r.next;
					head = head.next;
				} else if (r === null) {
					head.next = new Node(l.value);
					l = l.next;
					head = head.next;
				} else {
					if (l.value < r.value) {
						head.next = new Node(l.value);
						l = l.next;
						head = head.next;
					} else if (l.value === r.value) {
						head.next = new Node(l.value);
						head.next.next = new Node(r.value);
						l = l.next;
						r = r.next;
						head = head.next.next;
					} else {
						head.next = new Node(r.value);
						r = r.next;
						head = head.next;
					}
				}
			}
			return fakeHead.next;
		}

		// insertion sort
		function insertionSort(head) {
			if (head === null || head.next === null) {
				return head;
			}

			var current = head,
				comparator = current.next,
				temp;

			while (current.next) {
				comparator = current.next;
				while (comparator) {
					if (comparator.value < current.value) {
						temp = current.value;
						current.value = comparator.value;
						comparator.value = temp;
					}
					comparator = comparator.next;
				}
				current = current.next;
			}
		}
	}
}

var list = new SLL([5,20,3,1,4]);
list.sort('insertion');
console.log(list)










// In-place recursive merge sort. Time complexity O(nlogn), constant space auxiliary complexity