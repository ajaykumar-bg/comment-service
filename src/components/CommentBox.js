import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			content: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.postComment({
			avatar: 'https://picsum.photos/id/237/200/300',
			author: 'Ajay',
			content: this.state.content,
			datetime: new Date(),
		});
		this.setState({
			content: '',
		});
	}

	render() {
		return (
			<form className='ui comment form' onSubmit={this.handleSubmit}>
				<div className='field'>
					<textarea
						rows='3'
						value={this.state.content}
						onChange={this.handleChange}
					></textarea>
				</div>
				<button type='submit' className='ui icon primary left labeled button'>
					<i aria-hidden='true' className='edit icon'></i>Post a new Comment
				</button>
			</form>
		);
	}
}

export default connect(null, actions)(CommentBox);
