import * as types from '../actions/types';

const initialState = {
	username: 'Current User',
	avatar: 'https://picsum.photos/seed/picsum/200/300',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case types.SET_CURRENT_USER:
			return {
				...state,
				username: action.payload,
			};
		default:
			return state;
	}
}
