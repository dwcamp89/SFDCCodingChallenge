define(['moment'], function(moment) {
	var Invoice = function() {
		this.customerName = '';
		this.date = new moment();
		this.invoiceNumber = '';
		this.invoiceProducts = [];
		this.total = 0.0;
	}

	// Getters
	Invoice.prototype.getCustomerName = function() {
		return this.customerName;
	}
	Invoice.prototype.getDate = function() {
		return this.date;
	}
	Invoice.prototype.getInvoiceNumber = function() {
		return this.invoiceNumber;
	}
	Invoice.prototype.getTotal = function() {
		return this.total;
	}
	Invoice.prototype.getProducts = function() {
		return this.invoiceProducts;
	}
	Invoice.prototype.getProduct = function(index) {
		return this.invoiceProducts[index];
	}

	// Setters
	Invoice.prototype.setCustomerName = function(customerName) {
		this.customerName = customerName;
	}
	Invoice.prototype.setDate = function(date) {
		this.date = date;
	}
	Invoice.prototype.setInvoiceNumber = function(invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}

	Invoice.prototype.addProduct = function(newInvoiceProduct) {
		this.invoiceProducts.push(newInvoiceProduct);
		this.total += newInvoiceProduct.getTotal();
	}

	Invoice.prototype.removeProduct = function(index) {
		index = parseInt(index);
		var invoiceProductsBefore = this.invoiceProducts.slice(0, index);
		var invoiceProductsAfter = this.invoiceProducts.slice(index + 1);
		this.invoiceProducts = invoiceProductsBefore.concat(invoiceProductsAfter);
		this.recalculateTotal();
	}

	Invoice.prototype.recalculateTotal = function() {
		var newTotal = 0;
		for(var i = 0; i < this.invoiceProducts.length; i++) {
			newTotal += this.invoiceProducts[i].getTotal();
		}

		this.total = newTotal;
	}

	return Invoice;
})