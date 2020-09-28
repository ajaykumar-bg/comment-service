import { combineReducers } from 'redux';
import commentReducer from './comments';
import userReducer from './user';

const rootReducer = combineReducers({
	commentsData: commentReducer,
	userData: userReducer,
});

export default rootReducer;
