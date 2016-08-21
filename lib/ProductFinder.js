define(['../model/Product'], function(Product) {

	var productsByName = {}

	// Move hard-coded products to their own module (maybe ProductsByName with function getKeySet(), getValues(), getProductByName())	
	productsByName['Beer'] = Product.initProduct().setName('Beer').setDefaultQuantity(1).setDefaultPrice(6);
	productsByName['Burger'] = Product.initProduct().setName('Burger').setDefaultQuantity(1).setDefaultPrice(8);
	productsByName['Burrito'] = Product.initProduct().setName('Burrito').setDefaultQuantity(1).setDefaultPrice(8);
	productsByName['Chili'] = Product.initProduct().setName('Chili').setDefaultQuantity(1).setDefaultPrice(7);
	productsByName['Coffee'] = Product.initProduct().setName('Coffee').setDefaultQuantity(3).setDefaultPrice(3);
	productsByName['Coke'] = Product.initProduct().setName('Coke').setDefaultQuantity(1).setDefaultPrice(2);
	productsByName['Cornbread'] = Product.initProduct().setName('Cornbread').setDefaultQuantity(2).setDefaultPrice(3);
	productsByName['Curry'] = Product.initProduct().setName('Curry').setDefaultQuantity(1).setDefaultPrice(8);
	productsByName['Fries'] = Product.initProduct().setName('Fries').setDefaultQuantity(2).setDefaultPrice(2);
	productsByName['Guacamole'] = Product.initProduct().setName('Guacamole').setDefaultQuantity(2).setDefaultPrice(2);
	productsByName['Juice'] = Product.initProduct().setName('Juice').setDefaultQuantity(1).setDefaultPrice(3);
	productsByName['Latte'] = Product.initProduct().setName('Latte').setDefaultQuantity(1).setDefaultPrice(5);
	productsByName['Milkshake'] = Product.initProduct().setName('Milkshake').setDefaultQuantity(1).setDefaultPrice(4);
	productsByName['Nachos'] = Product.initProduct().setName('Nachos').setDefaultQuantity(2).setDefaultPrice(5);
	productsByName['Pasta'] = Product.initProduct().setName('Pasta').setDefaultQuantity(1).setDefaultPrice(7);
	productsByName['Pizza'] = Product.initProduct().setName('Pizza').setDefaultQuantity(2).setDefaultPrice(4);
	productsByName['Queso'] = Product.initProduct().setName('Queso').setDefaultQuantity(1).setDefaultPrice(2);
	productsByName['Salad'] = Product.initProduct().setName('Salad').setDefaultQuantity(1).setDefaultPrice(6);
	productsByName['Sandwich'] = Product.initProduct().setName('Sandwich').setDefaultQuantity(1).setDefaultPrice(7);
	productsByName['Steak'] = Product.initProduct().setName('Steak').setDefaultQuantity(1).setDefaultPrice(11);
	productsByName['Sushi'] = Product.initProduct().setName('Sushi').setDefaultQuantity(5).setDefaultPrice(6);
	productsByName['Tea'] = Product.initProduct().setName('Tea').setDefaultQuantity(1).setDefaultPrice(2);
	productsByName['Veggies'] = Product.initProduct().setName('Veggies').setDefaultQuantity(1).setDefaultPrice(3);
	productsByName['Water'] = Product.initProduct().setName('Water').setDefaultQuantity(1).setDefaultPrice(4);
	productsByName['Wine'] = Product.initProduct().setName('Wine').setDefaultQuantity(1).setDefaultPrice(8);

	var findProductsByName = function(name) {
		if(!name) return [];
		var foundProducts = [];
		for(productName in productsByName) {

			if(productName.toLowerCase().indexOf(name.toLowerCase()) != -1) foundProducts.push(productsByName[productName]);
		}
		return foundProducts;
	}

	return {
		findProductsByName : findProductsByName
	};
})