import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

const CommentList = (props) => {
	const list = props.comments.map((comment) => {
		return <li key={uuidv4()}>{comment}</li>;
	});

	return <ul className='comment-list'>{list}</ul>;
};

const mapStateToProps = (state) => ({
	comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
