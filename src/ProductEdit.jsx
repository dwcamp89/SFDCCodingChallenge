define(['react'], function(React) {
	var ProductEdit = React.createClass({
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
				<div className="productDetails" style={{display: this.state.rendered ? 'inline-table' : 'none'}} >
					<table>
						<tbody>
							<tr>
								<th>Quantity:</th>
								<th>Price:</th>
								<th>Total:</th>
							</tr>
							<tr>
								<td>
									<input value={this.state.product.quantity} onChange={this.recalculateBasedOnQuantity}></input>
								</td>
								<td>
									<input value={this.state.priceString} onChange={this.recalculateBasedOnPrice}></input>
								</td>
								<td>{this.state.product.total.toFixed(2)}</td>
							</tr>
						</tbody>
					</table>
				</div>
			);
		}
	});

	return ProductEdit;
})