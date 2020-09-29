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
			<form onSubmit={this.handleSubmit} className='mt-3'>
				<div className='ui icon input'>
					<input
						type='text'
						placeholder='Set Username...'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<i
						aria-hidden='true'
						className='sign-in circular inverted link icon'
						onClick={this.handleSubmit}
					></i>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	userData: state.userData,
});

export default connect(mapStateToProps, actions)(CurrentUser);
