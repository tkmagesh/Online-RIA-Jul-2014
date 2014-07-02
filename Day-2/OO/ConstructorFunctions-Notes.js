function as a class = Constructor Functions

1. is invoked with a "new" keyword
2. "this" refers to a new object
3. by default this is returned

function Employee(id, name, salary){
  //this would refer to a new object
   this.id = id;
   this.name = name;
   this.salary = salary;
  //this would be retured by default
}

//Create a SalaryCalculator constructor based on the following usage:

function SalaryCalculator(...){
	//fill in the blanks
}

var calc = new SalaryCalculator(10000,2000,3000,10);

calc.basic //=> 10000
calc.hra //=> 2000
calc.da //=> 3000
calc.tax //=> 10
calc.salary //=> 0

calc.calculate();
calc.salary //=> 13500