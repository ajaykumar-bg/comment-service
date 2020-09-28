import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ReplyCommentBox extends Component {
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
		this.props.saveComment({
			avatar: 'https://picsum.photos/id/237/200/300',
			author: 'Ajay',
			content: this.state.content,
			datetime: new Date(),
			commentId: 0,
		});
		this.setState({
			comment: '',
		});
	}

	render() {
		return (
			<form className='ui reply form' onSubmit={this.handleSubmit}>
				<div className='field'>
					<textarea
						rows='1'
						value={this.state.content}
						onChange={this.handleChange}
					></textarea>
				</div>
				<button type='submit' className='ui icon primary left labeled button'>
					<i aria-hidden='true' className='edit icon'></i>Add reply
				</button>
			</form>
		);
	}
}

export default connect(null, actions)(ReplyCommentBox);
