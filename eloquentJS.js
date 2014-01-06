var thePlan =[
	"############################",
	"#      #    #      o      ##",
	"#                          #",
	"#          #####           #",
	"##         #   #    ##     #",
	"###           ##     #     #",
	"#           ###      #     #",
	"#   ####                   #",
	"#   ##       o             #",
	"# o  #         o       ### #",
	"#    #                     #",
	"############################"
   ];

// Exercise 8.1
function Point (x, y) {
	this.x = x;
	this.y = y;
};

Point.prototype.add = function(point) {
	return new Point(this.x + point.x, this.y + point.y);
};

Point.prototype.isEqualTo = function(point) {
	return (this.x.toFixed(1) === point.x.toFixed(1)) && (this.y.toFixed(1) === point.y.toFixed(1));
}

// Test

// Constructor
var p1 = new Point(1, 34.2);
print("The coordinates of p1 is ( " + p1.x + ", " + p1.y + " )");	// Should be ( 1, 34.2 ) unless some connard changes it!
// .add()
var p2 = new Point(3, -30);
var p1_plus_p2 = p1.add(p2);
print("The coordinates of p1_plus_p2 is ( " + p1_plus_p2.x + ", " + p1_plus_p2.y + " )");	// Should be ( 4.0, 4.2 ) unless some connard changes it!
// isEqualTo()
print(p1_plus_p2.isEqualTo(new Point(4.0, 4.2)))
// Getting and setting the coordinates
p1.x = p1.y = 7.0;
print("The coordinates of p1 is ( " + p1.x + ", " + p1.y + " )");	// Should be ( 7, 7 ) unless some connard changes it!


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

function forEachIn (object, action) {
	for(var property in object) {
		if(object.hasOwnProperty(property)) {
			action(property, object[property]);
		}
	}
}
