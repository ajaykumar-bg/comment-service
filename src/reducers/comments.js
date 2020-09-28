import * as types from '../actions/types';

const initialState = {
	comments: [],
	loading: false,
	loaded: false,
	error: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case types.SAVE_COMMENT:
			return {
				...state,
				loading: true,
				loaded: false,
			};
		case types.SAVE_COMMENT_SUCCESS:
			return {
				...state,
				loading: false,
				loaded: true,
				comments: [...state.comments, action.payload],
			};
		case types.SAVE_COMMENT_FAILED:
			return {
				...state,
				loading: false,
				loaded: false,
				error: action.payload,
			};
		default:
			return state;
	}
}
