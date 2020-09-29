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
				<lable className='author'>{userData.username}</lable>
				<div className='metadata'>
					<div>{moment(datetime).fromNow()}</div>
				</div>
				<div className='text'>{content}</div>
				<div className='actions'>
					{replyComments.length > 0 ? (
						<span>
							<button
								class='ui icon button'
								onClick={() => setReplyCommentsVisibility(false)}
							>
								<i aria-hidden='true' class='angle up icon'></i>
							</button>
							<button
								class='ui icon button'
								onClick={() => setReplyCommentsVisibility(true)}
							>
								<i aria-hidden='true' class='angle down icon'></i>
							</button>
						</span>
					) : null}

					<button
						className='ui button'
						onClick={() => setReplyBoxVisibility(!replyBoxVisibility)}
					>
						Reply
					</button>
				</div>
				{replyCommentsVisibility &&
				replyComments &&
				replyComments.length > 0 ? (
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
