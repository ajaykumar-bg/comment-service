import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ReplyCommentBox from './ReplyCommentBox';
// import CommentList from './CommentList';

function Comment({ data, replyComments }) {
	const [replyBoxVisibility, setReplyBoxVisibility] = useState(false);
	const { id, author, avatar, content, datetime } = data;

	return (
		<div className='comment'>
			<div className='avatar'>
				<img alt='img' src={avatar} />
			</div>
			<div className='content'>
				<a className='author'>{author}</a>
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
					<CommentList comments={replyComments} />
				) : null} */}
			</div>
			{replyBoxVisibility ? <ReplyCommentBox /> : null}
		</div>
	);
}

// const mapStateToProps = (state) => ({
// 	replyComments: state.comments.filter((comment) => comment.commentId === 1),
// });

// export default connect(mapStateToProps)(Comment);

export default Comment;
