
var employee = {
	name : {first: "John", last: "ny HallyDay"},
	age : 19,
	task : function () {
		console.log("I work for...Sorry, I cannot reveal that");
	},
	owns: ["Car", "Bicycle", "SUV"]
};

// var print = function description (someEmployee) {
// 	alert(someEmployee.name.first + " " + someEmployee.name.last + ", " + someEmployee.age);
// 	someEmployee.task();
// }

// print(employee);

// employee.task = function () {
// 	console.log("I am tasked to get the newspaper");
// }

// print(employee);

// (function() {
// 	alert("The person name " + employee.name.last + " " + "owns " + employee.owns.length + " thing(s) " + employee.owns);	
// })();

// (function() {

// var firstParent = document.getElementById('first parent');
// firstParent.style.width = "400px";
// firstParent.style.height = "400px";

// firstParent.style.background = 'blue';
// })();


var appendImage = function () {
	var firstparent = document.getElementById('firstchild'); //document.querySelector('#firstparent');
	var someDivWithText = document.createElement('div');
	someDivWithText.textContent = 'ashfjh';
	firstparent.appendChild(someDivWithText);

	var imageElement = document.createElement('img');
	imageElement.src = 'http://static.adzerk.net/Advertisers/46a9844d6e504212a85bc72ddd7dd829.png';
	imageElement.style.width = '300px';
	firstparent.appendChild(imageElement);
}

var changeColor = function (event) {
	var theSaidElement = document.getElementById('firstparent');
	theSaidElement.style.background = 'cyan';
	appendImage();

	// Just some logging stuffs
	console.log('target: ' + event.target);
	console.log('offsetX: ' + event.offsetX);
	console.log('offsetY: ' + event.offsetY);
	console.log('pageX: ' + event.pageX);
	console.log('pageY: ' + event.pageY);
	console.log('screenX: ' + event.screenX);
	console.log('screenY: ' + event.screenY);
	console.log('timeStamp: ' + event.timeStamp);
	console.log('type: ' + event.type);
	console.log('x: ' + event.x);
	console.log('y: ' + event.y);
};

var b = document.querySelector('#clicker');

// b.addEventListener('click', changeColor, false);
b.addEventListener('click', readLocalStorage, false);

var jsonString = JSON.stringify(employee);
console.log('printing JSON string of employee ' + jsonString);

var employeeFromJSONString = JSON.parse(jsonString);
console.log('the first name of the employee is ' + employee.name.first);




