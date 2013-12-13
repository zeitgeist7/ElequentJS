
function print(argument) {
	console.log(argument);
}

function forEach (array, fn) 
{
	for (var index = 0; index < array.length; index++) {
		fn(array[index]);
	};
}

function reduce (fn, base, array) 
{
	forEach(array, function (element) {
		base = fn(base, element);
	});
	return base;
}

function countZeroes1 (numbers) 
{
	function counter (count, element) {
		return count + (element == 0 ? 1 : 0);
	}

	return reduce(counter, 0, numbers);
}


function count (array, test) 
{
	return reduce(function(base, element) {
		return base + (test(element) ? 1 : 0)
	}, 0, array);
}

function isEqual (x) 
{
	return function (element) { return x === element; };
}

function countZeroes (numbers) 
{
	return count(numbers, isEqual(0));
}


print(countZeroes1([1,2,3,0,0,0,0,5,6,7,0]));
