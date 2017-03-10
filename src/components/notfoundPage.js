"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render: function(){
		return (
				<div className="container-fluid">
					<h1> Página No Encontrada </h1>
					<p>Chet! sorry, No hay nada aquí</p>
					<p><Link to="app">Volver al Inicio</Link></p>
				</div>
			);
	}
});

module.exports = NotFoundPage;