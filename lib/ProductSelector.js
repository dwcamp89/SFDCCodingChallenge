define(['react', 'ProductDisplay', 'SectionHeader'], function(React, ProductDisplay, SectionHeader) {
	var ProductSelector = React.createClass({displayName: "ProductSelector",
		getInitialState : function() {
			return {
				invoiceProducts : this.props.invoiceProducts
			}
		},
		componentWillReceiveProps : function(newProps) {
			this.state.invoiceProducts = newProps.invoiceProducts;
			this.setState(this.state);
		},
		render : function() {
			var productDisplays = [];
			for(var i = 0; i < this.state.invoiceProducts.length; i++) {
				productDisplays.push(React.createElement(ProductDisplay, {product: this.state.invoiceProducts[i], count: i}));
			}

			return(
				React.createElement("div", null, 
					React.createElement(SectionHeader, {sectionTitle: "Step 1: Select Products"}, 
						productDisplays, 
						React.createElement("div", {id: "addProductLinkContainer"}, 
							React.createElement("input", {type: "button", id: "addProductLink", value: "Add Product", onClick: addEmptyProduct}
								
							)
						)
					)
				)
			);
		}
	});

	return ProductSelector;
})