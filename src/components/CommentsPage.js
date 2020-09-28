import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import CurrentUser from './CurrentUser';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export class CommentsPage extends Component {
	componentDidMount() {
		this.props.getComments();
	}
	render() {
		return (
			<div>
				<CurrentUser />
				<CommentBox />
				<CommentList comments={this.props.comments} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	comments: state.commentsData.comments,
});

export default connect(mapStateToProps, actions)(CommentsPage);
