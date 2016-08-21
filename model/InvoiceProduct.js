define([], function() {
	var InvoiceProduct = function(){
		this.productName = '';
		this.quantity = 0;
		this.price = 0;
		this.total = 0;
	}

	// Getters
	InvoiceProduct.prototype.getProductName = function() {
		return this.productName;
	}
	InvoiceProduct.prototype.getQuantity = function() {
		return this.quantity;
	}
	InvoiceProduct.prototype.getPrice = function() {
		return this.price;
	}
	InvoiceProduct.prototype.getTotal = function() {
		return this.total;
	}

	// Setters
	InvoiceProduct.prototype.setQuantity = function(quantity) {
		this.quantity = quantity;
		this.recalculateTotal();
	}
	InvoiceProduct.prototype.setPrice = function(price) {
		this.price = price;
		this.recalculateTotal();
	}

	InvoiceProduct.initFromProduct = function(product) {
		var invoiceProduct = new InvoiceProduct();
		invoiceProduct.loadFromProduct(product);
		return invoiceProduct;
	}

	InvoiceProduct.prototype.loadFromProduct = function(product) {
		this.productName = product.getName();
		this.setQuantity(product.getDefaultQuantity());
		this.setPrice(product.getDefaultPrice());
		this.total = this.getQuantity() * this.getPrice();
	}

	InvoiceProduct.prototype.recalculateTotal = function() {
		this.total = this.quantity * this.price;
	}

	return InvoiceProduct;
})