function Rabbit (adjective) {
	this.adjective = adjective;
	this.speak = function (line) {
		print("The " + this.adjective + " rabbit says " + line + ".");
	}
}

function forEachIn (object, action) {
	for(var property in object) {
		if(object.hasOwnProperty(property)) {
			action(property, object[property]);
		}
	}
}

var someObject = { name: "Rajiv Jhoomuck", gender: "male", attitude: "badtameez" };
forEachIn(someObject, function (propertyName, propertyValue) {
	print(propertyName + ": " + propertyValue);
})

/*
	***** TOOLBOX *****
*/
function print(argument) {
	console.log(argument);
}

function forEach (array, fn) 
{
	for(index = 0; index < array.length; index++) {
		fn(array[index])
	}
}

function reduce (fn, base, array) 
{
	forEach(array, function (element) {
		base = fn(base, element);
	});
	return base;
}

function map (fn, array)
{
	var result = [];
	forEach(array, function (element) {
		result.push(fn(element))
	});
	return result;
}

var op = {
	"+": function(a, b){return a + b;},
	"==": function(a, b){return a == b;},
	"===": function(a, b){return a === b;},
	"!": function(a){return !a;}
	/* and so on */
};

function asArray(quasiArray, start) {
	var result = [];
	for (var i = (start || 0); i < quasiArray.length; i++)
		result.push(quasiArray[i]);

	// print(result);
	return result;
}

function partial(func) {
	var fixedArgs = asArray(arguments, 1);
	return function(){
		return func.apply(null, fixedArgs.concat(asArray(arguments)));
	};
}
