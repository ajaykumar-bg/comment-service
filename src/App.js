import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
			<ToastContainer autoClose={3000} hideProgressBar />
		</div>
	);
}

export default App;
