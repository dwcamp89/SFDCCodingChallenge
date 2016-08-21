define(['react', 'InvoiceThumbnail'], function(React, InvoiceThumbnail){
	var InvoiceSelector = React.createClass({displayName: "InvoiceSelector",
		getInitialState : function() {
			return {
				invoices : this.props.invoices,
				currentInvoiceIndex : this.props.currentInvoiceIndex,
				rendered : false
			}
		},
		componentWillReceiveProps : function(newProps) {
			this.state.invoices = newProps.invoices;
			this.state.rendered = newProps.invoices.length > 0;
			this.setState(this.state);
		},
		render : function() {
			if(!this.state.rendered) return null;

			var invoiceThumbnails = [];
			for(var i = 0; i < this.state.invoices.length; i++) {
				var invoice = this.state.invoices[i];
				invoiceThumbnails.push(
					React.createElement(InvoiceThumbnail, {invoice: invoice, invoiceIndex: i})
				);
			}
			return (
				React.createElement("div", {className: "invoiceSelector"}, 
					React.createElement("div", {className: "sectionHeader"}, 
						React.createElement("p", null, "Saved Invoices:")
					), 
					React.createElement("table", null, 
						React.createElement("tbody", null, 
							React.createElement("tr", null, 
								invoiceThumbnails
							)
						)
					)					
				)
			);
		}
	});

	return InvoiceSelector;
});