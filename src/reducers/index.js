import { combineReducers } from 'redux';
import commentReducer from './comments';

const rootReducer = combineReducers({
	commentsData: commentReducer,
});

export default rootReducer;
