define(
	[
		'react',
		'react-dom',
		'../model/Invoice',
		'../model/InvoiceProduct',
		'InvoiceDisplay',
		'ProductSelector',
		'OrderForm',
		'InvoiceSelector',
		'jquery'
	],
	function(React, ReactDOM, Invoice, InvoiceProduct, InvoiceDisplay, ProductSelector, OrderForm, InvoiceSelector, jQuery) {

	// Global state of the app
	var state = {};

	start = function() {
		initState();
		renderProductSelector();
		renderOrderForm();
		renderInvoice();
		renderInvoiceSelector();
	}

	initState = function() {
		state.invoiceList = [];
		state.currentInvoiceIndex = 0;
		state.currentInvoice = new Invoice();
		state.currentInvoice.addProduct(new InvoiceProduct());
	}

	// Remove product from current invoice
	onRemoveProduct = function(invoiceProductIndex) {
		state.currentInvoice.removeProduct(invoiceProductIndex);
		ReactDOM.unmountComponentAtNode(document.getElementById('productSelectorContainer'));
		renderProductSelector();
	}

	// Add new empty product to current invoice
	addEmptyProduct = function() {
		state.currentInvoice.addProduct(new InvoiceProduct());
		renderProductSelector();
	}

	// Render step 1
	renderProductSelector = function() {
		ReactDOM.render(
			React.createElement(ProductSelector, {invoiceProducts: state.currentInvoice.getProducts()}),
			document.getElementById('productSelectorContainer')
		);
	}

	// Render step 2
	renderOrderForm = function() {
		ReactDOM.render(
			React.createElement(OrderForm, {invoice: state.currentInvoice}),
			document.getElementById("orderFormContainer")
		);
	}

	// Render step 3
	renderInvoice = function() {
		ReactDOM.render(
			React.createElement(InvoiceDisplay, {invoice: state.currentInvoice, isNewInvoice: true}),
			document.getElementById('invoiceDisplayContainer')
		);
	}

	// Render step 3 with an existing invoice
	renderExistingInvoice = function() {
		ReactDOM.render(
			React.createElement(InvoiceDisplay, {invoice: state.currentInvoice, isNewInvoice: false}),
			document.getElementById('invoiceDisplayContainer')
		);
	}

	// Render saved invoice thumbnails
	renderInvoiceSelector = function() {
		ReactDOM.render(
			React.createElement(InvoiceSelector, {invoices: state.invoiceList}),
			document.getElementById('invoiceSelectorContainer')
		);
	}

	startNewInvoice = function() {
		state.invoiceList[state.currentInvoiceIndex] = state.currentInvoice;

		// Increment invoice index
		state.currentInvoiceIndex = state.invoiceList.length;

		state.currentInvoice = new Invoice();
		state.currentInvoice.addProduct(new InvoiceProduct());

		// Render blank product selector
		ReactDOM.unmountComponentAtNode(document.getElementById('productSelectorContainer'));
		renderProductSelector();

		// Render blank order form
		renderOrderForm();
		
		// Render blank invoice display
		ReactDOM.unmountComponentAtNode(document.getElementById('invoiceDisplayContainer'));
		renderInvoice();

		renderInvoiceSelector();
	}

	loadExistingInvoice = function(invoiceIndex) {
		state.currentInvoiceIndex = invoiceIndex;
		state.currentInvoice = state.invoiceList[invoiceIndex];

		// Unmount product selector
		ReactDOM.unmountComponentAtNode(document.getElementById('productSelectorContainer'));

		renderProductSelector();
		renderOrderForm();
		renderExistingInvoice();
	}

	return {
		start : start
	};
})