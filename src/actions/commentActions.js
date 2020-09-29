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
