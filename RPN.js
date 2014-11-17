'use strict';
/*

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

*/

function evelRPN(arr) {
	var len = arr.length,
		stack = [],
		oprand1,
		oprand2,
		i = 0;

	while (arr[i]) {
		if (isNaN(arr[i])) {
			oprand1 = Number(stack.pop());
			oprand2 = Number(stack.pop());
			switch (arr[i]) {
				case '+':	
					stack.push(eval('oprand2 + oprand1'));
					break;
				case '-':
					stack.push(eval('oprand2 - oprand1'));
					break;
				case '*':
					stack.push(eval('oprand2 * oprand1'));
					break;
				case '/':
					stack.push(eval('oprand2 / oprand1'));
					break;
				default: 
					throw new Error('Invalid expression: ' + arr);
			}
		} else {
			stack.push(arr[i]);
		}
		i++;
	}

	return stack.pop();
}

var arr = ["2", "1", "+", "3", "*"];
var arr1 = ["4", "13", "5", "/", "+"];
console.log(evelRPN(arr1));