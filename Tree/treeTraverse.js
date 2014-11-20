'use strict';
/*

Given a binary tree, return the postorder traversal of its nodes' values.

*/

function postOrderIterative(node) {
	var stack = [],
		lastVisted = null;

	while (stack.length || node !== null ) {
		if (node !== null) {
			stack.push(node);
			node = node.left;
		} else {
			var peekNode = stack[stack.length - 1];
			if (peekNode.right !== null && lastVisted !== peekNode.right) {
				node = peekNode.right;
			} else {
				process.call(this, peekNode);         // call by external process
				lastVisted = stack.pop();
				console.log(peekNode.value);
			}
		}
	}
}


/*

Given a binary tree, return the preorder traversal of its nodes' values.

*/

function preOrderIterative(node) {
	var stack = [];

	while (stack.length || node !== null) {
		if (node !== null) {
			process.call(this, node);			// call by external process
			if (node.right !== null) {
				stack.push(node.right);
			}
			node = node.left;
		} else {
			node = stack.pop();
		}
	}
}

/*

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

*/

function levelOrder(node) {
	var queue = [node];

	while (queue.length) {
		node = queue.shift();
		process.call(this, node);

		if (node.left !== null) {
			queue.push(node.left);
		}

		if (node.right !== null) {
			queue.push(node.right);
		}
	}
}