function powerFunction(base, exponent)
{
	// Base cases
	if (base === 0) { return 0};
	if (exponent === 0) { return 1;};

	if(exponent < 0) {
		// Negative power
		return 1 / powerFunction(base, -1 * Number(exponent));
	} else {
		return base * powerFunction(base, exponent - 1);
	}
}

// Exercise ###
var base = prompt('please provide the base');
var exponent = prompt('please provide the exponent');
console.log(power(base, exponent));



// Exercise 2.3
(function ()
{
	var lineNumber = 0;	// or 1
	var color = '';
	while(lineNumber < 10) {
		color += '#';
		console.log(color);
		lineNumber++;
	}
})();



// Exercise 2.5
(function () 
{
	var answer = prompt('How much is 2 + 2');
	if (isNaN(answer)) {
		alert('Enter a number!')
	} else if (Number(answer) === 3 || Number(answer) === 5) {
		alert('Almost');
		return;
	} else if ((Number(answer) === 4) {
		alert('That was the correct answer, go enjoy');
	} else {
		alert('Ok that was really bad!')
	}
})();

// Exercise 2.6
(function()
{
	var answer = null;
	while(Number(answer) !== 4) {
		answer = prompt('How much is 2 + 2');
		if (isNaN(answer)) {
			alert('Enter a number!')
		} else if (Number(answer) === 3 || Number(answer) === 5) {
			alert('Almost');
		} else if (Number(answer) === 4) {
			alert('That was the correct answer, go enjoy');
		} else {
			alert('Ok that was really bad!')
		}
	}
})();

Testing equality - Chapter 2
(function ()
{
	console.log('Two equal signs equality tests');
	console.log('false == 0: ' + (false == 0));
	console.log('\'\' == 0: ' + ('' == 0));
	console.log('\'4\' == 4: ' + ('4' == 4));
	console.log('End...');
	
	console.log('false: ' +false);
	console.log('Three equal signs equality tests');
	console.log('false === 0: ' + (false === 0));
	console.log('false === \'\': ' + (false === ''));

	console.log('Testing string being null');
	var s = '';
	if (s === '') {console.log('string is empty');};
	console.log(null + 'ify');
})();


/************ Chaper 3 ************/

function print(somethingToPrint)
{
	console.log(somethingToPrint);
}
print(23+'asd');

// Exercise 3.1
function absolute(value)
{
	if (isNaN(value)) {
		console.log('This is not a number: ' + value + '.');
		return;
	} else {
		return (value > 0) ? value : (-1 * value);;
	}
}

console.log(absolute(2));
console.log(absolute(-2));
console.log(absolute('asd'));

Closure??? Maybe
function parent(parentStringOrNumber)
{
	return function child(childString) {
		return parentStringOrNumber + '\n' + childString;
	}
}

var aChild = parent("Hello from Parent");
console.log(aChild('Hello, from Child'));

// Exercise 3.2
function greaterThan(value)
{
	function result(input) {
		return (input > value);
	}
	return result;
}

var greaterThanHundred = greaterThan(100);

console.log(greaterThanHundred(10));


/********** Chapter 4 ***********/
console.log('Starting chapter 4...\n\n');
var rajiv = { name:'rajiv', status: 'married', gender: 'male'};
console.log('Bio of a cool person:' + '\nName: ' + rajiv['name'] + '\nGender: ' + rajiv.gender + '\nStatus: ' + rajiv["status"]);
console.log('Changing the data about rajiv...');

rajiv.name = 'zeitgeist7';
delete rajiv.status;
rajiv["gender"] = 'super male';
rajiv['in love with'] = 'Vandhana Teeluckdharry';
console.log('Love (should be undefined): ' + rajiv['in love' + 'with']);
console.log('Love: ' + rajiv['in love' + ' with']);

var stringPropertyLength = 'length';
console.log('Length: ' + rajiv['in love' + ' with'][stringPropertyLength]);
console.log('gender' in rajiv);

// Exercise 4.2
function range(endOfRange) {
	var result = [];
	for (var i = 0; i < endOfRange; i++) {
		result[i] = i;
	};
	return result;
}

// Exercise 4.3
// Proof that string.split(x).join(x) != string.join(x).split(x)
var testString = 'hello world this is the proof';
console.log(testString.split(' ').join(' '));
var strings = ['hello', 'world', 'this is the proof'];
console.log(strings === strings.join(' ').split(' '));

// Exercise 4.4
function startsWith(original, stringToCompareAgainst)
{
	return original.slice(0, stringToCompareAgainst.length) === stringToCompareAgainst;
}
var sj = "this is a day that i have been looking forward to for two and a half years";
console.log(startsWith(sj, 'this is a day'));
console.log(startsWith(sj, 'this is a day that i have been looking forward to for two and a half years.'));
console.log(startsWith(sj,'hello'));

// Exercise 4.5
var anEmail = "Dear nephew,\n\n" + "Your mother told me you have taken up skydiving. Is this true? You watch yourself, young man! Remember what happened to my husband? And that was only from the second floor!\n\n" + "Anyway, things are very exciting here. I have spent all week trying to get the attention of Mr. Drake, the nice gentleman who moved in next door, but I think he is afraid of cats. Or allergic to them? I am going to try putting Fat Igor on his shoulder next time I see him, very curious what will happen.\n\n" + "Also, the scam I told you about is going better than expected. I have already gotten back five 'payments', and only one complaint. It is starting to make me feel a bit bad though. And you are right that it is probably illegal in some way.\n\n" + "(... etc ...)\n\n" + "Much love, Aunt Emily\n\n" + "died 27/04/2006: Black Leclère\n\n" + "born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois";
var paragraphs = anEmail.split('\n');
console.log(paragraphs);
function catNames (paragraph) {
	// Check that it starts with born or died first, not done yet

	// 1. slice after ':[space]' that is why +2
	// 2. then split
	return paragraph.slice(paragraph.indexOf(':') + 2).split(', ');
}

console.log(catNames("born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois"));


// Exercise 4.6
var deathParagraph = "died 27/04/2006: Clack Leclere";

function extractDate(paragraph) {
	var startIndexOfDate = paragraph.indexOf("died ") + 5;
	var endIndexOfDate = paragraph.indexOf(':');
	var dateString = paragraph.slice(startIndexOfDate, endIndexOfDate - startIndexOfDate);
	var dateComponents = dateString.split('/');

	// Not necessary but to be more correct and readable
	function stringToNumber(s) {
		return s.parseInt();
	}
	var year = dateComponents[2];
	var month = dateComponents[1] - 1;	// month use 0-based indexing on Date objets
	var day = dateComponents[0];

	return new Date(year, month, day);
}
// Test
console.log(extractDate(deathParagraph));


//Exercise 4.7
function between(someText, startString, endString) {
 	var start = someText.indexOf(startString) + startString.length;
 	var end = someText.indexOf(endString, start);
 	return someText.slice(start, end);
}
// Test 1
console.log("should give Spot");
console.log(between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")"));
// Test 2
console.log("should give bah");
console.log(`between("bu ] boo [ bah ] gzz", "[ ", " ]"));


// Exercise 4.8
function formatDate(date) {
	function handleFormat (num) {
		if (num < 10) 
		{
			return '0' + num;
		};
		return num;
	}
  return handleFormat(date.getDate()) + "/" + (handleFormat(date.getMonth() + 1)) +
         "/" + handleFormat(date.getFullYear());
}
// Test
console.log(formatDate(new Date()));

// Exercise 4.9
// Depends on the data which is procided in the book, so...

// Exercise 4.10
function range(start, end) {
	if (arguments.length < 2) 
	{
		end = start;
		start = 0
	}
	var result = [];
	for (var i = start; i <= end; i++) {

		result[i-start] = i;
	}
	return result;
}
// Test
console.log(range(4));

// Exercise 4.11
function sum (numbers) {
	var sum = 0;
	for (var index = numbers.length - 1; index >= 0; index--) {
		sum += numbers[index];
	}
	return sum;
}
// Test
console.log(sum(range(1,10)));

// Exercise 6.1
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

function map (fn, array)
{
	var result = [];
	forEach(array, function (element) {
		result.push(fn(element))
	});
	return result;
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

// Tests
print(countZeroes1([1,0,0,1,0,0,0,3,3,3]));
print(countZeroes([1,0,0,1,0,0,0,3,3,3]));

// Exercise 6.2
function processParagraph (paragraph)
{
	var headingWeight = 0;
	while (paragraph.charAt(headingWeight) === '%') {
		headingWeight++;
	}
	
	var paragraphDefinition =	{
									'content'	: paragraph.substr(headingWeight),
									'type' 		: (headingWeight == 0) ? 'p' : 'h' + headingWeight
								};	// Only 2 cases as stipulated in the book
		
	return paragraphDefinition;
}
// Test
print(processParagraph("This is a day that I have been looking forward to for two and a half years."))
print(processParagraph("%This is a day that I have been looking forward to for two and a half years."))
print(processParagraph("%%%This is a day that I have been looking forward to for two and a half years."))

// Exercise 6.3

function splitParagraph (paragraph) 
{
	function grabEmphasisOrFootnote (endDelimiter) 
	{
		var endIndex = paragraph.indexOf(endDelimiter, 1); 	// from 1 since this might be a problem for '*'
		if (endIndex === -1) {
			print("'" + endDelimiter + "'" + " not found");
		};
		var content = paragraph.slice(1, endIndex);
		paragraph = paragraph.slice(endIndex + 1)

		return content;
	}

	function indexOfStartDelimiter (delimiter) 
	{
		var index = paragraph.indexOf(delimiter);
		return index === -1 ? paragraph.length - 1 : index;
	}

	function grabTextBeforeSpecialTags () 
	{
		// Taken from the solution from the book
		var end = reduce(Math.min, paragraph.length,
			map(indexOfStartDelimiter, ["*", "{"]));
		var part = paragraph.slice(0, end);
		paragraph = paragraph.slice(end);

		return part;
	}
	var fragments = [];

	while(paragraph != '') {
		if (paragraph.charAt(0) === '*') {
			fragments.push({"type" : "em", "content" : grabEmphasisOrFootnote('*')});
		}
		else if (paragraph.charAt(0) === '{'){
			fragments.push({"type" : "footnote", "content" : grabEmphasisOrFootnote('}')});
		}
		else {
			fragments.push({"type" : "normal", "content" : grabTextBeforeSpecialTags()});
		}
	}
	return fragments;
}

// Test
var recluse = "% The Book of Programming\n\n%% The Two Aspects\n\nBelow the surface of the machine, the program moves. Without effort,\nit expands and contracts. In great harmony, electrons scatter and\nregroup. The forms on the monitor are but ripples on the water. The\nessence stays invisibly below.\n\nWhen the creators built the machine, they put in the processor and the\nmemory. From these arise the two aspects of the program.\n\nThe aspect of the processor is the active substance. It is called\nControl. The aspect of the memory is the passive substance. It is\ncalled Data.\n\nData is made of merely bits, yet it takes complex forms. Control\nconsists only of simple instructions, yet it performs difficult\ntasks. From the small and trivial, the large and complex arise.\n\nThe program source is Data. Control arises from it. The Control\nproceeds to create new Data. The one is born from the other, the\nother is useless without the one. This is the harmonious cycle of\nData and Control.\n\nOf themselves, Data and Control are without structure. The programmers\nof old moulded their programs out of this raw substance. Over time,\nthe amorphous Data has crystallised into data types, and the chaotic\nControl was restricted into control structures and functions.\n\n%% Short Sayings\n\nWhen a student asked Fu-Tzu about the nature of the cycle of Data and\nControl, Fu-Tzu replied 'Think of a compiler, compiling itself.'\n\nA student asked 'The programmers of old used only simple machines and\nno programming languages, yet they made beautiful programs. Why do we\nuse complicated machines and programming languages?'. Fu-Tzu replied\n'The builders of old used only sticks and clay, yet they made\nbeautiful huts.'\n\nA hermit spent ten years writing a program. 'My program can compute\nthe motion of the stars on a 286-computer running MS DOS', he proudly\nannounced. 'Nobody own a 286-computer or uses MS DOS anymore.', Fu-Tzu\nresponded.\n\nFu-Tzu had written a small program that was full of global state and\ndubious shortcuts. Reading it, a student asked 'You warned us against\nthese techniques, yet I find them in your program. How can this be?'\nFu-Tzu said 'There is no need to fetch water hose when the house is\nnot on fire.'{This is not to be read as an encouragement of sloppy\nprogramming, but rather as a warning against neurotic adherence to\nrules of thumb.}\n\n%% Wisdom\n\nA student was complaining about digital numbers. 'When I take the root\nof two and then square it again, the result is already inaccurate!'.\nOverhearing him, Fu-Tzu laughed. 'Here is a sheet of paper. Write down\nthe precise value of the square root of two for me.'\n\nFu-Tzu said 'When you cut against the grain of the wood, much strength\nis needed. When you program against the grain of a problem, much code\nis needed.'\n\nTzu-li and Tzu-ssu were boasting about the size of their latest\nprograms. 'Two-hundred thousand lines', said Tzu-li, 'not counting\ncomments!'. 'Psah', said Tzu-ssu, 'mine is almost a *million* lines\nalready.' Fu-Tzu said 'My best program has five hundred lines.'\nHearing this, Tzu-li and Tzu-ssu were enlightened.\n\nA student had been sitting motionless behind his computer for hours,\nfrowning darkly. He was trying to write a beautiful solution to a\ndifficult problem, but could not find the right approach. Fu-Tzu hit\nhim on the back of his head and shouted '*Type something!*' The student\nstarted writing an ugly solution. After he had finished, he suddenly\nunderstood the beautiful solution.\n\n%% Progression\n\nA beginning programmer writes his programs like an ant builds her\nhill, one piece at a time, without thought for the bigger structure.\nHis programs will be like loose sand. They may stand for a while, but\ngrowing too big they fall apart{Referring to the danger of internal\ninconsistency and duplicated structure in unorganised code.}.\n\nRealising this problem, the programmer will start to spend a lot of\ntime thinking about structure. His programs will be rigidly\nstructured, like rock sculptures. They are solid, but when they must\nchange, violence must be done to them{Referring to the fact that\nstructure tends to put restrictions on the evolution of a program.}.\n\nThe master programmer knows when to apply structure and when to leave\nthings in their simple form. His programs are like clay, solid yet\nmalleable.\n\n%% Language\n\nWhen a programming language is created, it is given syntax and\nsemantics. The syntax describes the form of the program, the semantics\ndescribe the function. When the syntax is beautiful and the semantics\nare clear, the program will be like a stately tree. When the syntax is\nclumsy and the semantics confusing, the program will be like a bramble\nbush.\n\nTzu-ssu was asked to write a program in the language called Java,\nwhich takes a very primitive approach to functions. Every morning, as\nhe sat down in front of his computer, he started complaining. All day\nhe cursed, blaming the language for all that went wrong. Fu-Tzu\nlistened for a while, and then reproached him, saying 'Every language\nhas its own way. Follow its form, do not try to program as if you\nwere using another language.'\n";
var paragraphs = recluse.split("\n\n");
print(splitParagraph('0123*emphasisd*therest'));
print('0123*emphasisd*therest'.length)

// Exercise 6.4

// Test




