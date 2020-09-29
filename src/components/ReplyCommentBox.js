import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

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
		if (this.state.content && this.state.content !== '') {
			this.props.postComment({
				content: this.state.content,
				datetime: new Date(),
				commentId: this.props.parentCommentId,
			});
			this.setState({
				content: '',
			});
		} else {
			toast.error('Please add some text to comment.');
		}
	}

	render() {
		return (
			<form className='ui reply form' onSubmit={this.handleSubmit}>
				<div className='ui action input'>
					<input
						type='text'
						placeholder='Reply...'
						value={this.state.content}
						onChange={this.handleChange}
					/>
					<button type='submit' className='ui button'>
						Reply
					</button>
				</div>
			</form>
		);
	}
}

export default connect(null, actions)(ReplyCommentBox);
