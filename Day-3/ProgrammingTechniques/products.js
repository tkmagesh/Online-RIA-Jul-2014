window.addEventListener("DOMContentLoaded", function(){
	var products = [
		{id:7,name:"zen",cost:10,units:9,category:1},
		{id:3,name:"len",cost:70,units:2,category:2},
		{id:6,name:"den",cost:30,units:3,category:1},
		{id:5,name:"ten",cost:20,units:7,category:2},
		{id:9,name:"hen",cost:90,units:1,category:1},
		{id:2,name:"pen",cost:60,units:3,category:2}
	]

	printList("Initial List", products);


	var sort = function(list){
		for(var i=0;i<list.length-1;i++)
			for(var j=i+1;j<list.length;j++){
				if (list[i].id > list[j].id){
					var temp = list[i];
					list[i] = list[j];
					list[j] = temp;
				}
			}
	}
	sort(products);
	printList("After sorting by Id", products);


	var sort = function(list, comparerFn){
		for(var i=0;i<list.length-1;i++)
			for(var j=i+1;j<list.length;j++){
				if (comparerFn(list[i],list[j]) > 0){
					var temp = list[i];
					list[i] = list[j];
					list[j] = temp;
				}
			}
	}

	var productComparerByCostFn = function(p1,p2){
		if (p1.cost > p2.cost) return 1;
		if (p1.cost < p2.cost) return -1;
		return 0
	};

	sort(products,productComparerByCostFn);
	printList("After sorting by Cost", products);

	var productComparerByUnits = function(p1,p2){
		if (p1.units > p2.units) return 1;
		if (p1.units < p2.units) return -1;
		return 0;
	}
	sort(products,productComparerByUnits);
	printList("After sorting by Units", products);

	var filter = function(list, predicate){
		/*A predicate is a function that returns a boolean value*/
		var result = [];
		for(var i=0;i<list.length;i++)
			if (predicate(list[i]))
				result.push(list[i])
		return result;
	}

	var costlyProductSpec = function(p){
		return p.cost > 50;
	};
	var costlyProducts = filter(products,costlyProductSpec);
	printList("All costly products (products.cost > 50)", costlyProducts);

	var category1ProductSpec = function(p){
		return p.category === 1;
	}
	var allCategory1Products = filter(products,category1ProductSpec);
	printList("All Category-1 Products", allCategory1Products);

	/*
	var min = function(list,...){

	};

	var max = function(list,...){

	};

	var sum = function(list,...){

	};

	var countBy = function(list, predicate){

	};
	var all = function(list,predicate){

	};
	var any = function(list,predicate){

	};
	var groupBy = function(list,....){

	}
	*/


})
