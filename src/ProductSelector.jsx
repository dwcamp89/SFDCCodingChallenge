define(['react', 'ProductDisplay', 'SectionHeader'], function(React, ProductDisplay, SectionHeader) {
	var ProductSelector = React.createClass({
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
				productDisplays.push(<ProductDisplay product={this.state.invoiceProducts[i]} count={i} />);
			}

			return(
				<div>
					<SectionHeader sectionTitle="Step 1: Select Products" >
						{productDisplays}
						<div id="addProductLinkContainer">
							<input type="button" id="addProductLink" value="Add Product" onClick={addEmptyProduct}>
								
							</input>
						</div>
					</SectionHeader>
				</div>
			);
		}
	});

	return ProductSelector;
})