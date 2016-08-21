define(['react'], function(React){
	var InvoiceProductDisplay = React.createClass({
		render : function() {
			return(
				<tr>
					<td>{this.props.invoiceProduct.getProductName()}</td>
					<td>{this.props.invoiceProduct.getQuantity()}</td>
					<td>{this.props.invoiceProduct.getPrice().toFixed(2)}</td>
					<td>{this.props.invoiceProduct.getTotal().toFixed(2)}</td>
				</tr>
			);
		}
	});

	return InvoiceProductDisplay;
})