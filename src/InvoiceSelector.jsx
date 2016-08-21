define(['react', 'InvoiceThumbnail'], function(React, InvoiceThumbnail){
	var InvoiceSelector = React.createClass({
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
					<InvoiceThumbnail invoice={invoice} invoiceIndex={i} />
				);
			}
			return (
				<div className="invoiceSelector" >
					<div className="sectionHeader" >
						<p>Saved Invoices:</p>
					</div>
					<table>
						<tbody>
							<tr>
								{invoiceThumbnails}
							</tr>
						</tbody>
					</table>					
				</div>
			);
		}
	});

	return InvoiceSelector;
});