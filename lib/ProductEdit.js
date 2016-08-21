define(['react'], function(React) {
	var ProductEdit = React.createClass({displayName: "ProductEdit",
		recalculateBasedOnQuantity : function(e) {
			var newQuantity = parseFloat(e.target.value);
			if(isNaN(newQuantity)) newQuantity = 0;

			this.state.product.quantity = newQuantity;
			this.state.product.recalculateTotal();
			this.setState(this.state.product);
		},
		recalculateBasedOnPrice : function(e) {
			var newPriceString = e.target.value;
			var newPrice = parseFloat(newPriceString);
			if(isNaN(newPrice)) {
				newPriceString = '0';
				newPrice = 0;
			}

			this.state.priceString = newPriceString;
			this.state.product.price = newPrice;
			this.state.product.recalculateTotal();
			this.setState(this.state.product);
		},
		getInitialState : function() {
			// Internally store a string representation of price so user can enter decimal places
			return {
				product : this.props.product,
				priceString : this.props.product.getPrice().toFixed(2),
				rendered : this.props.rendered
			}
		},
		componentWillReceiveProps : function(newProps) {
			this.state.product = newProps.product;
			this.state.rendered = newProps.rendered;
			this.state.priceString = this.state.product.getPrice().toFixed(2).toString();
			this.setState(this.state);
		},
		render : function() {
			return(
				React.createElement("div", {className: "productDetails", style: {display: this.state.rendered ? 'inline-table' : 'none'}}, 
					React.createElement("table", null, 
						React.createElement("tbody", null, 
							React.createElement("tr", null, 
								React.createElement("th", null, "Quantity:"), 
								React.createElement("th", null, "Price:"), 
								React.createElement("th", null, "Total:")
							), 
							React.createElement("tr", null, 
								React.createElement("td", null, 
									React.createElement("input", {value: this.state.product.quantity, onChange: this.recalculateBasedOnQuantity})
								), 
								React.createElement("td", null, 
									React.createElement("input", {value: this.state.priceString, onChange: this.recalculateBasedOnPrice})
								), 
								React.createElement("td", null, this.state.product.total.toFixed(2))
							)
						)
					)
				)
			);
		}
	});

	return ProductEdit;
})