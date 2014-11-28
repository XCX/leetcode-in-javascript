'use strict';
/*

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

*/

function romanToInt(roman) {
	var len = roman.length,
		mark = {
			'I': 1,
			'V': 5,
			'X': 10,
			'L': 50,
			'C': 100,
			'D': 500,
			'M': 1000
		},
		roman = roman.toUpperCase();

		if (roman.split('V').length > 2 || roman.split('L').length > 2 || roman.split('D').length > 2) {
			throw "Bad formatted: more than 1 'V' or 'L' or 'D' exists";
		}

		var count = 0,
			temp = 'Z';
		for (var i = 0; i < len; i++) {
			var numeral = roman[i];
			if ('IVXLCDM'.indexOf(numeral) === -1) {
				throw "Bad input";
			}

			if (temp === numeral) {
				count++;
				if (count === 3) throw "Bad input: more than three consecutive repetion."
			} else {
				temp = numeral;
				count = 0;
			}

		}

		var arr = [],
			maxDigit = 1000,
			ptr = 0,
			nextDigit = 0;

		while (ptr < len) {
			var numeral = roman[ptr],
				digit = mark[numeral];

			if (digit > maxDigit) throw "Larger than 1000";

			var nextDigit = 0;

			if (ptr < len - 1) {
				var nextNumeral = roman[ptr + 1];
				nextDigit = mark[nextNumeral];

				if (nextDigit > digit) {
					if ('IXC'.indexOf(numeral) == -1 || nextDigit > (digit * 10) || roman.split(numeral).length > 3) {
						throw "bad input";
					}

					maxDigit = digit - 1;
					digit = nextDigit - digit;
					ptr ++;
				}
			}
			arr.push(digit);
			ptr++;
		}

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i + 1]) {
			throw "bad input";
		}
	}

	var res = 0;
	for (digit in arr) {
		res += arr[digit];
	}

	return res;
}

var res = romanToInt('CMLXV');
console.log(res);

// solution without checking format validation
function romanToInt1(roman) {
	var res = 0;
	for (var i = roman.length - 1; i >= 0; i--) {
		var numeral = roman[i];
		switch(numeral) {
			case 'I':
				res += (res >= 5 ? -1 : 1);
				break;
			case 'V':
				res += 5;
				break;
			case 'X':
				res += 10 * (res >= 50 ? -1 : 1);
				break;
			case 'L':
				res += 50;
				break;
			case 'C':
				res += 100 * (res >= 500 ? -1 : 1);
				break;
			case 'D':
				res += 500;
				break;
			case 'M':
				res += 1000;
				break;
		}
	}
	return res;
}

console.log(romanToInt1('MDXXIV'))