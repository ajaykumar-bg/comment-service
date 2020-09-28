import React from 'react';
import { connect } from 'react-redux';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

const CommentsPage = () => (
	<div>
		<CommentBox />
		<CommentList />
	</div>
);

const mapStateToProps = (state) => ({
	comments: state.comments,
});

export default connect(mapStateToProps)(CommentsPage);
