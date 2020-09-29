import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ReplyCommentBox from './ReplyCommentBox';
// import CommentList from './CommentList';

function Comment({ data, replyComments, userData }) {
	const [replyBoxVisibility, setReplyBoxVisibility] = useState(false);
	const { id, content, datetime } = data;

	return (
		<div className='comment'>
			<div className='avatar'>
				<img alt='img' src={userData.avatar} />
			</div>
			<div className='content'>
				<a className='author'>{userData.username}</a>
				<div className='metadata'>
					<div>{moment(datetime).fromNow()}</div>
				</div>
				<div className='text'>{content}</div>
				<div className='actions'>
					<a
						className=''
						onClick={() => setReplyBoxVisibility(!replyBoxVisibility)}
					>
						Reply
					</a>
				</div>
				{/* {replyComments && replyComments.length > 0 ? (
					<CommentList parentId={id} comments={replyComments} />
				) : null} */}
			</div>
			{replyBoxVisibility ? <ReplyCommentBox parentCommentId={id} /> : null}
		</div>
	);
}

const mapStateToProps = (state) => ({
	userData: state.userData,
	// replyComments: state.comments.filter((comment) => comment.commentId === 1),
});

export default connect(mapStateToProps)(Comment);
