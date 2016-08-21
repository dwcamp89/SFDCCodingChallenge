define([], function(){
	var InvoiceForm = React.createClass({displayName: "InvoiceForm",
		getInitialState : function() {
			return {
				invoice : this.props.invoice,
				rendered : this.props.rendered
			}
		},
		renderInvoice : function(e) {
			generateInvoice();
			this.state.rendered = false;
			this.setState(this.state);
		},
		onCancel : function(e) {
			this.state.rendered = false;
			this.setState(this.state);
		},
		onUpdateCustomerName : function(e) {
			this.state.invoice.setCustomerName(e.target.value);
			this.setState(this.state);
		},
		onUpdateDate : function(e) {
			this.state.invoice.setDate(e.target.value);
			this.setState(this.state);
		},
		onUpdateInvoiceNumber : function(e) {
			this.state.invoice.setInvoiceNumber(e.target.value);
			this.setState(this.state);
		},
		componentWillReceiveProps : function(newProps) {
			this.state.rendered = newProps.rendered;
			this.setState(newProps);
		},
		render : function() {
			return (
				React.createElement("div", {style: {display : this.state.rendered ? 'block' : 'none'}}, 
					React.createElement("div", {className: "modal-overlay"}), 
					React.createElement("div", {className: "modal-content"}, 
						React.createElement("img", {src: "cancelProduct.png", onClick: this.onCancel}), 
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
										React.createElement("input", {placeholder: "1/1/2016", value: this.state.invoice.getDate(), onChange: this.onUpdateDate})
									)
								), 
								React.createElement("tr", null, 
									React.createElement("td", null, 
										"Invoice Number:"
									), 
									React.createElement("td", null, 
										"I-", React.createElement("input", {placeholder: "0000001", value: this.state.invoice.getInvoiceNumber(), onChange: this.onUpdateInvoiceNumber})
									)
								)
							)
						), 

						React.createElement("br", null), 
						React.createElement("br", null), 
						React.createElement("input", {type: "button", value: "Generate", onClick: this.renderInvoice})
					)
				)
			);
		}
	});

	/**/
	return InvoiceForm;
})