'use strict';
/*

Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.

*/

function findMinInRotatedSortedArr(arr) {
	var i = 0,
		j = 1;
	while (arr[i++] < arr[j++]) {}
	// var arr1 = arr.slice(i).concat(arr.slice(0, i)); // return the sorted array if you like
	return arr.slice(i)[0];
}

var arr = [4,5,6,7,0,1,2];
var res = findMinInRotatedSortedArr(arr); // 0

console.log(res);