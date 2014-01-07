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

Point.prototype.description = function() {
	return "Point: ( " + this.x + ", " + this.y + " )";
};

// Exercise 8.2
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
	for (var index = 0; index < this.length; index++) {
		var x = index % 3;
		var y = Math.floor(index / 3);
		var point = new Point(x, y);
		action(point, this.valueAt(point));
	}; 
};

// Test


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
