'use strict';
/*

Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

*/

function reverseWord(str) {
	return str.split(' ').reverse().join(' ');
}

var str = "the sky is   blue";
console.log(reverseWord(str));