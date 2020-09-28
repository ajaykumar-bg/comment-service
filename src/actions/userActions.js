import * as types from './types';

// Set Current User

export function setCurrentUser(username) {
	return {
		type: types.SET_CURRENT_USER,
		payload: username,
	};
}
