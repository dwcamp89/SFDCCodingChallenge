define(['react', 'InvoiceProductDisplay', 'SectionHeader', 'Constants'], function(React, InvoiceProductDisplay, SectionHeader, Constants){
	var InvoiceDisplay = React.createClass({
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
				invoiceItems.push(<InvoiceProductDisplay invoiceProduct={this.props.invoice.getProduct(i)} />)	
			}

			return(
				<SectionHeader sectionTitle="Step 3: View Invoice" >
					<div id="invoiceContainer" style={{display: this.state.isNewInvoice ? 'none' : 'inline-block'}} >
						<div className="invoiceInformation">
							<p className="invoiceInformationHeader" >Invoice Information:</p>
							<p>I-{this.props.invoice.getInvoiceNumber()}</p>
							<p>Invoice Date: {this.props.invoice.getDate().format(Constants.DATE_FORMAT)}</p>
						</div>

						<div className="customerInformation" >
							<p className="invoiceInformationHeader">Customer Information:</p>
							<p>{this.props.invoice.getCustomerName()}</p>
						</div>

						<div className="productInformation" >
							<p className="invoiceInformationHeader" >Products:</p>
							<table>
								<tbody>
									<tr>
										<th>Product Name</th>
										<th>Quantity</th>
										<th>Price</th>
										<th>Total</th>
									</tr>
									{invoiceItems}
									<tr className="invoiceTotalRow" >
										<td>Total</td>
										<td></td>
										<td></td>
										<td className="invoiceTotalCell" >{this.props.invoice.getTotal().toFixed(2)}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="invoiceButtonBar" >
						<input type="button" value={this.state.isNewInvoice ? 'Generate Invoice' : 'Update Invoice'} onClick={this.onCreateInvoice} ></input>
						<input type="button" value="Save" style={{display : this.state.isNewInvoice ? 'none' : 'inline-block'}} onClick={startNewInvoice} ></input>
					</div>
				</SectionHeader >
			);
		}
	});

	return InvoiceDisplay;
})