import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';
import Comment from './Comment';

const CommentList = (props) => (
	<div className='ui comments'>
		<h3 className='ui dividing header'>Comments</h3>
		{props.comments.map((comment) => {
			return <Comment key={uuidv4()} details={comment} />;
		})}

		<form className='ui reply form'>
			<div className='field'>
				<textarea rows='3'></textarea>
			</div>
			<button className='ui icon primary left labeled button'>
				<i aria-hidden='true' className='edit icon'></i>Add Reply
			</button>
		</form>
	</div>
);

// const CommentList = (props) => {
// 	const list = props.comments.map(({ avatar, author, text, datetime }) => {
// 		return <li key={uuidv4()}>{commentText}</li>;
// 	});

// 	return <ul className='comment-list'>{list}</ul>;
// };

const mapStateToProps = (state) => ({
	comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
