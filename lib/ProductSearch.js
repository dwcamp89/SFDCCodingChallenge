define(['react', 'ProductFinder'], function(React, ProductFinder) {
	var ProductSearch = React.createClass({displayName: "ProductSearch",
		getInitialState : function() {
			return {
				matchingProducts : [],
				productName : this.props.productName,
				renderMatchingProducts : false
			}
		},
		onSelectProduct : function(selectedProduct) {
			this.state.productName = selectedProduct.getName();

			// Hide matching products list
			this.state.matchingProducts = [];
			this.state.renderMatchingProducts = false;
			
			this.setState(this.state);
			this.props.onSelectProduct(selectedProduct);
		},
		searchProducts : function(e) {
			var productName = e.target.value;
			this.state.matchingProducts = ProductFinder.findProductsByName(productName);
			this.state.productName = productName;
			this.state.renderMatchingProducts = this.state.matchingProducts.length > 0;
			this.setState(this.state);
		},
		render : function() {
			var matchingProductNames = [];
			for(var i = 0; i < this.state.matchingProducts.length; i++) {
				matchingProductNames.push(
					React.createElement("div", {className: "matchingProduct", onClick: this.onSelectProduct.bind(this, this.state.matchingProducts[i])}, 
						this.state.matchingProducts[i].getName()
					)
				);
			}

			return(
				React.createElement("div", {className: "productFinder"}, 
					"Product Name: ", React.createElement("input", {type: "text", onChange: this.searchProducts, value: this.state.productName, placeholder: "Product Name..."}), 
					React.createElement("br", null), 
					React.createElement("div", {className: "matchingProductsContainer", style: {display : this.state.renderMatchingProducts ? 'inline-block' : 'none'}}, 
						matchingProductNames
					)
				)
			);
		}
	});

	return ProductSearch;	
})