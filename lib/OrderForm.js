define(['moment', 'react', 'SectionHeader', 'DatePicker', 'Constants'], function(moment, React, SectionHeader, DatePicker, Constants) {

	var OrderForm = React.createClass({displayName: "OrderForm",
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
				React.createElement(SectionHeader, {sectionTitle: "Step 2: Order Information"}, 
					React.createElement("div", null, 
						React.createElement("table", null, 
							React.createElement("tbody", null, 
								React.createElement("tr", null, 
									React.createElement("td", null, 
										"Customer Name:"
									), 
									React.createElement("td", null, 
										React.createElement("input", {placeholder: "John Doe", value: this.state.invoice.getCustomerName(), onChange: this.onUpdateCustomerName})
									)
								), 
								React.createElement("tr", null, 
									React.createElement("td", null, 
										"Date:"
									), 
									React.createElement("td", null, 
										React.createElement(DatePicker, {selected: this.state.invoice.getDate(), onChange: this.onUpdateDate, todayButton: "Today", dateFormat: Constants.DATE_FORMAT, popoverTargetOffset: "-3px 0px"})										
									)
								), 
								React.createElement("tr", null, 
									React.createElement("td", null, 
										"Invoice Number:"
									), 
									React.createElement("td", null, 
										"I-", React.createElement("input", {placeholder: "0000001", value: this.state.invoice.getInvoiceNumber(), onChange: this.onUpdateInvoiceNumber, className: "invoiceNumberInput"})
									)
								)
							)
						)
					)
				)
			);
		}
	});

	return OrderForm;
})