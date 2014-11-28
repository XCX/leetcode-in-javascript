'use strict';
/*

Follow up for "Find Minimum in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array may contain duplicates.

*/

function findMinInRotatedSortedArr(arr) {
	var i = 0,
		j = 1;
	while (arr[i++] <= arr[j++]) {}
	var arr1 = arr.slice(i).concat(arr.slice(0, i)); // return the sorted array if you like
	return [arr.slice(i)[0], arr1];
}

var arr = [4,5,6,7,0,1,2];
var res = findMinInRotatedSortedArr(arr); // 0

console.log(res);

// I didn't find much difference... Just change 'arr[i++] < arr[j++]' to 'arr[i++] <= arr[j++]'
// So I guess it doesn't affect the run-time complexity