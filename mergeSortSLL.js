'use strict';
/*

Sort a linked list in O(n log n) time using constant space complexity.

*/

function SLL(arr) {
	if (arguments.length === 0 || arr.length === 0) {
		this._head = null;
		this._length = 0;
	} else {
		this._length = arr.length;
		this._head = {
			value: arr[0],
			next: null
		};

		var current = this._head,
			i = 1;

		while(arr[i]) {
			current.next = {
				value: arr[i],
				next: null
			}
			current = current.next;
			i++;
		}
	}
}

SLL.prototype = {
	constructor: SLL,

	push: function(input) {
		var current,
			node = {
				value: input,
				next: null
			};
		current = this._head;
		while (current.next) {
			current = current.next;
		}	
		current.next = node;
		this._length++;
	},

	sort: function() {
		function mergeSort(head) {
			var middle,
				count = 0,
				halfCount = 0,
				lHead = head,
				rHead = null,
				current = head,
				h1, h2, merged;
			if (head === null || head.next === null) {
				return head;
			}
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
			var head = {
				value: null,
				next: null
			};
			var fakeHead = head;

			while(l != null || r != null) {
				if (l === null) {
					head.next = {
						value: r.value,
						next: null
					};
					r = r.next;
					head = head.next;
				} else if (r === null) {
					head.next = {
						value: l.value,
						next: null
					};
					l = l.next;
					head = head.next;
				} else {
					if (l.value < r.value) {
						head.next = {
							value: l.value,
							next: null
						};
						l = l.next;
						head = head.next;
					} else if (l.value === r.value) {
						head.next = {
							value: l.value,
							next: null
						};
						head.next.next = {
							value: r.value,
							next: null
						};
						l = l.next;
						r = r.next;
						head = head.next.next;
					} else {
						head.next = {
							value: r.value,
							next: null
						};
						r = r.next;
						head = head.next;
					}
				}
			}
			return fakeHead.next;
		}

		this._head = mergeSort(this._head);
		return this._head;
	}
}

var list = new SLL([-11,12,2,3,4,115]);
console.log(list.sort());
console.log(list)