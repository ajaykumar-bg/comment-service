import React from 'react';
import './App.css';

import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';

function App() {
	return (
		<div className='App'>
			<h2>Comments</h2>
			<CommentBox />
			<CommentList />
		</div>
	);
}

export default App;
