"use strict";

var React = require('react');

var Home = React.createClass({
	render: function(){
		return (
			<div className="jumbotron">
				<h1><a href="#about">Fixter Admin</a></h1>
				<p>React, React router, and flux for ultra responsive web apps</p>
			</div>
		);
	}
});

module.exports = Home;