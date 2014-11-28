'use strict';
/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

*/

function convert(str, nRows) {
	var sb = [];
	for (var i = 0; i < nRows; i++) {
		sb[i] = [];
	}

	var len = str.length,
		res,
		i = 0;

	while (i < len) {
		for (var idx = 0; idx < nRows; idx++) {
			sb[idx].push(str[i++]);
		}
		for (var idx = nRows - 2; idx > 0; idx--) {
			sb[idx].push(str[i++]);
		}
	}

	for (var i = 1; i < sb.length; i++) {
		sb[0] = sb[0].concat(sb[i]);
	}

	res = sb[0].join('');

	return res;
}

var str = 'PAYPALISHIRING';
console.log(convert(str, 4));