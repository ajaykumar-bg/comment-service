import { handleResponse, handleError } from './apiUtils';
const baseUrl = `http://localhost:3001/api/`;

export function getComments() {
	return fetch(`${baseUrl}comments`).then(handleResponse).catch(handleError);
}

export function saveComment(comment) {
	return fetch(`${baseUrl}comments`, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(comment),
	})
		.then(handleResponse)
		.catch(handleError);
}
