'use strict';
/*

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

*/

function isSymmetric(root) {
	if (root === null) return true;

	return isSymmetricCore(root.left, root.right);
} 

function isSymmetricCore(n1, n2) {
	if (n1 === null && n2 === null) return true;
	else if (n1 === null) return false;
	else if (n2 === null) return false;

	if (n1.value !== n2.value) return false;

	return isSymmetricCore(n1.left, n2.right) && isSymmetricCore(n1.right, n2.left);
}

function isSymmetricItr(root) {
	var q1 = [],
		q2 = [],
		left, right;
	if (root === null) {
		return true;
	}
	q1.push(root.left);
	q2.push(root.right);
	while (q1.length && q2.length) {
		left = q1.pop();
		right = q2.pop();
		if (left === null && right === null) {
			continue;
		} else if (left === null ^ right === null) {
			return false;
		} else if (left.value !== right.value) {
			return false;
		}

		q1.push(left.left);
		q1.push(left.right);
		q2.push(right.right);
		q2.push(right.left);
	}
	return true;
}