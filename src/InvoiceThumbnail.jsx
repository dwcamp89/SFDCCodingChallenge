define(['react'], function(React) {
	var InvoiceThumbnail = React.createClass({
		render : function() {
			return(
				<td>
					<div className="invoiceThumbnail" onClick={loadExistingInvoice.bind(this, this.props.invoiceIndex)}>
						<p>I-{this.props.invoice.getInvoiceNumber()}</p>
						<p className="itemCount" >
							<img src="resources/cart.png" />: {this.props.invoice.getProducts().length}
						</p>
					</div>
				</td>
			);
		}
	});

	return InvoiceThumbnail;
});