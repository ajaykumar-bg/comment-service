import { handleResponse, handleError } from './apiUtils';
// const baseUrl = process.env.API_URL + '/comments/';
const baseUrl = `http://localhost:3001/api/`;

export function getComments() {
	// const params = { where: { commentId: 0 } };
	// const query = {
	// 	filter: JSON.stringify(params),
	// };
	return fetch(`${baseUrl}comments`).then(handleResponse).catch(handleError);
}

// export function getReplyComments(commentId) {
// 	return fetch(`${baseUrl}comments/${commentId}/replyComment`)
// 		.then(handleResponse)
// 		.catch(handleError);
// }

export function saveComment(comment) {
	return fetch(`${baseUrl}comments`, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(comment),
	})
		.then(handleResponse)
		.catch(handleError);
}

// export function saveReplyComment(comment) {
// 	return fetch(`${baseUrl}comments/${comment.commentId}/replyComment`, {
// 		method: 'POST',
// 		headers: { 'content-type': 'application/json' },
// 		body: JSON.stringify(comment),
// 	})
// 		.then(handleResponse)
// 		.catch(handleError);
// }
