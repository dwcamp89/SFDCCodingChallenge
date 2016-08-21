define(['react'], function(React) {
	var SectionHeader = React.createClass({
		render : function() {
			return (
				<div className="stepContainer" >
					<div className="sectionHeader" >
						{this.props.sectionTitle}
					</div>
					<div className="sectionContent" >
						{this.props.children}
					</div>
				</div>
			);	
		}
	});

	return SectionHeader;
})