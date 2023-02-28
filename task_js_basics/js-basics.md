# JS Basics
---
**var** keyword - you can easily overwrite variable declarations, use **let** with ES6
**const** - cannot be reassigned, name in uppercase

	\'	single quote
	\"	double quote
	\\	backslash
	\n	newline
	\t	tab
	\r	carriage return
	\b	word boundary
	\f	form feed

In JavaScript, **String values are immutable**,

	let myStr = "Bob";
	myStr[0] = "J"; // will through and error, should assign it with a new value
	myStr = "Job"; // should assign it with a new value

## Array	

	const myMusic = ["water", 34, 'a'];

The entries of **arrays are mutable** and can be changed freely, even if the array was declared with **const**

.push() - takes one or more parameters and "pushes" them onto the end of the array.

.pop() - is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable.

.shift() - removes the first element 

.unshift() - adds the element at the beginning of the array.

Equality operator (==) - attempts to convert both values being compared to a common type.
Strict equality (===) - does not perform a type conversion.

## Objects

	const myObj = {
	  "Space Name": "Kirk",
	  "More Space": "Spock",
	  "NoSpace": "USS Enterprise"
	};
	myObj.NoSpace;
	myObj["NoSpace"] = "Happy Camper";
	delete myObj.NoSpace;
	object1.hasOwnProperty('property1')

# Recursion

	function multiply(arr, n) {
	 if (n <= 0) {
	   return 1;
	 } else {
	   return multiply(arr, n - 1) * arr[n - 1];
	 }
	}

Math.floor() // rounding
Math.random() // decimals 0..1, include 0, without 1