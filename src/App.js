import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';

import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';

function App() {
	return (
		<div className='App'>
			<Container>
				<CommentBox />
				<CommentList />
			</Container>
		</div>
	);
}

export default App;
