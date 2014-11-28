'use strict';
/*

The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

*/
function countAndSay(n) {
	if (n === 0) {
		return 1;
	}
	var str = '1' + ' ';

	while (n-- > 0) {
		var res = '',
			ch,
			prevChar = str[0],
			count = 0;
		for (var i = 0; i < str.length; i++) {
			ch = str[i];
			if (ch === prevChar) {
				count++;
			} else {
				res += count + prevChar;
				count = 1;
				prevChar = ch;
			}
		}
		str = res + ' ';
	}
	return str; 
}

var a = countAndSay(8);
console.log(a);