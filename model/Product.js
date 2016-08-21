define([], function() {
	Product = function() {
		this.name = '';
		this.defaultQuantity = 0;
		this.defaultPrice = 0;
	}

	// Getters
	Product.prototype.getName = function() {
		return this.name;
	}
	Product.prototype.getDefaultQuantity = function() {
		return this.defaultQuantity;
	}
	Product.prototype.getDefaultPrice = function() {
		return this.defaultPrice;
	}

	// Setters
	Product.prototype.setName = function(name) {
		this.name = name;
		return this;
	}
	Product.prototype.setDefaultQuantity = function(defaultQuantity) {
		this.defaultQuantity = defaultQuantity;
		return this;
	}
	Product.prototype.setDefaultPrice = function(defaultPrice) {
		this.defaultPrice = defaultPrice;
		return this;
	}

	return {
		initProduct : function() {
			return new Product();
		}
	};
})