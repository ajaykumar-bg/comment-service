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
				{this.props.comments && this.props.comments.length > 0 ? (
					<CommentList comments={this.props.comments} />
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	loading: state.commentsData.loading,
	comments:
		state.commentsData.comments && state.commentsData.comments.length > 0
			? state.commentsData.comments.filter((comment) => comment.commentId === 0)
			: [],
});

export default connect(mapStateToProps, actions)(CommentsPage);
