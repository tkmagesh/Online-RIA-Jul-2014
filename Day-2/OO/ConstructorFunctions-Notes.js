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

//Modify the above Employee function to satisfy the following requirements;

var emp = new Employee(100,"Magesh",10000);
emp.id() //=> 100

//getter
emp.name() //=> "Magesh"

//setter
emp.name("Suresh");

emp.name() //=> "Suresh"

//name setter should not accept an empty string for name
emp.name("")
emp.name() // => "Suresh"

//create a getter/setter for Salary in such a way that a new salary cannot be assigned if the new salary is less than the existing salary

emp.salary() //=> 10000
emp.salary(12000)
emp.salary() //=> 12000

emp.salary(9000)
emp.salary() // => 12000
===========================================================================================

//Create a SalaryCalculator constructor based on the following usage:

function SalaryCalculator(basic, hra, da, tax){
	//fill in the blanks
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	this.salary = 0;
	this.calculate = function(){
		var gross = this.basic + this.hra + this.da;
		this.salary = gross * ((100-tax)/100);
	}
}

var calc = new SalaryCalculator(10000,2000,3000,10);

calc.basic //=> 10000
calc.hra //=> 2000
calc.da //=> 3000
calc.tax //=> 10
calc.salary //=> 0

calc.calculate();
calc.salary //=> 13500