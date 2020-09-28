import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CurrentUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.userData.username,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			username: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.setCurrentUser(this.state.username);
	}

	render() {
		return (
			<form className='ui comment form' onSubmit={this.handleSubmit}>
				<div className='field'>
					<input
						type='text'
						value={this.state.username}
						onChange={this.handleChange}
					/>
				</div>
				<button type='submit' className='ui icon primary left labeled button'>
					<i aria-hidden='true' className='edit icon'></i>Set Current User
				</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	userData: state.userData,
});

export default connect(mapStateToProps, actions)(CurrentUser);
