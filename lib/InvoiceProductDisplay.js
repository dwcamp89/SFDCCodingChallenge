define(['react'], function(React){
	var InvoiceProductDisplay = React.createClass({displayName: "InvoiceProductDisplay",
		render : function() {
			return(
				React.createElement("tr", null, 
					React.createElement("td", null, this.props.invoiceProduct.getProductName()), 
					React.createElement("td", null, this.props.invoiceProduct.getQuantity()), 
					React.createElement("td", null, this.props.invoiceProduct.getPrice().toFixed(2)), 
					React.createElement("td", null, this.props.invoiceProduct.getTotal().toFixed(2))
				)
			);
		}
	});

	return InvoiceProductDisplay;
})