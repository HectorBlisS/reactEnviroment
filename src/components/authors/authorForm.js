"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
	render: function(){
		return (
				<form>
					<Input
						name="firstName"
						label="First Name"
						value={this.props.author.firsName}
						onChange={this.props.onChange}
						placeholder="Tu nombre" />

					<Input
						name="lastName"
						label="Last Name"
						value={this.props.author.lastName}
						onChange={this.props.onChange} />

					<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
				
				</form>
			);
	}
});

module.exports = AuthorForm;