//Prototypal Inheritence
	=> one object becomes the base for multiple other objects

function SalaryCalculator(basic, hra, da, tax){
	//fill in the blanks
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	this.salary = 0;
}

SalaryCalculator.prototype.calculate = function(){
	var gross = this.basic + this.hra + this.da;
	this.salary = gross * ((100-tax)/100);
}