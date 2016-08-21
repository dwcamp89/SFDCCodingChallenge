define(['moment', 'react', 'SectionHeader', 'DatePicker', 'Constants'], function(moment, React, SectionHeader, DatePicker, Constants) {

	var OrderForm = React.createClass({
		getInitialState : function() {
			return {
				invoice : this.props.invoice
			}
		},
		onUpdateCustomerName : function(e) {
			this.state.invoice.setCustomerName(e.target.value);
			this.setState(this.state);
		},
		onUpdateDate : function(date) {
			this.state.invoice.setDate(date);
			this.setState(this.state);
		},
		onUpdateInvoiceNumber : function(e) {
			this.state.invoice.setInvoiceNumber(e.target.value);
			this.setState(this.state);
		},
		componentWillReceiveProps : function(newProps) {
			this.setState(newProps);
		},
		render : function() {
			return (
				<SectionHeader sectionTitle="Step 2: Order Information" >
					<div>
						<table>
							<tbody>
								<tr>
									<td>
										Customer Name:
									</td>
									<td>
										<input placeholder="John Doe" value={this.state.invoice.getCustomerName()} onChange={this.onUpdateCustomerName} ></input>
									</td>
								</tr>
								<tr>
									<td>
										Date:
									</td>
									<td>
										<DatePicker selected={this.state.invoice.getDate()} onChange={this.onUpdateDate} todayButton={"Today"} dateFormat={Constants.DATE_FORMAT} popoverTargetOffset="-3px 0px" />										
									</td>
								</tr>
								<tr>
									<td>
										Invoice Number:
									</td>
									<td>
										I-<input placeholder="0000001" value={this.state.invoice.getInvoiceNumber()} onChange={this.onUpdateInvoiceNumber} className="invoiceNumberInput" ></input>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</SectionHeader >
			);
		}
	});

	return OrderForm;
})