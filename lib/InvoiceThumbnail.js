define(['react'], function(React) {
	var InvoiceThumbnail = React.createClass({displayName: "InvoiceThumbnail",
		render : function() {
			return(
				React.createElement("td", null, 
					React.createElement("div", {className: "invoiceThumbnail", onClick: loadExistingInvoice.bind(this, this.props.invoiceIndex)}, 
						React.createElement("p", null, "I-", this.props.invoice.getInvoiceNumber()), 
						React.createElement("p", {className: "itemCount"}, 
							React.createElement("img", {src: "resources/cart.png"}), ": ", this.props.invoice.getProducts().length
						)
					)
				)
			);
		}
	});

	return InvoiceThumbnail;
});