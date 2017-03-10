"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback){
			if (!confirm("Seguro quieres leer esta pagina aburrida?")){
				transition.abort();
			} else{
				callback();
			}
		},
		
		willTransitionFrom: function(transition, component){
			if (!confirm("Seguro quieres irte de esta pagina genial?")){
				transition.abort();
			}
		}
	},
	render: function(){
		return (
				<div>
					<h1>Sobre nosotros</h1>
					<p>
						Esta aplicación usa las siguientes tecnologías:
					
						<ul>
							<li>React</li>
							<li>React Router</li>
							<li>Flux</li>
							<li>Node</li>
							<li>Gulp</li>
							<li>Browserify</li>
							<li>Bootstrap</li>
						</ul>
					</p>
				</div>
			);
	}
});

module.exports = About;