"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function(){
		return (
			<div className="jumbotron">
				<h1>Fixter Admin</h1>
				<p>React, React router, and flux for ultra responsive web apps</p>
				<Link to="about" className="btn btn-primary btn-lg">Saber más...</Link>
			</div>
		);
	}
});

module.exports = Home;