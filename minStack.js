'use strict';
/* 

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

*/

function MinStack() {};

MinStack.prototype = new Array;

MinStack.prototype.top = function() {
	return this[0];
}

MinStack.prototype.getMin = function() {
		if (this.length === 1) {
			return this[0];
		} else {
			var min = this[0],
				i = 1;
			for (; i < this.length; i++) {
				if (this[i] < min) {
					min = this[i];
				}
			}
			return min;
		}
}

var arr = new MinStack();
Array.prototype.push.apply(arr, [2, 1, 'a']);
arr.getMin(); // 1
arr.top(); //2
