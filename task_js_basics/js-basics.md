# JS Basics
---
**var** keyword - you can easily overwrite variable declarations, use **let** with ES6
**const** - cannot be reassigned, name in uppercase, only prevents reassignment of the variable identifier

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

## Recursion

	function multiply(arr, n) {
	 if (n <= 0) {
	   return 1;
	 } else {
	   return multiply(arr, n - 1) * arr[n - 1];
	 }
	}

Math.floor() // rounding
Math.random() // pseudo-random number that's greater than or equal to 0 and less than 1

	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	}

# ES6

**Object.freeze()** to prevent data mutation.
---
**Arrow function syntax**
---
	const myFunc = () => {
	  const myVar = "value";
	  return myVar;
	}
	const myFunc = () => "value";
	const greeting = (name = "Anonymous") => "Hello " + name; // default value for parameter

**Rest Parameter with Function Parameters**
---
	function howMany(...args) {
	  return "You have passed " + args.length + " arguments.";
	}
	console.log(howMany(0, 1, 2));
	console.log(howMany("string", null, [1, 2, 3], { }));

**Spread Operator**
---
	var arr = [6, 89, 3, 45];
	var maximus = Math.max.apply(null, arr); //ES5
	const maximus = Math.max(...arr); // ES6

**Destructuring Assignment**
---
	const user = { name: 'John Doe', age: 34 };
	const name = user.name; // ES5
	const age = user.age; // ES5

	const { name, age } = user; // ES6
	const { name: userName, age: userAge } = user;allows you to assign a new variable name when extracting values
	const { johnDoe: { age: userAge, email: userEmail }} = user;

	const [a, b, ...arr] = [1, 2, 3, 4, 5, 7]; // Destructuring via rest elements, =Array.prototype.slice()
	console.log(a, b); // 1, 2 
	console.log(arr); //  [3, 4, 5, 7]

	const profileUpdate = (profileData) => {
	  const { name, age, nationality, location } = profileData;
	}
	const profileUpdate = ({ name, age, nationality, location }) => {		
	}

**Template Literals** 

backticks (\`)

	const person = {
	  name: "Zodiac Hasbro",
	  age: 56
	};

	const greeting = `Hello, my name is ${person.name}!
	I am ${person.age} years old.`;

	console.log(greeting);

**Concise Declarative Functions**

ES5
	const person = {
	  name: "Taylor",
	  sayHello: function() {
	    return `Hello! My name is ${this.name}.`;
	  }
	};
ES6 // With ES6, you can remove the function keyword and colon altogether when defining functions in objects.
	const person = {
	  name: "Taylor",
	  sayHello() {
	    return `Hello! My name is ${this.name}.`;
	  }
	};