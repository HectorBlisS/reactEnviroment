"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

	mixins: [
		Router.Navigation
	],

	getInitialState: function() {
		return {
			author: {
				id: '',
				firstName: '',
				lastName: ''
			},
			errors: {}
		};
	},

	setAuthorState: function(){
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		// toastr.success('andas escribiendo');
		return this.setState({author: this.state.author});
	},

	authorFormIsValid: function(){
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors

		if (this.state.author.firstName.length < 3){
			this.state.errors.firstName = 'Tu nombre debe contener al menos 3 letras.';
			formIsValid = false;
		}

		if (this.state.author.lastName.length < 3){
			this.state.errors.lastName = 'Tu apellido debe contener al menos 3 letras.';
			formIsValid = false;
		}

		this.setState({
			errors: this.state.errors
		});
		return formIsValid;
	},

	saveAuthor: function(event){
		event.preventDefault();
		if (!this.authorFormIsValid()){
			toastr.warning('Hay errores en el formulario');
			return;
		}
		AuthorApi.saveAuthor(this.state.author);
		toastr.success('Author guardado correctamente');
		this.transitionTo('authors');
	},

	render: function(){
		return (

			<div className="container">
				<h1>Manage Author</h1>
				<hr/>
				<AuthorForm
					author={this.state.author}
					onChange={this.setAuthorState} 
					onSave={this.saveAuthor}
					errors={this.state.errors} />

			</div>

			);
	}
});

module.exports = ManageAuthorPage;