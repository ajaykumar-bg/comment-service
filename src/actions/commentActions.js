import * as types from './types';
import * as commentApi from '../api/commentApi';

// Load Comments

export function loadComments() {
	return {
		type: types.LOAD_COMMENTS,
	};
}

export function loadCommentsSuccess(comments) {
	return {
		type: types.LOAD_COMMENTS_SUCCESS,
		payload: comments,
	};
}

export function loadCommentsFailed(error) {
	return {
		type: types.LOAD_COMMENTS_FAILED,
		payload: error,
	};
}

// Save Comments

export function saveComment(comment) {
	return {
		type: types.SAVE_COMMENT,
		payload: comment,
	};
}

export function saveCommentSuccess(comment) {
	return {
		type: types.SAVE_COMMENT_SUCCESS,
		payload: comment,
	};
}

export function saveCommentFailed(error) {
	return {
		type: types.SAVE_COMMENT_FAILED,
		payload: error,
	};
}

// Load Reply Comments

// export function loadReplyComments() {
// 	return {
// 		type: types.LOAD_REPLY_COMMENTS,
// 	};
// }

// export function loadReplyCommentsSuccess(comments) {
// 	return {
// 		type: types.LOAD_REPLY_COMMENTS_SUCCESS,
// 		payload: comments,
// 	};
// }

// export function loadReplyCommentsFailed(error) {
// 	return {
// 		type: types.LOAD_REPLY_COMMENTS_FAILED,
// 		payload: error,
// 	};
// }

// Save Reply Comments

// export function saveReplyComment(comment) {
// 	return {
// 		type: types.SAVE_REPLY_COMMENT,
// 		payload: comment,
// 	};
// }

// export function saveReplyCommentSuccess(comment) {
// 	return {
// 		type: types.SAVE_REPLY_COMMENT_SUCCESS,
// 		payload: comment,
// 	};
// }

// export function saveReplyCommentFailed(error) {
// 	return {
// 		type: types.SAVE_REPLY_COMMENT_FAILED,
// 		payload: error,
// 	};
// }

export function getComments() {
	return function (dispatch, getState) {
		dispatch(loadComments());
		return commentApi
			.getComments()
			.then((comments) => {
				dispatch(loadCommentsSuccess(comments));
			})
			.catch((error) => {
				dispatch(loadCommentsFailed(error));
				throw error;
			});
	};
}

export function postComment(comment) {
	return function (dispatch, getState) {
		dispatch(saveComment());
		return commentApi
			.saveComment(comment)
			.then((result) => {
				dispatch(saveCommentSuccess(result));
			})
			.catch((error) => {
				dispatch(saveCommentFailed(error));
				throw error;
			});
	};
}

// export function getReplyComments() {
// 	return function (dispatch, getState) {
// 		dispatch(loadReplyComments());
// 		return commentApi
// 			.getReplyComments()
// 			.then((comments) => {
// 				dispatch(loadReplyCommentsSuccess(comments));
// 			})
// 			.catch((error) => {
// 				dispatch(loadReplyCommentsFailed(error));
// 				throw error;
// 			});
// 	};
// }

// export function postReplyComment(comment) {
// 	return function (dispatch, getState) {
// 		dispatch(saveReplyComment(comment));
// 		return commentApi
// 			.saveReplyComment(comment)
// 			.then((result) => {
// 				dispatch(saveReplyCommentSuccess(result));
// 			})
// 			.catch((error) => {
// 				dispatch(saveReplyCommentFailed(error));
// 				throw error;
// 			});
// 	};
// }
