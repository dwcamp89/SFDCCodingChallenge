define(['react', 'ProductSearch', 'ProductEdit'], function(React, ProductSearch, ProductEdit) {

	var ProductDisplay = React.createClass({displayName: "ProductDisplay",
		getInitialState : function() {
			return {
				product : this.props.product,
				productSelected : this.props.product.getProductName() != ''
			}
		},
		onSelectProduct : function(selectedProduct) {
			this.state.product.loadFromProduct(selectedProduct);
			this.state.productSelected = true;
			this.setState(this.state);
		},
		onRemoveProduct : function(e) {
			onRemoveProduct(this.props.count);
		},
		render : function() {
			return(
				React.createElement("div", {className: "productContainer", "data-count": this.props.count}, 
					React.createElement("img", {src: "resources/cancelProduct.png", onClick: this.onRemoveProduct, title: "Remove Product"}), 
					React.createElement(ProductSearch, {onSelectProduct: this.onSelectProduct, productName: this.props.product.getProductName()}), 
					React.createElement(ProductEdit, {product: this.state.product, rendered: this.state.productSelected})
				)
			);
		}
	});

	return ProductDisplay;
})