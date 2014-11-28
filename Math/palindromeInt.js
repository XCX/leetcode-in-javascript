'use strict';
/*

Determine whether an integer is a palindrome. Do this without extra space

*/

function isPalindrome(num) {
	if (num < 0) {
		return false;
	}

	var remainder = num % 10,
		root = Math.sqrt(num);

	while (Math.floor(root / 10) !== 0) {
		remainder = remainder * 10 + Math.floor(num / 10 % 10);
		num = Math.floor(num / 10);
		root = root / 10;
	}
	return (num === remainder || Math.floor(num/10) === remainder);
} 

console.log(isPalindrome(1000000001));
