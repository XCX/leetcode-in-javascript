'use strict';
/* 

Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.

*/

function maxProductSubarray(arr) {
	var res = arr[0],
		max = res,
		min = res,
		i = 1;
	for (; i < arr.length; i++) {
		if (arr[i] < 0) {
			max = max ^ min;
			min = max ^ min;
			max = max ^ min;
		}

		max = Math.max(arr[i], max * arr[i]);
		min = Math.min(arr[i], min * arr[i]);

		res = Math.max(res, max);
	}

	return res;
}

var res = maxProductSubarray([2,3,0.05,3,1,-5]);
console.log(res);