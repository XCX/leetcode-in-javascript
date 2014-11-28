'use strict';
/*

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

*/

function reverseInt(n) {
	var postive = true,
		i = 0
	
	if (n < 0) {
		postive = !postive;
		n = -n;
	}

	n = n.toString().split('').reverse();

	while (true) {
		if (n[i] === '0') {
			n.shift();
		}
		else {
			return postive? n.join(''): -n.join('');
		}
	}

	return postive? n.join(''): -n.join('');
}

console.log(reverseInt(-100))


// have not handled the overflow case