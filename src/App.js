import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import CommentsPage from './components/CommentsPage';

function App() {
	return (
		<div className='App'>
			<div className='ui container'>
				<br />
				<h2 className='ui header'>Comment as a Service</h2>
				<CommentsPage />
			</div>
			<ToastContainer autoClose={3000} hideProgressBar />
		</div>
	);
}

export default App;
