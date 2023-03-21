# Document Object

[Intermediate Algorithm Scripting](script.js)

	document.getElementById("Id").value;
	document.getElementById("content").textContent = message;
	document.getElementById("content").innerHTML = "<h2>"+message+"</h2>";
	document.querySelector("#Id.class");

	(document instanceof HTMLDocument) // true

Unobstrusive event binding

	<button onclick="sayHello"> </button> // "this" points to window, sayHello defined in global context 

	document.querySelector("button")
		.addEventListener("click", sayHello); // "this" points to button

	document.querySelector("button")
		.onclick = sayHello;  // "this" points to button, executes inside object 


	document.addEventListener("DOMContentLoaded", function(event){
	}) // fires before images or css loaded