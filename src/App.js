import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';

import CommentsPage from './components/CommentsPage';

function App() {
	return (
		<div className='App'>
			<Container>
				<CommentsPage />
			</Container>
		</div>
	);
}

export default App;
