/*
	***** TOOLBOX *****
	*/
	function print() {
		console.log.apply(null, arguments);
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

// Dictionary object
function Dictionary(startValues) {
	this.values = startValues || {};
}
Dictionary.prototype.store = function(name, value) {
	this.values[name] = value;
};
Dictionary.prototype.lookup = function(name) {
	return this.values[name];
};
Dictionary.prototype.contains = function(name) {
	return Object.prototype.hasOwnProperty.call(this.values, name) &&
	Object.prototype.propertyIsEnumerable.call(this.values, name);
};
Dictionary.prototype.each = function(action) {
	forEachIn(this.values, action);
};

// Dictionary object
function Dictionary(startValues) {
	this.values = startValues || {};
}
Dictionary.prototype.store = function(name, value) {
	this.values[name] = value;
};
Dictionary.prototype.lookup = function(name) {
	return this.values[name];
};
Dictionary.prototype.contains = function(name) {
	return Object.prototype.hasOwnProperty.call(this.values, name) &&
	Object.prototype.propertyIsEnumerable.call(this.values, name);
};
Dictionary.prototype.each = function(action) {
	forEachIn(this.values, action);
};

/* ***** TOOLBOX ***** */

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

// Point prototype
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

Point.prototype.description = function() {
	return "Point: ( " + this.x + ", " + this.y + " )";
};

// Grid prototype
function Grid(width, height) {
	this.width = width;
	this.height = height;
	this.cells = new Array(width * height);
}

Grid.prototype.valueAt = function(point) {
	return this.cells[point.y * this.width + point.x];
};

Grid.prototype.setValueAt = function(point, value) {
	this.cells[point.y * this.width + point.x] = value;
};

Grid.prototype.isInside = function(point) {
	return point.x >= 0 && point.y >= 0 &&
	point.x < this.width && point.y < this.height;
};

Grid.prototype.moveValue = function(from, to) {
	this.setValueAt(to, this.valueAt(from));
	this.setValueAt(from, undefined);
};

Grid.prototype.each = function(action) {
	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {
			var point = new Point(x, y);
			action(point, this.valueAt(point));
		}
	}
};

// Bug prototype
function StupidBug() {};
StupidBug.prototype.act = function(surroundings) {
	return {type: "move", direction: "s"};
};

// Wall object
var wall = {};

// Helpers for the Terrarium game
function elementFromCharacter(character) {
	if (character == " ")
		return undefined;
	else if (character == "#")
		return wall;
	else if (character == "o")
		return new StupidBug();
}

wall.character = "#";
StupidBug.prototype.character = "o";

function characterFromElement (element) {
	if (element == undefined) {
		return " ";
	} 
	else {
		return element.character;
	};
}

// Terrarium prototyope
function Terrarium(plan) {
	var grid = new Grid(plan[0].length, plan.length);
	for (var y = 0; y < plan.length; y++) {
		var line = plan[y];
		for (var x = 0; x < line.length; x++) {
			grid.setValueAt(new Point(x, y), elementFromCharacter(line.charAt(x)));
		}
	}
	this.grid = grid;
}

Terrarium.prototype.toString = function() {
	var result = "";
	var endOfLine = this.grid.width - 1;
	this.grid.each(function (point, value) {
		result += characterFromElement(value);
		if (point.x == endOfLine) {
			result += "\n";
		};
	});
	return result;
};

// Test
var terrarium  = new Terrarium(thePlan);
// print(thePlan);
var desc = terrarium.toString();
print(desc);

// Test

