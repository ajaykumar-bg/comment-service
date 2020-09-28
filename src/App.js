import React from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';

import CommentsPage from './components/CommentsPage';

function App() {
	return (
		<div className='App'>
			<Container>
				<Header>Comment as a Service</Header>
				<CommentsPage />
			</Container>
		</div>
	);
}

export default App;
