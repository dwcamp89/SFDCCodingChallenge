define(['react'], function(React) {
	var SectionHeader = React.createClass({displayName: "SectionHeader",
		render : function() {
			return (
				React.createElement("div", {className: "stepContainer"}, 
					React.createElement("div", {className: "sectionHeader"}, 
						this.props.sectionTitle
					), 
					React.createElement("div", {className: "sectionContent"}, 
						this.props.children
					)
				)
			);	
		}
	});

	return SectionHeader;
})