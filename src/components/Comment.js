import React from 'react';
import moment from 'moment';

function Comment({ details }) {
	const { author, avatar, content, datetime } = details;
	return (
		<div className='comment'>
			<div className='avatar'>
				<img alt='img' src={avatar} />
			</div>
			<div className='content'>
				<a className='author'>{author}</a>
				<div className='metadata'>
					<div>
						{moment(datetime).fromNow()}
						{/* Today at 5:42PM */}
					</div>
				</div>
				<div className='text'>{content}</div>
				<div className='actions'>
					<a className=''>Reply</a>
				</div>
			</div>
			<h5>Show Reply Comments here....</h5>
			{/* <Comment /> */}
		</div>
	);
}

export default Comment;
