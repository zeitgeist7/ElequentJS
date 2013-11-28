
function print(argument) {
	console.log(argument);
}

function forEach (array, action) 
{
	for (var index = array.length - 1; index >= 0; index--) {
		action(array[index]);
	};
}

function reduce (combine, base, array) {
	forEach(array, function(element) {
		base = combine(base, element);
	});
	return base;
}

function equals (reference) {
	return function (value) {
		return (reference === value);
	}
}

function count (test, array) 
{
	return reduce(function(total, element) {
		total = total + (test(element))
	}, 0, array);
}

function countZeroes(numbers) 
{
	return count(equals(0), numbers);
}

var someNumbers = [1,2,0,2,3,3,4,5,0,0,0,0,0,0,0,2,0,0,9];
print(countZeroes(someNumbers));

// console.log('End of chapter 4...\n\n');
