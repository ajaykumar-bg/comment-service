import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ReplyCommentBox from './ReplyCommentBox';
import CommentList from './CommentList';

function Comment({ data, replyComments, userData }) {
	const [replyCommentsVisibility, setReplyCommentsVisibility] = useState(false);
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
						onClick={() => setReplyCommentsVisibility(!replyCommentsVisibility)}
					>
						<span>{replyCommentsVisibility ? 'Hide' : 'Show'}</span> Reply
						Comments
					</a>
					<a
						className=''
						onClick={() => setReplyBoxVisibility(!replyBoxVisibility)}
					>
						Reply
					</a>
				</div>
				{replyComments && replyComments.length > 0 ? (
					<CommentList parentId={id} comments={replyComments} />
				) : null}
			</div>
			{replyBoxVisibility ? <ReplyCommentBox parentCommentId={id} /> : null}
		</div>
	);
}

const mapStateToProps = (state, ownProps) => ({
	userData: state.userData,
	replyComments:
		state.commentsData.comments && state.commentsData.comments.length > 0
			? state.commentsData.comments.filter(
					(comment) => comment.commentId === ownProps.data.id
			  )
			: [],
});

export default connect(mapStateToProps)(Comment);
