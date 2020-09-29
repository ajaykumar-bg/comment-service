import React from 'react';

import Comment from './Comment';

const CommentList = (props) => (
	<div className='ui comments  mt-3'>
		<h3 className='ui dividing header'>{props.comments.length} Comments</h3>
		{props.comments.map((comment) => {
			return <Comment key={comment.id} data={comment} />;
		})}
	</div>
);

export default CommentList;
