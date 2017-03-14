"use strict";

var React = require('react');
var Link = require('react-router').Link;
// var AuthorApi = require('../../api/authorapi');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var AuthorList = require('./authorList');

var Authors = React.createClass({
	getInitialState: function() {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	},

	// componentDidMount: function(){
	// 	if (this.isMounted()){
	// 		this.setState({
	// 			// authors: AuthorApi.getAllAuthors()
	// 			authors: AuthorStore.getAllAuthors()
	// 		});
	// 	}
	// },

	render: function(){

		return (
				<div>
					<h1>Authors</h1>
					<Link to="addAuthor" className="btn btn-default">Add Author </Link>
					<AuthorList authors={this.state.authors} />
				</div>
			);
	}

});

module.exports = Authors;