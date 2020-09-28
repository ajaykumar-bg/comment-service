import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			comment: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.saveComment({
			user: 'user_name',
			commentText: this.state.comment,
			timeStamp: new Date(),
		});
		this.setState({
			comment: '',
		});
	}

	render() {
		return (
			<form className='comment-box' onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea value={this.state.comment} onChange={this.handleChange} />
				<div>
					<button type='submit'>Submit Comment</button>
				</div>
			</form>
		);
	}
}

export default connect(null, actions)(CommentBox);
