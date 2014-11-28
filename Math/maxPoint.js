'use strict';
/*

Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

[1, 2, 3, 4]
[4, 3, 2, 1]
[2, 4, 1, 3]
[3, 1, 4, 2]

*/

function Point(x, y) {
	return [x, y];
}

function euclid(a, b) {
	if (b === 0) {
		return a;
	}
	return euclid(b, a%b);
}

function maxPoint(p1, p2) {
	var deltaX = p1[0] - p2[0],
		deltaY = p1[1] - p2[1],
		points;
	if (deltaX === 0) {
		points = Math.abs(deltaY) + 1;
	} else if (deltaY === 0) {
		points = Math.abs(deltaX) + 1;
	} else {
		points = Math.abs(euclid(deltaX, deltaY)) + 1;
	}
	return points;
}

function main(points) {
	var len = points.length,
		i = 0, 
		j,
		res = 2;

	for (; i < len; i++) {
		for (j = len - 1; j > i; j--) {
			res = Math.max(res, maxPoint(points[i], points[j]));
		}
	}

	return res;
}


var p1 = new Point(1, 3);
var p2 = new Point(7, 1);
var p3 = new Point(4, 6);
var p4 = new Point(100, 1);
var points = [p1, p2, p3, p4];

console.log(main(points))


