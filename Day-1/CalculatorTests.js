window.addEventListener("DOMContentLoaded",init);
function init(){
	test("Should be able to add two numbers", function(){
		//arrange
		var n1 = 10,
			n2 = 20,
			expectedResult = 30;

		//act
		var result = add(n1,n2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add two numbers in string format", function(){
		//arrange
		var n1 = "10",
			n2 = "20",
			expectedResult = 30;

		//act
		var result = add(n1,n2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add two treat non numeric strings as zero", function(){
		//arrange
		var n1 = "10",
			n2 = "abc",
			expectedResult = 10;

		//act
		var result = add(n1,n2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning numbers", function(){
		//arrange
		var f1 = function(){ return 10; },
			f2 = function(){ return 20; },
			expectedResult = 30;

		//act
		var result = add(f1,f2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning numbers in string format", function(){
		//arrange
		var f1 = function(){ return "10"; },
			f2 = function(){ return "20"; },
			expectedResult = 30;

		//act
		
		var result = add(f1,f2);
		
		//assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning functions returning numbers in string format", function(){
		//arrange
		var f1 = function(){ return function(){ return "10"; }},
			f2 = function(){ return function(){ return "20"; }},
			expectedResult = 30;

		//act
		//trace = true;
		var result = add(f1,f2);
		//trace = false;
		//assert
		return result === expectedResult;
	});
	test("Should be able only one argument", function(){
		//arrange
		var n1 = 10,
			expectedResult = 10;

		//act
		var result = add(n1);

		//assert
		return result === expectedResult;
	});
	test("Should be result in Zero when no arguments are passed", function(){
		//arrange
		var	expectedResult = 0;

		//act
		var result = add();

		//assert
		return result === expectedResult;
	});
	test("Should be able to variable list of numbers", function(){
		//arrange
		var	expectedResult = 150;

		//act
		var result = add(10,20,30,40,50);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add an array of numbers", function(){
		//arrange
		var	numbers = [10,20,30,40,50],
			expectedResult = 150;

		//act
		var result = add(numbers);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add more than one array of numbers and numbers in string format", function(){
		//arrange
		var	numbers1 = [10,"20",30],
			numbers2 = [40,"50"],
			expectedResult = 150;

		//act
		var result = add(numbers1,numbers2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add nested array of numbers", function(){
		//arrange
		var	numbers1 = [10,[20,[30,[40,[50]]]]],
			expectedResult = 150;

		//act
		var result = add(numbers1);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning array of numbers and numbers in string format", function(){
		//arrange
		var	f1 = function(){ return [10,"20",30];},
			f2 = function(){ return [40,"50"];},
			expectedResult = 150;

		//act
		var result = add(f1,f2);

		//assert
		return result === expectedResult;
	});

	test("Should be able to add an array of functions returning array of numbers and numbers in string format", function(){
		//arrange
		var	f1 = function(){ return [10,"20",30];},
			f2 = function(){ return [40,"50"];},
			expectedResult = 150;

		//act
		var result = add([f1,f2]);

		//assert
		return result === expectedResult;
	});

}