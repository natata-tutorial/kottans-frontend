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

## Undefine

	console.log(undefine/5); //NaN

Equality operator (==) - attempts to convert both values being compared to a common type.
Strict equality (===) - does not perform a type conversion.

	if ( false || null || undefine || "" || 0 || NaN ){ // all = false
		console.log( 'This line won't ever execute' )
	}
	Boolean(null); // false
	Boolean("hello!"); // true

	sideDish = sideDish || "whatever!"; // "whateer!", set default value, || evaluates each side to Boolean and returns first true value

## Array	- collection of data, object

	var array = new Array(); array[0] = "some";
	const myMusic = ["water", 34, 'a'];

The entries of **arrays are mutable** and can be changed freely, even if the array was declared with **const**

.length - length of the array

.push() - takes one or more parameters and "pushes" them onto the end of the array.

.pop() - is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable.

.shift() - removes the first element 

.unshift() - adds the element at the beginning of the array.

.splice() - allows us to do just that: remove any number of consecutive elements from anywhere in an array.

	const numbers = [10, 11, 12, 12, 15]; 
	const startIndex = 3;
	const amountToDelete = 1;
	numbers.splice(startIndex, amountToDelete, 13, 14); // [ 10, 11, 12, 13, 14, 15 ]

.slice() - copies or extracts a given number of elements to a new array

	let todaysWeather = weatherConditions.slice(1, 3);


	const tekkenCharacter = {
	  player: 'Hwoarang',
	  fightingStyle: 'Tae Kwon Doe',
	  human: true
	};	
	tekkenCharacter.origin = 'South Korea';
	tekkenCharacter['hair color'] = 'dyed orange';

Array.prototype.map() -  iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

	// const ratings = [];
	// for (let i = 0; i < watchList.length; i++) {
	//   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
	// }
	const ratings = watchList.map(video => ({ "title": video["Title"], "rating": video["imdbRating"]});

Array.prototype.forEach() - executes a provided function once for each array element

	array1.forEach(element => console.log(element));

Array.prototype.filter() - calls a function on each element of an array and returns a new array containing only the elements for which that function returns a truthy value

.concat() - For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array.

	[1, 2, 3].concat([4, 5, 6]); // [1, 2, 3, 4, 5, 6].

Array.prototype.reduce() -  iterates over each item in an array and returns a single value (i.e. string, number, object, array). 

	const users = [
	  { name: 'John', age: 34 },
	  { name: 'Amy', age: 20 },
	  { name: 'camperCat', age: 10 }
	];

	const sumOfAges = users.reduce((sum, user) => sum + user.age, 0); //64
	const usersObj = users.reduce((obj, user) => {
	  obj[user.name] = user.age;
	  return obj;
	}, {}); // { John: 34, Amy: 20, camperCat: 10 }

	const sumWithInitial = array1.reduce(
	  (accumulator, currentValue) => accumulator + currentValue,
	  initialValue
	);

.sort() -  method sorts the elements of an array according to the callback function.
 If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

	function ascendingOrder(arr) {
	  return arr.sort(function(a, b) {
	    return a - b;
	  });
	}

	ascendingOrder([1, 5, 2, 3, 4]); // [1, 2, 3, 4, 5].

.split() - splits a string into an array of strings. 

	str.split(/[ ,.-]+/); // separates str by ' ' or ',' '.' '-' symbol 

.join() - method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

	str.join(' ');

.every() - method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.

	[1, 5, 8, 0, 10, 11].every(function(currentValue) {
	  return currentValue < 10;
	}); // false

.some() - works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

[10, 50, 8, 220, 110, 11].some(function(currentValue) {
  return currentValue < 10;
}); // true

	function destroyer(arr, ...valsToRemove) {
	  return arr.filter(elem => !valsToRemove.includes(elem));
	}

## Objects

	var company = new Object();
	company.name = "Facebook";

	const myObj = {  // object literal
	  "Space Name": "Kirk",
	  "More Space": "Spock",
	  "NoSpace": "USS Enterprise"
	};
	myObj.NoSpace;
	myObj["NoSpace"] = "Happy Camper";
	delete myObj.NoSpace;
	object1.hasOwnProperty('property1')
	'property1' in object1;

	for (let user in users) {
	  console.log(user);
	}

	Object.keys();

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

	let thisArray = [true, true, undefined, false, null];
	let thatArray = [...thisArray]; // use the spread operator to copy an array
	let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

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

# Basic Data Structures

	let simpleArray = ['one', 2, 'three', true, false, undefined, null];
	console.log(simpleArray.length);

	let complexArray = [
	  [
	    {
	      one: 1,
	      two: 2
	    },
	    {
	      three: 3,
	      four: 4
	    }
	  ],
	  [
	    {
	      a: "a",
	      b: "b"
	    },
	    {
	      c: "c",
	      d: "d"
	    }
	  ]
	];

# Function

Functions ARE objects

	function multiply(x, y) {
		return x*y;
	};
	multiply.version = "v.1.0.0";


	// Function factory
	function makeMultiplier(multiplier) {
		var myFunc = function (x){
			return multiplier * x;
		};
		return myFunc;
	};
	var multiplyBy3 = makeMultiplier(3);
	console.log(multiplyBy3(10)); // 30
	var doubleAll = makeMultiplier(2);
	console.log(doubleAll(100)); // 200

	// Passing function as argument
	function doOperationOn(x, operation) {
		return operation(x);
	}
	var result = doOperationOn(5, multipluBy3);
	console.log(result); // 15
	result = doOperationOn(100, doubleAll);
	consolt.log(result); // 200

## Passing/copying by value vs by reference

Primitives - by value // Number, Boolean, Null, Undefined, String, 
Objects - by reference 

## Function constructors

	function Circle (radius){  // doesn't return anything
		this.radius = radius;
		this.getArea =  // shouldn't do like this, it creates new function each time new object Circle is created
			function (){
				return Math.PI * Math. pow(this.radius, 2);
			};
	};
	var myCircle = new Cercle(10); // == new Object
	console.log(myCircle.getArea());

	Circle.prototype.getArea = // exist in any new object created with new Circle
	function() {
		return Math.PI * Math. pow(this.radius, 2);
	}

## Object Literals and "this"

var literalCircle = { // new Object()
	radius: 10,

	getArea: function() {
		var self = this;
		console.log(this); 
		var increaseRadius = function(){
			this.radius = 20; // bug,this point to the global object, fixed in ES6
			self.radius = 20; // bugfix, this points to the current object 
		};
		increaseRadius();
		console.log(this.radius); // 10
		return Math.PI * Math. pow(this.radius, 2);
	}
};
literalCircle.getArea();

 # Closures

	 function makeMultiplier(multiplier){
	 	return (
	 		function(x){
	 			return multiplier *x;
	 		}
	 	);
	 };
	 var dounleAll = makeMultiplier(2)
	 console.log(doubleAll(10));


# Immideately Invoked Function Expression

	(function (){
		console.log("Hi!");
	})();


# Currying and Partial Application

**Currying** a function means to convert a function of N arity into N functions of arity 1.

	function unCurried(x, y) {
	  return x + y;
	}

	function curried(x) {
	  return function(y) {
	    return x + y;
	  }
	}

	const curried = x => y => x + y

	curried(1)(2)
	curried(1)(2) would return 3.

	const funcForY = curried(1);
	console.log(funcForY(2)); // 3


**Partial application** can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. 


	function impartial(x, y, z) {
	  return x + y + z;
	}

	const partialFn = impartial.bind(this, 1, 2);
	partialFn(10); // 13