import React from 'react';
// import { v4 as uuidv4 } from 'uuid';

import Comment from './Comment';

const CommentList = (props) => (
	<div className='ui comments'>
		<h3 className='ui dividing header'>Comments</h3>
		{props.comments.map((comment) => {
			return <Comment key={comment.id} data={comment} />;
		})}
	</div>
);

export default CommentList;
