define(['react', 'InvoiceProductDisplay', 'SectionHeader', 'Constants'], function(React, InvoiceProductDisplay, SectionHeader, Constants){
	var InvoiceDisplay = React.createClass({displayName: "InvoiceDisplay",
		getInitialState : function() {
			return {
				isNewInvoice : this.props.isNewInvoice
			};
		},
		componentWillReceiveProps : function(newProps) {
			this.state.isNewInvoice = newProps.isNewInvoice;
			this.setState(this.state);
		},
		onCreateInvoice : function(e) {
			this.props.invoice.recalculateTotal();
			renderExistingInvoice();
			this.state.isNewInvoice = false;
		},
		render : function() {
			var invoiceItems = [];
			for(var i = 0; i < this.props.invoice.getProducts().length; i++) {
				invoiceItems.push(React.createElement(InvoiceProductDisplay, {invoiceProduct: this.props.invoice.getProduct(i)}))	
			}

			return(
				React.createElement(SectionHeader, {sectionTitle: "Step 3: View Invoice"}, 
					React.createElement("div", {id: "invoiceContainer", style: {display: this.state.isNewInvoice ? 'none' : 'inline-block'}}, 
						React.createElement("div", {className: "invoiceInformation"}, 
							React.createElement("p", {className: "invoiceInformationHeader"}, "Invoice Information:"), 
							React.createElement("p", null, "I-", this.props.invoice.getInvoiceNumber()), 
							React.createElement("p", null, "Invoice Date: ", this.props.invoice.getDate().format(Constants.DATE_FORMAT))
						), 

						React.createElement("div", {className: "customerInformation"}, 
							React.createElement("p", {className: "invoiceInformationHeader"}, "Customer Information:"), 
							React.createElement("p", null, this.props.invoice.getCustomerName())
						), 

						React.createElement("div", {className: "productInformation"}, 
							React.createElement("p", {className: "invoiceInformationHeader"}, "Products:"), 
							React.createElement("table", null, 
								React.createElement("tbody", null, 
									React.createElement("tr", null, 
										React.createElement("th", null, "Product Name"), 
										React.createElement("th", null, "Quantity"), 
										React.createElement("th", null, "Price"), 
										React.createElement("th", null, "Total")
									), 
									invoiceItems, 
									React.createElement("tr", {className: "invoiceTotalRow"}, 
										React.createElement("td", null, "Total"), 
										React.createElement("td", null), 
										React.createElement("td", null), 
										React.createElement("td", {className: "invoiceTotalCell"}, this.props.invoice.getTotal().toFixed(2))
									)
								)
							)
						)
					), 

					React.createElement("div", {className: "invoiceButtonBar"}, 
						React.createElement("input", {type: "button", value: this.state.isNewInvoice ? 'Generate Invoice' : 'Update Invoice', onClick: this.onCreateInvoice}), 
						React.createElement("input", {type: "button", value: "Save", style: {display : this.state.isNewInvoice ? 'none' : 'inline-block'}, onClick: startNewInvoice})
					)
				)
			);
		}
	});

	return InvoiceDisplay;
})